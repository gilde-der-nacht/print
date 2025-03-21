import { Head } from "$fresh/runtime.ts";
import type { JSX } from "preact";
import { Page } from "#/components/Page.tsx";
import { Pages } from "#/components/Pages.tsx";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Rollenspiele</title>
      </Head>
      <Pages orientation="portrait">
        <Page logo={false}>
          <h2>Rollenspiele</h2>
          <div style="grid-row-start: 5;">
            <ul style="display: grid; gap: 5rem;">
              <li style="list-style: none;">
                <h5>
                  Sa 13:00 - 15:00: Der Goblin-Raubzug
                </h5>
                <br />
                <p>
                  Über Nacht ist der erste Schnee gefallen, in eurer
                  Goblin-Höhle ist es bitter kalt und ihr habt keine Vorräte.
                  Deshalb beschliesst ihr, euch nach guter Goblin-Manier im
                  nahegelegenen Dorf mit allem einzudecken, was ihr braucht.
                  <br />
                  <br />
                  Alter: <strong>ab 16</strong>
                  <span style="opacity: 0;">empty</span>
                  Spieler:innen: <strong>2-5</strong>
                  <span style="opacity: 0;">empty</span> Spielleiter:{" "}
                  <strong>Lukas</strong>
                </p>
              </li>

              <li style="list-style: none;">
                <h5>
                  Sa 15:00 - 17:00: Midgard
                </h5>
                <br />
                <p>
                  Tauche ein für 2 Stunden in eine fantastische Welt voller
                  Mythen und Magie und spiele dort ein Abenteuer in der Welt von
                  Midgard.
                  <br />
                  <br />
                  Alter: <strong>ab 13</strong>
                  <span style="opacity: 0;">empty</span>
                  Spieler:innen: <strong>2-5</strong>
                  <span style="opacity: 0;">empty</span> Spielleiter:{" "}
                  <strong>Claude</strong>
                </p>
              </li>

              <li style="list-style: none;">
                <h5>
                  Sa 17:00 - 19:00: Der Goblin-Raubzug
                </h5>
                <br />
                <p>
                  Über Nacht ist der erste Schnee gefallen, in eurer
                  Goblin-Höhle ist es bitter kalt und ihr habt keine Vorräte.
                  Deshalb beschliesst ihr, euch nach guter Goblin-Manier im
                  nahegelegenen Dorf mit allem einzudecken, was ihr braucht.
                  <br />
                  <br />
                  Alter: <strong>ab 16</strong>
                  <span style="opacity: 0;">empty</span>
                  Spieler:innen: <strong>2-5</strong>
                  <span style="opacity: 0;">empty</span> Spielleiter:{" "}
                  <strong>Lukas</strong>
                </p>
              </li>
            </ul>

            <br />
            <br />
            <br />
            <h5>
              Melde dich beim Organisationskomitee am Eingang, um einen Platz zu
              reservieren.
            </h5>
          </div>
        </Page>

        <Page logo={false}>
          <h2>Rollenspiele</h2>
          <div style="grid-row-start: 5;">
            <ul style="display: grid; gap: 5rem;">
              <li style="list-style: none;">
                <h5>
                  So 11:00 - 13:00: Silvanas Befreiung
                </h5>
                <br />
                <p>
                  Die Heldinnen und Helden möchten die entführte Silvana aus dem
                  Kellergewölbe eines Hafenhauses befreien. Dort lauern überall
                  Kobolde, Orks, Goblins und auch Piraten. Könnt ihr der Gefahr
                  gemeinsam trotzen?
                  <br />
                  <br />
                  Alter: <strong>ab 8</strong>
                  <span style="opacity: 0;">empty</span>
                  Spieler:innen: <strong>3-7</strong>
                  <span style="opacity: 0;">empty</span> Spielleiter:{" "}
                  <strong>Michael</strong>
                </p>
              </li>

              <li style="list-style: none;">
                <h5>
                  So 13:00 - 15:00: Midgard
                </h5>
                <br />
                <p>
                  Tauche ein für 2 Stunden in eine fantastische Welt voller
                  Mythen und Magie und spiele dort ein Abenteuer in der Welt von
                  Midgard.
                  <br />
                  <br />
                  Alter: <strong>ab 13</strong>
                  <span style="opacity: 0;">empty</span>
                  Spieler:innen: <strong>2-5</strong>
                  <span style="opacity: 0;">empty</span> Spielleiter:{" "}
                  <strong>Claude</strong>
                </p>
              </li>

              <li style="list-style: none;">
                <h5>
                  So 15:00 - 17:00: Avatar Legends
                </h5>
                <br />
                <p>
                  Ihr habt Bolin schon einmal geholfen und er braucht eure Hilfe
                  wieder. Formt mit Feuer, Wasser, Erde und Luft die Welt nach
                  eurem Willen in der Welt von Avatar.
                  <br />
                  <br />
                  Alter: <strong>ab 9</strong>
                  <span style="opacity: 0;">empty</span>
                  Spieler:innen: <strong>1-5</strong>
                  <span style="opacity: 0;">empty</span> Spielleiter:{" "}
                  <strong>Thomas</strong>
                </p>
              </li>
            </ul>

            <br />
            <br />
            <br />
            <h5>
              Melde dich beim Organisationskomitee am Eingang, um einen Platz zu
              reservieren.
            </h5>
          </div>
        </Page>
      </Pages>
    </>
  );
}
