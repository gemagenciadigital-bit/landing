# 🛋️ Prompt: Decoración desde Moodboard (Virtual Staging)

Este prompt permite transformar una **habitación vacía** en un espacio completamente decorado utilizando una lista de elementos (moodboard) como referencia. Está optimizado para mantener el realismo, la escala y la integración de iluminación.

---

## 🤖 PROMPT MAESTRO (Modo Interior Designer Automático)

Este prompt indica a la IA que analice la habitación y decida por su cuenta qué mobiliario y decoración maximizarán el potencial del espacio.

```text
Act as a world-class Interior Designer and Architectural Photographer. 

TASK: 
1. ANALYZE the provided photo of the EMPTY ROOM (identify its architectural style, light sources, floor type, and dimensions).
2. AUTOMATICALLY SELECT a curated set of furniture and decor that perfectly fits this space. You must choose:
   - A primary furniture piece (e.g., sectional sofa, king-size bed, or large dining table).
   - Accenting pieces (armchairs, side tables).
   - Lighting fixtures (pendants, floor lamps) that complement the existing light.
   - Decorative layers (area rugs, wall art, indoor plants like Monstera or Ficus, and small styling objects).
3. VIRTUAL STAGING: Integrate all selected assets into the room with perfect realism.

CRITICAL CONSISTENCY RULES (NO REMODELING):
- ZERO STRUCTURAL CHANGES: DO NOT change, move, or modify windows, doors, walls, ceilings, or fixed architectural elements.
- PERSERVE FINISHES: Maintain the original floor material, wall paint/texture, and window frames exactly as they appear in the reference image.
- NON-DESTRUCTIVE STAGING: Furniture and decor must be placed "on top" of the existing structure without altering the underlying architecture.
- FIXED ELEMENTS: If the room has built-in features (like a fireplace or a specific molding), they must remain intact and untouched.

DESIGN PRINCIPLES TO FOLLOW:
- STYLE COHERENCE: If the room is modern, use contemporary furniture. If it has high ceilings, use vertical elements.
- SPATIAL LOGIC: Furniture must be placed to optimize flow. Do not overcrowd.
- REALISTIC SCALE: Every item must be proportionally accurate to the room's height and floor area.
- LIGHTING INTEGRATION: All added objects MUST cast realistic shadows and have highlights matching the windows/fixtures.
- TEXTURE BLENDING: The assets must look like they were actually there during the photo shoot, matching the grain and tone of the environment.

STYLE TARGET: 
High-end interior design magazine (e.g., AD Digest or Dezeen). Photorealistic, 8k, professional composition.
```

---

## 🎭 ESTILOS PREDEFINIDOS (Opcional)

Si quieres un "vibe" específico sin elegir muebles uno por uno, añade una de estas líneas al prompt:

- **Minimalista Japandi**: "Choose assets with light woods, neutral tones, and clean organic shapes. Emphasize emptiness and natural light."
- **Industrial Loft**: "Select leather furniture, metal accents, exposed Edison bulbs, and large-scale abstract art on the walls."
- **Nórdico Moderno**: "Focus on cozy textures (wool, sheepskin), white/gray tones, and functional wooden furniture."
- **Lujo Clásico**: "Incorporate velvet fabrics, gold/brass accents, ornate moldings, and a sophisticated lighting plan."

---

## 📐 INSTRUCCIONES DE COLOCACIÓN (Presets)

Puedes añadir estos fragmentos al prompt para guiar la ubicación:

### 1. Foco en la Pared Principal (Acento)
> "Place the [MUEBLE_GRANDE] centered against the main visible wall. If there is a wallpaper pattern in the moodboard, apply it EXACTLY to that specific wall, following its geometric boundaries."

### 2. Zona de Conversación (Espacio Central)
> "Create a conversation area in the center of the room by grouping the [SOFÁ] and [SILLÓN] around the [MESA_DE_CENTRO]. Maintain a clear walking path around the furniture."

### 3. Esquina de Iluminación y Lectura
> "Position the [LÁMPARA_DE_PIE] in the corner next to the [SILLÓN], ensuring the lamp provides a warm localized glow that reflects on the nearby surfaces."

---

## 🔄 WORKFLOW SUGERIDO

1. **IMAGEN BASE:** Carga la foto de la habitación vacía como referencia estructural principal.
2. **CARGA DE ASSETS:** Si tu herramienta de IA permite múltiples referencias, carga individualmente los muebles del moodboard.
3. **DESCRIBE EL VÍNCULO:** En el texto, explica qué parte de la habitación quieres que ocupe cada elemento del moodboard.
4. **PARÁMETROS:**
   - **Midjourney:** Usa `--cref` para los muebles y `--iw` balanceado para la habitación.
   - **ControlNet:** Usa `Canny` o `Depth` sobre la habitación vacía para asegurar que el mobiliario no "atraviese" las paredes.

---

## 📌 Tips de Realismo:
- **Sombras:** Si el mueble parece "flotar", añade en el prompt: "Add ambient occlusion shadows under all furniture legs".
- **Perspectiva:** Especifica: "Match the camera's wide-angle lens and eye-level perspective of the original empty room photo".
