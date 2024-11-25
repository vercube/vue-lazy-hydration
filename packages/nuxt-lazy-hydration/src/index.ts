import { defineNuxtModule, addComponent, addImportsSources } from '@nuxt/kit';
import type { ModuleOptions } from '@nuxt/schema';

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-lazy-hydrate',
    configKey: 'lazyHydrate',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  setup() {
    // Register the component globally
    addComponent({
      name: 'NuxtLazyHydrate',
      export: 'LazyHydration',
      filePath: '@cube/vue-lazy-hydration',
    });

    // Add the composable to the global imports
    addImportsSources({
      imports: ['useLazyHydration'],
      from: '@cube/vue-lazy-hydration',
    });
  },
});
