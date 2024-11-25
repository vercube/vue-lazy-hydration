/**
 * This component allows to defer DOM hydration by vue. Whatever is wrapped with this component
 * will not be hydrated when front is loaded, instead it will be deferred.
 *
 * We have to override lazy-hydration-wrapper to backport the feature to Vue 2.
 * We also have to use `defineComponent` instead of Factory to use `setup` function.
 * `setup` is not available in Factory system, because the instance of class is created on BeforeCreate hook,
 * that executes after `setup` is called.
 *
 * This components is implementation of Vue Core functionality - hydration
 * Hydration management is available from Vue >= 3.5
 * @see: https://github.com/vuejs/core/pull/11458
 */
import { defineComponent, h, markRaw } from 'vue';
import { createHydrationBlocker } from '../utils/hydrationBlocker';
import { IHydrationProps } from '../types/types';

const LazyHydrationComponent = defineComponent<IHydrationProps>({
  name: 'CubeLazyHydration',
  /** Disable inherit attributes */
  inheritAttrs: false,
  /** Define Emits */
  emits: ['hydrated'],
  /** Define props */
  props: {
    triggerHydration: {
      type: Boolean,
      required: false,
    },
    ssrOnly: {
      type: Boolean,
      default: false,
      required: false,
    },
    whenVisible: {
      type: [Boolean, Object],
      required: false,
    },
    whenIdle: {
      type: Boolean,
      required: false,
    },
    idleTimeout: {
      type: Number,
      default: 2000,
      required: false,
    },
    onInteraction: {
      type: [Array, String],
      required: false,
    },
  },
  render() {
    const slotDefault = this?.$slots?.default?.()?.[0];

    if (!slotDefault) {
      throw new Error(
        'CubeLazyHydration component must have a single root element'
      );
    }

    if (this.$props.triggerHydration) {
      return h(slotDefault);
    }

    const comp = createHydrationBlocker(slotDefault, this.$props);

    return h(comp);
  },
});

export const LazyHydration = markRaw(LazyHydrationComponent);
