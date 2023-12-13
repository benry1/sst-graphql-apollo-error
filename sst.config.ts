import { SSTConfig } from "sst";
import { GraphQLStack } from "./stacks/ExampleStack";

export default {
  config(_input) {
    return {
      name: "gql-test",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(GraphQLStack);
  },
} satisfies SSTConfig;
