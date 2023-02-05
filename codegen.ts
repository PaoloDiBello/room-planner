import type { CodegenConfig } from "@graphql-codegen/cli";
import { GRAPHQL_URI } from "config";

const config: CodegenConfig = {
  overwrite: true,
  schema: GRAPHQL_URI,
  documents: "src/**/*.ts",
  generates: {
    "src/gql/": {
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
