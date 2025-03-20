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
          <p
            class="h-center"
            style="font-size: 60px; grid-row-start: 13;"
          >
            Unterkirche
          </p>
        </Page>
        <Page event="LST" year={2025}>
          <h1
            class="h-center every-column"
            style="font-size: 70px; grid-row-start: 10;"
          >
            Spieldesigner
          </h1>
          <p
            class="h-center"
            style="font-size: 60px; grid-row-start: 13;"
          >
            Unterkirche
          </p>
        </Page>
        <Page event="LST" year={2025}>
          <h1
            class="h-center every-column"
            style="font-size: 70px; grid-row-start: 10;"
          >
            Spielbibliothek
          </h1>
          <p
            class="h-center"
            style="font-size: 60px; grid-row-start: 13;"
          >
            Würzenbachsaal
          </p>
        </Page>
        <Page event="LST" year={2025}>
          <h1
            class="h-center every-column"
            style="font-size: 70px; grid-row-start: 10;"
          >
            Verpflegung
          </h1>
          <p
            class="h-center"
            style="font-size: 60px; grid-row-start: 13;"
          >
            Würzenbachsaal
          </p>
        </Page>
        <Page event="LST" year={2025}>
          <h1
            class="h-center every-column"
            style="font-size: 70px; grid-row-start: 9;"
          >
            Organisierte Spielrunden
          </h1>
          <p
            class="h-center"
            style="font-size: 60px; grid-row-start: 14;"
          >
            Unterkirche
          </p>
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
