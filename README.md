Asignar Tecnologías

Imagen de project-overview

Project description

Deploy Link

Añadir Features

Revisar Technologies and Tools used

<br>
<br>

# Clon Google Translate

## React / TypeScript

<br>

<div align="center">
  <img
    src="public/readme/project-overview.png"
    alt="Project overview"
    width="850"
  >
</div>

<br>

<div>

Project description

</div>

<br>

**DEPLOY**:
<br>
DEPLOY LINK

<br>
<br>

# Index

- [Clon Google Translate](#clon-google-translate)
  - [React / TypeScript](#react--typescript)
- [Index](#index)
  - [Features](#features)
  - [Technologies and Tools used](#technologies-and-tools-used)
  - [Project Setup](#project-setup)
    - [Compile and Hot-Reload for Development](#compile-and-hot-reload-for-development)
    - [Compile and Minify for Production](#compile-and-minify-for-production)
    - [Lint with ESLint](#lint-with-eslint)
  - [Contribution](#contribution)
  - [Project Status](#project-status)
  - [Project Developer](#project-developer)
  - [Expanding the ESLint configuration](#expanding-the-eslint-configuration)

<br>

## Features

<div>

    ✔️ Features...

</div>

<br>

## Technologies and Tools used

<div align="center">
  <br>
    <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="60" height="60" style="margin-right: 24px"/></a>
    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="60" height="60" style="margin-right: 24px" /></a>
  <br>
  <br>
</div>

<br>

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

<br>

## Contribution

If you want to contribute to this project, follow these steps:

1. Perform a fork to the repository.

2. Create a branch for your feature or bugfix: `git checkout -b feature/your-feature-name`

3. Make the necessary changes and commits: `git commit -m 'Add some feature'`

4. Push to branch: `git push origin feature/your-feature-name`

5. Send a pull request to the original repository.

<br>

## Project Status

![COMPLETED](https://img.shields.io/badge/COMPLETED-green.svg)

<br>

## Project Developer

| [<img src="https://avatars.githubusercontent.com/u/122877560?v=4" width=115><br><sub>Kevin Schans</sub>](https://github.com/KevinVanDerSchans) |
| :--------------------------------------------------------------------------------------------------------------------------------------------: |

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
