import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PipeFill icon from Phosphor Icons
 * @module
 */
export function PiPipeFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M232,104H208V56h24a8,8,0,0,0,0-16H205.83A16,16,0,0,0,192,32H176a16,16,0,0,0-13.83,8H144A104.11,104.11,0,0,0,40,144v18.16A16,16,0,0,0,32,176v16a16,16,0,0,0,8,13.84V232a8,8,0,0,0,16,0V208h48v24a8,8,0,0,0,16,0V205.84A16,16,0,0,0,128,192V176a16,16,0,0,0-8-13.84V144a24,24,0,0,1,24-24h18.17A16,16,0,0,0,176,128h16a16,16,0,0,0,13.83-8H232a8,8,0,0,0,0-16ZM112,192H48V176h64Zm64-80V48h16v63.8c0,.07,0,.13,0,.2Z"}}]})(props);
}
export default PiPipeFill;
