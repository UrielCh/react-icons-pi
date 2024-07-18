import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DotDuotone icon from Phosphor Icons
 * @module
 */
export function PiDotDuotone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M176,128a48,48,0,1,1-48-48A48,48,0,0,1,176,128Z","opacity":"0.2"}},{tag:"path",attr:{d:"M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"},child:[]}]})(props);
}
export default PiDotDuotone;
