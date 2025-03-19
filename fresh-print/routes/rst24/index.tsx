import { Head } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export default function Home(): JSX.Element {
  const title = "Luzerner Rollenspieltage 2024";
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <ul>
        <li>
          <a href="/rst24/bestellzettel">Bestellzettel</a>
        </li>
        <li>
          <a href="/rst24/discord">Discord</a>
        </li>
        <li>
          <a href="/rst24/feedback">Feedback</a>
        </li>
        <li>
          <a href="/rst24/naechstesJahr">Nächstes Jahr</a>
        </li>
        <li>
          <a href="/rst24/preisliste">Preisliste</a>
        </li>
        <li>
          <a href="/rst24/programm">Programm</a>
        </li>
        <li>
          <a href="/rst24/wc">WC</a>
        </li>
        <li>
          <a href="/rst24/willkommen">Willkommen</a>
        </li>
      </ul>
    </>
  );
}
