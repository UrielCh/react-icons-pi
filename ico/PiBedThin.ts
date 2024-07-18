import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BedThin icon from Phosphor Icons
 * @module
 */
export function PiBedThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,76H28V48a4,4,0,0,0-8,0V208a4,4,0,0,0,8,0V172H244v36a4,4,0,0,0,8,0V112A36,36,0,0,0,216,76ZM28,84h80v80H28Zm88,80V84H216a28,28,0,0,1,28,28v52Z"}}]})(props);
}
export default PiBedThin;
