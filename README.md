# PitchCount

1球ずつタップして数える、少年野球の無料の球数カウンター。少年野球の現場で使える、無料・登録なしの道具 **DugoutTools** のひとつです。

- タップで1球ずつ数える（上限の8割で黄色、上限で赤。振動でも知らせる）
- 登板可否ボード：投手ごとに「今日あと何球」「次はいつ・何球投げられるか」
- 団体の球数ルールを選ぶだけ：学童（全軟連）、中学軟式（全軟連 少年部）、高校（高野連）、ボーイズ、リトルリーグ（休養日つき）、自分で設定
- 試合の球数をLINEで共有
- AIに起用を相談：予定の試合と残り球数から、ChatGPT・Claudeなどに貼る相談文を作る
- 登録なし。データは端末のブラウザの中だけに保存

公開ページ：https://yatti3g-byte.github.io/PitchCount/

## ファイル

- `index.html` アプリ本体（1ファイルで動く）
- `help.html` 使い方ページ
- `sw.js` 一度開いたら電波がなくても開けるようにする
- `og.jpg` リンクを共有したときのプレビュー画像
- `favicon.svg` ブラウザのタブのアイコン（DugoutToolsのロゴ。PitchCountは二塁が光る）
- `apple-touch-icon.png` iPhoneで「ホーム画面に追加」したときのアイコン
- `sitemap.xml` Google Search Console に登録するサイトマップ

## DugoutToolsのアプリ

少年野球の現場で使える、無料・登録なしの道具

- [TapScore](https://yatti3g-byte.github.io/TapScore/) 1球ずつタップして記録するスコアブック
- PitchCount 球数制限に合わせた球数カウンター（このリポジトリ）
- [FormNote](https://yatti3g-byte.github.io/form-note/) コマ送りと角度の測定で、フォームを確認
- [ShotFind](https://yatti3g-byte.github.io/ShotFind/) チームの試合写真から、わが子の写真を探す

DugoutToolsの応援：https://buymeacoffee.com/formnote
