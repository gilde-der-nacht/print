import { Head } from "$fresh/runtime.ts";
import type { JSX } from "preact";
import { Page } from "#/components/Page.tsx";
import { Pages } from "#/components/Pages.tsx";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Flohmarktprotokoll</title>
      </Head>
      <Pages orientation="portrait">
        <Page logo={false}>
          <style>
            {`
            .heading {
              display: grid;
              grid-template-columns: max-content max-content 1fr;
              gap: 1rem;

              span {
                position: relative;
                padding-inline-end: 1rem;
              }

              span::after {
                content: '';
                display: block;
                height: 100vh;
                border-left: 1px dotted gray;
                position: absolute;
                right: 0;
              }
            }
          `}
          </style>
          <h2>Flohmarktprotokoll</h2>
          <div style="grid-row-start: 3;">
            <p class="heading">
              <span>Übertragen auf PC</span>
              <span>Artikel-Nummer</span>
              <span>Verkauft für CHF</span>
            </p>
            <p class="line checkbox"></p>
            <p class="line checkbox"></p>
            <p class="line checkbox"></p>
            <p class="line checkbox"></p>
            <p class="line checkbox"></p>
            <p class="line checkbox"></p>
            <p class="line checkbox"></p>
            <p class="line checkbox"></p>
            <p class="line checkbox"></p>
            <p class="line checkbox"></p>
            <p class="line checkbox"></p>
            <p class="line checkbox"></p>
            <p class="line checkbox"></p>
            <p class="line checkbox"></p>
            <p class="line checkbox"></p>
            <p class="line checkbox"></p>
            <p class="line checkbox"></p>
            <p class="line checkbox"></p>
            <p class="line checkbox"></p>
            <p class="line checkbox"></p>
            <p class="line checkbox"></p>
            <p class="line checkbox"></p>
            <p class="line checkbox"></p>
            <p class="line checkbox"></p>
          </div>
        </Page>
      </Pages>
    </>
  );
}
