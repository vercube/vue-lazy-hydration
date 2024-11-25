<p align="center">
  <a href="https://github.com/OskarLebuda/vue-lazy-hydration" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://github.com/OskarLebuda/vue-lazy-hydration/blob/main/.github/assets/logo.png?raw=true" alt="Vercube logo">
  </a>
</p>
<br/>
<p align="center">
  <a href="https://www.npmjs.com/package/@vercube/nuxt-lazy-hydration"><img src="https://badgen.net/npm/v/@vercube/nuxt-lazy-hydration" alt="npm package"></a>
</p>
<br/>

# `@vercube/nuxt-lazy-hydration`

> Lazy Hydration of Server-Side Rendered for Nuxt 3

## 👉 [Demo with Nuxt on StackBlitz](https://stackblitz.com/edit/vercube-nuxt-lazy-hydration)

## Installation

```shell
# or npm / yarn
$ pnpm add @vercube/nuxt-lazy-hydration
```

Add to `modules` in `nuxt.config.ts`:

```typescript
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: ['@vercube/nuxt-lazy-hydration'],
});
```

## Usage

To use `NuxtLazyHydration` just wrap your component with wrapper.
```html
<template>
  <NuxtLazyHydration whenVisible>
    <p>Hydrated when component will be visible on screen<p>
  </NuxtLazyHydration>
</template>
```

You can also use it with composable
```html
<template>
  <NeverHydratedComponent/>
</template>

<script lang="ts" setup>
  const NeverHydratedComponent = useLazyHydration(
    () => import('./SomeComponent.vue'),
    { ssrOnly: true },
  );

</script>

```

## Props
You can find all possible `props` [here](https://github.com/OskarLebuda/vue-lazy-hydration/blob/main/packages/vue-lazy-hydration/src/types/types.ts#L3)

## License

[MIT](http://opensource.org/licenses/MIT)