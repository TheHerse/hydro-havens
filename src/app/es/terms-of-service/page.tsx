import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Términos de Servicio",
  description: "Términos de servicio de Hydro Havens Pools & Spas para solicitudes de cotización e información de servicios.",
  path: "/es/terms-of-service/",
  locale: "es",
});

export default function SpanishTermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Términos de Servicio</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12 prose prose-lg max-w-none">
        <div className="text-gray-700 space-y-6">
          <p className="text-sm text-gray-500">Última actualización: 8 de abril de 2026</p>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Aceptación de los Términos</h2>
            <p>
              Bienvenido a Hydro Havens Pools and Spas. Al acceder a nuestro sitio web en hydrohavenspools.com,
              aceptas estar sujeto a estos Términos de Servicio y cumplir con todas las leyes y regulaciones aplicables.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Descripción de Servicios</h2>
            <p>
              Hydro Havens Pools and Spas ofrece construcción de albercas personalizadas, instalación de spas,
              instalación de turf, concreto estampado y diseño de espacios exteriores en el área de El Paso y Las Cruces.
              Todos los servicios están sujetos a contratos y estimados por escrito por separado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Solicitudes de Cotización y Estimados</h2>
            <p>
              Todas las solicitudes de cotización enviadas a través de nuestro sitio web no son vinculantes.
              El precio final se determina después de una evaluación en el sitio y una consulta. Los estimados
              son válidos por 30 días, a menos que se especifique lo contrario por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Propiedad Intelectual</h2>
            <p>
              Todo el contenido de este sitio web, incluyendo imágenes, texto, logotipos y elementos de diseño,
              es propiedad de Hydro Havens Pools and Spas y está protegido por leyes de derechos de autor.
              El uso no autorizado está prohibido.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitación de Responsabilidad</h2>
            <p>
              Hydro Havens Pools and Spas no será responsable por daños indirectos, incidentales, especiales,
              consecuentes o punitivos que resulten del uso de nuestro sitio web o servicios. Garantizamos
              nuestro trabajo de acuerdo con los términos especificados en los contratos individuales de cada proyecto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Información de Contacto</h2>
            <p>
              Para preguntas sobre estos Términos de Servicio, contáctanos en:
              <br /><br />
              <strong>Hydro Havens Pools and Spas</strong><br />
              Teléfono: (915) 262-7590<br />
              Email: marioluna301270@gmail.com<br />
              Horario: Lunes - Sábado, 5:00 AM - 5:00 PM
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
