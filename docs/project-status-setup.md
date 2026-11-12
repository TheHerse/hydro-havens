# Customer project status page setup

The customer page is available at `/status/?token=...`. It is built as part of the existing static Next.js site. Its source lives in `src/app/status/`; the Apps Script endpoint is in `apps-script/Code.gs`.

## Configure and deploy

1. Create a Google Sheet with a `Projects` tab and this exact header row: `token`, `project_label`, `status_badge`, `current_phase`, `overall_percent`, `update_note`, `updated_date`, `photo_contract_design`, `photo_excavation`, `photo_steel_plumbing`, `photo_shotcrete`, `photo_tile_coping`, `photo_decking_landscaping`, `photo_interior_startup`, `photo_final_walkthrough`.
2. Add a `Reference` tab with the dropdown values. Set data validation for `status_badge` to `Active Project`, `On Hold`, `Completed`; set `current_phase` to the eight names in `PHASES` at the top of `apps-script/Code.gs`. Keep the sheet private.
3. From **Extensions → Apps Script**, paste `apps-script/Code.gs`, save, then deploy as a Web App executing as the owner and accessible to anyone. The random token is the credential; the sheet itself must never be shared publicly.
4. Set `NEXT_PUBLIC_HYDRO_HAVENS_STATUS_API_URL` to the deployed `/exec` URL in the site build environment, then rebuild and deploy the static site. Without this setting, the page safely shows the generic unavailable message.
5. Add customer rows and use **Hydro Havens → Generate token for selected row** to set column A and display the ready-to-send link. Change columns B–G for project details. To add a phase photo, select its matching photo cell in columns H–O and choose **Insert → Image → Image in cell**. The status page shows the image for the selected current phase; an empty photo cell uses the Hydro Havens hero image. Rotate access by replacing column A and sending a new link.

## Security and platform notes

- The endpoint returns only `label`, `status_badge`, `overall_percent`, `phases`, `update_note`, `updated_date`, and the current phase's `photo_data_url`, or the same `{ "ok": false }` response for every failure. It never returns other sheet columns.
- Before deploying the photo-enabled script, select a project row in the Projects tab, run `authorizePhotoFetch` once from the Apps Script editor, and approve the added external-request permission. This checks that Apps Script can fetch the Google-hosted image while authorizing the permission.
- Apps Script fetches and base64-encodes the in-cell image after token validation. The browser renders the returned data directly, avoiding the short-lived Google image URL. Photos over 4 MB or unsupported image types are omitted; resize those before inserting them. Project details refresh once a minute, and the photo is fetched again on initial load, phase change, or image-load failure.
- Requests are throttled to 10 per token per minute using Apps Script cache and a script lock. Apps Script Web Apps do not expose a supported API for setting arbitrary response headers on `ContentService` output; test browser fetch against the deployed URL. If the Google deployment does not permit cross-origin fetch from the site, put a same-origin proxy in front of it or use a backend that supports CORS headers.
- `generateToken()` concatenates two `Utilities.getUuid()` values (32 hexadecimal characters, 128 bits nominal entropy) to make a long, URL-safe token without using client names or row numbers.
- Verify the deployed Sheet sharing settings and test one valid, revoked, and missing token before distributing links. All failures show the same customer message.
