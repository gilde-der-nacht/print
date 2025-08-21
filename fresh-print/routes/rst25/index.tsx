import { Head } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export default function Home(): JSX.Element {
  const title = "Luzerner Rollenspieltage 2025";
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <ul>
        <li>
          <a href="/rst25/bestellzettel">Bestellzettel</a>
        </li>
        <li>
          <a href="/rst25/discord">Discord</a>
        </li>
        <li>
          <a href="/rst25/feedback">Feedback</a>
        </li>
        <li>
          <a href="/rst25/naechstesJahr">Nächstes Jahr</a>
        </li>
        <li>
          <a href="/rst25/preisliste">Preisliste</a>
        </li>
        <li>
          <a href="/rst25/programm">Programm</a>
        </li>
        <li>
          <a href="/rst25/wc">WC</a>
        </li>
        <li>
          <a href="/rst25/willkommen">Willkommen</a>
        </li>
      </ul>
    </>
  );
}
