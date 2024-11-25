<p align="center">
  <a href="https://github.com/OskarLebuda/vue-lazy-hydration" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://github.com/OskarLebuda/vue-lazy-hydration/blob/main/.github/assets/logo.png?raw=true" alt="Vercube logo">
  </a>
</p>
<br/>
<p align="center">
  <a href="https://www.npmjs.com/package/@vercube/vue-lazy-hydration"><img src="https://badgen.net/npm/v/@vercube/vue-lazy-hydration" alt="npm package"></a>
</p>
<br/>

# Vue Lazy Hydration
> Lazy Hydration of Server-Side Rendered Vue.js v3 Components

## Introduction
This project focuses on LazyHydration for Vue 3 and Nuxt versions 3 and above, designed to enhance the hydration process in server-side rendered applications using Vue.

## Inspiration
The initiative was inspired by [vue3-lazy-hydration](https://github.com/freddy38510/vue3-lazy-hydration), but unlike it, this project leverages the new Hydration API introduced in Vue, which can be found here: [Vue Hydration API](https://github.com/vuejs/core/pull/11458). Our project is distinctive as it integrates this new API to optimize performance further without relying on any external dependencies.

## Installation

```bash
# or npm or yarn
$ pnpm add @vercube/vue-lazy-hydration

# for Nuxt use
$ pnpm add @vercube/nuxt-lazy-hydration
```


This project can be integrated into both Nuxt and Vue applications. Below are the installation instructions for each framework.

### Nuxt

To use LazyHydration with Nuxt, add the module to your `nuxt.config.ts` file as shown below. This will make the component and all described composables globally available in your project.

```typescript
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: ['@vercube/nuxt-lazy-hydration'],
});
```

### Vue

For Vue applications, you can register `LazyHydration` either globally or locally within your components.

#### Global Registration
You can register LazyHydration globally as follows:

```typescript
import { createSSRApp } from 'vue';
import { LazyHydration } from '@vercube/vue-lazy-hydration';

const app = createSSRApp({});

app.component('LazyHydration', LazyHydration);
```

#### Local Registration
Alternatively, you can import LazyHydration directly into your Vue components like this:

```html
<script setup lang="ts">
  import { LazyHydration } from '@vercube/vue-lazy-hydration';
</script>
```

## License

[MIT](http://opensource.org/licenses/MIT)