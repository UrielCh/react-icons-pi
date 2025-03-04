import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LadderSimpleThin icon from Phosphor Icons
 * @module
 */
export function PiLadderSimpleThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M192,28a4,4,0,0,0-4,4V68H68V32a4,4,0,0,0-8,0V224a4,4,0,0,0,8,0V188H188v36a4,4,0,0,0,8,0V32A4,4,0,0,0,192,28Zm-4,48v48H68V76ZM68,180V132H188v48Z"}}]})(props);
}
export default PiLadderSimpleThin;
