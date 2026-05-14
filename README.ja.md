# Oimo.js

Oimo.jsはJavaScript向けの軽量な3D物理エンジンです。これは、[Saharan](http://el-ement.com/blog/)氏がActionScript 3.0向けに開発した[OimoPhysics](https://github.com/saharan/OimoPhysics/)をJavaScriptへ完全に移植したものです。

## デモ

- [基本テスト](http://lo-th.github.io/Oimo.js/examples/test_basic.html)
- [複合形状テスト（椅子）](http://lo-th.github.io/Oimo.js/examples/test_compound.html)
- [複合形状テスト（カプセル）](http://lo-th.github.io/Oimo.js/examples/test_compound2.html)
- [ラグドールテスト](http://lo-th.github.io/Oimo.js/examples/test_ragdoll.html)
- [衝突テスト](http://lo-th.github.io/Oimo.js/examples/test_collision.html)
- [移動テスト](http://lo-th.github.io/Oimo.js/examples/test_moving.html)
- [地形テスト](http://lo-th.github.io/Oimo.js/examples/test_terrain.html)
- [車両テスト](http://lo-th.github.io/Oimo.js/examples/test_vehicle.html)
- [歩行テスト](http://lo-th.github.io/Oimo.js/examples/test_walker.html)
- [Workerテスト](http://lo-th.github.io/Oimo.js/examples/test_worker.html)

## 特徴

- 軽量で高速な3D物理エンジン
- 多様な衝突形状をサポート: 球、ボックス、円柱、平面、パーティクル
- 様々なジョイントタイプを提供: 距離、ボールアンドソケット、ヒンジ、ホイール、スライダー、プリズマティック
- Web Workerによるマルチスレッド処理に対応
- 組み込みのパフォーマンス監視機能を搭載

## 必要条件

Oimo.jsは、JavaScript ES6をサポートするモダンブラウザを必要とします。

## 使い方

ESモジュールとして使用する場合:

```javascript
import * as OIMO from "https://code4fukui.github.io/Oimo.js/build/oimo.module.js";
```
または
```javascript
import * as OIMO from "https://code4fukui.github.io/Oimo.js/src/Oimo.js";
```

または、[圧縮済みライブラリ](http://lo-th.github.io/Oimo.js/build/oimo.min.js)をダウンロードしてHTMLに読み込むこともできます:

```html
<script src="js/oimo.min.js"></script>
```

[npmパッケージ](https://www.npmjs.com/package/oimo)としてインストールすることも可能です:

```
npm install oimo
```

使用方法の詳細については、[ドキュメント](http://lo-th.github.io/Oimo.js/docs.html)を参照してください。

## ライセンス

MIT License — [LICENSE](LICENSE) を参照してください。
