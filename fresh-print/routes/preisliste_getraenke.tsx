import { JSX } from "preact";
import { Pattern } from "../components/pattern.tsx";
import { Head } from "$fresh/runtime.ts";
import { Logo } from "../components/Logo.tsx";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Preisliste: Getränke</title>
      </Head>
      <div class="hoch">
        <Pattern />
        <div class="every-column" style="padding: 30px">
          <h3>
            Getränke
          </h3>
          <p>Preise in CHF</p>
        </div>
        <div
          class="half-column"
          style="font-size: 30px; padding: 30px; display: grid; grid-template-columns:  1fr auto; gap: 1.75rem 1rem;"
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
          style="grid-column: 17 / -3;"
        />

        <img src="/akzent.png" style="grid-column: 2 / -2; z-index: 1;" />
      </div>
    </>
  );
}
