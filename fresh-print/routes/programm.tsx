import { Head } from "$fresh/runtime.ts";
import type { Handlers, PageProps } from "$fresh/server.ts";
import type { JSX } from "preact";
import { Page } from "../components/Page.tsx";
import { Pages } from "../components/Pages.tsx";

type GameRound = {
  uuid: string;
  description: null | string;
  title: null | string;
  system: string;
  master: Master;
  playerCount: PlayerCount;
  slot: Slot;
  players: string[];
};

type Master = {
  first: string;
  last: null | string;
};

type PlayerCount = {
  min: number;
  max: number;
};

type Slot = {
  day: DayEnum;
  start: number;
  end: number;
};

type DayEnum = "SATURDAY" | "SUNDAY" | "EMPTY";

type Data = {
  saturday: { [key: string]: GameRound[] };
  sunday: { [key: string]: GameRound[] };
};

const emptyEntry = {
  uuid: "empty",
  description: null,
  title: null,
  system: "",
  master: {
    first: "",
    last: "",
  },
  playerCount: {
    min: 3,
    max: 6,
  },
  slot: {
    day: "EMPTY",
    start: 0,
    end: 0,
  },
  players: [],
} satisfies GameRound;

export const handler: Handlers<GameRound[]> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const secret = url.searchParams.get("secret");

    if (secret === null || secret.length === 0) {
      return ctx.render([{
        uuid: "uuid",
        description: null,
        title: "Demo Title",
        system: "Demo System",
        master: {
          first: "Firstname",
          last: "Lastname",
        },
        playerCount: {
          min: 3,
          max: 4,
        },
        slot: {
          day: "SUNDAY",
          start: 10,
          end: 12,
        },
        players: ["First Player", "Second Player"],
      }, { ...emptyEntry }]);
    }
    const response = await fetch(
      "https://elysium.gildedernacht.ch/rst24/program/data?secret=" + secret,
    );
    const data = await response.json() as Data;
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
    return player ?? "&nbsp;";
  });

  return (
    <Page>
      <div style="grid-column-end: 18;">
        {entry.title === null ? <h1>{entry.system}</h1> : (
          <>
            <h4>
              <em>{entry.system}</em>
            </h4>
            <h1>{entry.title}</h1>
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
                {entry.slot.start} - {entry.slot.end} Uhr
              </strong>
            )}
          <br />
          {entry.master.first} {entry.master.last}
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
        {data.map((entry) => <ProgramSlot entry={entry} />)}
      </Pages>
    </>
  );
}
