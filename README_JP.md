# レポテンプレート

![ESM Only](https://img.shields.io/badge/ESM-only-gray?labelColor=fe0)
![TypeScript Only](https://img.shields.io/badge/TypeScript-only-gray?labelColor=06f)
![CodeQL](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/conqueror-repo-template/codeql.yml?label=CodeQL)
![Test](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/conqueror-repo-template/mocha.yml?label=Mocha)
![EditorConfig](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/conqueror-repo-template/editorconfig.yml?label=EditorConfig)
![Markdown](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/conqueror-repo-template/markdown.yml?label=Markdown)
![ESLint](https://img.shields.io/github/actions/workflow/status/Conqueror-Site-Builder/conqueror-repo-template/eslint.yml?label=ESLint)

翻訳:
[English](README.md)、[Русский](README_RU.md)、[Українська](README_UA.md)

## 目次

-   [始めるにあたって](#始めるにあたって)
-   [特徴](#特徴)
-   [JavaScript & TypeScript](#javascript--typescript)
-   [ボットの使用](#ボットの使用)
-   [貢献する](#貢献する)
-   [バージョン管理](#バージョン管理)
-   [著者](#著者)
-   [投稿者](#投稿者)
-   [ライセンス](#ライセンス)
-   [謝辞](#謝辞)

## **リポジトリ作成で時間を浪費するのはやめましょう！**

**Conqueror Repo Template** はテンプレートリポジトリです。
ツールや開発のベストプラクティスが用意されています。
このテンプレートには、**Git**と統合するためのすぐに使えるソリューションが含まれています、
**Git**、 **GitHub**、 **CI/CD**、 **Dependabot**、 **TypeScript**、 **Mocha**、
**Commitizen**、 **Commitlint**、 **Semantic Release**、 **ESLint**、 **Remark**、
**Behavior Bot**、 **Auto Merge Bot**、 **EditorConfig**、 **Issue Templates**、
**Husky & Lint Staged** and **CodeQL**.

> [!TIP]
> このソリューションはチームに非常に適しています、
> このテンプレートを使って簡単にプロジェクトを標準化できるからです。

## 始めるにあたって

1.  **リポジトリの作成:** このテンプレートを使って
    を使って GitHub に新しいリポジトリを作成しましょう。

1.  **リポジトリのクローン:** 新しいリポジトリをローカルマシンにクローンします。

1.  **開発開始:** プロジェクトを開発します、
    プロジェクトのニーズに応じて変更を加えます。

1.  **CI/CD のカスタマイズ:** GitHub Actions の設定を変更します。
    を CI/CD の要件に合わせて変更します。

## 特徴

-   **柔軟性:** 異なるタイプのプロジェクトに適応するために、簡単にカスタマイズ可能なテンプレート
    様々なタイプのプロジェクトに対応できます。

-   **Git や GitHub との統合:** `.gitignore`、`.gitattributes`、
    `.gitignore`、`.gitattributes` など、Git や GitHub
    と効率的に連携するためのファイルがあらかじめ設定されています。

-   **継続的インテグレーション(CI):** GitHub Actions によるCIサポートが組み込まれています。
    により、コードを変更するたびに自動的にビルドとテストを行います。

-   **TypeScript:** 事前に設定された TypeScript のカスタマイズ。
    をカスタマイズすることで、信頼性と開発のしやすさを向上させることができます。

-   **CodeQL:** CodeQL ワークフローを有効にすることで、コードの潜在的な脆弱性を検出し、予防することができます。
    し、コードの潜在的な脆弱性を防ぎます。

-   **リンター:** 一貫したコード記述スタイルの維持に役立つ
    バグを見つける。

-   **Conventional Commits、Commitlint、Commitizen:**
    コードの書き方を毎回考える必要はありません。毎回コミットの書き方を考えるのは面倒だ、
    これらのプラグインが役に立ちます。

    > これらのプラグインは、コミットの書き方を毎回考えるのが面倒なチームに特に役立ちます。

## JavaScript & TypeScript

> [!WARNING]
> このテンプレートは **JavaScript ES6** 用に完全にカスタマイズされています。
> また、ここでは **TypeScript** のみを使用しています。

## ボットの使用

ボットを使うには
[Behavior Bot](https://github.com/apps/welcome) と
[Auto Merge Bot](https://github.com/apps/probot-auto-merge)
をインストールする必要があります。

## 貢献する

[コントリビューティング](CONTRIBUTING.md)
と [Code of Conduct](CODE_OF_CONDUCT.md) を読んでください、をご覧ください。

## バージョン管理

バージョン管理には [SemVer](https://semver.org) を使用しています。
利用可能なバージョンは
[こちら](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/tags)
をご覧ください。

## 著者

の一覧は [著者](AUTHORS.md) を参照してください。

## 投稿者

何かを改善したいなら、それについて書くことができる
[ここ](https://github.com/Conqueror-Site-Builder/conqueror-repo-template/issues/new/choose)。

[貢献者](CONTRIBUTORS.md) のリストも見ることができます。

## ライセンス

このプロジェクトのライセンスはMITライセンスです。[ライセンス](LICENSE) を参照してください。

## 謝辞

このプロジェクトの開発に関わったすべての人に感謝します。
