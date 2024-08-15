import { ModeToggle } from "@/components/mode-toggle";

export default () => {
  return (
    <section className="flex h-dvh w-dvw flex-col items-center justify-center p-4 text-center">
      <h1 className="mb-4 text-center font-extrabold text-2xl text-foreground">
        I'm Ready to Create! 🔥
      </h1>
      <ModeToggle />
    </section>
  );
};
