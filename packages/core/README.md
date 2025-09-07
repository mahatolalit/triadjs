


# TriadJS Core

> **A unified wrapper for Three.js, React Three Fiber, and Drei — all in one import.**

---


## About

**TriadJS Core** is a unified wrapper npm package for [Three.js](https://threejs.org/), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/), and [Drei](https://docs.pmnd.rs/drei/). It provides a single, easy-to-use API for building complex, interactive 3D applications in React, supporting both declarative (JSX) and imperative (raw Three.js) approaches. No more juggling multiple imports or boilerplate setup—TriadJS Core streamlines your 3D workflow.

---

## Features

- **All-in-One Install:** Installs Three.js, R3F, Drei, and React automatically.
- **Unified Import:** Access Three.js, R3F, and Drei from a single package.
- **Declarative + Imperative:** Use React-style JSX and drop raw Three.js objects into scenes with custom hooks.
- **Animation Helpers:** Simplified animation with `useAnimate` (wrapper around R3F's `useFrame`).
- **Scene Utilities:** Functions like `addToScene` make object management straightforward.
- **Drei Integration:** Use helpers like `<drei.OrbitControls />`, `<drei.Environment />`, and `<drei.Text />` without extra imports.
- **React-Friendly:** Fully compatible with React state, hooks, and lifecycle.

---

## Installation

```sh
npm install triadjs-core
```

---


## Usage Example

```tsx
import { fiber, drei, useAnimate } from 'triadjs-core';

function RotatingBox() {
   const ref = React.useRef<any>(null);
   useAnimate(() => {
      if (ref.current) ref.current.rotation.y += 0.01;
   });
   return (
      <mesh ref={ref} position={[0, 0, 0]}>
         <boxGeometry args={[2, 2, 2]} />
         <meshStandardMaterial color="orange" />
      </mesh>
   );
}

function App() {
   return (
      <fiber.Canvas camera={{ position: [0, 0, 5] }}>
         <drei.OrbitControls />
         <ambientLight />
         <pointLight position={[10, 10, 10]} />
         <RotatingBox />
      </fiber.Canvas>
   );
}
```

---


## API

- `three` — All Three.js exports
- `fiber` — All React Three Fiber exports (including `Canvas`)
- `drei` — All Drei helpers/components
- `useThreeObject(createObject, deps)` — Imperatively add a raw Three.js object to the scene
- `useAnimate(callback)` — Animation helper (wrapper around R3F's `useFrame`)
- `addToScene(object, add)` — Imperatively add/remove objects to the scene

### Example: Imperative Three.js Object

```tsx
import { fiber, useThreeObject } from 'triadjs-core';

function CustomObject() {
   const ref = useThreeObject(() => new fiber.three.Mesh(
      new fiber.three.BoxGeometry(1, 1, 1),
      new fiber.three.MeshStandardMaterial({ color: 'hotpink' })
   ), []);
   return null; // Object is managed imperatively
}
```

---


## License

MIT

---



## Contributions

Contributions, issues, and feature requests are welcome!

Repo: [https://github.com/mahatolalit/triadjs](https://github.com/mahatolalit/triadjs)

---

## Acknowledgements

- [Three.js](https://threejs.org/) — The core WebGL 3D engine
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) — React renderer for Three.js by [pmndrs](https://github.com/pmndrs)
- [Drei](https://github.com/pmndrs/drei) — Useful helpers and abstractions for R3F by [pmndrs](https://github.com/pmndrs)

---

<div align="right">
With love, <a href="https://github.com/mahatolalit" target="_blank">@draky</a>
</div>
