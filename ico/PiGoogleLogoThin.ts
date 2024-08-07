import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * GoogleLogoThin icon from Phosphor Icons
 * @module
 */
export function PiGoogleLogoThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M220,128a92,92,0,1,1-21-58.55,4,4,0,0,1-6.17,5.1A84,84,0,1,0,211.91,132H128a4,4,0,0,1,0-8h88A4,4,0,0,1,220,128Z"}}]})(props);
}
export default PiGoogleLogoThin;
