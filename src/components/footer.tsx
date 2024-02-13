import Link from "next/link";

export const Footer = () => {
  return (
    <footer className=" p-4 text-center w-full shadow-2xl shadow-gray-800 dark:shadow-gray-100">
      <section className="flex flex-col flex-wrap items-center md:flex-row md:justify-around gap-5 font-medium">
        <h6>Jaime Reyes Rodríguez</h6>
        <Link
          href={"https://linkedin.com/in/jaime-reyes-rodríguez"}
          className="bg-blue-200 hover:bg-blue-300 rounded-xl px-3 w-40 py-2 text-black"
        >
          LinkedIn
        </Link>
        <Link
          href={"https://github.com/jaimereyess"}
          className="bg-purple-200 hover:bg-purple-300 rounded-xl w-40 py-2 text-black"
        >
          GitHub
        </Link>
        <span>jaimereyesrdgz@gmail.com</span>
      </section>
    </footer>
  );
};
