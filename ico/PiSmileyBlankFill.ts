import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SmileyBlankFill icon from Phosphor Icons
 * @module
 */
export function PiSmileyBlankFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24ZM92,120a12,12,0,1,1,12-12A12,12,0,0,1,92,120Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,120Z"}}]})(props);
}
export default PiSmileyBlankFill;
