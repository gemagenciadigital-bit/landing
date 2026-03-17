# 🌦️ Prompt: Transformación de Clima y Estaciones (General Roca, Argentina)

Este prompt está diseñado para ser usado en herramientas de IA Image-to-Image (como Midjourney con `--cref/--sref`, Runway Gen-2 con Style Reference, o Leonardo.ai). El objetivo es mantener la estructura arquitectónica de una foto base y aplicar el clima característico del Alto Valle de Río Negro.

---

## 🤖 PROMPT MAESTRO (Estructura Base)

```text
Professional architectural photograph of [MANTENER_ESTRUCTURA_DE_IMAGEN_REFERENCIA]. The scene is transformed to reflect [CONDICIÓN_CLIMÁTICA] in General Roca, Patagonia Argentina. 

CRITICAL CONSISTENCY RULES:
- Maintain the EXACT same building geometry, materials, and positioning.
- Maintain the EXACT same plant species and tree distribution from the reference image.
- DO NOT add new trees or change the type of vegetation. 
- Only modify the physical STATE of the existing vegetation (color, presence of leaves, flowering) to match the season.
- Apply realistic lighting and atmospheric effects characteristic of the Río Negro Valley.
```

---

## 📍 PRESETS REGIONALES (Copia y Pega)

Usa estos fragmentos en el lugar de `[CONDICIÓN_CLIMÁTICA]` para obtener resultados precisos:

### 1. 🍂 Otoño Dorado (Transformación de Follaje)
> **Condición:** "a crisp Autumn day. The EXISTING trees and vegetation from the reference image have now turned into a vibrant, intense golden-yellow. Keep the same tree shapes and positions, but change the leaf color. Some dry leaves have fallen to the ground. The sky is a deep, clear Patagonian blue."

### 2. 🌸 Primavera en Flor (Despertar del Valle)
> **Condición:** "a bright Spring morning. The EXACT SAME plants and trees from the reference image are now in full bloom. The foliage is a fresh, vibrant light green. Add subtle blossoms to the existing shrubs and trees while keeping their original structural identity. The lighting is soft and morning-fresh."

### 3. ☀️ Verano de Estepa (Luz y Resplandor)
> **Condición:** "a scorching Summer afternoon. The EXISTING vegetation is now a deep, mature green. High-contrast harsh sunlight with sharp shadows. The 'bardas' in the distance have a warm ochre tone. Keep the vegetation structure identical to the reference."

### 4. ❄️ Invierno y Escarcha (Estado Latente)
> **Condición:** "a cold Winter morning. The EXISTING deciduous trees from the reference are now bare, showing only their branch skeletons in the exact same positions. Add a layer of white frost (escarcha) to the existing surfaces and lawn. If snow is desired: 'The same vegetation structure is now delicately covered in fresh snow'."

### 4. 💨 Tarde de Viento y Polvo (Clima de Patagonia)
> **Condición:** "a windy afternoon with a characteristic dust-filled atmosphere. The sky has a hazy, sepia-toned quality due to suspended Patagonian dust. Distant vegetation shows visible motion blur from strong gusts. Dramatic, moody clouds, possibly lenticular cloud formations in the background sky."

---

## 🔄 WORKFLOW SUGERIDO

1. **REFERENCIA:** Sube tu imagen original como "Image Prompt" o "Structure Reference".
2. **PESO (Weight):** Ajusta el peso de la imagen (Image Weight) al máximo (--iw 2 en Midjourney) para no perder la arquitectura.
3. **NEGATIVE PROMPT (Si es necesario):** `extra buildings, different architecture, tropical plants, palm trees, green grass in winter`.

---

## 📌 Detalles para General Roca:
- **Vegetación:** Evita palmeras o plantas tropicales. Usa álamos (poplars), sauces (willows) y arbustos bajos de estepa.
- **Relieve:** Las "bardas" deben ser mesetas bajas de color arcilloso/ocre, no montañas alpinas con picos nevados.
- **Luz:** La luz en la Patagonia es muy lateral y transparente, evita los ambientes húmedos o selváticos.
