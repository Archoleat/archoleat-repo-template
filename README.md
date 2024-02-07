# Archoleat Repo Template

![ESM Only](https://img.shields.io/badge/ESM-only-gray?labelColor=fe0)
![TypeScript Only](https://img.shields.io/badge/TypeScript-only-gray?labelColor=06f)
![Test](https://img.shields.io/github/actions/workflow/status/Archoleat/archoleat-repo-template/mocha.yml?label=Test)
![Commitlint](https://img.shields.io/github/actions/workflow/status/Archoleat/core/commitlint.yml?label=Commitlint)
![CodeQL](https://img.shields.io/github/actions/workflow/status/Archoleat/archoleat-repo-template/codeql.yml?label=CodeQL)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/Archoleat/archoleat-repo-template/editorconfig.yml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/Archoleat/archoleat-repo-template/prettier.yml?label=Prettier)
![Markdown](https://img.shields.io/github/actions/workflow/status/Archoleat/archoleat-repo-template/markdown.yml?label=Markdown)
![ESLint](https://img.shields.io/github/actions/workflow/status/Archoleat/archoleat-repo-template/eslint.yml?label=ESLint)

> Stop Wasting Time on Repository Build-up!

## Table of Contents

-   [Getting Started](#getting-started)
-   [Features](#features)
-   [Scripts](#scripts)
-   [Workflows](#workflows)
-   [Markdown](#markdown)
-   [Prettier](#prettier)
-   [Using Bots](#using-bots)
-   [Change of Maintainer](#change-of-maintainer)
-   [License](#license)

**Archoleat Repo Template** is a template repository designed for quickly
starting new projects with pre-configured tools and best development practices.
This template includes ready-made solutions for integration with:

-   **Git**.
-   **GitHub**.
-   **Commitizen**.
-   **Commitlint**.
-   **Conventional Commits**.
-   **Husky & Lint Staged**.
-   **GitHub Actions**.
-   **Semantic Release**.
-   **NPM**.
-   **CodeQL**.
-   **EditorConfig**.
-   **ESLint**.
-   **Remark**.
-   **Prettier**.
-   **Mocha**.
-   **TypeScript**.
-   **Dependabot**.
-   **Welcome Bot**.
-   **Issue & Pull Request Templates**.

> \[!TIP]
> **A good solution for your business!**
>
> Now you don't have to worry about unnecessary costs.
> Everything is already set up and prepared for you!
>
> And also the template is very good for teams,
> because you can easily standardize projects with this template.

## Getting Started

1.  **Create a Repository**: Use this template
    to create a new repository on GitHub.

    > Since this is a **Public Template** you can click the button
    > **Use this template** for a faster and more convenient cloning.

1.  **Clone the Repository**: Clone your new repository to your local machine.

1.  **Start Development**: Develop your project,
    making changes according to your project's needs.

1.  **Configure GitHub Actions**: Modify GitHub Actions
    settings to fit your requirements.

    > **For those unfamiliar with GitHub Actions**,
    > our workflows use
    > [**chain**](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#workflow_run),
    > if you want to add more workflows to this chain,
    > workflows, it won't work, because the chain only supports
    > only three levels, example: **`workflow A`** > **`workflow B`** >
    > **`workflow C`** > **`workflow D`**, if you add **`workflow E`**
    > to the chain. it won't work!

## Features

-   **Flexibility**: Easily customizable template to adapt
    to different project types.

-   **Git and GitHub Integration**: Pre-configured **`.gitignore`**,
    **`.gitattributes`**, and other files for efficient work with
    Git and GitHub.

    -   **Conventional Commits, Commitlint & Commitizen**: If you don't want
        to think about how to write a commit every time,
        these plugins will help you.

        > It will be especially useful for teams that
        > have an ongoing debate about writing commits.

    -   **Husky & Lint Staged**: Won't let you submit
        bad code to the repository!

-   **Continuous Integration (CI)**: Built-in CI support using GitHub Actions
    for automatic linting, testing and building of your code with each change.

    > Also suitable for private repositories! GitHub Actions use
    > **cache**, **timeout-minutes**, **path filters** and **workflow run**
    > to reduce the execution time, which means it will significantly
    > reduce your costs!

    -   **Security**: Included **CodeQL** workflow for detecting
        and preventing potential vulnerabilities in your code.

    -   **Linters**: Help you maintain a consistent code writing style
        and find errors.

        > By default **ESLint**, **Prettier**, **Editorconfig Checker** and
        > **Remark** check all files in the project, if you want to change this
        > behavior then go to [**`package.json`**](https://github.com/Archoleat/archoleat-repo-template/blob/main/package.json)
        > and [**`lint-staged.config.js`**](https://github.com/Archoleat/archoleat-repo-template/blob/main/lint-staged.config.js)
        > files.

    -   **Tests**: Automated testing will help you focus on
        writing better code!

    -   **Semantic Release**: For those who are tired of writing changelogs
        and thinking about what the next version number will be.

-   **TypeScript**: Pre-configured **TypeScript** setup
    for improved reliability and development convenience.

    > More about [**TypeScript**](#javascript--typescript) in this project.

-   **Bots**:

    > How to use [**bots**](#using-bots).

    -   **Dependabot**: No more wasting time updating dependencies!

    -   **Welcome Bot**: For those who have created an issue or made
        a **Pull Request** for the first time, a thank you message will be sent.

-   **Issue & Pull Request Templates**: Your contributors will be more willing
    to send issue and **Pull Request** knowing you have a convenient form!

## Scripts

-   **`init`**: Installs dependencies, **Husky** and update submodules.

-   **`format`**: Runs **Prettier** with the **`--write`** flag
    for all files.

-   **`lint:formatting`**: Runs **Prettier** with the **`--check`** flag
    for all files.

    > In the [**`prettier.yml`**](https://github.com/Archoleat/archoleat-repo-template/blob/main/.github/workflows/prettier.yml)
    >
    > Also run with a **`pre-commit`** hook.

-   **`lint:editorconfig`**: Runs **Editorconfig Checker** and
    checks all files in the project.

    > Also runs with the [**`editorconfig.yml`**](https://github.com/Archoleat/archoleat-repo-template/blob/main/.github/workflows/editorconfig.yml)
    > workflow.

-   **`lint:md`**: Runs **Remark** with the **`--quiet`** flag and
    checks all **Markdown** files.

    > Also runs with the [**`markdown.yml`**](https://github.com/Archoleat/archoleat-repo-template/blob/main/.github/workflows/markdown.yml)
    > workflow.

-   **`lint:ts`**: Runs **ESLint** with the flag **`--fix`**
    for all **TypeScript** files.

    > Runs with the [**`eslint.yml`**](https://github.com/Archoleat/archoleat-repo-template/blob/main/.github/workflows/eslint.yml)
    > workflow.
    >
    > Also run with a **`pre-commit`** hook.

-   **`test`**: Runs **Mocha** and the tests in the **specs/** folder.

    > Also runs using the [**`mocha.yml`**](https://github.com/Archoleat/archoleat-repo-template/blob/main/.github/workflows/mocha.yml)
    > workflow.

-   **`commit`**: Runs **Commitlint** to create commits according to
    **Conventional Commits** standards.

## Workflows

-   **`codeql.yml`**: Checks **TypeScript** for vulnerabilities.

-   **`commitlint.yml`**: Checks the commit message according to
    the **conventionalcommits** standard.

-   **`create-pull-request.yml`**: Automatically creates a Pull Request
    when pushing a branch to the repository.

-   **`dependabot-auto-merge-pull-request.yml`**: Automatically merges
    dependabot Pull Requests to the **main** branch.

-   **`editorconfig.yml`**: Checks all files with **editorconfig-checker**.

-   **`eslint.yml`**: Checks all **TypeScript** files with **ESLint**.

-   **`markdown.yml`**: Checks all Markdown files with **remark**.

-   **`mocha.yml`**: Tests all TypeScript files with **Mocha**.

-   **`pre-commit.yml`**: Runs a check on the contents of the Pull Request
    before merging.

-   **`prettier.yml`**: Checks all files with **Prettier**.

-   **`release.yml`**: Creates release.

-   **`semantic-pull-request.yml`**: Validates the Pull Request title
    against the **conventionalcommits** standard.

-   **`stale.yml`**: Removes issues that have not been active for more than
    60 days.

## Markdown

> \[!TIP]
> All **Markdown** files here can also be used as a template!

## Prettier

> \[!WARNING]
> You need to install the **Prettier** extension for it to work.
>
> You can see all necessary extensions for **Visual Studio Code** in
> [**.vscode**](https://github.com/Archoleat/.vscode/settings.json).

> \[!TIP]
> If you want to change the rules in **`prettier.config.js`** you can do it
> in **`.editorconfig`**, prettier will automatically pick up the rules
> from editorconfig.

> \[!NOTE]
> All **Markdown** and **.\*ignore** files [**ignored**](https://github.com/Archoleat/archoleat-repo-template/blob/main/.prettierignore).

## Using Bots

> \[!WARNING]
> To use
> [**Welcome Bot**](https://github.com/apps/welcome)
> you need to install it.

## Change of Maintainer

The following files use the name **nikkeyl** by default:

-   [**`CONTRIBUTORS.md`**](https://github.com/Archoleat/archoleat-repo-template/blob/main/CONTRIBUTORS.md).
-   [**`CODE_OF_CONDUCT.md`**](https://github.com/Archoleat/archoleat-repo-template/blob/main/CODE_OF_CONDUCT.md).
-   [**`CODEOWNERS`**](https://github.com/Archoleat/archoleat-repo-template/blob/main/.github/CODEOWNERS).
-   [**`bug-report.yml`**](https://github.com/Archoleat/archoleat-repo-template/blob/main/.github/ISSUE_TEMPLATE/bug-report.yml).
-   [**`enhancement-request.yml`**](https://github.com/Archoleat/archoleat-repo-template/blob/main/.github/ISSUE_TEMPLATE/enhancement-request.yml).
-   [**`docs-enhancement.yml`**](https://github.com/Archoleat/archoleat-repo-template/blob/main/.github/ISSUE_TEMPLATE/docs-enhancement.yml).

Before using this template, replace this name with your
name, name of your team or the name of your organization.

> \[!CAUTION]
> Don't forget to change your license!

## License

This project is licensed under the MIT license - see the
[**LICENSE**](LICENSE) for details.
