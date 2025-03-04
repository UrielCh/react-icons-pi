import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * UnionLight icon from Phosphor Icons
 * @module
 */
export function PiUnionLight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M206,64v80a78,78,0,0,1-156,0V64a6,6,0,0,1,12,0v80a66,66,0,0,0,132,0V64a6,6,0,0,1,12,0Z"}}]})(props);
}
export default PiUnionLight;
