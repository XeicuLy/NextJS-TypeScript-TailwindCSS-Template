# NextJS-TypeScript-TailwindCSS-Template

## このプロジェクトについて

このプロジェクトは主に、

- NextJS
- TypeScript
- TailwindCSS

を使用した汎用的なテンプレートです。

## プロジェクトの始め方

```bash
yarn
yarn dev
```

## Node と yarn のバージョンについて

volta で固定しています。
このプロジェクトを使用する場合は [volta](https://volta.sh/) のセットアップを先に行ってください。

## 使用できる技術

| ツール名       | 説明                                                       |
| -------------- | ---------------------------------------------------------- |
| Next.js v13    | React フレームワークで、app ディレクトリは不採用           |
| TypeScript v5  | JavaScript の上位互換言語                                  |
| TailwindCSS v3 | CSS フレームワーク。daisyUI というフレームワークを使用     |
| axios          | API を叩くためのライブラリ                                 |
| Recoil         | React 状態管理ライブラリ                                   |
| Prettier       | コードフォーマッター                                       |
| ESLint         | コード書き方をチェックするツール                           |
| Storybook      | コンポーネント単位での UI デザインを確認できるツール       |
| Jest           | JavaScript のテストフレームワーク                          |
| Husky          | コミットやプッシュ時に任意のコマンドを自動実行できるツール |
| hygen          | コンポーネントジェネレーター                               |

## コンポーネント作成について

コマンドを使用して雛形を自動生成します。

```sh
yarn gen
```

コマンド実行後、対話形式で atoms,molecules,organisms,templates の分類とファイル名を聞かれるので入力してください。

## ディレクトリ構成

```sh
src/
├── components/
│    ├── atoms/
│    │    └── Example/
│    │       ├── index.tsx
│    │       ├── index.stories.tsx
│    │       └── index.test.tsx
│    ├── molecules/
│    │    └── Example/
│    │       ├── index.tsx
│    │       ├── index.stories.tsx
│    │       └── index.test.tsx
│    ├── organisms/
│    │    └── Example/
│    │       ├── index.tsx
│    │       ├── index.stories.tsx
│    │       └── index.test.tsx
│    └── templates/
│          └── Example/
│             ├── index.tsx
│             ├── index.stories.tsx
│             └── index.test.tsx
│
├── pages/
├── const/
├── libs/
├── public/
├── hooks/
├── api/
├── store/
├── styles/
└── types/
```

| ディレクトリ名                    | 説明                                                                          |
| --------------------------------- | ----------------------------------------------------------------------------- |
| components                        | UI コンポーネントの集合。                                                     |
| &nbsp;&nbsp;&nbsp;&nbsp;atoms     | 最小単位の UI コンポーネント。                                                |
| &nbsp;&nbsp;&nbsp;&nbsp;molecules | 複数の atoms から構成された UI コンポーネント。                               |
| &nbsp;&nbsp;&nbsp;&nbsp;organisms | atoms や molecules から構成された UI コンポーネント。                         |
| &nbsp;&nbsp;&nbsp;&nbsp;templates | organisms から構成された UI コンポーネントの集合。                            |
| pages                             | 表示されるページ。atoms、molecules、organisms、templates を組み合わせたもの。 |
| const                             | 定数を定義するファイル。                                                      |
| libs                              | グローバルに使用可能な汎用的なモジュール。関数など。                          |
| public                            | 公開用のファイルを格納するディレクトリ。                                      |
| hooks                             | 汎用的な React の Hooks を定義するファイル。                                  |
| api                               | API 通信をするためのファイル。                                                |
| store                             | Recoil のグローバルな状態を管理するためのファイル。                           |
| styles                            | TailwindCSS の設定ファイル。グローバルに使用可能なスタイルを集約。            |
| types                             | グローバルに使用可能な型を集約するファイル。                                  |

<hr>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
