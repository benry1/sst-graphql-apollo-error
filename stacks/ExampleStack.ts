import { Api, StackContext } from 'sst/constructs';

export function GraphQLStack({ stack }: StackContext) {
  // Create the GraphQL API
  const api = new Api(stack, 'ApolloApi');
  api.addRoutes(stack, {
    'POST /graphql': {
      type: 'graphql',
      function: {
        handler: 'packages/functions/handler.ts',
        runtime: 'nodejs18.x',
      },
    },
  });

  // Show the API endpoint in output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}

