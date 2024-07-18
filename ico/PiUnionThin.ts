import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * UnionThin icon from Phosphor Icons
 * @module
 */
export function PiUnionThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M204,64v80a76,76,0,0,1-152,0V64a4,4,0,0,1,8,0v80a68,68,0,0,0,136,0V64a4,4,0,0,1,8,0Z"}}]})(props);
}
export default PiUnionThin;
