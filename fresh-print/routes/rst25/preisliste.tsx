import type { JSX } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Page } from "#/components/Page.tsx";
import { Pages } from "#/components/Pages.tsx";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Preisliste</title>
      </Head>
      <Pages orientation="portrait">
        <Page event="RST" year={2025}>
          <div>
            <h3>
              Verpflegung
            </h3>
            <p>Preise in CHF</p>
          </div>
          <div
            class="half-column bold"
            style="font-size: 30px; grid-row: 4 / span 1; display: grid; grid-template-columns: 1fr auto; gap: 4rem 1rem;"
          >
            <p>
              Abenteuergruppensnack
            </p>
            <p style="text-align: right">5</p>
            <p>Pad Thai</p>
            <p style="text-align: right">15</p>
            <p>Risotto</p>
            <p style="text-align: right">15</p>
            <p>Pilzrisotto</p>
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
        </Page>
        <Page logo={false}>
          <div>
            <h3>
              Verpflegung
            </h3>
            <p>Preise in CHF</p>
          </div>
          <div
            class="half-column bold"
            style="font-size: 30px; grid-row: 4 / span 1; display: grid; grid-template-columns: 1fr auto; gap: 1.5rem 1rem;"
          >
            <p>Hahnenwasser</p>
            <p style="text-align: right">gratis</p>
            <p>Mineralwasser</p>
            <p style="text-align: right">3</p>
            <p>Tee / Kaffee</p>
            <p style="text-align: right">3</p>
            <p>Süssgetränk</p>
            <p style="text-align: right">5</p>
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
