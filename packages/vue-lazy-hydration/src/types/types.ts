import { hydrateOnInteraction } from 'vue';

export interface IHydrationProps {
  /**
   * Trigger hydration strategy
   * This is useful for components that should only be hydrated when the user interacts with them.
   */
  triggerHydration?: boolean;

  /**
   * SSR only hydration strategy
   * This is useful for components that should only be hydrated on the server and not on the client.
   */
  ssrOnly?: boolean;

  /**
   * Hydrate on visible strategy
   * This is useful for components that should only be hydrated when they become visible on the screen.
   */
  whenVisible?: boolean | IntersectionObserverInit;

  /**
   * Hydrate on idle strategy
   * This is useful for components that should only be hydrated when the user is idle.
   */
  whenIdle?: boolean;

  /**
   * The idle timeout in milliseconds.
   */
  idleTimeout?: number;

  /**
   * Hydrate on interaction strategy
   * This is useful for components that should only be hydrated when the user interacts with them.
   */
  onInteraction?: Parameters<typeof hydrateOnInteraction>[0];
}
