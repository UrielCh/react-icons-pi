import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ThreeDThin icon from Phosphor Icons
 * @module
 */
export function PiThreeDThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M100,148a24,24,0,0,0-24-24,4,4,0,0,1-3.28-6.29L96.32,84H56a4,4,0,0,1,0-8h48a4,4,0,0,1,3.28,6.29L83.12,116.8a32,32,0,1,1-30,53.6,4,4,0,1,1,5.72-5.6A24,24,0,0,0,100,148Zm60-72a52,52,0,0,1,0,104H136a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4Zm0,8H140v88h20a44,44,0,0,0,0-88ZM32,52H224a4,4,0,0,0,0-8H32a4,4,0,0,0,0,8ZM224,204H32a4,4,0,0,0,0,8H224a4,4,0,0,0,0-8Z"}}]})(props);
}
export default PiThreeDThin;
