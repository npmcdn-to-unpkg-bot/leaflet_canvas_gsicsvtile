# Canvas を利用した地理院標高タイルの描画 サンプル

## 概要

国土地理院が提供している標高タイル http://maps.gsi.go.jp/development/ichiran.html#dem-1 を、
Leaflet の TileLayer.Canvas http://leafletjs.com/reference.html#tilelayer-canvas を利用して描画するサンプルプログラム。

国土地理院は色別標高図 http://maps.gsi.go.jp/development/ichiran.html#relief をタイルとして提供しているが、
生データが公開されている利点を活かし、ニーズに応じて色を変えたり、ダイナミックレンジを変えたり
(例えば 標高 100m 〜 500m の範囲だけ色の変化を大きくしたり) できたら便利ではと考え、作成したもの。

## サンプルサイト

https://kskinoue0612.github.io/leaflet_canvas_gsicsvtile/ でご確認下さい。

## 使い方

表示直後は、「標準」の設定で描画しています。画面右上の「設定」ボタンから、以下の3種類の中からカラーマップを選べます。

- 標準：地理院の色別標高図の色を模したもの (だけどだいぶ違う気がする)
- グレースケール：標高 0m = 黒, 1000m = 白になるようにグレースケール表示したもの
- グレースケール (湾岸部拡大)：標高 0m = 黒,  256m = 白になるようにグレースケール表示したもの。湾岸部の標高の低いところの変化がハッキリ見える代わり、標高 256m 以上のところは白に潰れています。

## 今後の課題

- インターフェースを拡張し、指定できるカラーマップの自由度を増やす。
  - 色の種類を変更可能にする。
  - min, max の標高を指定できるようにする。
- 陰影をつけられるようにする。
