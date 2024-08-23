import { Head } from "$fresh/runtime.ts";
import type { JSX } from "preact";
import { HalfPage, Page } from "../components/Page.tsx";
import { Pages } from "../components/Pages.tsx";

function FeedbackPage(): JSX.Element {
  return (
    <Page logo={false}>
      <HalfPage side="left" logo={true}>
        <h2>Feedback</h2>
        <div style="grid-row-start: 5;">
          <p class="line">Vorname, Name</p>
          <p class="line">E-Mail-Adresse</p>
          <br />
          <p class="feedback">
            Kreuze die Optionen an, die auf dich zutreffen:
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 10px 20px; padding-top: 15px;">
            <p class="checkbox reset small">
              Spieler:in an den Rollenspieltagen
            </p>
            <p class="checkbox reset small">
              Spielleiter:in an den Rollenspieltagen
            </p>
            <p class="checkbox reset small">
              online angemeldet
            </p>
          </div>
          <br />
          <p class="line">
            Was ist dein Eindruck vom Anmeldeprozess über die Webseite?
          </p>
          <p class="line"></p>
          <p class="line"></p>
          <p class="line"></p>
          <p class="line"></p>
          <p class="line">
            Was würde dich motivieren in Zukunft eine Spielrunde zu leiten?
          </p>
          <p class="line"></p>
          <p class="line"></p>
        </div>
      </HalfPage>
      <HalfPage side="right" logo={true}>
        <div style="grid-row-start: 5;">
          <p class="line">Wie hast du von den Rollenspieltagen erfahren?</p>
          <p class="line"></p>
          <p class="line"></p>
          <p class="line">Dein Highlight?</p>
          <p class="line"></p>
          <p class="line"></p>
          <p class="line">Wünsche für die nächsten Rollenspieltage 2025?</p>
          <p class="line"></p>
          <p class="line"></p>
          <p class="checkbox reset feedback">
            Schreibt mir wenn die Rollenspieltage 2025 wieder stattfinden.
          </p>
          <p class="checkbox reset feedback">
            Sendet mir doch bitte eine einmalige E-Mail, mit mehr Infos über
            eure Organisation und weitere Events.
          </p>
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
        <FeedbackPage />
      </Pages>
    </>
  );
}
