import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ElevatorThin icon from Phosphor Icons
 * @module
 */
export function PiElevatorThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm-28,72V212H132V108ZM124,212H76V108h48Zm88-4a4,4,0,0,1-4,4H188V104a4,4,0,0,0-4-4H72a4,4,0,0,0-4,4V212H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM148,72a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8h32A4,4,0,0,1,148,72Z"}}]})(props);
}
export default PiElevatorThin;
