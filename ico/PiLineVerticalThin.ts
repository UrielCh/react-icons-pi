import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function PiLineVerticalThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M132,24V232a4,4,0,0,1-8,0V24a4,4,0,0,1,8,0Z"}}]})(props);
}
export default PiLineVerticalThin;
