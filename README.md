# NextJS-TypeScript-TailwindCSS-Template

## このプロジェクトについて

このプロジェクトは、

- NextJS
- TypeScript
- TailwindCSS

を使用した汎用的なテンプレートです。

基本的には`yarn`を使ってください。

## 使用技術

- Next.js v13
  - app ディレクトリ不採用
- TypeScript
  - JavaScript 採用化
- TailwindCSS
- axios
- Recoil
- Prettier
- ESLint
- Storybook
- Jest
- Husky
- scaffdog

がデフォルトで使えるようになっています。

## Node と yarn のバージョンについて

volta で固定しています。
このプロジェクトを使用する場合は volta のセットアップを先に行ってください。

## プロジェクトの始め方

```bash
yarn
yarn dev
```

## コンポーネント作成について

コマンドを使用して雛形を自動生成します。

```sh
# components/atomsに作りたい場合
yarn gen:atoms
# components/moleculesに作りたい場合
yarn gen:mole
```

コマンド実行後、対話形式でファイル名を聞かれるので入力してください。

## ディレクトリ構成

```sh
src/
├── components/
│   ├── atoms/
│   │   └── Example/
│   │       ├── index.tsx
│   │       ├── index.stories.tsx
│   │       └── index.test.tsx
│   └── molecules/
│        └── Example/
│            ├── index.tsx
│            ├── index.stories.tsx
│            └── index.test.tsx
│
├── pages/
├── const/
├── libs/
│   └── packages/
├── public/
├── hooks/
├── repositories/
├── store/
├── styles/
└── types/
```

- components
  - atoms
    - 原子コンポーネント
  - molecules
    - 分子コンポーネント
- pages
  - 表示されるメインページ用
- const
  - 定数
- libs
  - グローバルに使用可能な汎用モジュール
  - 外部のパッケージをラップしたものは packages 配下に。
    - `axios.ts`など
- public
  - 公開用の assets 系ファイル
- hooks
  - 汎用的な hooks
- repositories
  - API 用のモジュール
- store
  - Recoil 用のモジュール
  - グローバルに使用可能な state を集約
- styles
  - TailwindCSS 用の設定ファイル
  - グローバルに使用可能なスタイルを集約
- types
  - グローバルに使用可能な型を集約

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
