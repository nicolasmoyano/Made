import Hero from "./_components/Hero";
import MainNav from "./_components/MainNav";
import Process from "./_components/Process/Process";
import { ModeToggle } from "./_components/toggle-mode";

export default function Home() {
  return (
    <>
    <div className="container pb-40 mt-10 mx-auto">
      <div className="fixed mx-auto left-5 ">
        <MainNav />
      </div>
      <div className="fixed top-4 right-4">
        <ModeToggle />
      </div>
    </div>
      <main className="flex flex-col items-center justify-between p-8">
        <Hero />
        <div className="pt-40">
          <Process />
        </div>
        <div className="pt-40">
          <Process />
        </div>
      </main>
    </>
  );
}
