# Conqueror Repo Template

![ESM Only](https://img.shields.io/badge/ESM-only-gray?labelColor=fe0)
![TypeScript Only](https://img.shields.io/badge/TypeScript-only-gray?labelColor=06f)
![CodeQL](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/conqueror-repo-template/codeql.yml?label=CodeQL)
![Test](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/conqueror-repo-template/mocha.yml?label=Test)
![EditorConfig](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/conqueror-repo-template/editorconfig.yml?label=EditorConfig)
![Markdown](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/conqueror-repo-template/markdown.yml?label=Markdown)
![ESLint](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/conqueror-repo-template/eslint.yml?label=ESLint)

Переводы:
[English](README.md)

## Оглавление

-   [Начало Работы](#начало-работы)
-   [Преимущества](#преимущества)
-   [Особенности](#особенности)
-   [Сценарии Package.json](#сценарии-packagejson)
-   [Markdown](#markdown)
-   [JavaScript & TypeScript](#javascript--typescript)
-   [Использование Ботов](#использование-ботов)
-   [Вклад](#вклад)
-   [Версионирование](#версионирование)
-   [Авторы](#авторы)
-   [Контрибьюторы](#контрибьюторы)
-   [Лицензия](#лицензия)
-   [Благодарности](#благодарности)

## **Прекратите Тратить Время на Создание Репозитория!**

**Conqueror Repo Template** - это шаблонный репозиторий,
предназначенный для быстрого
запуска новых проектов с заранее настроенными
инструментами и лучшими практиками разработки.
Шаблон включает готовые решения для интеграции с:

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
-   **Mocha**.
-   **TypeScript**.
-   **Dependabot**.
-   **Welcome Bot**.
-   **Auto Merge Bot**.
-   **Issue & Pull Request Templates**.

> [!TIP]
> Это решение очень хорошо подходит для команд,
> поскольку вы можете легко стандартизировать проекты с помощью этого шаблона.

## Начало Работы

1.  **Создание репозитория:** Используйте этот шаблон
    для создания нового репозитория на GitHub.

    > Так как это **Публичный Шаблон** вы можете нажать на кнопку
    > `Use this template` для более быстрого и удобного клонирования.

1.  **Клонирование репозитория:** Клонируйте новый репозиторий
    на локальную машину.

1.  **Начните разработку:** Разработайте свой проект,
    внося изменения в соответствии с потребностями вашего проекта.

1.  **Настройка CI/CD:** Измените настройки GitHub Actions
    в соответствии с вашими требованиями к CI/CD.

## Преимущества

> [!TIP]
> Также подойдёт для приватных репозиториев! GitHub Actions используют
> **сache**, **timeout-minutes** и **фильтры путей** для сокращения времени
> выполнения, а значит, это позволит значительно уменьшить ваши расходы!

## Особенности

-   **Гибкость:** Легко настраиваемый шаблон для адаптации
    к различным типам проектов.

-   **Интеграция с Git и GitHub:** Предварительно настроенные `.gitignore`,
    `.gitattributes` и другие файлы для эффективной работы с Git и GitHub.

    -   **Conventioanl Commits, Commitlint и Commitizen:** Если вы не хотите
        каждый раз думать о том, как написать коммит,
        эти плагины помогут вам.

        > Они будут особенно полезны для команд, в которых
        > постоянно спорят о написании коммитов.

    -   **Husky & Lint Staged:** Не позволят вам отправить
        плохой код в репозиторий!

-   **Continuous Integration (CI):** Встроенная поддержка CI с помощью
    GitHub Actions для автоматической сборки и тестирования
    вашего кода при каждом изменении.

    -   **Безопасность:** Включенный рабочий процесс CodeQL для обнаружения
        и предотвращения потенциальных уязвимостей в вашем коде.

    -   **Линтеры:** Помогают поддерживать последовательный
        стиль написания кода и находить ошибки.

    -   **Тесты:** Автоматизированное тестирование поможет вам сосредоточиться
        на написании лучшего кода!

    -   **Semantic Release:** Для тех, кто устал писать журналы изменений
        и думать о том, какой номер будет у следующей версии.

-   **TypeScript:** Предварительно сконфигурированная настройка TypeScript
    для повышения надежности и удобства разработки.

    > Подробнее о [TypeScript](#javascript--typescript) в этом проекте.

-   **Боты:**

    > Как использовать [ботов](#использование-ботов).

    -   **Dependabot:** Больше не нужно тратить время на
        обновление зависимостей!

    -   **Auto Merge Bot:** Объединяет Pull Requests, созданные
        с помощью Dependabot.

    -   **Welcome Bot:** Для тех, кто создал проблему или сделал
        Pull Request в первый раз, будет отправлено благодарственное сообщение.

-   **Шаблоны Issue и Pull Request:** Ваши пользователи будут охотнее
    отправлять Issues и Pull Requests, зная,
    что у вас есть удобная форма!

## Сценарии Package.json

-   `init`: Устанавливает `node_modules` и `husky`.

-   `lint:files`: Запускает `editorconfig-checker` и
    проверяет все файлы в проекте.

	   > Также запускается с помощью рабочего процесса [`editorconfig.yml`](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/blob/main/.github/workflows/editorconfig.yml).

-   `lint:markdown`: Запускает `remark` с флагом `--quiet` и
    проверяет все markdown файлы.

	   > Также запускается с помощью рабочего процесса [`markdown.yml`](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/blob/main/.github/workflows/markdown.yml).

-   `lint:ts`: Запускает `eslint` с флагами `--fix` и
    `--no-error-on-unmatched-pattern` для всех `TypeScript` файлов.

	   > Также запускается с помощью рабочего процесса [`eslint.yml`](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/blob/main/.github/workflows/eslint.yml).

-   `test`: Запускает `Mocha` и тесты в папке `__tests__`.

    > Также запускается с помощью рабочего процесса [`mocha.yml`](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/blob/main/.github/workflows/mocha.yml).

-   `cm`: Запускает `Commitizen`, `Commitlint` и `Husky` для создания коммитов
    по стандартам **Conventional Commits**.

## Markdown

> [!TIP]
> Все находящиеся здесь markdown файлы тоже можно использовать как шаблон!

## JavaScript & TypeScript

> [!WARNING]
> Этот шаблон полностью настроен под **JavaScript ES6**.
> Также здесь используется только **TypeScript**.

## Использование Ботов

> [!WARNING]
> Чтобы использовать
> [Welcome Bot](https://github.com/apps/welcome) и
> [Auto Merge Bot](https://github.com/apps/probot-auto-merge)
> вам нужно установить их.

## Вклад

Пожалуйста, прочитайте [Contributing](CONTRIBUTING.md)
и [Code of Conduct](CODE_OF_CONDUCT.md) для получения подробной информации,
о процессе создания Pull Request'а.

## Версионирование

Для версионирования мы используем [SemVer](https://semver.org).
Доступные версии вы можете посмотреть
[здесь](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/tags).

## Авторы

См. список [Авторов](AUTHORS.md).

## Контрибьюторы

Если вы хотите что-то улучшить, то можете написать об этом
[здесь](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/issues/new/choose).

Вы также можете посмотреть список [Контрибьюторов](CONTRIBUTORS.md).

## Лицензия

Этот проект лицензируется по лицензии MIT - см. [ЛИЦЕНЗИЮ](LICENSE).

## Благодарности

Спасибо всем, кто принимает участие в развитии проекта.
