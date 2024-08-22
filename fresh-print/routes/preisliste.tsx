import { JSX } from "preact";
import { Pattern } from "../components/pattern.tsx";
import { Head } from "$fresh/runtime.ts";
import { Logo } from "../components/Logo.tsx";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Preisliste</title>
      </Head>
      <div class="hoch">
        <Pattern />
        <div class="every-column" style="padding: 30px">
          <h3>
            Verpflegung
          </h3>
          <p>Preise in CHF</p>
        </div>
        <div
          class="half-column bold"
          style="font-size: 30px; padding: 30px; display: grid; grid-template-columns:  1fr auto; gap: 4rem 1rem;"
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
          style="grid-column: 17 / -3;"
        />

        <div style="grid-column: 15 / -3">
          <p>
            Warme Speisen können auf folgen-de Zeitfenster vorbestellt werden:
          </p>
          <ul>
            <li>13 - 14 Uhr</li>
            <li>18 - 19 Uhr</li>
          </ul>
        </div>
        <Logo />
      </div>
    </>
  );
}
