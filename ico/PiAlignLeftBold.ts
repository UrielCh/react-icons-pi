import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AlignLeftBold icon from Phosphor Icons
 * @module
 */
export function PiAlignLeftBold(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M52,40V216a12,12,0,0,1-24,0V40a12,12,0,0,1,24,0Zm16,60V64A20,20,0,0,1,88,44h88a20,20,0,0,1,20,20v36a20,20,0,0,1-20,20H88A20,20,0,0,1,68,100Zm24-4h80V68H92Zm144,60v36a20,20,0,0,1-20,20H88a20,20,0,0,1-20-20V156a20,20,0,0,1,20-20H216A20,20,0,0,1,236,156Zm-24,4H92v28H212Z"}}]})(props);
}
export default PiAlignLeftBold;
