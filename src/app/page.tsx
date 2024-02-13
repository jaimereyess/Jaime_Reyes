import type { Metadata } from "next";
import {
  Technologies,
  Greeting,
  ArrowScroll,
  Menu,
  ProyectList,
  Footer,
  ThemeSwitcher,
} from "@/components/index";

export const metadata: Metadata = {
  title: "Jaime Reyes",
  description: "Página principal portfolio",
};

export default function HomePage() {
  return (
    <>
      <section className="fixed top-5 w-full z-10 flex">
        <Menu />
        <div className="mr-20">
          <ThemeSwitcher />
        </div>
      </section>

      <section
        className="flex flex-col justify-center p-10 h-screen md:p-24"
        id="inicio"
      >
        <Greeting />
      </section>

      <ArrowScroll />

      <section
        id="skills"
        className="lg:flex lg:justify-center lg:items-center lg:h-screen"
      >
        <Technologies />
      </section>

      <section id="proyectos" className="mt-40">
        <article className="pt-10">
          <ProyectList />
        </article>
      </section>

      <Footer />
    </>
  );
}
