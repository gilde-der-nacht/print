import { Head } from "$fresh/runtime.ts";
import type { JSX } from "preact";
import { Page } from "../components/Page.tsx";
import { Pages } from "../components/Pages.tsx";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Willkommen</title>
      </Head>
      <Pages orientation="landscape">
        <Page>
          <h1
            class="h-center every-column"
            style="font-size: 100px; grid-row-start: 7;"
          >
            Herzlich willkommen
          </h1>
        </Page>
      </Pages>
    </>
  );
}
