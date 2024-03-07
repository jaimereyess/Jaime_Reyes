import Link from "next/link";

export const Footer = () => {
  return (
    <footer className=" p-4 text-center w-full shadow-2xl shadow-gray-800 dark:shadow-gray-100">
      <section className="flex flex-col flex-wrap items-center md:flex-row md:justify-around gap-5 font-medium">
        <h6>Jaime Reyes Rodríguez</h6>
        <Link
          href={"https://linkedin.com/in/jaime-reyes-rodríguez"}
          target="_blank"
          className="px-6 py-2 underline rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
        >
          LinkedIn
        </Link>

        <Link
          href={"https://github.com/jaimereyess"}
          target="_blank"
          className="px-6 py-2 underline rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
        >
          GitHub
        </Link>

        <span>jaimereyesrdgz@gmail.com</span>
      </section>
    </footer>
  );
};
