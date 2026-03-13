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
  "Kuki",
  "Harald",
  "Marina",
  "Andi",
  "Luciano",
  "Sandro",
  "Patrick",
  "Kurt",
  "Matthias",
  "Christian",
  "Peter",
  "Tobias",
  "Sacha",
  "Renato",
  "Armin",
  "Jeremy",
  "René",
  "Fabian",
  "Raphael",
  "Marco",
  "Jonathan",
  "Matthias",
  "Heinz",
  "Henrik Amalia",
  "Jeremy",
  "Juri",
  "Anna",
  "Jonas",
  "Lionel",
].concat([
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
]);

const HEIGHT = "42mm";
const WIDTH = "75mm";

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
      <h3>{props.entry.name} &nbsp;</h3>
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
        style={`margin: auto; display: grid; grid-template-columns: repeat(2, ${WIDTH}); grid-template-rows: repeat(6, ${HEIGHT});`}
      >
        {props.entries.map((entry) => <Part entry={entry} key={entry.name} />)}
      </div>
    </Page>
  );
}

export default function Home({ data }: PageProps<Data>): JSX.Element {
  const entriesPerPage = 12;
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
