import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Política de Privacidad",
  description: "Política de privacidad de Hydro Havens Pools & Spas para solicitudes de contacto y cotizaciones.",
  path: "/es/privacy-policy/",
  locale: "es",
});

export default function SpanishPrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Política de Privacidad</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-gray-700 space-y-6">
          <p className="text-sm text-gray-500">Última actualización: 8 de abril de 2026</p>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Información que Recopilamos</h2>
            <p className="mb-4">
              Hydro Havens Pools and Spas recopila la información que nos proporcionas directamente cuando:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Llenas nuestros formularios de contacto o solicitud de cotización</li>
              <li>Nos llamas para pedir estimados o información</li>
              <li>Te suscribes a nuestras comunicaciones, si aplica</li>
            </ul>
            <p className="mt-4">
              Esta información puede incluir tu nombre, número de teléfono, correo electrónico, dirección física
              y detalles sobre las necesidades de tu proyecto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Cómo Usamos tu Información</h2>
            <p>Usamos la información que recopilamos para:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Proporcionar estimados y consultas sobre proyectos</li>
              <li>Comunicarnos contigo acerca de tu proyecto</li>
              <li>Enviar actualizaciones ocasionales sobre nuestros servicios, con tu consentimiento</li>
              <li>Mejorar nuestro sitio web y servicio al cliente</li>
              <li>Cumplir con obligaciones legales aplicables</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Compartir Información</h2>
            <p>
              No vendemos, intercambiamos ni rentamos tu información personal a terceros. Podemos compartir
              información con socios de confianza que nos ayudan a operar el sitio web o a darte servicio,
              siempre que esas partes acepten mantener esta información confidencial.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Seguridad de Datos</h2>
            <p>
              Implementamos medidas de seguridad apropiadas para proteger tu información personal. Sin embargo,
              ningún método de transmisión por Internet es 100% seguro, por lo que no podemos garantizar seguridad absoluta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Tus Derechos</h2>
            <p>Tienes derecho a:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Solicitar acceso a tus datos personales</li>
              <li>Solicitar la corrección o eliminación de tus datos</li>
              <li>Optar por no recibir comunicaciones de marketing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contacto</h2>
            <p>
              Si tienes preguntas sobre esta Política de Privacidad, contáctanos:
              <br /><br />
              <strong>Hydro Havens Pools and Spas</strong><br />
              Teléfono: (915) 262-7590<br />
              Email: marioluna301270@gmail.com<br />
              Dirección: [Your Business Address]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
