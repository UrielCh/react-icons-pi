import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OvenThin icon from Phosphor Icons
 * @module
 */
export function PiOvenThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM76,76a8,8,0,1,1,8,8A8,8,0,0,1,76,76Zm44,0a8,8,0,1,1,8,8A8,8,0,0,1,120,76Zm44,0a8,8,0,1,1,8,8A8,8,0,0,1,164,76Zm20,32H72a4,4,0,0,0-4,4v72a4,4,0,0,0,4,4H184a4,4,0,0,0,4-4V112A4,4,0,0,0,184,108Zm-4,72H76V116H180Z"}}]})(props);
}
export default PiOvenThin;
