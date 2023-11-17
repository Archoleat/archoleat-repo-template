## Describe Your Changes

Please include a summary of the changes.

## Issue Ticket Number

closes #XXXX

## Checklist Before Requesting a Review

-   [ ] My code follows the
    [guidelines](https://github.com/repository/GUIDELINES.md)
    of this project.
<!--  -->
-   [ ] I have made corresponding changes to the documentation.
<!--  -->
-   [ ] I have commented my code, particularly in hard-to-understand areas.
<!--  -->
-   [ ] I have performed a self-review of my code.
<!--  -->
-   [ ] I have added tests that prove my fix is effective
    or that my feature works.
<!--  -->
-   [ ] New and existing unit tests have been successfully passed.
<!--  -->
-   [ ] My changes generate no new warnings.

## Contributing Guidelines

-   Make sure that your Pull Request is not a duplicate.
<!--  -->
-   If not, then make sure that:

    -   You have done your changes in a separate branch.
        Branches MUST have descriptive names that start with either
        the `fix`, `feature` or `refactor` prefixes.<br>
        Good: `fix/app.js`, `feature/eslint` or `refactor/rating.scss`.<br>
        Bad: `fix/function`, `feature/plugin` or `refactor/smth`.

        > **Important**<br>
        > New branches should not be created from the `main` branch.
    <!--  -->
    -   You have a descriptive commit message with a short title (first line).

        > Example:<br>
        > https://gist.github.com/lisawolderiksen/a7b99d94c92c6671181611be1641c733
    <!--  -->
    -   You have only one commit (if not, squash them into one commit).
    <!--  -->
    -   Make sure that the code passes the check `remark`, `eslint`, `stylelint`,
        `editorconfig-checker`. If you encounter errors, fix the problems.

        > **Note**<br>
        > To fix the errors, run `npm run eslint:fix`, `npm run stylelint:fix`,
        > `npm run markdown:lint` and `npm run editorconfig:lint`.<br>
        > If auto-fix doesn't help, fix it manually.
<!--  -->
-   **After** these steps, you're ready to open a Pull Request:

    -   Your Pull Request **MUST NOT** target the `main` branch.
        You probably want to target `fix`, `refactor` or `feature`.

        > **Important**<br>
        > Your Pull Request will be rejected if it targets the `main` branch.

        > **Note**<br>
        > This was done to protect the `main` branch from unwanted changes and
        > the absence of bugs, after a Pull Request.
    <!--  -->
    -   Give a descriptive title to your Pull Request.

        > Examples:<br>
        > Good: feat: new rules in eslint, docs: improve, feature: postcss, etc.<br>
        > Bad: patch1, update, Add: change, etc.

IMPORTANT: Please see our
[Pull Request Process](../CONTRIBUTING.md#pull-request-process) for details.

**PLEASE REMOVE THIS TEMPLATE BEFORE SUBMITTING**
