import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PauseCircleFill icon from Phosphor Icons
 * @module
 */
export function PiPauseCircleFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24ZM112,160a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z"}}]})(props);
}
export default PiPauseCircleFill;
