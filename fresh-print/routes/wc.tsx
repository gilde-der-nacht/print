import { Logo } from "../components/Logo.tsx";
import { Pattern } from "../components/pattern.tsx";

export default function Home() {
  return (
    <div class="quer">
      <Pattern />
      <p
        class="h-center every-column"
        style="font-size: 60px; grid-row: 10 / span 2"
      >
        Wir sehen uns nächstes Jahr
      </p>
      <h1
        class="h-center every-column"
        style="font-size: 70px; grid-row: 11 / span 4"
      >
        22. + 23. März 2025
      </h1>
      <Logo />
    </div>
  );
}
