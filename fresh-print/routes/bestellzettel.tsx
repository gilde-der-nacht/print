import { Handlers, PageProps } from "$fresh/server.ts";
import { JSX } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Pages } from "../components/Pages.tsx";
import { Page } from "../components/Page.tsx";

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
    <div style="display: grid; grid-template-columns: 2fr 1fr; grid-template-rows: 100px 1fr; padding: 10px 20px;">
      <h3>{number}</h3>
      <h3 style="border-left: 1px solid black; text-align: right;">
        {number}
      </h3>
      <div>
        <p class="checkbox reset">Pilzrisotto</p>
        <p class="checkbox reset">Penne All'Arrabbiata</p>
        <p class="checkbox reset">Penne Pesto</p>
      </div>
    </div>
  );
}

function OnePage(props: { offset: number }): JSX.Element {
  const range = [...Array(10).keys()].map((i) => i + props.offset);
  return (
    <Page>
      <div
        class="every-row every-column"
        style="padding: 15px; display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(5, 1fr);"
      >
        {range.map((n) => <Part n={n} />)}
      </div>
    </Page>
  );
}

export default function Home({ data }: PageProps<Data>) {
  const untilNumber = 200;
  const entriesPerPage = 10;
  const numOfPages = Math.ceil(untilNumber / entriesPerPage);
  const pagesRange = [...Array(numOfPages).keys()];
  return (
    <>
      <Head>
        <title>Preisliste</title>
      </Head>
      <Pages orientation="portrait">
        {pagesRange.map((page) => (
          <OnePage offset={data.offset + (entriesPerPage * page)} />
        ))}
      </Pages>
    </>
  );
}
