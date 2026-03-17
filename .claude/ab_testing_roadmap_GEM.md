# Roadmap de A/B Testing: Agencia GEM (3 Meses)

Este plan está diseñado para optimizar sistemáticamente el embudo de conversión de GEM, desde la visita inicial hasta la activación del cliente.

**Nota sobre Muestras:** Como agencia B2B no tenés millones de visitas. Los tests están pensados para medir **tendencias fuertes** (grandes cambios), no micro-optimizaciones de colores.

---

## Mes 1: Optimización de la Homepage (Adquisición)
**Objetivo:** Aumentar el % de visitantes que llegan a la sección de contacto/planes.

### Test 1: Headline Hero (Claridad vs. Curiosidad)
*   **Hipótesis:** *"Debido a que los dueños de PyMEs valoran su tiempo por encima de todo, creemos que un headline cuantificable funcionará mejor que uno aspiracional."*
*   **Variante A (Control):** "Tu negocio necesita más clientes, no que trabajes más horas."
*   **Variante B (Desafío):** "Recuperá 12 horas semanales delegando tus anuncios en Meta."
*   **Métrica Principal:** Click-through Rate (CTR) en el botón "Auditoría".
*   **Tamaño de Muestra:** ~300 sesiones por variante.
*   **Criterio de Decisión:** Si B supera a A por >15% de mejora relativa.

### Test 2: Orden de Pricing (Anclaje de Precio)
*   **Hipótesis:** *"Creemos que mostrar primero un Plan Anual (más caro) hará que el Plan Mensual parezca más accesible por contraste (Efecto Anclaje)."*
*   **Variante A (Control):** Mostrar precios Mensuales primero.
*   **Variante B (Desafío):** Mostrar "Pack Trimestral" primero con un descuento, y luego el mensual.
*   **Métrica Principal:** Consultas iniciadas en el botón de "Plan Crecimiento".
*   **Tamaño de Muestra:** ~500 sesiones.

---

## Mes 2: Conversión de Leads (Captura)
**Objetivo:** Aumentar la cantidad de emails capturados y su calidad.

### Test 3: Formato de Popup (Intrusión vs. Sutileza)
*   **Hipótesis:** *"Dado que el tráfico móvil es alto, creemos que un Slide-in menos intrusivo generará más confianza que un bloqueo de pantalla exit-intent."*
*   **Variante A (Control):** Exit-Intent Popup (Modal central que bloquea el contenido).
*   **Variante B (Desafío):** Slide-in Inferior (Banner que sube y cubre el 30% de la pantalla).
*   **Métrica Principal:** Tasa de conversión (Emails capturados / Impresiones).
*   **Criterio de Decisión:** Ganador con >90% de confianza estadística.

### Test 4: Longitud de Secuencia de Email (Intensidad)
*   **Hipótesis:** *"Creemos que una secuencia más corta y densa mantendrá mejor la atención que una larga y espaciada."*
*   **Variante A (Control):** 7 emails en 21 días (La secuencia actual).
*   **Variante B (Desafío):** 5 emails en 10 días (Eliminando los emails 2 y 6, condensando valor).
*   **Métrica Principal:** Tasa de respuesta o Agendamiento de Auditoría.
*   **Guardrail Metric:** Tasa de desuscripción (Unsubscribe Rate).

---

## Mes 3: Activación y Retención (Onboarding)
**Objetivo:** Reducir el tiempo desde el pago hasta la campaña activa ("Time to Live").

### Test 5: Fricción en el Checklist (Formulario de Inicio)
*   **Hipótesis:** *"Pedir demasiada información al inicio frena el arranque. Simplificar el formulario acelerará el proceso."*
*   **Variante A (Control):** Formulario de Intake de 10 preguntas (Detallado).
*   **Variante B (Desafío):** Formulario de 3 preguntas clave + Reunión de 15 min.
*   **Métrica Principal:** Tiempo (en días) desde el pago hasta campaña activa.
*   **Criterio de Decisión:** Si B reduce el tiempo en >2 días sin afectar la calidad de los anuncios.

### Test 6: Oferta de Entrada (Garantía vs. Descuento)
*   **Hipótesis:** *"Para servicios, la aversión al riesgo es mayor que la sensibilidad al precio. Una garantía funcionará mejor que un descuento."*
*   **Variante A (Control):** "20% OFF en tu primer mes".
*   **Variante B (Desafío):** "Garantía de Satisfacción: Si no te gusta el primer mes, te devolvemos el fee".
*   **Métrica Principal:** Tasa de cierre de ventas (Leads cerrados / Presupuestos enviados).

---

## Herramientas Sugeridas para Implementar
1.  **Web/Landing:** Google Optimize (o variantes manuales si usás WordPress/Elementor).
2.  **Email:** Kit (ConvertKit) tiene A/B testing nativo para asuntos y contenido.
3.  **Medición:** Google Analytics 4 (GA4) configurando los eventos clave.

## Regla de Oro
**No testees todo a la vez.** Si cambiás el headline Y el popup el mismo día, no vas a saber qué ocasionó el cambio en las ventas.
