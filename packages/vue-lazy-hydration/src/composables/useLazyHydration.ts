import {
  AsyncComponentLoader,
  defineAsyncComponent,
  type Component,
} from 'vue';
import { IHydrationProps } from '../types/types';
import { getHydrationStrategy } from '../utils/hydrationStrategies';

/**
 * A composable function that returns a lazy hydrated Vue component.
 *
 * @template T - The type of the component.
 * @param {AsyncComponentLoader<T>} loader - The async component loader function.
 * @param {IHydrationProps} props - The hydration properties.
 * @returns {ReturnType<typeof defineAsyncComponent>} The lazy hydrated component.
 */
export function useLazyHydration<T extends Component>(
  loader: AsyncComponentLoader<T>,
  props: IHydrationProps
): ReturnType<typeof defineAsyncComponent> {
  return defineAsyncComponent({
    loader,
    hydrate: getHydrationStrategy(props),
  });
}
