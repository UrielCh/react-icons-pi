import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function PiFlipVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M56,120H216a16,16,0,0,0,6.23-30.74l-.14-.06-159.93-64A16,16,0,0,0,40,40v64A16,16,0,0,0,56,120Zm0-80,.15.06L216,104H56l0-64Zm160,96H56a16,16,0,0,0-16,16v64a16,16,0,0,0,22.15,14.78l159.93-64,.14-.06A16,16,0,0,0,216,136ZM56.15,215.93,56,216V152H216Z"}}]})(props);
}
export default PiFlipVertical;
