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
          <p
            class="h-center every-column"
            style="font-size: 60px; grid-row-start: 10"
          >
            Wir sehen uns nächstes Jahr
          </p>
          <h1
            class="h-center every-column"
            style="font-size: 70px; grid-row-start: 13 "
          >
            22. + 23. März 2025
          </h1>
          <Logo />
        </Page>
      </Pages>
    </>
  );
}
