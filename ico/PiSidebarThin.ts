import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SidebarThin icon from Phosphor Icons
 * @module
 */
export function PiSidebarThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM36,200V148H56a4,4,0,0,0,0-8H36V116H56a4,4,0,0,0,0-8H36V84H56a4,4,0,0,0,0-8H36V56a4,4,0,0,1,4-4H84V204H40A4,4,0,0,1,36,200Zm184,0a4,4,0,0,1-4,4H92V52H216a4,4,0,0,1,4,4Z"}}]})(props);
}
export default PiSidebarThin;
