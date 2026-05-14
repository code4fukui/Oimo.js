# Oimo.js

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Oimo.js is a lightweight 3D physics engine for JavaScript. It's a full JavaScript conversion of [OimoPhysics](https://github.com/saharan/OimoPhysics/) originally created by [Saharan](http://el-ement.com/blog/) for ActionScript 3.0.

## Demo

- [Basic test](http://lo-th.github.io/Oimo.js/examples/test_basic.html)
- [Compound test (chair)](http://lo-th.github.io/Oimo.js/examples/test_compound.html)
- [Compound test (capsule)](http://lo-th.github.io/Oimo.js/examples/test_compound2.html)
- [Ragdoll test](http://lo-th.github.io/Oimo.js/examples/test_ragdoll.html)
- [Collision test](http://lo-th.github.io/Oimo.js/examples/test_collision.html)
- [Moving test](http://lo-th.github.io/Oimo.js/examples/test_moving.html)
- [Terrain test](http://lo-th.github.io/Oimo.js/examples/test_terrain.html)
- [Car test](http://lo-th.github.io/Oimo.js/examples/test_vehicle.html)
- [Walker test](http://lo-th.github.io/Oimo.js/examples/test_walker.html)
- [Worker test](http://lo-th.github.io/Oimo.js/examples/test_worker.html)

## Features

- Lightweight and fast 3D physics engine
- Supports various collision shapes: sphere, box, cylinder, plane, particle
- Provides joint types: distance, ball-and-socket, hinge, wheel, slider, prismatic
- Enables multi-threading with Web Workers
- Includes built-in performance monitoring

## Requirements

Oimo.js requires a modern browser supporting JavaScript ES6.

## Usage

Use as ES modules:

```javascript
import * as OIMO from "https://code4fukui.github.io/Oimo.js/build/oimo.module.js";
```
or
```javascript
import * as OIMO from "https://code4fukui.github.io/Oimo.js/src/Oimo.js";
```

Alternatively, download the [minified library](http://lo-th.github.io/Oimo.js/build/oimo.min.js) and include it in your HTML:

```html
<script src="js/oimo.min.js"></script>
```

You can also install the [npm package](https://www.npmjs.com/package/oimo):

```
npm install oimo
```

See the [documentation](http://lo-th.github.io/Oimo.js/docs.html) for more details on usage.

## License

MIT License — see [LICENSE](LICENSE).