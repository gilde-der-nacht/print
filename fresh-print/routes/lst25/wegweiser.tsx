import { Head } from "$fresh/runtime.ts";
import type { JSX } from "preact";
import { Page } from "#/components/Page.tsx";
import { Pages } from "#/components/Pages.tsx";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Wegweiser</title>
      </Head>
      <Pages orientation="landscape">
        <Page event="LST" year={2025}>
          <h1
            class="h-center every-column"
            style="font-size: 70px; grid-row-start: 10;"
          >
            Flohmarkt
          </h1>
        </Page>
        <Page event="LST" year={2025}>
          <h1
            class="h-center every-column"
            style="font-size: 70px; grid-row-start: 10;"
          >
            Würzenbachsaal
          </h1>
        </Page>
        <Page event="LST" year={2025}>
          <h1
            class="h-center every-column"
            style="font-size: 70px; grid-row-start: 10;"
          >
            Unterkirche
          </h1>
        </Page>
      </Pages>
    </>
  );
}
