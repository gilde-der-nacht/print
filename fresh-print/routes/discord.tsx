import { Head } from "$fresh/runtime.ts";
import type { JSX } from "preact";
import { Page } from "../components/Page.tsx";
import { Pages } from "../components/Pages.tsx";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Discord</title>
      </Head>
      <Pages orientation="landscape">
        <Page>
          <div class="h-center" style="grid-row-start: 4;">
            <img
              src="/Discord-Logo.svg"
              style="z-index: 1; transform: scale(1.8);"
            />
          </div>
          <p
            class="h-center"
            style="font-size: 57px; grid-row-start: 7; line-height: 1.3em;"
          >
            Diskutiere direkt mit den Organisatoren und anderen
            Spielinteressierten auf Discord.
          </p>
          <h1
            class="h-center"
            style="font-size: 60px; grid-row-start: 16; text-transform: lowercase;"
          >
            rollenspieltage.ch/chat
          </h1>
        </Page>
      </Pages>
    </>
  );
}
