import { Card } from "./card";
import {
  ReactTag,
  TypescriptTag,
  TailwindTag,
  NextTag,
  JavaScriptTag,
  ViteTag,
} from "./tags";

export const ProyectList = () => {
  return (
    <section className="p-10 flex flex-col items-center ">
      <h2 className="title text-4xl md:text-6xl mb-6">Proyectos</h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Card
          img={"/news.jpeg"}
          title="Game News"
          description={
            <>
              <ReactTag /> <JavaScriptTag /> <TailwindTag />
              <ViteTag />
            </>
          }
          code={"https://github.com/jaimereyess/game-news"}
          web={"https://game-news-jaime.vercel.app/"}
        />
        <Card
          img={"/periodic.jpg"}
          title="Tabla periódica"
          description={
            <>
              <ReactTag />
              <TypescriptTag />
              <TailwindTag />
              <NextTag />
            </>
          }
          code={"https://github.com/jaimereyess/periodic-table"}
          web={"https://periodic-table-jaimereyess.vercel.app/"}
        />
        <Card
          img={"/words.jpeg"}
          title="Word Counter"
          description={
            <>
              <ReactTag />
              <JavaScriptTag />
              <TailwindTag />
              <ViteTag />
            </>
          }
          code={"https://github.com/jaimereyess/Word-counter"}
          web={"https://jaimereyess.github.io/Word-counter/"}
        />
        <Card
          img={"/calendar.jpg"}
          title="Calendario"
          description={
            <>
              <ReactTag />
              <JavaScriptTag /> <TailwindTag />
              <NextTag />
            </>
          }
          code={"https://github.com/jaimereyess/calendar-asir"}
        />
        <Card
          img={"/portfolio.png"}
          title="Jaime Reyes"
          description={
            <>
              <ReactTag /> <TypescriptTag /> <TailwindTag />
              <NextTag />
            </>
          }
          code={"https://github.com/jaimereyess/portfolio"}
          web={""}
        />
      </div>
    </section>
  );
};
