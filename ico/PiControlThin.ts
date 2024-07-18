import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ControlThin icon from Phosphor Icons
 * @module
 */
export function PiControlThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M202.83,122.83a4,4,0,0,1-5.66,0L128,53.66,58.83,122.83a4,4,0,0,1-5.66-5.66l72-72a4,4,0,0,1,5.66,0l72,72A4,4,0,0,1,202.83,122.83Z"}}]})(props);
}
export default PiControlThin;
