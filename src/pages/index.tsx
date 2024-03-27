// import { api } from "~/utils/api";

import { cn } from "~/utils/ui";
import { Button } from "~/components/ui/button";

export default function Home() {
  // const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <section>
      <div
        className={cn(
          "flex min-h-dvh flex-col items-center justify-center gap-20 p-24",
        )}
      >
        <h1
          className={cn(
            "text-7xl uppercase tracking-widest",
            "inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent",
          )}
        >
          Randomizer
        </h1>

        <Button>Spin the wheel!</Button>
      </div>
    </section>
  );
}
