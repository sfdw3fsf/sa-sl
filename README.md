ESLINT----------------------

PRETTIER-----------------------

yarn add --dev --exact prettier

🐳Then, create an empty config file to let editors and other tools know you are using Prettier:

node --eval "fs.writeFileSync('.prettierrc','{}\n')"

Next, create a .prettierignore file to let the Prettier CLI and editors know which files to not format. Here’s an example:

🐳If you use ESLint, install eslint-config-prettier to make ESLint and Prettier play nice with each other. It turns off all ESLint rules that are unnecessary or might conflict with Prettier.

yarn add -D eslint-config-prettier

🐳Add eslint-config-prettier to your ESLint configuration – either to eslintrc or to eslint.config.js (flat config).

eslintrc

eslint.config.js (flat config): Import eslint-config-prettier, and put it in the configuration array – after other configs that you want to override.

import someConfig from "some-other-config-you-use";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
someConfig,
eslintConfigPrettier,
];

---🌻🌻🌻
👉 If you’re using Tailwind CLI, Vite, or Next.js, PostCSS and Autoprefixer are already built-in! You don’t need to install them separately.

yarn add tailwindcss @tailwindcss/vite

Add the @import "tailwindcss"; import to your main CSS file. ---index.css---@import 'tailwindcss';

🌻 Reorder tailwindcss class on save

To get started, install prettier-plugin-tailwindcss as a dev-dependency: npm install -D prettier prettier-plugin-tailwindcss

Then add the plugin to your Prettier configuration:// .prettierrc
{
"plugins": ["prettier-plugin-tailwindcss"]
}

🌻 At tailwind version < 4 , we used the tailwind.config.js for colors,... but from v4 it's no longer supported npx tailwindcss init, instead we use directly in -----------index.css------@import 'tailwindcss';

@theme {
--font-display: 'Satoshi', sans-serif;
--breakpoint-3xl: 1920px;

    --color-avocado-500: oklch(0.84 0.18 117.33);
    --color-primary-500: #876;
    --color-primary-600: #934;

}

🐶React-Router Dom 7.15

🛫 yarn add react-router - can use wih node version > 20 only

🛫 Finally, render a <BrowserRouter> around your application:

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
<BrowserRouter>
<App />
</BrowserRouter>
);
