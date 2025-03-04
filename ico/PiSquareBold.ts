import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SquareBold icon from Phosphor Icons
 * @module
 */
export function PiSquareBold(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204Z"}}]})(props);
}
export default PiSquareBold;
