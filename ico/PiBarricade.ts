import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Barricade icon from Phosphor Icons
 * @module
 */
export function PiBarricade(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M224,64H32A16,16,0,0,0,16,80v72a16,16,0,0,0,16,16H56v32a8,8,0,0,0,16,0V168H184v32a8,8,0,0,0,16,0V168h24a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64Zm0,64.69L175.31,80H224ZM80.69,80l72,72H103.31L32,80.69V80ZM32,103.31,80.69,152H32ZM224,152H175.31l-72-72h49.38L224,151.32V152Z"}}]})(props);
}
export default PiBarricade;
