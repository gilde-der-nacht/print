import { Head } from "$fresh/runtime.ts";
import type { JSX } from "preact";
import { HalfPage, Page } from "#/components/Page.tsx";
import { Pages } from "#/components/Pages.tsx";

function FeedbackPage(): JSX.Element {
  return (
    <Page logo={false}>
      <HalfPage side="left" event="LST" year={2026}>
        <h2>Feedback</h2>
        <div style="grid-row-start: 5;">
          <p class="line">Wie hast du von den Spieltagen erfahren?</p>
          <p class="line"></p>
          <p class="line"></p>
          <p class="line">Dein Highlight?</p>
          <p class="line"></p>
          <p class="line"></p>
          <p class="line">
            Wünsche für die nächsten Spieltage vom{" "}
            <strong>13. + 14. März 2027</strong>?
          </p>
          <p class="line"></p>
          <p class="line"></p>
          <br />
          <p class="checkbox reset feedback">
            Erinnert mich bitte an die nächsten Luzerner Spieltage:
          </p>
          <p class="line">Vorname, Name</p>
          <p class="line">E-Mail-Adresse</p>
        </div>
      </HalfPage>
      <HalfPage side="right" event="LST" year={2026}>
        <h2>Feedback</h2>
        <div style="grid-row-start: 5;">
          <p class="line">Wie hast du von den Spieltagen erfahren?</p>
          <p class="line"></p>
          <p class="line"></p>
          <p class="line">Dein Highlight?</p>
          <p class="line"></p>
          <p class="line"></p>
          <p class="line">
            Wünsche für die nächsten Spieltage vom{" "}
            <strong>14. + 15. März 2026</strong>?
          </p>
          <p class="line"></p>
          <p class="line"></p>
          <br />
          <p class="checkbox reset feedback">
            Erinnert mich bitte an die nächsten Luzerner Spieltage:
          </p>
          <p class="line">Vorname, Name</p>
          <p class="line">E-Mail-Adresse</p>
        </div>
      </HalfPage>
    </Page>
  );
}

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Feedbackbogen</title>
      </Head>
      <Pages orientation="landscape">
        <FeedbackPage />
      </Pages>
    </>
  );
}
