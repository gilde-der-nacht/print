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
    <div style="display: grid; grid-template-columns: 2fr 1fr; grid-template-rows: 100px 1fr; padding: 10px 20px; margin-block-end: -20px;">
      <h3>{number}</h3>
      <h3 style="border-left: 1px solid black; text-align: right;">
        {number}
      </h3>
      <div style="position: relative; inset-block-start: -40px;">
        <p class="checkbox reset big">Pad Thai</p>
        <p class="checkbox reset big">Risotto</p>
        <p class="checkbox reset big">Pilzrisotto</p>
        <hr />
        <div style="display: flex; gap: 1rem;">
          <p class="checkbox reset">Mittag</p>
          <p class="checkbox reset">Abend</p>
        </div>
      </div>
    </div>
  );
}

function OnePage(props: { offset: number; perPage: number }): JSX.Element {
  const range = [...Array(props.perPage).keys()].map((i) => i + props.offset);
  return (
    <Page logo={false}>
      <div
        class="every-row every-column"
        style="padding: 15px; display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(5, 1fr); gap: 0;"
      >
        {range.map((n) => <Part key={n} n={n} />)}
      </div>
    </Page>
  );
}

export default function Home({ data }: PageProps<Data>): JSX.Element {
  const untilNumber = 200;
  const entriesPerPage = 8;
  const numOfPages = Math.ceil(untilNumber / entriesPerPage);
  const pagesRange = [...Array(numOfPages).keys()];
  return (
    <>
      <Head>
        <title>Bestellzettel</title>
      </Head>
      <Pages orientation="portrait">
        {pagesRange.map((page) => (
          <OnePage
            offset={data.offset + (entriesPerPage * page)}
            perPage={entriesPerPage}
          />
        ))}
      </Pages>
    </>
  );
}
