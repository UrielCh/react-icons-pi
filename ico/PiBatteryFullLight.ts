import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BatteryFullLight icon from Phosphor Icons
 * @module
 */
export function PiBatteryFullLight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M200,58H32A22,22,0,0,0,10,80v96a22,22,0,0,0,22,22H200a22,22,0,0,0,22-22V80A22,22,0,0,0,200,58Zm10,118a10,10,0,0,1-10,10H32a10,10,0,0,1-10-10V80A10,10,0,0,1,32,70H200a10,10,0,0,1,10,10ZM182,96v64a6,6,0,0,1-12,0V96a6,6,0,0,1,12,0Zm-40,0v64a6,6,0,0,1-12,0V96a6,6,0,0,1,12,0Zm-40,0v64a6,6,0,0,1-12,0V96a6,6,0,0,1,12,0ZM62,96v64a6,6,0,0,1-12,0V96a6,6,0,0,1,12,0Zm192,0v64a6,6,0,0,1-12,0V96a6,6,0,0,1,12,0Z"}}]})(props);
}
export default PiBatteryFullLight;
