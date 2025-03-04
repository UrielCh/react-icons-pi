import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SquareHalfBottom icon from Phosphor Icons
 * @module
 */
export function PiSquareHalfBottom(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,16v64H56V56Zm-96,80v64H88V136Zm16,0h16v64H120Zm32,0h16v64H152Zm-96,0H72v64H56Zm144,64H184V136h16v64Z"}}]})(props);
}
export default PiSquareHalfBottom;
