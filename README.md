# Design Figma for the project [here](https://www.figma.com/file/5cPiXC5sBQc4B4wIZKlI3i/Desafio-Rotas-React)

## Correction criteria for this task:

1) Three working top navigation bar links (Home, Products, About Us). 
2) Active route from the top bar highlighted in the top bar. 
3) "Home" link (little house in the upper right corner) working. 
4) Three working product navigation bar links (Computers, Electronics, Books). 
5) Product navigation bar active route highlighted. 
6) "Not Found" page should appear for any route not configured. 
7) The routes, as well as the component folders, must follow the following hierarchy: 
  - "/" 
    - "home" 
    - "products/" 
      - "computers" 
      - "electronics" 
      - "books" 
    - "about"

## Layout

![Figma](https://github.com/SofiaMFonseca/assets/blob/main/routes/figma-task-routes.png)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
