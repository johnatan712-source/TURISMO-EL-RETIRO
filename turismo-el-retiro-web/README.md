# Turismo El Retiro

Guía turística de El Retiro, Antioquia. Proyecto de emprendimiento de 4.º grado.

La app tiene lugares para visitar con fotos, rutas en bici y senderismo, comida, ebanistería y compras, alojamiento, historia y la Fiesta de los Negritos, un diario con pasaporte de sellos y espacios de publicidad.

## Cómo está hecha

Es una página web estática que no necesita instalar nada:

- `index.html`: toda la app.
- `fotos/`: fotos de Wikimedia Commons (los créditos están en la sección "Nuestro proyecto") y el boceto original del logo.
- `icons/`: ícono de la app.
- `manifest.webmanifest` y `sw.js`: permiten instalarla en la tablet y usarla sin internet.

## Publicar en Vercel

1. En vercel.com, entra con GitHub y elige **Add New → Project**.
2. Importa este repositorio.
3. En *Framework Preset* elige **Other**. Deja vacíos el comando de build y la carpeta de salida.
4. Haz clic en **Deploy**.

Cada vez que se cambie un archivo en GitHub, Vercel actualiza la página sola.

## Instalar en la tablet

Abre el link de Vercel con internet:

- **Android (Chrome):** menú ⋮ → **Instalar app** o **Agregar a la pantalla principal**.
- **iPad (Safari):** botón Compartir → **Agregar a inicio**.

Después de abrirla una vez, funciona sin internet.
