import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MastodonLogoThin icon from Phosphor Icons
 * @module
 */
export function PiMastodonLogoThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M184,36H72A36,36,0,0,0,36,72V192a36,36,0,0,0,36,36h88a4,4,0,0,0,0-8H72a28,28,0,0,1-28-28V180H184a36,36,0,0,0,36-36V72A36,36,0,0,0,184,36Zm28,108a28,28,0,0,1-28,28H44V72A28,28,0,0,1,72,44H184a28,28,0,0,1,28,28Zm-32-40v32a4,4,0,0,1-8,0V104a20,20,0,0,0-40,0v32a4,4,0,0,1-8,0V104a20,20,0,0,0-40,0v32a4,4,0,0,1-8,0V104a28,28,0,0,1,52-14.41A28,28,0,0,1,180,104Z"}}]})(props);
}
export default PiMastodonLogoThin;
