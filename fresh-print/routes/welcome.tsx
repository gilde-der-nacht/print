import { Logo } from "../components/Logo.tsx";
import { Pattern } from "../components/pattern.tsx";

export default function Home() {
  return (
    <div class="quer">
      <Pattern />
      <h1
        class="h-center"
        style="font-size: 100px; grid-column: 1 / -1; grid-row: 7 / span 4"
      >
        Herzlich willkommen
      </h1>
      <Logo />
    </div>
  );
}
