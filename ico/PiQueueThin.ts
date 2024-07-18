import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * QueueThin icon from Phosphor Icons
 * @module
 */
export function PiQueueThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm100,60H40a4,4,0,0,0,0,8h96a4,4,0,0,0,0-8Zm0,64H40a4,4,0,0,0,0,8h96a4,4,0,0,0,0-8Zm108-28a4,4,0,0,1-1.88,3.39l-64,40A4,4,0,0,1,176,204a4.06,4.06,0,0,1-1.94-.5A4,4,0,0,1,172,200V120a4,4,0,0,1,6.12-3.39l64,40A4,4,0,0,1,244,160Zm-11.55,0L180,127.22v65.56Z"}}]})(props);
}
export default PiQueueThin;
