// import { api } from "~/utils/api";

import { cn } from "~/utils/ui";

export default function Home() {
  // const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <section className={cn("min-h-screen")}>
      <div className={cn("flex items-center justify-center p-24")}>
        <h1
          className={cn(
            "text-7xl uppercase tracking-widest",
            "inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent",
          )}
        >
          Randomizer
        </h1>
      </div>
    </section>
  );
}
