import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SquareHalfBold icon from Phosphor Icons
 * @module
 */
export function PiSquareHalfBold(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M200,36H56A20,20,0,0,0,36,56V200a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-60,64h56v16H140Zm0,40h56v16H140Zm56-64H140V60h56ZM60,60h56V196H60Zm80,136V180h56v16Z"}}]})(props);
}
export default PiSquareHalfBold;
