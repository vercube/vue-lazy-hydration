import { defineAsyncComponent, VNode } from 'vue';
import { getHydrationStrategy } from './hydrationStrategies';
import type { IHydrationProps } from '../types/types';

/**
 * Creates a hydration blocker component.
 * @param {VNode} slot - The element to render.
 * @returns {} The async component definition.
 */
export function createHydrationBlocker(
  slot: VNode,
  props: IHydrationProps
): ReturnType<typeof defineAsyncComponent> {
  return defineAsyncComponent({
    loader: () => new Promise<VNode>((resolve) => resolve(slot)),
    hydrate: getHydrationStrategy(props),
  });
}
