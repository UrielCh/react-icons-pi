import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChairThin icon from Phosphor Icons
 * @module
 */
export function PiChairThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M208,140H172V100h20a12,12,0,0,0,12-12V40a12,12,0,0,0-12-12H64A12,12,0,0,0,52,40V88a12,12,0,0,0,12,12H84v40H48a12,12,0,0,0-12,12v16a12,12,0,0,0,12,12H60v44a4,4,0,0,0,8,0V180H188v44a4,4,0,0,0,8,0V180h12a12,12,0,0,0,12-12V152A12,12,0,0,0,208,140ZM60,88V40a4,4,0,0,1,4-4H192a4,4,0,0,1,4,4V88a4,4,0,0,1-4,4H64A4,4,0,0,1,60,88Zm32,12h72v40H92Zm120,68a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z"}}]})(props);
}
export default PiChairThin;
