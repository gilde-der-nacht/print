import { Head } from "$fresh/runtime.ts";
import type { JSX } from "preact";
import { Page } from "#/components/Page.tsx";
import { Pages } from "#/components/Pages.tsx";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Nächstes Jahr</title>
      </Head>
      <Pages orientation="landscape">
        <Page event="LST" year={2025}>
          <p
            class="h-center"
            style="font-size: 60px; grid-row-start: 6;"
          >
            Wir sehen uns nächstes Jahr
          </p>
          <h1
            class="h-center every-column"
            style="font-size: 70px; grid-row-start: 10;"
          >
            14. + 15. März 2026
          </h1>
          <p
            class="h-center"
            style="font-size: 60px; grid-row-start: 13;"
          >
            an den Luzerner Spieltagen.
          </p>
        </Page>
      </Pages>
    </>
  );
}
