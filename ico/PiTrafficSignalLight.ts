import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TrafficSignalLight icon from Phosphor Icons
 * @module
 */
export function PiTrafficSignalLight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M128,58a30,30,0,1,0,30,30A30,30,0,0,0,128,58Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,128,106Zm0,32a30,30,0,1,0,30,30A30,30,0,0,0,128,138Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,128,186Zm88-40H198V78h18a6,6,0,0,0,0-12H198V40a14,14,0,0,0-14-14H72A14,14,0,0,0,58,40V66H40a6,6,0,0,0,0,12H58v68H40a6,6,0,0,0,0,12H58v58a14,14,0,0,0,14,14H184a14,14,0,0,0,14-14V158h18a6,6,0,0,0,0-12Zm-30,70a2,2,0,0,1-2,2H72a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H184a2,2,0,0,1,2,2Z"}}]})(props);
}
export default PiTrafficSignalLight;
