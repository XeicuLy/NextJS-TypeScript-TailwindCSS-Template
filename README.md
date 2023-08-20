# NextJS-TypeScript-TailwindCSS-Template

## このプロジェクトについて

このプロジェクトは主に、

- NextJS
- TypeScript
- TailwindCSS

を使用した汎用的なテンプレートです。

## プロジェクトの始め方

```bash
yarn install
yarn dev
```

## Node と yarn のバージョンについて

volta で固定しています。
このプロジェクトを使用する場合は [volta](https://volta.sh/) のセットアップを先に行ってください。

詳しいことはこちらの記事を御覧ください
https://zenn.dev/xeiculy/articles/03871845342228

## 使用できる技術

| ツール名    | 説明                                                       |
| ----------- | ---------------------------------------------------------- |
| Next.js app | React フレームワークで、app ディレクトリ採用               |
| TypeScript  | JavaScript の上位互換言語                                  |
| TailwindCSS | CSS フレームワーク。HeadlessUI と併用                      |
| Prettier    | コードフォーマッター                                       |
| ESLint      | コード書き方をチェックするツール                           |
| Jest        | JavaScript のテストフレームワーク                          |
| Husky       | コミットやプッシュ時に任意のコマンドを自動実行できるツール |
| hygen       | コンポーネントジェネレーター                               |

## コンポーネント作成について

コマンドを使用して雛形を自動生成します。

```sh
yarn gen
```

コマンド実行後、対話形式でコンポーネントの分類とファイル名を聞かれるので入力してください。

## ディレクトリ構成

```sh
app/
├── layout.tsx
├── page.tsx
├── components/
│    ├── feature/
│    │    └── Sxample/
│    │       ├── Sample.tsx
│    │       └── Sample.test.tsx
│    └── ui/
│          └── Sample/
│             ├── Sample.tsx
│             └── Sample.test.tsx
├── libs/
├── public/
├── styles/
└── types/
```

| ディレクトリ名                     | 説明                                                           |
| ---------------------------------- | -------------------------------------------------------------- |
| app                                | pages ディレクトリのイメージ                                   |
| &nbsp;&nbsp;&nbsp;&nbsp;layout.tsx | 共通のレイアウトファイル                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;page.tsx   | ルーティング対象ファイル                                       |
| components                         | コンポーネントの集合                                           |
| &nbsp;&nbsp;&nbsp;&nbsp;feature    | ボタンなどのUIコンポーネントの以外集合                         |
| &nbsp;&nbsp;&nbsp;&nbsp;ui         | ボタンなどのUIコンポーネントの集合                             |
| libs                               | グローバルに使用可能な汎用的なモジュール。関数など             |
| public                             | 公開用のファイルを格納するディレクトリ                         |
| styles                             | TailwindCSS のファイルと、グローバルに使用可能なスタイルを集約 |
| types                              | グローバルに使用可能な型を集約するファイル                     |

<hr>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
