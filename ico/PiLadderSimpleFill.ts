import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LadderSimpleFill icon from Phosphor Icons
 * @module
 */
export function PiLadderSimpleFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M192,24a8,8,0,0,0-8,8v8H72V32a8,8,0,0,0-16,0V224a8,8,0,0,0,16,0v-8H184v8a8,8,0,0,0,16,0V32A8,8,0,0,0,192,24ZM176,184H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-48H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-48H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z"}}]})(props);
}
export default PiLadderSimpleFill;
