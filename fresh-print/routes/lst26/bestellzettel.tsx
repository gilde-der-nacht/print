import type { Handlers, PageProps } from "$fresh/server.ts";
import type { JSX } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Pages } from "#/components/Pages.tsx";
import { Page } from "#/components/Page.tsx";

type Data = {
  offset: number;
};

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const offset = Number(url.searchParams.get("offset") ?? "1");
    return ctx.render({ offset });
  },
};

function Part(props: { n: number }): JSX.Element {
  const number = props.n.toFixed().padStart(3, "0");
  return (
    <div style="display: grid; grid-template-columns: 2fr 1fr; grid-template-rows: max-content max-content; padding: 10px 20px; gap: 0.5rem;">
      <h3 style="border-right: 1px solid black;">
        {number}
        <span style="font-size: 12px; margin-inline-start: 0rem; border-block-end: 1px dotted black; padding-inline-end: 80px;">
          Tag, Zeit:
        </span>
      </h3>
      <h3 style="text-align: right;">
        {number}
      </h3>
      <div style="border-right: 1px solid black; font-size: 0.7em; display: flex; flex-wrap: wrap; gap: 0.75rem;">
        <p class="checkbox reset">
          Lasagne
        </p>
        <p class="checkbox reset">
          Spinatlasagne
        </p>
        <p class="checkbox reset">
          Chili
        </p>
        <p class="checkbox reset">
          Chili (vegan)
        </p>
        <p class="checkbox reset">
          Suppe, Tacos, Speck
        </p>
        <p class="checkbox reset">
          Suppe, Tacos (vegan)
        </p>
      </div>
    </div>
  );
}

function OnePage(props: { offset: number }): JSX.Element {
  const range = [...Array(10).keys()].map((i) => i + props.offset);
  return (
    <Page logo={false}>
      <div
        class="every-row every-column"
        style="padding: 15px; display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(5, 1fr);"
      >
        {range.map((n) => <Part n={n} key={n} />)}
      </div>
    </Page>
  );
}

export default function Home({ data }: PageProps<Data>): JSX.Element {
  const untilNumber = 200;
  const entriesPerPage = 10;
  const numOfPages = Math.ceil(untilNumber / entriesPerPage);
  const pagesRange = [...Array(numOfPages).keys()];
  return (
    <>
      <Head>
        <title>Bestellzettel</title>
      </Head>
      <Pages orientation="portrait">
        {pagesRange.map((page) => (
          <OnePage offset={data.offset + (entriesPerPage * page)} />
        ))}
      </Pages>
    </>
  );
}
