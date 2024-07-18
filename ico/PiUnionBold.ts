import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * UnionBold icon from Phosphor Icons
 * @module
 */
export function PiUnionBold(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M212,64v80a84,84,0,0,1-168,0V64a12,12,0,0,1,24,0v80a60,60,0,0,0,120,0V64a12,12,0,0,1,24,0Z"}}]})(props);
}
export default PiUnionBold;
