import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PlaceholderThin icon from Phosphor Icons
 * @module
 */
export function PiPlaceholderThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,12V206.34L49.66,44H208A4,4,0,0,1,212,48ZM44,208V49.66L206.34,212H48A4,4,0,0,1,44,208Z"}}]})(props);
}
export default PiPlaceholderThin;
