import { useRef } from "react";
import { useInView } from "framer-motion";

/**
 * Returns visible=true whenever the element is in the viewport.
 * once: false so animations replay every time you scroll into the section.
 */
export function useReveal() {
  const ref = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const visible = useInView(ref, { once: false, margin: "-40px" as any });
  return { ref, visible };
}
