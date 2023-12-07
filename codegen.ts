import { CodegenConfig } from "@graphql-codegen/cli";

const API_URL = import.meta.env.VITE_API_URL;

const config: CodegenConfig = {
  schema: API_URL,
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
