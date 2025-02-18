ESLINT----------------------

PRETTIER-----------------------

yarn add --dev --exact prettier

Then, create an empty config file to let editors and other tools know you are using Prettier:

node --eval "fs.writeFileSync('.prettierrc','{}\n')"

Next, create a .prettierignore file to let the Prettier CLI and editors know which files to not format. Here’s an example:

If you use ESLint, install eslint-config-prettier to make ESLint and Prettier play nice with each other. It turns off all ESLint rules that are unnecessary or might conflict with Prettier.

yarn add -D eslint-config-prettier

Add eslint-config-prettier to your ESLint configuration – either to eslintrc or to eslint.config.js (flat config).

eslintrc

eslint.config.js (flat config): Import eslint-config-prettier, and put it in the configuration array – after other configs that you want to override.

import someConfig from "some-other-config-you-use";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
someConfig,
eslintConfigPrettier,
];

---
👉 If you’re using Tailwind CLI, Vite, or Next.js, PostCSS and Autoprefixer are already built-in! You don’t need to install them separately.