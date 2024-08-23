import type { ComponentChildren, JSX } from "preact";
import { Pattern } from "./pattern.tsx";
import { Logo } from "./Logo.tsx";

export function Page(
  props: { logo?: boolean; children: ComponentChildren },
): JSX.Element {
  return (
    <div class="page">
      <Pattern />
      {props.children}
      {props.logo !== false ? <Logo /> : null}
    </div>
  );
}
