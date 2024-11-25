<p align="center">
  <a href="https://github.com/OskarLebuda/vue-lazy-hydration" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://github.com/OskarLebuda/vue-lazy-hydration/blob/main/.github/assets/logo.png?raw=true" alt="Vercube logo">
  </a>
</p>
<br/>
<p align="center">
  <a href="https://www.npmjs.com/package/@vercube/vuenuxt-lazy-hydration"><img src="https://badgen.net/npm/v/@vercube/vue-lazy-hydration" alt="npm package"></a>
</p>
<br/>

# `@vercube/vue-lazy-hydration`

> Lazy Hydration of Server-Side Rendered for Vue 3

## 👉 [Demo with Nuxt on StackBlitz](https://stackblitz.com/edit/vercube-nuxt-lazy-hydration)

## Installation

```shell
# or npm / yarn
$ pnpm add @vercube/vue-lazy-hydration
```

## Usage
For Vue applications, you can register `LazyHydration` either globally or locally within your components.

## Global Registration
You can register LazyHydration globally as follows:

```typescript
import { createSSRApp } from 'vue';
import { LazyHydration } from '@vercube/vue-lazy-hydration';

const app = createSSRApp({});

app.component('LazyHydration', LazyHydration);
```

## Local Registration
Alternatively, you can import LazyHydration directly into your Vue components like this:

```html
<script setup lang="ts">
  import { LazyHydration } from '@vercube/vue-lazy-hydration';
</script>
```

## License

[MIT](http://opensource.org/licenses/MIT)