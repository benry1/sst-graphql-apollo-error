# Unable to hit this hello world GraphQL

1. Copied the demo app with this command: `npx create-sst@latest --template=base/example graphql-apollo`
2. Implemented the hello world app according to (this example)[https://sst.dev/examples/how-to-create-an-apollo-graphql-api-with-serverless.html]

I deployed this to a test env and hit with the following request:

```
curl --location 'https://<lambda_url>/graphql' \
--header 'Content-Type: application/json' \
--data '{"query":"query {\n    hello\n}","variables":{}}'
```

This gave the error shown below. Per a recommendation on Discord, I added an override value to graphql in `package.json`:

```
  "overrides": {
    "graphql": "16.8.1"
  }
```

The error persists.

## Steps to Reproduce

1. Clone the repo
2. `npm install`
3. `npx sst deploy --stage test`
4. Attempt to post to the endpoint with any request

## The Error

```
"Ensure that there is only one instance of \"graphql\" in the node_modules",
"directory. If different versions of \"graphql\" are the dependencies of other",
"relied on modules, use \"resolutions\" to ensure only one version is installed.",
"",
"https://yarnpkg.com/en/docs/selective-version-resolutions",
"",
"Duplicate \"graphql\" modules cannot be used at the same time since different",
"versions may have different capabilities and behavior. The data from one",
"version used in the function from another could produce confusing and",
"spurious results."
```