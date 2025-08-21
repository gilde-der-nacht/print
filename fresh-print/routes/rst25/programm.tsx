import { Head } from "$fresh/runtime.ts";
import type { Handlers, PageProps } from "$fresh/server.ts";
import type { JSX } from "preact";
import { Page } from "#/components/Page.tsx";
import { Pages } from "#/components/Pages.tsx";

export const gameTags = [
  {
    name: "ab6jahren",
    label: "Ab 6 Jahren",
  },
  {
    name: "ab12jahren",
    label: "Ab 12 Jahren",
  },
  {
    name: "ab18jahren",
    label: "Ab 18 Jahren",
  },
  {
    name: "fantasy",
    label: "Fantasy",
  },
  {
    name: "sciencefiction",
    label: "Science Fiction",
  },
  {
    name: "postapokalyptisch",
    label: "Postapokalyptisch",
  },
  {
    name: "horror",
    label: "Horror",
  },
  {
    name: "offenewelt",
    label: "Offene Welt",
  },
  {
    name: "gemeinsamespielleitung",
    label: "Gemeinsame Spielleitung",
  },
  {
    name: "regelleicht",
    label: "Regelleicht",
  },
  {
    name: "deutsch",
    label: "Deutsch",
  },
  {
    name: "englisch",
    label: "Englisch",
  },
  {
    name: "workshop",
    label: "Workshop",
  },
];

type GameRound = {
  uuid: string;
  title: null | string;
  system: string;
  master: { name: string };
  playerCount: PlayerCount;
  slot: Slot;
  tagNames: string[];
  players: { name: string }[];
};

type PlayerCount = {
  min: number;
  max: number;
};

type Slot = {
  day: DayEnum;
  from: number;
  to: number;
};

type DayEnum = "SATURDAY" | "SUNDAY" | "EMPTY";

type Data = {
  saturday: { [hour: string]: GameRound[] };
  sunday: { [hour: string]: GameRound[] };
};

const emptyEntry = {
  uuid: "empty",
  title: null,
  system: "",
  master: { name: "" },
  playerCount: {
    min: 3,
    max: 6,
  },
  slot: {
    day: "EMPTY",
    from: 0,
    to: 0,
  },
  tagNames: [],
  players: [],
} satisfies GameRound;

export const handler: Handlers<GameRound[]> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const secret = url.searchParams.get("secret");

    if (secret === null || secret.length === 0) {
      return ctx.render([{
        uuid: "uuid",
        title: "Demo Title",
        system: "Demo System",
        master: { name: "Firstname Lastname" },

        playerCount: {
          min: 3,
          max: 4,
        },
        slot: {
          day: "SUNDAY",
          from: 10,
          to: 12,
        },
        tagNames: ["ab6Jahren"],
        players: [{ name: "First Player" }, { name: "Second Player" }],
      }, { ...emptyEntry }]);
    }
    const response = await fetch(
      "https://elysium.gildedernacht.ch/rst25/program/data?secret=" + secret,
    );
    const data = await response.json() as Data;
    console.log(data);
    const rounds = [
      ...Object.values(data.saturday),
      ...Object.values(data.sunday),
      { ...emptyEntry },
      { ...emptyEntry },
      { ...emptyEntry },
      { ...emptyEntry },
      { ...emptyEntry },
      { ...emptyEntry },
      { ...emptyEntry },
      { ...emptyEntry },
    ].flat().reduce<GameRound[]>((acc, curr) => {
      if (curr.playerCount.max > 6) {
        const newCurr = {
          ...curr,
          playerCount: { ...curr.playerCount, max: 6 },
        } satisfies GameRound;
        return [...acc, newCurr, { ...newCurr, players: [] }];
      }
      return [...acc, curr];
    }, []);

    return ctx.render(rounds);
  },
};

function ProgramSlot(props: { entry: GameRound }): JSX.Element {
  const entry = props.entry;
  const playerRange = [...Array(entry.playerCount.max).keys()];
  const players = playerRange.map((i) => {
    const player = entry.players[i];
    return player?.name ?? "&nbsp;";
  });

  return (
    <Page event="RST" year={2025}>
      <div style="grid-column-end: 18;">
        {entry.title === null ? <h1>{entry.system}</h1> : (
          <>
            <h5>
              <em>{entry.system}</em>
            </h5>
            <h3>{entry.title}</h3>
          </>
        )}
        <p>
          {entry.slot.day === "EMPTY"
            ? (
              <strong>
                &nbsp;
              </strong>
            )
            : (
              <strong>
                {entry.slot.day === "SATURDAY" ? "Samstag" : "Sonntag"},{" "}
                {entry.slot.from} - {entry.slot.to} Uhr
              </strong>
            )}
          <br />
          {entry.master.name}
        </p>
      </div>
      <div
        class="box h-center"
        style="grid-column-start: 19; grid-row-end: span 5;"
      >
        <h2 style="color: var(--clr-accent);">Tisch</h2>
      </div>

      <ul class="no-list space-list" style="grid-row: 9 / span 1;">
        {players.map((player) => (
          <li class="space" dangerouslySetInnerHTML={{ __html: player }}>
          </li>
        ))}
      </ul>
      <small style="grid-row-start: 22;">
        Kategorien:{" "}
        <em>
          {entry.tagNames.map((tag) =>
            (gameTags.find((t) => t.name === tag))!.label
          ).join(
            ", ",
          )}
        </em>
      </small>
    </Page>
  );
}

export default function Home({ data }: PageProps<GameRound[]>): JSX.Element {
  return (
    <>
      <Head>
        <title>Programm</title>
      </Head>
      <Pages orientation="landscape">
        {data.map((entry) => <ProgramSlot key={entry.uuid} entry={entry} />)}
      </Pages>
    </>
  );
}
