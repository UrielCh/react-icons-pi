import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PlusSquareThin icon from Phosphor Icons
 * @module
 */
export function PiPlusSquareThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-40-80a4,4,0,0,1-4,4H132v36a4,4,0,0,1-8,0V132H88a4,4,0,0,1,0-8h36V88a4,4,0,0,1,8,0v36h36A4,4,0,0,1,172,128Z"}}]})(props);
}
export default PiPlusSquareThin;
