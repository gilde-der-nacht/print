import { Head } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export default function Home(): JSX.Element {
  const title = "Luzerner Rollenspieltage 2026";
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <ul>
        <li>
          <a href="/rst26/bestellzettel">Bestellzettel</a>
        </li>
        <li>
          <a href="/rst26/discord">Discord</a>
        </li>
        <li>
          <a href="/rst26/feedback">Feedback</a>
        </li>
        <li>
          <a href="/rst26/naechstesJahr">Nächstes Jahr</a>
        </li>
        <li>
          <a href="/rst26/namenstafeln">Namenstafeln</a>
        </li>
        <li>
          <a href="/rst26/preisliste">Preisliste</a>
        </li>
        <li>
          <a href="/rst26/programm">Programm</a>
        </li>
        <li>
          <a href="/rst26/coc">Verhaltenskodex</a>
        </li>
        <li>
          <a href="/rst26/wc">WC</a>
        </li>
        <li>
          <a href="/rst26/willkommen">Willkommen</a>
        </li>
      </ul>
    </>
  );
}
