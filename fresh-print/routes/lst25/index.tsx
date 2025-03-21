import { Head } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export default function Home(): JSX.Element {
  const title = "Luzerner Spieltage 2025";
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <ul>
        <li>
          <a href="/lst25/bestellzettel">Bestellzettel</a>
        </li>
        <li>
          <a href="/lst25/discord">Discord</a>
        </li>
        <li>
          <a href="/lst25/feedback">Feedback</a>
        </li>
        <li>
          <a href="/lst25/haftungsausschluss">Haftungsausschluss</a>
        </li>
        <li>
          <a href="/lst25/helferprotokoll">Helferprotokoll</a>
        </li>
        <li>
          <a href="/lst25/naechstesJahr">Nächstes Jahr</a>
        </li>
        <li>
          <a href="/lst25/namenstafeln">Namenstafeln</a>
        </li>
        <li>
          <a href="/lst25/preisliste">Preisliste</a>
        </li>
        <li>
          <a href="/lst25/programm">Programm</a>
        </li>
        <li>
          <a href="/lst25/rollenspiele">Rollenspiele</a>
        </li>
        <li>
          <a href="/lst25/rollenspieltage">Rollenspieltage</a>
        </li>
        <li>
          <a href="/lst25/wc">WC</a>
        </li>
        <li>
          <a href="/lst25/wegweiser">Wegweiser</a>
        </li>
        <li>
          <a href="/lst25/willkommen">Willkommen</a>
        </li>
      </ul>
    </>
  );
}
