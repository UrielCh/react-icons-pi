import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function PiPopsicle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M128,8A72.08,72.08,0,0,0,56,80v96a16,16,0,0,0,16,16h32v40a24,24,0,0,0,48,0V192h32a16,16,0,0,0,16-16V80A72.08,72.08,0,0,0,128,8Zm8,224a8,8,0,0,1-16,0V192h16Zm48-56H72V80a56,56,0,0,1,112,0v96ZM120,72v80a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm32,0v80a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Z"}}]})(props);
}
export default PiPopsicle;
