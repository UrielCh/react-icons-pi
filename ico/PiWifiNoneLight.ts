import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * WifiNoneLight icon from Phosphor Icons
 * @module
 */
export function PiWifiNoneLight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M138,204a10,10,0,1,1-10-10A10,10,0,0,1,138,204Z"}}]})(props);
}
export default PiWifiNoneLight;
