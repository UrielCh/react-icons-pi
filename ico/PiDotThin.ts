import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DotThin icon from Phosphor Icons
 * @module
 */
export function PiDotThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Z"}}]})(props);
}
export default PiDotThin;
