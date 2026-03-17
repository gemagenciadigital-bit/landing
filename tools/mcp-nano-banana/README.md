# Nano Banana Pro Prompts MCP Server

Este servidor MCP permite buscar y recomendar prompts del catálogo de **10,000+ prompts de Nano Banana Pro** directamente desde el repositorio de YouMind-OpenLab.

## Características

- `get_manifest`: Obtiene todas las categorías disponibles.
- `search_prompts`: Busca prompts por palabras clave.
- `get_prompt_by_id`: Obtiene el contenido completo de un prompt.
- `remix_prompt`: Personaliza un prompt base según tus necesidades.

## Instalación

1. Asegúrate de tener Python instalado.
2. Instala las dependencias:
   ```bash
   pip install -r requirements.txt
   ```
3. Ejecuta el servidor:
   ```bash
   python server.py
   ```

## Configuración para Claude/Gemini (mcp.json)

```json
{
  "mcpServers": {
    "nano-banana-pro": {
      "command": "python",
      "args": ["c:/Users/Eze/Desktop/Proyecto-GEM/mcp-nano-banana/server.py"]
    }
  }
}
```
