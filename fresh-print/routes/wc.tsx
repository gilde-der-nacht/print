import { Head } from "$fresh/runtime.ts";
import type { JSX } from "preact";
import { Page } from "../components/Page.tsx";
import { Pages } from "../components/Pages.tsx";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>WC</title>
      </Head>
      <Pages orientation="portrait">
        <Page>
          <h1
            class="h-center"
            style="font-size: 350px; grid-row-start: 2; text-transform: lowercase;"
          >
            WC
          </h1>
          <div class="h-center" style="grid-row-start: 13;">
            <img
              src="/arrow.svg"
              height="300"
              width="300"
              style="transform: rotate(45deg);"
            />
          </div>
        </Page>
      </Pages>
    </>
  );
}
