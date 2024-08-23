import type { ComponentChildren, JSX } from "preact";

type Props = {
  orientation: "portrait" | "landscape";
  children: ComponentChildren;
};

export function Pages(props: Props): JSX.Element {
  return (
    <div class={`pages ${props.orientation}`}>
      {props.children}
    </div>
  );
}
