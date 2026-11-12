const PHASES = [
  "Contract & Design",
  "Excavation",
  "Steel & Plumbing",
  "Shotcrete",
  "Tile & Coping",
  "Decking & Landscaping",
  "Interior Finish & Startup",
  "Final Walkthrough",
];
const PROJECTS_TAB = "Projects";
const SITE_BASE_URL = "https://hydrohavenspools.com/status/?token=";
const MAX_REQUESTS_PER_MINUTE = 10;
const MAX_INLINE_PHOTO_BYTES = 4 * 1024 * 1024;

function doGet(e) {
  const generic = { ok: false };
  try {
    const token = String(e && e.parameter && e.parameter.token || "").trim();
    if (!allowRequest_(token || "missing") || !token || token.length > 200) return json_(generic);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(PROJECTS_TAB);
    if (!sheet || sheet.getLastRow() < 2) return json_(generic);
    const matches = sheet.getRange(2, 1, sheet.getLastRow() - 1, 1)
      .createTextFinder(token).matchEntireCell(true).matchCase(true).findNext();
    if (!matches) return json_(generic);

    const row = sheet.getRange(matches.getRow(), 1, 1, 7).getDisplayValues()[0];
    if (!row[0] || row[0].trim() !== token) return json_(generic);
    const current = PHASES.findIndex((phase) => phase.toLowerCase() === String(row[3] || "").trim().toLowerCase());
    let photoDataUrl = "";
    const includePhoto = String(e.parameter.include_photo || "") === "1";
    if (includePhoto && current >= 0) {
      try {
        const photoValue = sheet.getRange(matches.getRow(), 8 + current).getValue();
        if (photoValue && photoValue.valueType === SpreadsheetApp.ValueType.IMAGE) {
          photoDataUrl = getPhotoDataUrl_(photoValue);
        }
      } catch (photoError) {
        console.warn("Project photo unavailable", photoError);
      }
    }
    const phases = PHASES.map((name, index) => ({
      n: index + 1,
      name,
      status: current < 0 ? "upcoming" : index < current ? "completed" : index === current ? "in_progress" : "upcoming",
    }));
    const parsedPercent = Number(String(row[4] || "").replace(/[^0-9.+-]/g, ""));
    const percent = Number.isFinite(parsedPercent) ? Math.min(100, Math.max(0, Math.round(parsedPercent))) : 0;
    const badges = ["Active Project", "On Hold", "Completed"];
    const badge = badges.find((value) => value.toLowerCase() === String(row[2] || "").trim().toLowerCase()) || "Active Project";

    return json_({ ok: true, project: {
      label: String(row[1] || "").trim(),
      status_badge: badge,
      overall_percent: percent,
      phases,
      update_note: String(row[5] || "").trim(),
      updated_date: normalizeDate_(row[6]),
      photo_data_url: photoDataUrl,
    } });
  } catch (error) {
    console.error("Status request failed", error);
    return json_(generic);
  }
}

function getPhotoDataUrl_(cellImage) {
  const response = UrlFetchApp.fetch(cellImage.getContentUrl(), { muteHttpExceptions: true });
  if (response.getResponseCode() !== 200) {
    console.warn("Google image fetch returned status", response.getResponseCode());
    return "";
  }
  const blob = response.getBlob();
  const mimeType = String(blob.getContentType() || "").toLowerCase();
  if (!/^image\/(jpeg|png|gif|webp)$/.test(mimeType)) return "";
  const bytes = blob.getBytes();
  if (bytes.length > MAX_INLINE_PHOTO_BYTES) {
    console.warn("Project image exceeds the 4 MB inline limit");
    return "";
  }
  return "data:" + mimeType + ";base64," + Utilities.base64Encode(bytes);
}

function authorizePhotoFetch() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(PROJECTS_TAB);
  const rowNumber = sheet && sheet.getActiveRange() ? sheet.getActiveRange().getRow() : 0;
  if (!sheet || rowNumber < 2) throw new Error("Select a project row on the Projects tab first.");
  const phase = String(sheet.getRange(rowNumber, 4).getDisplayValue() || "").trim();
  const phaseIndex = PHASES.findIndex((name) => name.toLowerCase() === phase.toLowerCase());
  if (phaseIndex < 0) throw new Error("The selected project row has no recognized current phase.");
  const image = sheet.getRange(rowNumber, 8 + phaseIndex).getValue();
  if (!image || image.valueType !== SpreadsheetApp.ValueType.IMAGE) throw new Error("The photo for the selected row's current phase is not an in-cell image.");
  const response = UrlFetchApp.fetch(image.getContentUrl(), { muteHttpExceptions: true });
  const contentType = String(response.getBlob().getContentType() || "").toLowerCase();
  if (response.getResponseCode() !== 200 || !contentType.startsWith("image/")) {
    throw new Error("Google did not provide the selected image to Apps Script (HTTP " + response.getResponseCode() + ").");
  }
  Logger.log("Photo fetch authorization is ready; image bytes: %s", response.getBlob().getBytes().length);
}

function allowRequest_(token) {
  const cache = CacheService.getScriptCache();
  const minute = Math.floor(Date.now() / 60000);
  const digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, token);
  const key = "status:" + Utilities.base64EncodeWebSafe(digest).slice(0, 32) + ":" + minute;
  const lock = LockService.getScriptLock();
  lock.waitLock(5000);
  try {
    const count = Number(cache.get(key) || 0);
    if (count >= MAX_REQUESTS_PER_MINUTE) return false;
    cache.put(key, String(count + 1), 120);
    return true;
  } finally {
    lock.releaseLock();
  }
}

function json_(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}

function normalizeDate_(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  const date = new Date(text);
  return Number.isNaN(date.getTime()) ? text : Utilities.formatDate(date, Session.getScriptTimeZone(), "yyyy-MM-dd");
}

function generateToken() {
  return Utilities.getUuid().replace(/-/g, "") + Utilities.getUuid().replace(/-/g, "");
}

function onOpen() {
  SpreadsheetApp.getUi().createMenu("Hydro Havens")
    .addItem("Generate token for selected row", "generateTokenForSelectedRow")
    .addToUi();
}

function generateTokenForSelectedRow() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const range = sheet.getActiveRange();
  if (!range || sheet.getName() !== PROJECTS_TAB || range.getRow() < 2) {
    SpreadsheetApp.getUi().alert("Select a project row (row 2 or below) on the Projects tab first.");
    return;
  }
  const token = generateToken();
  sheet.getRange(range.getRow(), 1).setNumberFormat("@").setValue(token);
  SpreadsheetApp.getUi().alert("Customer link ready", SITE_BASE_URL + encodeURIComponent(token), SpreadsheetApp.getUi().ButtonSet.OK);
}
