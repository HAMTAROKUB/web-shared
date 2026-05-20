# @YOUR_GITHUB_USERNAME/web-shared

Shared UI components library — published to GitHub Packages (Private NPM Registry).

## Installation

### 1. Authenticate with GitHub Packages

Create or update your project's `.npmrc` to point scoped packages at the registry:

```
@YOUR_GITHUB_USERNAME:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PERSONAL_ACCESS_TOKEN
```

> **Note:** Generate a PAT at GitHub → Settings → Developer settings → Personal access tokens  
> with **`read:packages`** scope (for consumers) or **`write:packages`** scope (for publishing).

### 2. Install the package

```bash
npm install @YOUR_GITHUB_USERNAME/web-shared
```

## Usage

```tsx
import { Button } from '@YOUR_GITHUB_USERNAME/web-shared'

function App() {
  return (
    <Button variant="primary" size="md" onClick={() => alert('Clicked!')}>
      Click me
    </Button>
  )
}
```

### Button Props

| Prop       | Type                                    | Default     | Description                   |
|------------|-----------------------------------------|-------------|-------------------------------|
| `variant`  | `'primary' \| 'secondary' \| 'danger'` | `'primary'` | Visual style                  |
| `size`     | `'sm' \| 'md' \| 'lg'`                 | `'md'`      | Button size                   |
| `loading`  | `boolean`                               | `false`     | Show loading spinner          |
| `disabled` | `boolean`                               | `false`     | Disable the button            |
| `...rest`  | `ButtonHTMLAttributes`                  | —           | Native button HTML attributes |

## Publishing a New Version

1. Bump the version in `package.json`
2. Create a GitHub Release — the `publish.yml` workflow runs automatically

Or trigger manually from the **Actions** tab with optional dry-run mode.

## Development

```bash
npm install        # Install dependencies
npm run dev        # Start Vite dev server (app preview)
npm run build:lib  # Build the library → /dist
npm run lint       # Run ESLint
```

## Project Structure

```
src/
├── components/
│   └── Button/
│       ├── Button.tsx          # Component
│       ├── Button.module.css   # Scoped styles
│       └── index.ts            # Re-exports
└── index.ts                    # Library entry point
```

---

<!-- Original Vite template notes below -->

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
