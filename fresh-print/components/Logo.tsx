import type { JSX } from "preact";
import { RstLogo } from "./rst-logo.tsx";

export function Logo(props: { small?: boolean }): JSX.Element {
  return (
    <div class={`logo ${props.small === true ? "small" : ""}`}>
      <div style="margin-right: -30px;">
        <span class="display">
          Luzerner <br /> Rollenspieltage
        </span>
        <br />
        <span>24. + 25. August 2024</span>
      </div>
      <div style="scale: 60%;">
        <RstLogo />
      </div>
    </div>
  );
}
