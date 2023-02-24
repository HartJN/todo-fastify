# Simple Todo App

This is a simple todo app created as a learning project to produce a production-level app using best practices.

## Technologies Used

The following technologies were used to create this app:

- [Husky](https://github.com/typicode/husky): Git hooks to ensure code quality and run tests
- [Commitlint](https://github.com/conventional-changelog/commitlint): Lint commits against conventional commit format
- [Graceful Shutdowns](https://nodejs.org/api/process.html#process_signal_events): Handling process signals to shutdown the app gracefully
- [Prettier](https://prettier.io/): Code formatter to maintain consistent code style
- [Fastify](https://www.fastify.io/): A fast and low overhead web framework for Node.js
- [Swagger Docs](https://swagger.io/docs/specification/about/): API documentation using the OpenAPI specification
- [Docker](https://www.docker.com/): Containerizing the application for easy deployment and scalability
- [Caddy](https://caddyserver.com/): A modern web server for easy and secure deployment

## Database setup:

1.  create .env file in your root directory

2.  create a DATABASE_URL environmental variable and assign it to your mongoose connection string.

## Installation and Usage

To run this app locally, you need to have Node.js installed on your machine.

1. Clone the repository

```bash
git clone https://github.com/HartJN/todo-fastify.git
```

2. Install dependencies

```bash
yarn install
```

3. Start the development server

```bash
yarn dev
```

4. Access the app in your browser at http://localhost:4000

## API Endpoints

The following API endpoints are available:

- `/docs`: View Swagger Docs
- `POST /api/todos`: Add a new todo

```
Example:

Request:

{
  "title": "Default Todo title"
}

Successful status code 201 response:

{
  "_id": "63f80dbfb87d542a322f439f",
  "title": "Default Todo title",
  "shortId": "todo_IFrG6zUgcWr4zNqgwKnRb",
  "complete": false,
  "createdAt": "2023-02-24T01:07:11.052Z",
  "updatedAt": "2023-02-24T01:07:11.052Z"
}

Response headers

 connection: keep-alive
 content-length: 197
 content-type: application/json;
 charset=utf-8
 date: Fri,24 Feb 2023 01:07:11 GMT
 keep-alive: timeout=72
```

## Testing

This app uses vitest for integration tests. To run the tests, use the following command:

```bash
yarn test
```

## Takeaways

- use a commit linter to enforce commit message format and ensure code quality before committing.

- use semantic commit messages:

      Format: <type>(<scope>): <subject>
      Example

      feat: add hat wobble
      ^--^  ^------------^
      |     |
      |     +-> Summary in present tense.
      |
      +-------> Type: chore, docs, feat, fix, refactor, style, or test.

  More Examples:

      feat: (new feature for the user, not a new feature for build script)
      fix: (bug fix for the user, not a fix to a build script)
      docs: (changes to the documentation)
      style: (formatting, missing semi colons, etc; no production code change)
      refactor: (refactoring production code, eg. renaming a variable)
      test: (adding missing tests, refactoring tests; no production code change)
      chore: (updating grunt tasks etc; no production code change)

  References:

      https://www.conventionalcommits.org/
      https://seesparkbox.com/foundry/semantic_commit_messages
      http://karma-runner.github.io/1.0/dev/git-commit-msg.html

- Graceful shutdowns ensure that your application closes down properly, and does not leave any open connections or unfinished work.

- Fastify is a great and easy to implement framework. It makes creating a backend very easy and makes testing a breeze.

- There is no reason not to use Swagger docs in my projects. It is very simple to use and produces good documentation.

- Use tsx instead of ts-node-dev. It supports the latest node standards out of the box, full ESM support and is extremely fast due to ESBUILD. ESM issues in common.js are a thing of the past.
