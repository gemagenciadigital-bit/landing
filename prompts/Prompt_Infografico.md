# 📊 Prompt: Transformación Foto → Infografía Visual Anotada

## 🖼️ Concepto
Transformar una foto de cualquier espacio en una infografía profesional con callouts anotados que identifican materiales, elementos y características del entorno.

---

## 🤖 PROMPT 1 — Para Modelo Multimodal (Gemini, GPT-4o, Claude)

```
You are a professional architectural infographic designer. I will provide you with an interior/exterior photo. Your task is to analyze the image and generate a complete textual layout for an infographic overlay.

## YOUR TASK:

1. **Identify all key elements** in the photo (furniture, materials, textures, architectural features, lighting, decorative elements, spatial areas, structural components).

2. **For each identified element**, create a callout label with:
   - **Element name** (short, bold title, 2-4 words max)
   - **Brief description** (1-2 sentences explaining the material, feature, or design intent)

3. **Output the full infographic layout** in the following structure:

---

**INFOGRAPHIC TITLE:** [Generate a descriptive title like "Infographic: [Space Type] Design"]

**CALLOUTS** (list 6-10 elements, positioned around the image):

[TOP-LEFT AREA]
• **[Element Name]**
[One-sentence description of material/feature/design intent]

[TOP-RIGHT AREA]
• **[Element Name]**
[One-sentence description]

[CENTER-LEFT]
• **[Element Name]**
[One-sentence description]

[CENTER-RIGHT]
• **[Element Name]**
[One-sentence description]

[BOTTOM-LEFT]
• **[Element Name]**
[One-sentence description]

[BOTTOM-RIGHT]
• **[Element Name]**
[One-sentence description]

---

## DESIGN SPECIFICATIONS FOR THE FINAL IMAGE:

- **Background treatment**: Apply a dark semi-transparent gradient overlay (rgba 0,0,0 at 40-55% opacity) over the original photo to increase text legibility
- **Font style**: Clean sans-serif (Inter, Helvetica, or similar). White text for callout content. Accent color for element titles (use gold #D4AF37 or teal #4ECDC4 depending on aesthetic)
- **Callout connectors**: Thin white lines (1-2px) with small circular endpoints connecting text boxes to the elements in the photo
- **Text boxes**: Semi-transparent dark pill-shaped or rectangular backgrounds behind each callout text
- **Title placement**: Centered at top or upper-right, larger font (28-36px), white, with a subtle text shadow
- **Overall aesthetic**: Premium, architectural, editorial magazine quality — similar to a luxury real estate brochure infographic
- **Callout positioning**: Distribute labels around all edges of the image (top, bottom, left, right) to avoid clustering
- **Minimum 6, maximum 10 callouts**

## TONE & LANGUAGE:
- Professional and descriptive
- Highlight materials (marble, wood species, fabric type), functionality, and design philosophy
- Use terminology consistent with high-end interior design / architecture

Analyze the provided image and generate the complete infographic layout following all specifications above.
```

---

## 🎨 PROMPT 2 — Para Generación Directa de Imagen (Ideogram / Midjourney)

```
An architectural interior infographic poster. The base is a [describe your photo: e.g., "modern open-plan living room with floor-to-ceiling windows, warm wood ceiling, gray sectional sofa, city view"].

Over the photo, a professional infographic overlay with:
- Dark semi-transparent vignette layer at 45% opacity
- Centered title at top: "Infographic: [Space Name]" in white serif/sans-serif, 36px
- 8 annotated callouts distributed around all image edges, each with:
  * Thin white 1.5px connector line pointing to the specific room element
  * Small white circle endpoint on the photo
  * Dark pill-shaped text background
  * Bold white label (e.g., "Integrated Living Area")
  * 2-line description in light gray, 11px
- Callout topics: ceiling material, panoramic view, kitchen island, material palette, terrace/balcony, furniture arrangement, lighting design, open-concept layout
- Color palette: white text, gold (#D4AF37) title accents, dark navy (#0D1B2A) text backgrounds
- Style: luxury real estate editorial, architectural magazine, premium property marketing
- Aspect ratio: 4:5 vertical or 16:9 horizontal
- Ultra high quality, professional typography, photorealistic base image

Style reference: architectural infographic, luxury property brochure, editorial magazine spread, premium real estate marketing material
```

---

## 🔄 WORKFLOW COMPLETO

```
PASO 1 — INPUT
Tomar foto del espacio (interior/exterior/producto)

PASO 2 — ANÁLISIS CON IA MULTIMODAL
Enviar foto a Gemini/GPT-4o con el Prompt 1
→ Obtener: lista de elementos + descripciones + posicionamiento sugerido

PASO 3 — GENERACIÓN DEL INFOGRÁFICO
Opciones:
  A) Usar Canva/Figma con las descripciones generadas: superponer manualmente los callouts
  B) Usar Ideogram con el Prompt 2 para generar directo
  C) Usar herramienta de código (HTML/CSS) para generar overlay programático

PASO 4 — OUTPUT FINAL
Infografía completa lista para redes sociales, presentaciones o marketing
```

---

## 📌 Notas de uso
- Funciona para cualquier tipo de espacio: locales gastronómicos, carnicerías, interiores residenciales, espacios comerciales
- El Prompt 1 es el más flexible y recomendado para empezar
- Ajustar el idioma del output al español cambiando "One-sentence description" por instrucciones en español
