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
  page: number;
  pageTotal: number;
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
  publicEntries: {
    uuid: string;
    myEntry: boolean;
    title: string;
    system: string;
    organizer: string;
    shortDescription: string;
    longDescription: string;
    participation: {
      seats: {
        max: number;
      };
      reserved: {
        name: string;
      }[];
    };
    timeSlot: {
      uuid: string;
      slot: {
        start: {
          day: string;
          time: string;
        };
        duration: { hours: number };
      };
    };
    tagNames: (string)[];
    language: "Deutsch" | "Englisch";
    links: {
      label: string;
      link: string;
    }[];
    isClosed: boolean;
  }[];
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
  page: 1,
  pageTotal: 1,
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
        page: 1,
        pageTotal: 1,
      }, { ...emptyEntry }]);
    }
    const response = await fetch(
      "https://elysium.gildedernacht.ch/rst26/program?secret=" + secret,
    );
    const data = await response.json() as Data;
    console.log(data);
    const rounds = [
      ...data.publicEntries,
      { ...emptyEntry },
      { ...emptyEntry },
      { ...emptyEntry },
      { ...emptyEntry },
      { ...emptyEntry },
      { ...emptyEntry },
      { ...emptyEntry },
      { ...emptyEntry },
    ].flat().reduce<GameRound[]>((acc, curr): GameRound[] => {
      const currentGameRound = "playerCount" in curr ? curr : ({
        master: { name: curr.organizer },
        playerCount: {
          min: 1,
          max: curr.participation.seats.max,
        },
        players: curr.participation.reserved,
        system: curr.system,
        tagNames: curr.tagNames,
        title: curr.title,
        uuid: curr.uuid,
        slot: {
          day: curr.timeSlot.slot.start.day === "2026-08-22"
            ? "SATURDAY"
            : "SUNDAY",
          from: Number(curr.timeSlot.slot.start.time.substring(0, 2)),
          to: Number(curr.timeSlot.slot.start.time.substring(0, 2)) +
            curr.timeSlot.slot.duration.hours,
        },
        page: 1,
        pageTotal: Math.ceil(curr.participation.seats.max / 6),
      } satisfies GameRound);

      if (currentGameRound.playerCount.max > 6) {
        let remaining = currentGameRound.playerCount.max;
        const pages: GameRound[] = [];
        const players: { name: string }[] = currentGameRound.players;

        while (remaining !== 0) {
          pages.push(
            {
              ...currentGameRound,
              playerCount: {
                ...currentGameRound.playerCount,
                max: remaining > 6 ? 6 : remaining,
              },
              players: players.slice(pages.length * 6, pages.length * 6 + 6),
              page: pages.length + 1,
            } satisfies GameRound,
          );
          remaining = remaining > 6 ? remaining - 6 : 0;
        }
        return [
          ...acc,
          ...pages,
        ];
      }

      return [...acc, currentGameRound];
    }, []);

    return ctx.render(rounds.toSorted((a, b) => {
      if (a.slot.day !== b.slot.day) {
        if (a.slot.day === "SATURDAY") {
          return -1;
        }
        return 1;
      }
      if (a.slot.from !== b.slot.from) {
        return a.slot.from - b.slot.from;
      }
      return a.slot.to - b.slot.to;
    }));
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
    <Page event="RST" year={2026}>
      <div style="grid-column-end: 18;">
        {entry.title === null ? <h1>{entry.system}</h1> : (
          <>
            {entry.system !== entry.title
              ? (
                <h5>
                  <em>{entry.system}</em>
                </h5>
              )
              : null}
            <h3>
              {entry.title}{" "}
              {entry.pageTotal > 1 ? `(${entry.page}/${entry.pageTotal})` : ""}
            </h3>
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
          {entry.tagNames.join(
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
