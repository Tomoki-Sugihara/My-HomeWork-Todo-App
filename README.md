### サイト概要
#### アプリURL
https://sugihara10969.github.io/My-HomeWork-Todo-App/

![](https://i.imgur.com/KPFeWo2.png)



## 使用技術
#### 言語、フレームワーク
- HTML/CSS
- React(Hooks)
- Ruby on Rails ([別リポジトリ](https://github.com/sugihara10969/My-HomeWork-Todo-API))

#### ライブラリ、パッケージ
- Redux
- axios
- lodash
- Styled-Components
- Styled-Media-Query
- Material-UI

## 機能一覧
- タスク、リストのCRUD
- リストごとにタスクの表示
- 上記機能のデータ変更をRailsと非同期通信
- 初回更新時にデータをGET

## 工夫した点
- Hooksの活用（useState, useReducer, useContext, useEffect）
- リスト名の横に未完了のタスクの数を表示
- 重要タスクがある場合、数字を赤にする
- 文字数が枠を超えた際、スタイルが崩れないように「...」を用いて省略
- Material-UIやStyled-Componetnsを用いた統一的なデザイン
- 色の情報を用途に応じて定数化
- 初回更新時の非同期処理が完了するまでローディングアイコンを表示
- map、filter、someなどを用いた配列（オブジェクト）処理
