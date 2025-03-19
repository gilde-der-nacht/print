import { Head } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export default function Home(): JSX.Element {
  const title = "Print";

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <ul>
        <li>
          <a href="/rst24">Luzerner Rollenspieltage 2024</a>
        </li>
        <li>
          <a href="/lst25">Luzerner Spieltage 2025</a>
        </li>
      </ul>
    </>
  );
}
