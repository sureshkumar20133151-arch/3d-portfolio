import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "public/**",
      "out/**",
    ],
  },
  ...nextCoreWebVitals,
];

export default eslintConfig;
