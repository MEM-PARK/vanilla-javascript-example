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

- [ ] `Alert`と`Prompt`について
  - `prompt`はユーザーとやり取りができるが、入力値は`string`形式になる。
  - `parseInt()`利用して文字列を数字に変更ができた。
    - 数字ではないことを数字に変換すると`NAN(Not A Number)`になる。
    - `isNaN()`というメソッドを使用して数字かどうかを判断できた。
- [x] `IF`文について
  ```js
  if (条件式A) {
    条件式AがTrueの場合
  } else if (条件式B) {
    条件式AがFalseで、条件式BがTrueの場合
  } else {
    条件式Aと条件式BがFalseの場合
  }
  ```
- [x] `null` vs `undefined`
- [x] `console.log()`と`console.dir()`について

### HTML の要素を選択方法

- [x] document とは
- [ ] 要素を選択する方法
  - `document.getElementByTagName()` : タグを指定して要素たちを配列形式で取得できる。タグは重複使用できるから。
  - `document.getElementById()` : ID を指定して要素一つを取得できる。ID は HTML で一つだけ使えるから。
  - `document.getElementsByClassName()` : クラスを指定して要素たちを配列形式で取得できる。クラスは重複使用できるから。
  - `document.querySelector()` : CSS のセレクターで指定して要素一つを取得することができる。
  - - `document.querySelectorAll()` : CSS のセレクターで指定して要素を配列形式で取得できる
