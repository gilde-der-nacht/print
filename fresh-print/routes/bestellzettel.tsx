import { Handlers, PageProps } from "$fresh/server.ts";
import { JSX } from "preact";
import { Pattern } from "../components/pattern.tsx";

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

export default function Home({ data }: PageProps<Data>) {
  const range = [...Array(10).keys()].map((i) => i + data.offset);
  return (
    <div class="hoch">
      <Pattern />
      <div
        class="every-row every-column"
        style="display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(5, 1fr);"
      >
        {range.map((n) => <Part n={n} />)}
      </div>
    </div>
  );
}
