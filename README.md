# List GitHub repos

This is an example project fetching GitHub repository details based on a topic entered by the user.

Built based on the [requirements](./REQUIREMENTS.md) provided.

## Setup

Run the following to setup this project locally:

1. Clone and setup the repo:

   ```bash
   git clone git@github.com:rich-frost/list-github-repos.git
   cd list-github-repos/
   npm install
   ```

2. Rename the `.env.example` file to `.env` and replace the `[Your Access Token]` with your GitHub personal access token

3. To run the project:

   ```bash
   npm run start
   ```

4. Go to http://localhost:8080/ in your browser

## Developer notes

### Features

This project was built from scratch using the following:

- Webpack and Babel for build and bundling
- Browserlist for bundling against correct browser versions
- Prettier and ESLint for code styling and linting
- React and Typescript
- Apollo client for GraphQL requests
- Chakra UI component library with emotion and react-icons
- Jest and React Testing Library for unit tests
- dotenv for parsing `.env` variables
- GitHub actions
  - run tests and build on merging to `main` branch
  - attempts to create docker container if on clean tag of `main` branch (TODO finish this)

### Scripts

- `npm run start` - runs the project locally
- `npm run build` - builds the project for production and outputs to `dist/` folder (TODO)
- `npm run dev` - builds the project for development and outputs to `dist/` folder
- `npm run test` - runs unit tests
- `npm run test-dev` - runs unit tests with watch mode
- `npm run test-coverage` - runs unit tests with coverage report
- `npm run lint` - lints the project
- `npm run tsc` - compile the project with Typescript
- `npm run tsc-dev` - compile the project with Typescript and watch for changes

### Application structure

As a general overview of the app structure and code logic:

- `src/` folder contains all content for the application
- `src/index.tsx` is the entry point for the application, wrapping the app in the ApolloProvider and ChakraProvider
- `src/constants.tsx` file contains all the app constants
- `src/components/` contains all the components
- `src/types/` contains all types files, so far just includes the common search types
- `src/utils/` contains util files
- `Dockerfile` the docker file to create a built container
- `nginx/nginx.conf` the nginx config for the docker container

### Future work

There are a number of areas still to complete on this project, I have added `TODO` and `FIXME` comments in places where I feel more work needs to be done.

Main next steps could be:

- Added pagination and virtualisation of repositories to be able to list all repos against a topic. May use something like [react-table](https://react-table-v7.tanstack.com/) or [Tanstack table](https://tanstack.com/table/v8)
- Add integration tests (Cypress or Playwright)
- Add better search - possibility to fetch list of topics to search against?
- Possibly look into using Context provider to handle global data rather than prop drilling
- Sort out webpack dev/prod builds
- Add live reload to save having to refresh the page on code changes
