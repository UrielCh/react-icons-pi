import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DeskThin icon from Phosphor Icons
 * @module
 */
export function PiDeskThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M248,68H8a4,4,0,0,0,0,8H20V192a4,4,0,0,0,8,0V140H228v52a4,4,0,0,0,8,0V76h12a4,4,0,0,0,0-8ZM28,76h96v56H28Zm200,56H132V76h96ZM92,104a4,4,0,0,1-4,4H64a4,4,0,0,1,0-8H88A4,4,0,0,1,92,104Zm72,0a4,4,0,0,1,4-4h24a4,4,0,0,1,0,8H168A4,4,0,0,1,164,104Z"}}]})(props);
}
export default PiDeskThin;
