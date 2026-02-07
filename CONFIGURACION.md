# Configuración – React

1) npm create vite@latest  
→ React  
→ TypeScript + SWC  
→ No  
→ No  

2) npm install

3) npm i tailwindcss @tailwindcss/vite

4) Borrar contenido de /src/index.css y reemplazarlo por:
@import "tailwindcss";

5) Eliminar /src/App.css

6) Limpiar /src/App.tsx y luego hacerlo en React

7) En ./vite.config.ts agregar en la línea 7, junto a react():
tailwindcss()
y lo importas (Ctrl + espacio + Enter)
