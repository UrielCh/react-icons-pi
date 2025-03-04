import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ExcludeFill icon from Phosphor Icons
 * @module
 */
export function PiExcludeFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M240,160A80,80,0,0,1,81.36,174.64a80,80,0,0,0,93.28-93.28A80,80,0,0,1,240,160ZM160,80a80.29,80.29,0,0,1,14.64,1.36,80,80,0,1,0-93.28,93.28A80,80,0,0,1,160,80Z"}}]})(props);
}
export default PiExcludeFill;
