import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SelectionSlashFill icon from Phosphor Icons
 * @module
 */
export function PiSelectionSlashFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM152,56h32a16,16,0,0,1,16,16v32a8,8,0,0,1-16,0V72H152a8,8,0,0,1,0-16ZM104,200H72a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Zm101.66,5.66a8,8,0,0,1-11.32,0L188.69,200H152a8,8,0,0,1,0-16h20.69L72,83.31V104a8,8,0,0,1-16,0V67.31l-5.66-5.65A8,8,0,0,1,61.66,50.34l8,8h0l136,136A8,8,0,0,1,205.66,205.66Z"}}]})(props);
}
export default PiSelectionSlashFill;
