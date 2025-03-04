import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * NumberOneThin icon from Phosphor Icons
 * @module
 */
export function PiNumberOneThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M140,48V208a4,4,0,0,1-8,0V55.06L98.06,75.43a4,4,0,0,1-4.12-6.86l40-24A4,4,0,0,1,140,48Z"}}]})(props);
}
export default PiNumberOneThin;
