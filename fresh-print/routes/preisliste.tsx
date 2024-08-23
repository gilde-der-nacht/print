import { JSX } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Logo } from "../components/Logo.tsx";
import { Page } from "../components/Page.tsx";
import { Pages } from "../components/Pages.tsx";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Preisliste</title>
      </Head>
      <Pages orientation="portrait">
        <Page>
          <div
            class="every-column"
            style="grid-column-start: 2; grid-row-start: 2;"
          >
            <h3>
              Verpflegung
            </h3>
            <p>Preise in CHF</p>
          </div>
          <div
            class="half-column bold"
            style="font-size: 30px; grid-column-start: 2; grid-row-start: 4; display: grid; grid-template-columns: 1fr auto; gap: 4rem 1rem;"
          >
            <p>Snack</p>
            <p style="text-align: right">2</p>
            <p>Pilzrisotto</p>
            <p style="text-align: right">15</p>
            <p>Penne All'Arrabbiata</p>
            <p style="text-align: right">15</p>
            <p>Penne Pesto</p>
            <p style="text-align: right">15</p>
          </div>
          <img
            src="/Twint-QR.jpg"
            style="grid-row-start: 4; grid-column: 18 / span 6;"
          />
          <div style="grid-row-start: 16; grid-column: 2 / span 12;">
            <p>
              Warme Speisen können auf folgende Zeitfenster vorbestellt werden:
            </p>
            <ul>
              <li>13 - 14 Uhr</li>
              <li>18 - 19 Uhr</li>
            </ul>
          </div>
          <Logo />
        </Page>
        <Page>
          <div
            class="every-column"
            style="grid-column-start: 2; grid-row-start: 2;"
          >
            <h3>
              Verpflegung
            </h3>
            <p>Preise in CHF</p>
          </div>
          <div
            class="half-column bold"
            style="font-size: 30px; grid-column-start: 2; grid-row-start: 4; display: grid; grid-template-columns: 1fr auto; gap: 1.5rem 1rem;"
          >
            <p>Mineralwasser</p>
            <p style="text-align: right">3</p>
            <p>Tee</p>
            <p style="text-align: right">3</p>
            <p>Kaffee</p>
            <p style="text-align: right">3</p>
            <p>Süssgetränk</p>
            <p style="text-align: right">4</p>
            <p>Bier</p>
            <p style="text-align: right">5</p>
          </div>
          <img
            src="/Twint-QR.jpg"
            style="grid-row-start: 4; grid-column: 18 / span 6;"
          />
          <img
            src="/akzent.png"
            style="grid-row-start: -13; grid-column: 2 / -2; z-index: 1;"
          />
        </Page>
      </Pages>
    </>
  );
}
