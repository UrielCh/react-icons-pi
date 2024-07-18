import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DotOutlineFill icon from Phosphor Icons
 * @module
 */
export function PiDotOutlineFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z"}}]})(props);
}
export default PiDotOutlineFill;
