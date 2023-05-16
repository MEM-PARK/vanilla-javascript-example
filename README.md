# Vanilla JavaScript Example

## JavaScript 世界にようこそ

- [x] README.md とは
- [x] Node.js とブラウザ上の JavaScript について
- [x] .vscode/settings.json と LiveServer と Prettier について
- [ ] node_modules、package.json、package-lock.json について
  - `npm init`を使用して Node プロジェクトを生成したら`package.json`が出てくる。
  - `npm`を利用してライブラリをインストールすると`package.json`に`devDependencies`に該当するライブラリが追加される。
    - インストールされたら、`package-lock.json`と`node-modules/`が追加される。
      - `package-lock.json` : 他の環境（開発者）も統一されたバージョンを使用させるため使う。
      - `node-modules` : 必要なライブラリをインストールして保存するどころ。`package.json`と`package-lock.json`があればインストールできるので`git`管理しなくても良い。

## ブラウザ上の JavaScript について

- [x] `Alert`と`Prompt`について
