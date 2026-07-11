# Continuous Integration Pipeline

A professional GitHub Actions example that validates a TypeScript project automatically. It is designed as a submission for the **Continuous Integration Pipeline** challenge.

## What the workflow does

The workflow runs when:

- Code is pushed to the `main` branch.
- A pull request targeting `main` is opened, updated, or reopened.

It uses two jobs:

| Job        | Checks                                                                                                  |
| ---------- | ------------------------------------------------------------------------------------------------------- |
| `validate` | Installs exact dependencies, verifies formatting, lints TypeScript, runs tests, and builds the project. |
| `security` | Runs `npm audit` and fails on high- or critical-severity dependency vulnerabilities.                    |

The workflow also caches npm downloads for faster runs and cancels outdated runs for the same branch or pull request.

## Project structure

```text
.
├── .github/workflows/ci.yml  # GitHub Actions pipeline
├── src/
│   ├── health.ts             # Small typed application module
│   └── health.test.ts        # Automated test
├── eslint.config.js          # Linting rules
├── .prettierrc.json          # Formatting rules
├── package.json              # Scripts and dependencies
└── tsconfig.json             # TypeScript build configuration
```

## Run locally

Prerequisite: Node.js 20 or newer.

```bash
npm install
npm run format:check
npm run lint
npm test
npm run build
npm run security:check
```

## GitHub setup

1. Create a new GitHub repository and push this project to its `main` branch.
2. Open the repository's **Actions** tab to see the first run.
3. Make a small change and open a pull request to demonstrate that the same checks run before merging.
4. In the repository settings, add `Continuous Integration / Build, test, and validate` and `Continuous Integration / Dependency security audit` as required status checks if branch protection is available.



