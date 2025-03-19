import type { Handlers, PageProps } from "$fresh/server.ts";
import type { JSX } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Pages } from "#/components/Pages.tsx";
import { Page } from "#/components/Page.tsx";

type Data = {
  offset: number;
};

type Entry = {
  name: string;
  ok: boolean;
};

const ok = [
  "Adrian",
  "Pascal",
  "Alain",
  "Michelle",
  "Thomas",
  "Tito",
  "Ursula",
  "Oliver",
];

const helper = [
  "Andrea",
  "Mario",
  "Fadri",
  "Tobias",
  "Luciano",
  "Jeremy",
  "Christian",
  "Aneska",
  "Sacha",
  "Michaela",
  "Kuki",
  "Nadja",
  "Raphael",
  "Alexander",
  "Jonas",
  "Peter",
  "Richard",
  "Crislaine",
  "Penélope",
  "Sofi",
  "René",
  "Juri",
  "Patrick",
  "Matthias",
  "Armin",
  "Tobias",
  "Basil",
  "Simeon",
  "Sandro",
  "Alessandro",
  "Demian",
  "Marco",
  "Fabian",
  "Renato",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

const all = ok.map((name) => ({ name, ok: true })).concat(
  helper.map((name) => ({ name, ok: false })),
) satisfies Entry[];

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const offset = Number(url.searchParams.get("offset") ?? "0");
    return ctx.render({ offset });
  },
};

function Part(props: { entry: Entry }): JSX.Element {
  return (
    <div style="padding: 30px 25px; border: 1px solid lightgray;">
      <h3>{props.entry.name}</h3>
      <p style="color: gray; margin-block-start: 10px;">
        {props.entry.ok ? "Organisationskomitee" : "Helfer:in"}
      </p>
    </div>
  );
}

function OnePage(props: { entries: Entry[] }): JSX.Element {
  return (
    <Page logo={false}>
      <div
        class="every-row every-column"
        style="margin: auto; display: grid; grid-template-columns: repeat(2, 90mm); grid-template-rows: repeat(5, 54mm);"
      >
        {props.entries.map((entry) => <Part entry={entry} />)}
      </div>
    </Page>
  );
}

export default function Home({ data }: PageProps<Data>): JSX.Element {
  const entriesPerPage = 10;
  const numOfPages = Math.ceil(all.length / entriesPerPage);
  const pagesRange = [...Array(numOfPages).keys()];
  return (
    <>
      <Head>
        <title>Namenstafeln</title>
      </Head>
      <Pages orientation="portrait">
        {pagesRange.map((page) => (
          <OnePage
            entries={all.slice(
              (page + data.offset) * entriesPerPage,
              (page + 1 + data.offset) * entriesPerPage,
            )}
          />
        ))}
      </Pages>
    </>
  );
}
