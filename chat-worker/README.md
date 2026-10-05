# Pregúntale a Will — servidor del chat

Cloudflare Worker que recibe las preguntas del portafolio, las manda a Claude (Anthropic) y devuelve la respuesta en streaming. La clave de la API vive solo aquí, como secreto de Cloudflare; nunca llega al navegador.

- `src/index.js`: el Worker (instrucciones del asistente, validación, límite por visitante, streaming).
- `src/perfil.js`: lo que el asistente sabe de ti. **Si cambias datos en `index.html`, actualízalos aquí también.**
- `wrangler.toml`: nombre del Worker, sitios permitidos (`ORIGENES`) y límite de 8 preguntas por minuto por IP.

## Publicarlo (una sola vez)

1. **Clave de Anthropic**: en https://platform.claude.com crea una API key. En *Limits* pon un **límite de gasto mensual** (por ejemplo, 10 USD) para que nadie te pueda generar un cobro grande.
2. **Cuenta de Cloudflare**: crea una gratis en https://dash.cloudflare.com.
3. En esta carpeta:
   ```
   npm install
   npx wrangler login      # abre el navegador para autorizar
   npx wrangler deploy     # publica y muestra la URL: https://pregunta-a-will.<tu-usuario>.workers.dev
   ```
4. **Guarda la clave como secreto**: en el panel de Cloudflare → Workers → `pregunta-a-will` → Settings → Variables and Secrets → Add → tipo *Secret*, nombre `ANTHROPIC_API_KEY`, pega la clave. (O bien `npx wrangler secret put ANTHROPIC_API_KEY`.)
5. En `index.html`, pon la URL del paso 3 en `SERVICIOS.chat`. Mientras esté vacío, la app "Pregúntale a Will" responde sola en el navegador con los datos del portafolio (gratis, sin IA).

## Pruebas locales

Crea `chat-worker/.dev.vars` (está en .gitignore) con `ANTHROPIC_API_KEY="tu-clave"`, corre `npx wrangler dev` y pon `http://localhost:8787` en `SERVICIOS.chat`. Sirve el sitio desde `http://localhost` (por ejemplo `python -m http.server 5500`); abierto como `file://` el navegador no tiene un origen permitido.

## Costo

Modelo `claude-opus-5-5` con esfuerzo bajo y respuestas de máximo 1024 tokens. Cada pregunta envía unos 3 000 tokens de contexto más la conversación: del orden de 1 a 3 centavos de dólar por pregunta. Para gastar menos, cambia `MODELO` a `claude-haiku-4-5` en `src/index.js` (más o menos 4 veces más barato), quita `output_config`, `betas` y `fallbacks` (ese modelo no los usa) y vuelve a correr `npx wrangler deploy`.
