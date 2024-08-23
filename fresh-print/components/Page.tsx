import { ComponentChildren, JSX } from "preact";
import { Pattern } from "./pattern.tsx";

export function Page(props: { children: ComponentChildren }): JSX.Element {
  return (
    <div class="page">
      <Pattern />
      {props.children}
    </div>
  );
}
