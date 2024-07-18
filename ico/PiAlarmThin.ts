import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AlarmThin icon from Phosphor Icons
 * @module
 */
export function PiAlarmThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M128,44a92,92,0,1,0,92,92A92.1,92.1,0,0,0,128,44Zm0,176a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,220ZM58.83,34.83l-32,32a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,5.66Zm176,32a4,4,0,0,1-5.66,0l-32-32a4,4,0,0,1,5.66-5.66l32,32A4,4,0,0,1,234.83,66.83ZM188,136a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V80a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,136Z"}}]})(props);
}
export default PiAlarmThin;
