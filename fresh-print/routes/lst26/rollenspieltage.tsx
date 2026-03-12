import { Head } from "$fresh/runtime.ts";
import type { JSX } from "preact";
import { Page } from "#/components/Page.tsx";
import { Pages } from "#/components/Pages.tsx";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Rollenspieltage</title>
      </Head>
      <Pages orientation="landscape">
        <Page event="LST" year={2026}>
          <h1
            class="h-center every-column"
            style="font-size: 70px; grid-row-start: 8;"
          >
            Luzerner Rollenspieltage
          </h1>
          <p
            class="h-center"
            style="font-size: 60px; grid-row-start: 13;"
          >
            23. + 24. August 2026
          </p>
        </Page>
      </Pages>
    </>
  );
}
