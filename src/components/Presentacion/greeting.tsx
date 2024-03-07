import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Text } from "./text";

const font = Montserrat({
  weight: "500",
  subsets: ["latin"],
});

export const Greeting = () => {
  return (
    <main className={` flex flex-col md:flex-row md:justify-between`}>
      <div className="flex flex-col mb-6 md:mb-0 md:w-2/3">
        <span className="flex gap-2 text-4xl font-semibold">
          Hey!
          <Image
            src="/waving-hand.png"
            width={40}
            height={50}
            alt="greetings"
            priority
          />
        </span>
        <h1 className="text-8xl font-bold mt-2">
          <span
            className={`${font.className} bg-gradient-to-r from-purple-500 via-blue-500 via-65%
        to-green-500 text-transparent bg-clip-text py-2`}
          >
            Jaime Reyes
          </span>
        </h1>
        <article className="mt-2 font-semibold">
          <span className="text-purple-400 text-xl md:text-2xl">
            Desarrollador Web
          </span>
        </article>
      </div>
      <article className="flex flex-col md:w-1/3 justify-end mt-20">
        <Text />
        <div className="flex flex-col gap-2 mt-10 md:items-end">
          <section className="flex flex-wrap space-x-10 md:mt-20 lg:mt-0">
            <Link
              href={"https://github.com/jaimereyess"}
              className="border rounded-lg shadow-md p-2
                        shadow-purple-200 border-white hover:bg-purple-200 hover:text-black"
            >
              <FaGithub size={30} />
            </Link>
            <Link
              href={"https://linkedin.com/in/jaime-reyes-rodríguez"}
              className="border rounded-lg shadow-md p-2
                        shadow-blue-200 border-white hover:bg-blue-200 hover:text-black "
            >
              <FaLinkedinIn size={30} />
            </Link>
          </section>
          <span>jaimereyesrdgz@gmail.com</span>
        </div>
      </article>
    </main>
  );
};
