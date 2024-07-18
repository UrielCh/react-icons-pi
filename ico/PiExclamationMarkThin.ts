import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ExclamationMarkThin icon from Phosphor Icons
 * @module
 */
export function PiExclamationMarkThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M140,200a12,12,0,1,1-12-12A12,12,0,0,1,140,200Zm-12-44a4,4,0,0,0,4-4V48a4,4,0,0,0-8,0V152A4,4,0,0,0,128,156Z"}}]})(props);
}
export default PiExclamationMarkThin;
