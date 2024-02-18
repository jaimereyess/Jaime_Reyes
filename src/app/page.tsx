import type { Metadata } from "next";
import {
  Greeting,
  ArrowScroll,
  Menu,
  ProyectList,
  Footer,
  ThemeSwitcher,
  Skills,
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
        <span className="absolute top-5 right-5 md:right-10">
          <ThemeSwitcher />
        </span>
      </section>

      <section
        className="flex flex-col justify-center p-10 h-screen md:p-24"
        id="inicio"
      >
        <Greeting />
      </section>

      <ArrowScroll />

      <section id="skills" className="flex flex-col items-center top-10">
        <h2 className="pt-16 text-4xl md:text-6xl mb-6">Tecnologías</h2>
        <article className="flex flex-wrap gap-10 justify-center align-middle">
          <Skills />
        </article>
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
