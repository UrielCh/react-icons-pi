import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * JoystickFill icon from Phosphor Icons
 * @module
 */
export function PiJoystickFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M224,160v48a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V160a16,16,0,0,1,16-16h72V95.19a40,40,0,1,1,16,0V144h72A16,16,0,0,1,224,160Zm-64-40a8,8,0,0,0,8,8h32a8,8,0,0,0,0-16H168A8,8,0,0,0,160,120Z"}}]})(props);
}
export default PiJoystickFill;
