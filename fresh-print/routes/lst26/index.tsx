import { Head } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export default function Home(): JSX.Element {
  const title = "Luzerner Spieltage 2026";
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <ul>
        <li>
          <a href="/lst26/bestellzettel">Bestellzettel</a>
        </li>
        <li>
          <a href="/lst26/discord">Discord</a>
        </li>
        <li>
          <a href="/lst26/feedback">Feedback</a>
        </li>
        <li>
          <a href="/lst26/flohmarktprotokoll">Flohmarktprotokoll</a>
        </li>
        <li>
          <a href="/lst26/haftungsausschluss">Haftungsausschluss</a>
        </li>
        <li>
          <a href="/lst26/helferprotokoll">Helferprotokoll</a>
        </li>
        <li>
          <a href="/lst26/naechstesJahr">Nächstes Jahr</a>
        </li>
        <li>
          <a href="/lst26/namenstafeln">Namenstafeln</a>
        </li>
        <li>
          <a href="/lst26/preisliste">Preisliste</a>
        </li>
        <li>
          <a href="/lst26/programm">Programm</a>
        </li>
        <li>
          <a href="/lst26/rollenspieltage">Rollenspieltage</a>
        </li>
        <li>
          <a href="/lst26/wc">WC</a>
        </li>
        <li>
          <a href="/lst26/wegweiser">Wegweiser</a>
        </li>
        <li>
          <a href="/lst26/willkommen">Willkommen</a>
        </li>
      </ul>
    </>
  );
}
