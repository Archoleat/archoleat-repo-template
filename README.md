# Conqueror Repo Template

![ESM Only](https://img.shields.io/badge/ESM-only-gray?labelColor=fe0)
![TypeScript Only](https://img.shields.io/badge/TypeScript-only-gray?labelColor=06f)
![CodeQL](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/conqueror-repo-template/codeql.yml?label=CodeQL)
![Test](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/conqueror-repo-template/mocha.yml?label=Test)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/conqueror-repo-template/editorconfig.yml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/conqueror-repo-template/prettier.yml?label=Prettier)
![Markdown](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/conqueror-repo-template/markdown.yml?label=Markdown)
![ESLint](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/conqueror-repo-template/eslint.yml?label=ESLint)

## Table of Contents

-   [Getting Started](#getting-started)
-   [Features](#features)
-   [Package.json scripts](#packagejson-scripts)
-   [Template for NPM Package](#template-for-npm-package)
-   [Markdown](#markdown)
-   [JavaScript & TypeScript](#javascript--typescript)
-   [Prettier](#prettier)
-   [Using Bots](#using-bots)
-   [Helpers](#helpers)
-   [Change of Maintainer](#change-of-maintainer)
-   [Authors](#authors)
-   [Contributors](#contributors)
-   [Contributing](#contributing)
-   [Versioning](#versioning)
-   [License](#license)
-   [Acknowledgments](#acknowledgments)

## **Stop Wasting Time on Repository Build-up!**

**Conqueror Repo Template** is a template repository designed for quickly
starting new projects with pre-configured tools and best development practices.
This template includes ready-made solutions for integration with:

-   **Git**.
-   **GitHub**.
-   **Commitizen**.
-   **Commitlint**.
-   **Conventional Commits**.
-   **Husky & Lint Staged**.
-   **CI/CD**.
-   **Semantic Release**.
-   **CodeQL**.
-   **EditorConfig**.
-   **ESLint**.
-   **Remark**.
-   **Prettier**.
-   **Mocha**.
-   **TypeScript**.
-   **Dependabot**.
-   **Welcome Bot**.
-   **Auto Merge Bot**.
-   **Issue & Pull Request Templates**.

> [!TIP]
> **A good solution for your business!**
> Now you don't have to worry about unnecessary costs.
> Everything is already set up and prepared for you!
>
> And also the template is very good for teams,
> because you can easily standardize projects with this template.

## Getting Started

1.  **Create a Repository:** Use this template
    to create a new repository on GitHub.

    > Since this is a **Public Template** you can click the button
    > `Use this template` for a faster and more convenient cloning.

1.  **Clone the Repository:** Clone your new repository to your local machine.

1.  **Start Development:** Develop your project,
    making changes according to your project's needs.

1.  **Configure CI/CD:** Modify GitHub Actions
    settings to fit your CI/CD requirements.

    > **For those unfamiliar with GitHub Actions**,
    > our workflows use
    > [chain](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#workflow_run),
    > if you want to add more workflows to this chain,
    > workflows, it won't work, because the chain only supports
    > only three levels, example: `workflow A` > `workflow B` > `workflow C` >
    > `workflow D`, if you add `workflow E` to the chain.
    > it won't work!

## Features

-   **Flexibility:** Easily customizable template to adapt
    to different project types.

-   **Git and GitHub Integration:** Pre-configured `.gitignore`,
    `.gitattributes`, and other files for efficient work with Git and GitHub.

    -   **Conventional Commits, Commitlint & Commitizen:** If you don't want
        to think about how to write a commit every time,
        these plugins will help you.

        > It will be especially useful for teams that
        > have an ongoing debate about writing commits.

    -   **Husky & Lint Staged:** Won't let you submit
        bad code to the repository!

-   **Continuous Integration (CI):** Built-in CI support using GitHub Actions
    for automatic building and testing of your code with each change.

    > Also suitable for private repositories! GitHub Actions use
    > **cache**, **timeout-minutes**, and **path filters** to reduce the
    > execution time, which means it will significantly reduce your costs!

    -   **Security:** Included CodeQL workflow for detecting
        and preventing potential vulnerabilities in your code.

    -   **Linters:** Help you maintain a consistent code writing style
        and find errors.

        > By default **eslint**, **prettier**, **editorconfig-checker** and
        > **remark** check all files in the project, if you want to change this
        > behavior then go to [`package.json`](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/blob/main/package.json)
        > and [`lintstagedrc.json`](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/blob/main/.lintstagedrc.json)
        > files.

    -   **Tests:** Automated testing will help you focus on
        writing better code!

    -   **Semantic Release:** For those who are tired of writing changelogs
        and thinking about what the next version number will be.

-   **TypeScript:** Pre-configured TypeScript setup
    for improved reliability and development convenience.

    > More about [TypeScript](#javascript--typescript) in this project.

-   **Bots:**

    > How to use [bots](#using-bots).

    -   **Dependabot:** No more wasting time updating dependencies!

    -   **Auto Merge Bot:** Merges Pull Requests created with Dependabot.

    -   **Welcome Bot:** For those who have created an issue or made
        a Pull Request for the first time, a thank you message will be sent.

-   **Issue & Pull Request Templates:** Your contributors will be more willing
    to send issue and Pull Requests knowing you have a convenient form!

## Package.json scripts

-   `init`: Installs **node_modules** and **husky**.

-   `editorconfig:lint`: Runs `editorconfig-checker` and
    checks all files in the project.

    > Also runs with the [`editorconfig.yml`](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/blob/main/.github/workflows/editorconfig.yml) workflow.

-   `prettier:fix`: Runs `Prettier` with the `--write` flag.

    > In the [`prettier.yml`](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/blob/main/.github/workflows/prettier.yml)
    > workflow, `prettier` is run with the `--check` flag.
    >
    > Also run with a `pre-commit` hook.

-   `remark:lint`: Runs `remark` with the `--quiet` flag and
    checks all markdown files.

    > Also runs with the [`markdown.yml`](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/blob/main/.github/workflows/markdown.yml) workflow.

-   `eslint:lint`: Runs `eslint` with the flags `--fix` and
    `--no-error-on-unmatched-pattern` flags for all `TypeScript` files.

    > Also runs with the [`eslint.yml`](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/blob/main/.github/workflows/eslint.yml) workflow.

-   `test`: Runs `Mocha` and the tests in the **__tests__/** folder.

    > Also runs using the [`mocha.yml`](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/blob/main/.github/workflows/mocha.yml) workflow.

-   `cm`: Runs `Commitizen`, `Commitlint`, and `Husky` to create commits
    according to **Conventional Commits** standards.

## Template for NPM Package

If you are creating a plugin for **npm** then you can use the [`npm`](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/tree/npm)
branch.

Everything you need is already configured in it.

## Markdown

> [!TIP]
> All **markdown** files here can also be used as a template!

## JavaScript & TypeScript

> [!WARNING]
> This template is fully customized with **JavaScript ES6**.
>
> Also, only **TypeScript** is used here.

## Prettier

> [!WARNING]
> You need to install the **Prettier** extension for it to work.
>
> You can see all necessary extensions for **Visual Studio Code** in
> [**Conqueror Helpers**](https://github.com/Conqueror-Site-Builder/conqueror-helpers/blob/main/helpers/.vscode/settings.json).

> [!TIP]
> If you want to change the rules in `.prettierrc.json` you can do it
> in `.editorconfig`, prettier will automatically pick up the rules
> from editorconfig.

> [!NOTE]
> All **markdown** files [ignored](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/blob/main/.prettierignore).

## Using Bots

> [!WARNING]
> To use
> [Welcome Bot](https://github.com/apps/welcome) and
> [Auto Merge Bot](https://github.com/apps/probot-auto-merge)
> you need to install them.

## Helpers

If you want to further customize your repository or vscode,
you can download [**Conqueror Helpers**](https://github.com/Conqueror-Site-Builder/conqueror-helpers),
this package holds:

-   GitHub branch and tag protection rules.
-   Extended version of the `.npmrc` file.
-   Bash console theme.
-   `.gitconfig`.
-   `.gitignore_global`.
-   `.gitmessage.txt`.
-   `settings.json` and `extensions.json` for vscode.
-   Snippets for **js**, **ts**, **scss**, **pug** and **json**.

> [!WARNING]
> **Conqueror Helpers** contains configuration and snippets for **vscode only**,
> if you want configuration and snippet files to be added for your IDE
> or code editor please create an [**issue**](https://github.com/Conqueror-Site-Builder/conqueror-helpers/issues/new/choose)
> or **Pull Request** with the new files.

## Change of Maintainer

The following files use the name **nikkeyl** by default:

-   [`AUTHORS.md`](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/blob/main/AUTHORS.md).
-   [`CODE_OF_CONDUCT.md`](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/blob/main/CODE_OF_CONDUCT.md).
-   [`CONTRIBUTING.md`](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/blob/main/CONTRIBUTING.md).
-   [`CODEOWNERS`](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/blob/main/.github/CODEOWNERS).
-   [`dependabot.yml`](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/blob/main/.github/dependabot.yml).
-   [`bug-report.yml`](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/blob/main/.github/ISSUE_TEMPLATE/bug-report.yml).
-   [`feature-request.yml`](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/blob/main/.github/ISSUE_TEMPLATE/feature-request.yml).
-   [`refactor-request.yml`](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/blob/main/.github/ISSUE_TEMPLATE/refactor-request.yml).
-   [`wiki-improvement.yml`](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/blob/main/.github/ISSUE_TEMPLATE/wiki-improvement.yml).

Before using this template, replace this name with your
name or the name of your team.

> [!CAUTION]
> Don't forget to change your license!

## Authors

See also the list of [Authors](AUTHORS.md).

## Contributors

If you want to improve something, you can write about it
[here](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/issues/new/choose).

You can also view a list of [Contributors](CONTRIBUTORS.md).

## Contributing

Please read [Contributing](CONTRIBUTING.md)
and [Code of Conduct](CODE_OF_CONDUCT.md) for details,
and the process for submitting Pull Requests to us.

## Versioning

We use [SemVer](https://semver.org) for versioning.
You can see the available versions
[here](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/tags).

## License

This project is licensed under the MIT license - see the
[LICENSE](LICENSE) for details.

## Acknowledgments

Thanks to everyone who takes part in the development of the project.
