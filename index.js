import { defineFlatConfig } from "eslint-define-config"

import globals from "globals"

import eslint from "@eslint/js"
import jsdoc from "eslint-plugin-jsdoc"
import prettier from "eslint-config-prettier"
import pluginPromise from "eslint-plugin-promise"
import sonarjs from "eslint-plugin-sonarjs";
import svelte from "eslint-plugin-svelte"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import unicorn from "eslint-plugin-unicorn"
import ts from "typescript-eslint"

export default defineFlatConfig([
  eslint.configs.recommended,
  ...ts.configs.recommended,
  pluginPromise.configs["flat/recommended"],
  jsdoc.configs["flat/recommended-typescript"],
  sonarjs.configs.recommended,
  ...svelte.configs["flat/recommended"],
	prettier,
	...svelte.configs["flat/prettier"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parserOptions: {
				parser: ts.parser,
			},
    },

    plugins: {
      "simple-import-sort": simpleImportSort,
      unicorn,
    },

    rules: {
      "no-lonely-if": "warn",
      "no-undef": 0,

      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",

      "jsdoc/tag-lines": 0,

      /*
       ? Unicorn autofixable subset.
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

      /*
       ? Unicorn no autofix subset.
       */
    },
  },
  {
    files: ["**/*.svelte"],

    rules: {
      "sonarjs/sonar-no-unused-vars": 0,
    }
  }
])
