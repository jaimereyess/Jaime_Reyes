import Fruits from "../skills";
import { Icons } from "./icons";

export const Technologies = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="title text-4xl md:text-6xl mb-6">Tecnologías</h2>
      <section className="flex flex-wrap gap-10 justify-center align-middle">
        <Fruits />
      </section>
    </section>
  );
};
