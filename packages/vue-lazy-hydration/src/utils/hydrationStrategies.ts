import {
  hydrateOnIdle,
  hydrateOnInteraction,
  hydrateOnMediaQuery,
  hydrateOnVisible,
  type HydrationStrategy,
} from 'vue';
import { IHydrationProps } from '../types/types';

/**
 * Get the hydration strategy based on the hydration properties.
 *
 * @param {IHydrationProps} props - The hydration properties.
 * @returns {HydrationStrategy} The hydration strategy.
 */
export function getHydrationStrategy(
  props: IHydrationProps
): HydrationStrategy {
  // Hydrate on idle strategy
  // This is useful for components that should only be hydrated when the user is idle
  // e.g. when the user is not interacting with the component
  if (props.whenIdle) {
    return hydrateOnIdle(props.idleTimeout);
  }

  // Hydrate on visible strategy
  // This is useful for components that should only be hydrated when they become visible
  // e.g. when the user scrolls to the component
  if (props.whenVisible) {
    return hydrateOnVisible(
      typeof props.whenVisible !== 'boolean' ? props.whenVisible : undefined
    );
  }

  // Hydrate on interaction strategy
  // This is useful for components that should only be hydrated when the user interacts with them
  // e.g. when the user hovers over the component
  if (props.onInteraction) {
    return hydrateOnInteraction(
      Array.isArray(props.onInteraction)
        ? props.onInteraction
        : [props.onInteraction]
    );
  }

  // SSR only hydration strategy
  // This is useful for components that should only be hydrated on the server
  // and not on the client
  if (props.ssrOnly) {
    return hydrateOnMediaQuery('width >= 999999999999999px');
  }

  // Default hydration strategy
  return (hydrate, forEach) => () => {
    forEach(hydrate);
  };
}
