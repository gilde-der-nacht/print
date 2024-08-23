import { Head } from "$fresh/runtime.ts";
import { Logo } from "../components/Logo.tsx";
import { Page } from "../components/Page.tsx";
import { Pages } from "../components/Pages.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nächstes Jahr</title>
      </Head>
      <Pages orientation="landscape">
        <Page>
          <h1
            class="h-center every-column"
            style="font-size: 100px; grid-row-start: 7;"
          >
            Herzlich willkommen
          </h1>
          <Logo />
        </Page>
      </Pages>
    </>
  );
}
