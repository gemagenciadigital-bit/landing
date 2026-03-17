import httpx
from mcp.server.fastmcp import FastMCP

# Create a FastMCP server
mcp = FastMCP("Nano Banana Pro Prompts")

GITHUB_BASE_URL = "https://raw.githubusercontent.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill/main/references"

@mcp.tool()
async def get_manifest() -> dict:
    """
    Obtiene el manifest.json del repositorio oficial con todas las categorías de prompts disponibles.
    Utilízalo para conocer las categorías (slugs) y la cantidad de prompts en cada una.
    """
    url = f"{GITHUB_BASE_URL}/manifest.json"
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        response.raise_for_status()
        return response.json()

@mcp.tool()
async def search_prompts(query: str, category_slugs: list[str] = None, max_results: int = 5) -> list[dict]:
    """
    Busca prompts en una o varias categorías por keywords.
    Si category_slugs es None, busca en el manifest primero para identificar categorías relevantes.
    
    Args:
        query: Término de búsqueda (ej. 'cyberpunk', 'portrait', 'landscape').
        category_slugs: Lista de slugs de categorías donde buscar (ej. ['profile-avatar']).
        max_results: Número máximo de resultados a devolver (default 5).
    """
    if not category_slugs:
        manifest = await get_manifest()
        category_slugs = [cat["slug"] for cat in manifest.get("categories", [])]

    results = []
    async with httpx.AsyncClient() as client:
        for slug in category_slugs:
            url = f"{GITHUB_BASE_URL}/{slug}.json"
            try:
                response = await client.get(url)
                if response.status_code == 200:
                    data = response.json()
                    prompts = data.get("prompts", [])
                    for p in prompts:
                        searchable_text = f"{p.get('title', '')} {p.get('description', '')} {p.get('content', '')}".lower()
                        if query.lower() in searchable_text:
                            # Add some metadata for the user
                            results.append({
                                "id": p.get("id"),
                                "title": p.get("title"),
                                "preview": p.get("sourceMedia", [{}])[0].get("url") if p.get("sourceMedia") else None,
                                "category": slug
                            })
                            if len(results) >= max_results:
                                return results
            except Exception:
                continue
    return results

@mcp.tool()
async def get_prompt_by_id(prompt_id: str, category_slug: str) -> dict:
    """
    Obtiene el prompt completo dado su ID y el slug de su categoría.
    """
    url = f"{GITHUB_BASE_URL}/{category_slug}.json"
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        response.raise_for_status()
        data = response.json()
        for p in data.get("prompts", []):
            if p.get("id") == prompt_id:
                return p
    return {"error": "Prompt not found"}

@mcp.tool()
async def remix_prompt(base_prompt_content: str, user_instructions: str) -> str:
    """
    Toma un prompt base de la biblioteca y lo personaliza según las instrucciones del usuario.
    Ideal para adaptar estilos predefinidos a sujetos o escenas específicas.
    """
    # Note: In a real implementation, this tool might call another LLM or provide a template.
    # Here we simulate the logic of combining instructions.
    remixed = f"BASE STYLE:\n{base_prompt_content}\n\nUSER ADAPTATIONS:\n{user_instructions}\n\n[INSTRUCTIONS: Combine the style tokens of the base prompt with the specific subject/detail from the user instructions while maintaining the premium aesthetic of Nano Banana Pro.]"
    return remixed

if __name__ == "__main__":
    mcp.run()
