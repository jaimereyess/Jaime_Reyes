import Image from "next/image";
import { FaCode } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import "./card.css";
import Link from "next/link";

interface CardProps {
  img: string;
  title: string;
  description: React.ReactNode;
  code: string;
  web?: string;
}

export const Card = ({ img, title, description, code, web }: CardProps) => {
  return (
    <div className="relative flex flex-wrap flex-col rounded-xl bg-slate-100/50 text-gray-700 dark:text-white dark:bg-slate-800/60">
      <div
        className="relative mx-4 -mt-6 rounded-xl bg-blue-gray-500 bg-clip-border
                                text-white shadow-lg shadow-blue-gray-500/40 duration-300 overflow-hidden"
      >
        <Image
          src={img}
          alt={title}
          width={500}
          height={500}
          className="object-cover h-48"
        />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h5>
        <div className="flex flex-wrap gap-5 justify-center">{description}</div>
      </div>
      <div className="p-6 pt-0 flex justify-around flex-col gap-2 md:flex-row">
        <Link href={code} target="_blank" className="button-card ">
          {<FaCode size={20} />}
        </Link>
        {web && (
          <Link href={web} target="_blank" className="button-card">
            {<FaMagnifyingGlass size={20} />}
          </Link>
        )}
      </div>
    </div>
  );
};
