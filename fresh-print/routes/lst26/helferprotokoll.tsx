import { Head } from "$fresh/runtime.ts";
import type { JSX } from "preact";
import { Page } from "#/components/Page.tsx";
import { Pages } from "#/components/Pages.tsx";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Helferprotokoll</title>
      </Head>
      <Pages orientation="portrait">
        <Page logo={false}>
          <h2>Helfer</h2>
          <div style="grid-row-start: 3;">
            <p class="line">Name & T-Shirt-Grösse</p>
            <p class="line"></p>
            <p class="line"></p>
            <p class="line"></p>
            <p class="line"></p>
            <p class="line"></p>
            <p class="line"></p>
            <p class="line"></p>
            <p class="line"></p>
            <p class="line"></p>
            <p class="line"></p>
            <p class="line"></p>
            <p class="line"></p>
            <p class="line"></p>
            <p class="line"></p>
            <p class="line"></p>
            <p class="line"></p>
            <p class="line"></p>
            <p class="line"></p>
            <p class="line"></p>
            <p class="line"></p>
            <p class="line"></p>
            <p class="line"></p>
            <p class="line"></p>
            <p class="line"></p>
          </div>
        </Page>
      </Pages>
    </>
  );
}
