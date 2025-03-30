# Dev sTools

A comprehensive collection of essential utility tools for developers by Prisma Devlab.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version >= 22.0.0)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/prisma-devlab/dev-tools.git
   ```

2. Navigate to the project directory:
   ```bash
   cd dev-tools
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Features

- Pre-configured Tailwind CSS setup.
- Utility functions for common tasks.
- Ready-to-use components.

## CI/CD Workflow

Our project uses a comprehensive CI/CD pipeline with the following stages:

### Local Development
- **Pre-commit hooks**: Before each commit, code is automatically linted and the build is verified
- **Commit message template**: Enforces consistent commit messages following conventional commit format

### CI/CD Pipeline (GitHub Actions)
1. **Lint Stage**: Validates code quality and style
   - ESLint for code quality checks
   - Prettier for code formatting verification

2. **Build Stage**: Verifies the application builds correctly
   - Only runs after linting passes
   - Creates optimized production build
   - Generates static assets for deployment

3. **Deploy Stage**: Deploys the application to GitHub Pages
   - Only runs after successful build
   - Only deploys from master branch pushes (not PRs)
   - Automatically publishes to GitHub Pages environment

```
[Code Changes] → [Pre-commit Hooks] → [GitHub Push] → [Lint Stage] → [Build Stage] → [Deploy Stage]
```

## Contributing

We welcome contributions! Please see the [CONTRIBUTING.md](.github/CONTRIBUTING.md) file for guidelines.

## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.
