import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PresentationThin icon from Phosphor Icons
 * @module
 */
export function PiPresentationThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,44H132V24a4,4,0,0,0-8,0V44H40A12,12,0,0,0,28,56V176a12,12,0,0,0,12,12H87.68l-26.8,33.5a4,4,0,1,0,6.24,5L97.92,188h60.16l30.8,38.5a4,4,0,0,0,6.24-5L168.32,188H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44Zm4,132a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4Z"}}]})(props);
}
export default PiPresentationThin;
