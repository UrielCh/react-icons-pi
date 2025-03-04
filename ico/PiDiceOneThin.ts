import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DiceOneThin icon from Phosphor Icons
 * @module
 */
export function PiDiceOneThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M192,36H64A28,28,0,0,0,36,64V192a28,28,0,0,0,28,28H192a28,28,0,0,0,28-28V64A28,28,0,0,0,192,36Zm20,156a20,20,0,0,1-20,20H64a20,20,0,0,1-20-20V64A20,20,0,0,1,64,44H192a20,20,0,0,1,20,20Zm-76-64a8,8,0,1,1-8-8A8,8,0,0,1,136,128Z"}}]})(props);
}
export default PiDiceOneThin;
