import { Head } from "$fresh/runtime.ts";
import type { JSX } from "preact";
import { Page } from "#/components/Page.tsx";
import { Pages } from "#/components/Pages.tsx";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Verhaltenskodex</title>
      </Head>
      <Pages orientation="portrait">
        <Page logo={false}>
          <div class="prose">
            <h1 id="verhaltenskodex">
              Verhaltenskodex
            </h1>
            <p>
              Während eines Rollenspiels tauchen wir in fremde Welten ein,
              schlüpfen in eine Rolle und loten Grenzen aus. Um gemeinsam ein
              Abenteuer zu bestreiten, braucht es gegenseitigen Respekt und
              Vertrauen zu den Mitspielenden. Unser Verhaltenskodex schafft ein
              Bewusstsein darüber, wie wir während der Rollenspieltage
              miteinander umgehen.
            </p>
            <p>
              Damit sich alle an den Luzerner Rollenspieltagen wohlfühlen, gilt
              unser Verhaltenskodex für alle Teilnehmenden. Belästigungen oder
              übergriffiges Verhalten tolerieren in keinem Fall. Wir
              respektieren die Grenzen des anderen und akzeptieren vorbehaltlos,
              wenn eine Szene - auch ohne Erklärung - abgebrochen wird. Die
              Personen in den roten T-Shirt stehen allen Spielenden und
              Spielleitenden als Vertrauenspersonen zur Verfügung.
            </p>
            <h2 id="grundsätzliches">
              Grundsätzliches
            </h2>
            <p>
              Wir tolerieren keinerlei Verhalten, das als Belästigung oder
              Übergriff wahrgenommen wird, insbesondere aber nicht
              ausschliesslich: Sexismus, Rassismus, Antisemitismus, Homo- oder
              Transphobie sowie Diskriminierung aufgrund von Behinderung, Alter,
              Aussehen, Herkunft, Religion oder sonstigen Merkmalen.
            </p>
            <h2 id="grenzen-sind-individuell">
              Grenzen sind individuell
            </h2>
            <p>
              Bedeutet eine Aktion für die einen Freude, kann sie bei anderen
              Angst und Beklemmung auslösen. Nicht alle Spielenden müssen zu
              allem bereit sein. Will jemand beispielsweise nicht, dass der
              eigene Charakter gefesselt wird, gilt es dies zu respektieren. Die
              persönlichen Grenzen sind zu respektieren und stehen nicht zur
              Debatte.
            </p>
            <p>
              Die Spielleitenden erklären vor Spielbeginn das Setting und geben
              Einblick in die Themen, die vorkommen. Dies gibt den Mitspielenden
              die Möglichkeit, vorab zu entscheiden, ob sie sich in dieser
              Umgebung wohlfühlen oder nicht. Erfahrene Spielende lassen
              unerfahrenen Spielenden genügend Raum und Zeit für die
              Entscheidung. Auch sie können neben der spielleitenden Person ihre
              Erfahrungen weitergeben und so unterstützend wirken, wenn sie das
              möchten.
            </p>
            <h2 id="stop--x-karte">
              Stop / X-Karte
            </h2>
            <p>
              Mit dem Wort «Stop» wird die laufende Szene sofort abgebrochen.
              Alle Spielleitenden weisen ihre Spielenden vor der Runde nochmals
              auf diese Möglichkeit hin. An jedem Spieltisch hat es mehrere
              X-Karten. Diese Karten haben den selben Zweck. Zieht eine Person
              am Spieltisch diese Karte, wird die laufende Szene abgebrochen.
            </p>
            <p>
              Jede Szene darf jederzeit von allen Beteiligten abgebrochen
              werden. Bricht eine Person eine Szene ab, akzeptieren das alle
              Teilnehmenden, ohne die betreffende Person dafür anzugreifen.
            </p>
            <p>
              <strong>
                Das Wohlbefinden aller Teilnehmenden steht über dem Spiel.
              </strong>
            </p>
            <p>
              Auch wenn es nicht möglich ist, die Gedanken des Gegenübers zu
              lesen, bitten wir euch, aufeinander zu achten. Es gibt Menschen,
              die in stressigen und unangenehmen Situationen erstarren. Sie
              können in solchen Momenten ihr Unbehagen nicht deutlich ausdrücken
              und sind nicht in der Lage, eine laufende Szene mit einem «Stop»
              abzubrechen. Daher wird es von allen vorbehaltlos akzeptiert, wenn
              eine Person ohne weitere Erklärung den Spieltisch verlässt oder
              sich erst zeitversetzt äussert.
            </p>
            <h2 id="vertrauensperson">
              Vertrauensperson
            </h2>
            <p>
              Die Personen mit den roten T-Shirts stehen allen Beteiligten
              (Spielleitenden und Spielenden) jederzeit als Vertrauensperson zur
              Verfügung. Jedes Anliegen wird mit Respekt und Diskretion
              behandelt.
            </p>
            <p>
              Alternativ kannst du uns auch eine Nachricht auf dem Discord
              Server senden oder uns per Telefon anrufen. Den Benutzernamen bzw.
              die Telefonnummer werden wir an den Rollenspieltagen bekanntgeben
              und überall im Raum aufhängen.
            </p>
            <h2 id="feedback">
              Feedback
            </h2>
            <p>
              Spielleitende und Spielende sind offen für Feedback. Es kann
              sofort oder zu einem späteren Zeitpunkt gegeben werden. Eine
              solche Rückmeldung ist wertvoll, da Missverständnisse unmittelbar
              oder in Zukunft entschärft oder gar vermieden werden können.
            </p>
            <p>
              <strong>
                Dieser Verhaltenskodex gilt für alle Teilnehmenden der Luzerner
                Rollenspieltage.
              </strong>
            </p>
            <p>
              Mit meiner Teilnahme bestätige ich, dass ich diese Punkte gelesen
              und verstanden habe.
            </p>
          </div>
        </Page>
      </Pages>
    </>
  );
}
