import { defineFlatConfig } from "eslint-define-config"

import globals from "globals"

import eslint from "@eslint/js"
import jsdoc from "eslint-plugin-jsdoc"
import eslintConfigPrettier from "eslint-config-prettier"
import pluginPromise from "eslint-plugin-promise"
// import * as pluginSecurity from "eslint-plugin-security"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import eslintPluginUnicorn from "eslint-plugin-unicorn"
import pluginVue from "eslint-plugin-vue"
import pluginVueA11y from "eslint-plugin-vuejs-accessibility"
import tseslint from "typescript-eslint"

// const pluginSecurity = await import("eslint-plugin-security")

export default defineFlatConfig([
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  ...pluginVueA11y.configs["flat/recommended"],
  pluginPromise.configs["flat/recommended"],
  jsdoc.configs["flat/recommended"],
  eslintConfigPrettier,
  {
    languageOptions: { globals: globals.browser },
    plugins: {
      "simple-import-sort": simpleImportSort,
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",

      "jsdoc/require-param-type": 0,
      "jsdoc/require-returns-type": 0,
      "jsdoc/tag-lines": 0,
      "vue/multi-word-component-names": 0,
      "no-lonely-if": "warn",

      /*
       ? Unicorn autofixable subset.
       ?
       ? Only a subset of eslint-plugin-unicorn's rules were enabled within this
       ? configuration. It's highly opinionated nature may prove to be too strict
       ? for use, and even then only auto-fixable rules were enabled to get it
       ? out of the user's way.
       */

      "unicorn/better-regex": "warn",
      "unicorn/catch-error-name": ["error", {}],
      "unicorn/consistent-function-scoping": "error",
      "unicorn/custom-error-definition": "error",
      "unicorn/escape-case": "warn",
      "unicorn/expiring-todo-comments": "error",
      "unicorn/explicit-length-check": "error",
      "unicorn/new-for-builtins": "warn",
      "unicorn/no-for-loop": "warn",
      "unicorn/no-instanceof-array": "warn",
      "unicorn/no-lonely-if": "warn",
      "unicorn/no-new-array": "warn",
      "unicorn/no-typeof-undefined": "warn",
      "unicorn/no-useless-length-check": "warn",
      "unicorn/no-useless-spread": "warn",
      "unicorn/numeric-separators-style": "warn",
      "unicorn/prefer-array-flat": "warn",
      "unicorn/prefer-array-flat-map": "warn",
      "unicorn/prefer-date-now": "warn",
      "unicorn/prefer-keyboard-event-key": "warn",
      "unicorn/prefer-modern-math-apis": "warn",
      "unicorn/prefer-node-protocol": "warn",
      "unicorn/prefer-set-has": "error",
      "unicorn/prefer-set-size": "warn",
      "unicorn/require-array-join-separator": "warn",
    },
  },
])
