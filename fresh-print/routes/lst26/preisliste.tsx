import type { JSX } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Page } from "#/components/Page.tsx";
import { Pages } from "#/components/Pages.tsx";

const menus = [
  { label: "Lasagne", price: 16, comment: "enthält Nüsse" },
  { label: "Spinatlasagne", price: 15, comment: "vegetarisch, enthält Nüsse" },
  { label: "Chili Con Carne", price: 14 },
  { label: "Mango Cocos Chili", price: 13, comment: "vegan" },
  { label: "Chili Con Carne", price: 10, comment: "klein" },
  { label: "Mango Cocos Chili", price: 9, comment: "klein, vegan" },
  { label: "Avocado-Cremesuppe", price: 8, comment: "mit Speck" },
  { label: "Avocado-Cremesuppe", price: 7, comment: "vegan" },
  { label: "Snack", price: 2 },
];

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Preisliste</title>
      </Head>
      <Pages orientation="portrait">
        <Page event="LST" year={2026}>
          <style>
            {`
              .price {
                text-align: right;
              }

              .comment {
                font-size: 0.7em;
                line-height: 0.5lh;
                font-weight: normal;
                display: block;
              }

              .small {
                display: grid;
              }

              .small > * {
                font-family: monospace;
              }
            `}
          </style>
          <div>
            <h3>
              Verpflegung
            </h3>
            <p>Preise in CHF</p>
          </div>
          <div
            class="bold"
            style="grid-column-end: span 13; font-size: 30px; grid-row: 4 / span 1; display: grid; grid-template-columns: 1fr auto; gap: 1.25rem 1rem;"
          >
            {menus.map((menu) => (
              <>
                <p>
                  {menu.label}
                  {menu.comment !== undefined
                    ? (
                      <em class="comment">
                        ({menu.comment})
                      </em>
                    )
                    : null}
                </p>
                <p class="price">{menu.price}</p>
              </>
            ))}
          </div>
          {
            /*
          <img
            src="/Twint-QR.jpg"
            style="grid-row-start: 10; grid-column: 18 / span 6;"
          />
        */
          }
          <div style="grid-row-start: 4; grid-column: 16 / span 7;">
            <p>
              Warme Speisen können auf folgende Zeitpunkte vorbestellt werden:
            </p>
            <ul>
              <li>12 oder 13 Uhr</li>
              <li>18 oder 19 Uhr</li>
            </ul>
          </div>
          <div
            style="grid-row-start: 22; grid-column: 2 / span 12;"
            class="small"
          >
            <p>1 Gilden-Jeton klein: Gratis Getränk</p>
            <p>1 Gilden-Jeton gross: Gratis Verpflegung</p>
            <p>4 Gilden-Jeton klein: Gratis Verpflegung</p>
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
            class="bold"
            style="grid-column-end: span 13; font-size: 30px; grid-row: 4 / span 1; display: grid; grid-template-columns: 1fr auto; gap: 1.5rem 1rem;"
          >
            <p>Mineralwasser</p>
            <p class="price">3</p>
            <p>Tee</p>
            <p class="price">3</p>
            <p>Kaffee</p>
            <p class="price">3</p>
            <p>Süssgetränk</p>
            <p class="price">4</p>
            <p>Bier</p>
            <p class="price">5</p>
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
