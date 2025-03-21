import { Head } from "$fresh/runtime.ts";
import type { JSX } from "preact";
import { Page } from "#/components/Page.tsx";
import { Pages } from "#/components/Pages.tsx";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Haftungsausschluss</title>
      </Head>
      <Pages orientation="portrait">
        <Page logo={false}>
          <h2>Haftungsausschluss</h2>
          <h4 style="grid-row-start: 3;">für den betreuten Flohmarkt</h4>
          <div style="grid-row-start: 5;">
            <ol style="display: grid; gap: 1.5rem;">
              <li>
                <h5>Allgemeines</h5>
                <p>
                  Die Teilnahme am betreuten Flohmarkt erfolgt auf eigenes
                  Risiko. Mit der Übergabe der Waren zur Veräusserung erklärt
                  sich der/die Verkäufer:in mit den nachfolgenden Bedingungen
                  einverstanden.
                </p>
              </li>
              <li>
                <h5>Verkauf und Abwicklung</h5>
                <p>
                  Die Veranstalter betreuen den Verkauf der Waren im Namen der
                  Verkäufer:innen. Der Verkaufspreis wird von den
                  Verkäufer:innen festgelegt und kann durch das Flohmarkt-Team
                  nicht verändert werden.
                </p>
              </li>
              <li>
                <h5>Haftungsausschluss</h5>
                <p>
                  Die Veranstalter übernehmen keine Haftung für den Verlust,
                  Diebstahl oder Beschädigung der Ware. Eine Haftung für Schäden
                  durch unsachgemässe Handhabung durch Dritte oder Käufer:innen
                  wird ausgeschlossen. Die Veranstalter haften nicht für etwaige
                  Mängel oder rechtliche Ansprüche im Zusammenhang mit den
                  verkauften Waren.
                </p>
              </li>
              <li>
                <h5>Abholung nicht verkaufter Waren</h5>
                <p>
                  Nicht verkaufte Waren müssen bis zum vereinbarten Zeitpunkt
                  abgeholt werden.
                </p>
              </li>
              <li>
                <h5>Einhaltung gesetzlicher Bestimmungen</h5>
                <p>
                  Die Verkäufer:innen bestätigen, dass sie Eigentümer:in der zum
                  Verkauf angebotenen Waren sind und diese frei von Rechten
                  Dritter sind.
                </p>
              </li>
              <li>
                <h5>Annahme des Haftungsausschlusses</h5>
                <p>
                  Mit der Übergabe der Waren zum Verkauf erklärt sich der/die
                  Verkäufer:in mit diesem Haftungsausschluss einverstanden und
                  verzichtet auf jegliche Ansprüche gegenüber den Veranstaltern.
                </p>
              </li>
            </ol>
          </div>
        </Page>
      </Pages>
    </>
  );
}
