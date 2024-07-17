import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function PiLineVerticalLight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M134,24V232a6,6,0,0,1-12,0V24a6,6,0,0,1,12,0Z"}}]})(props);
}
export default PiLineVerticalLight;
