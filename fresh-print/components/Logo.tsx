import type { JSX } from "preact";
import { RstLogo } from "#/components/rst-logo.tsx";
import { LstLogo } from "#/components/lst-logo.tsx";

type Year = 2024 | 2025 | 2026;

export type EventMetadata =
  | {
    event: "LST";
    year: Year;
  }
  | {
    event: "RST";
    year: Year;
  };
export function Logo(
  props: { small?: boolean } & EventMetadata,
): JSX.Element {
  const { name, date } = (() => {
    if (props.event === "RST" && props.year === 2024) {
      return {
        name: (
          <>
            Luzerner <br /> Rollenspieltage
          </>
        ),
        date: "24. + 25. August 2024",
      };
    }

    if (props.event === "LST" && props.year === 2025) {
      return {
        name: (
          <>
            Luzerner <br /> Spieltage
          </>
        ),
        date: "22. + 23. März 2025",
      };
    }

    if (props.event === "RST" && props.year === 2025) {
      return {
        name: (
          <>
            Luzerner <br /> Rollenspieltage
          </>
        ),
        date: "23. + 24. August 2025",
      };
    }

    if (props.event === "LST" && props.year === 2026) {
      return {
        name: (
          <>
            Luzerner <br /> Spieltage
          </>
        ),
        date: "14. + 15. März 2026",
      };
    }

    throw new Error(`Wrong or missing event props: ${JSON.stringify(props)}}`);
  })();

  return (
    <div class={`logo ${props.small === true ? "small" : ""}`}>
      <div style={props.event === "RST" ? `margin-right: -30px;` : ""}>
        <span class="display">
          {name}
        </span>
        <br />
        <span>{date}</span>
      </div>
      {props.event === "RST"
        ? (
          <div style="scale: 60%;">
            <RstLogo />
          </div>
        )
        : (
          <div style="scale: 80%;">
            <LstLogo />
          </div>
        )}
    </div>
  );
}
