# Vanilla JavaScript Example

## JavaScript 世界にようこそ

- [x] README.md とは
- [x] Node.js とブラウザ上の JavaScript について
- [x] .vscode/settings.json と LiveServer と Prettier について
- [x] node_modules、package.json、package-lock.json について
  - `npm init`を使用して `Node` プロジェクトを生成したら`package.json`が出てくる。
    - `main`は入り口を表するためにある属性
    - `script`はスクリプトを実行するために定義してること
  - `npm`を利用してライブラリをインストールすると`package.json`に`devDependencies`に該当するライブラリが追加される。
    - インストールされたら、`package-lock.json`と`node_modules`が追加される。
      - `package-lock.json` : 他の環境（開発者）も統一されたバージョンを使用させるため使う。
      - `node_modules` : 必要なライブラリをインストールして保存するどころ。`package.json`と`package-lock.json`があればインストールできるので`git`管理しなくても良い。
        - `node_modules`は容量が重いので、費用が高いため載せたくない

## ブラウザ上の JavaScript について

- [x] `Alert`と`Prompt`について
  - `prompt`はユーザーとやり取りができるが、入力値は`string`形式になる。
    - [x] `null` vs `undefined`
  - `parseInt(string)`利用して文字列を数字に変更ができた。
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

- [x] `console.log()`と`console.dir()`について

### HTML の要素を選択方法

- [ ] documen
- [x] 要素を選択する方法

  - `document.getElementByTagName()` : タグを指定して要素たちを配列形式で取得できる。タグは重複使用できるから。
  - `document.getElementById()` : ID を指定して要素一つを取得できる。ID は HTML で一つだけ使えるから。
  - `document.getElementsByClassName()` : クラスを指定して要素たちを配列形式で取得できる。クラスは重複使用できるから。
  - `document.querySelector()` : CSS のセレクターで指定して要素一つを取得することができる。
  - `document.querySelectorAll()` : CSS のセレクターで指定して要素を配列形式で取得できる

- 上記のメソッドを利用して要素を取得したら、**変更できる属性を**編集できる。
  ```js
  // XXXのフォントカラーを"orange"に変更する。
  XXX.style.color = "orange";
  // 属性の内部のテキストを"テキスト"に変更する
  XXX.innerText = "テキスト";
  ```

### イベント

- [ ] `Function` とは？
- [ ] イベントとは？
  - ユーザー操作や、環境の変化などを意味
- [ ] イベントを要素に登録するためには`XXX.addEventListener()`を使用する方が良いです。
  - `addEventListener`を利用して登録したイベントは`removeEventListener`をイベントを取り消すことが可能
    - `addEventListener(type, listener)`の表記になるが、注意点としては`listener`を指定する時に`()`を入れないようにする。
      - `()`を入れたら、関数がすぐ実行される。イベントが発生した際に発火させるため`()`を入れない。
  - `onclick`でもイベントを登録することは可能が、このように登録したイベントは`removeEventListener`で消すことができない。
- [関数](https://ja.javascript.info/function-basics?afsdads)
  - [ ] 関数
  - [ ] 関数定義
  - [ ] ローカル変数
  - [ ] 外部変数
  - [ ] パラメータ
