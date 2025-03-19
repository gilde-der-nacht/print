import type { ComponentChildren, JSX } from "preact";
import { Pattern } from "#/components/pattern.tsx";
import { type EventMetadata, Logo } from "#/components/Logo.tsx";

export function Page(
  props:
    | { logo: false; children: ComponentChildren }
    | { logo?: true; children: ComponentChildren } & EventMetadata,
): JSX.Element {
  return (
    <div class="page">
      <Pattern />
      {props.children}
      {props.logo !== false
        ? (
          <Logo
            event={props.event}
            year={props.year}
          />
        )
        : null}
    </div>
  );
}

export function HalfPage(
  props:
    | {
      side: "left" | "right";
      logo: false;
      children: ComponentChildren;
    }
    | {
      side: "left" | "right";
      logo?: boolean;
      children: ComponentChildren;
    } & EventMetadata,
): JSX.Element {
  return (
    <div class={`subpage ${props.side}`}>
      {props.children}
      {props.logo !== false
        ? <Logo small={true} event={props.event} year={props.year} />
        : null}
    </div>
  );
}
