import { Head } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export default function Error404(): JSX.Element {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <h1>404 - Page not found</h1>
    </>
  );
}
