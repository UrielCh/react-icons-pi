import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChatCenteredFill icon from Phosphor Icons
 * @module
 */
export function PiChatCenteredFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M232,56V184a16,16,0,0,1-16,16H155.57l-13.68,23.94a16,16,0,0,1-27.78,0L100.43,200H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z"}}]})(props);
}
export default PiChatCenteredFill;
