import {
    SiNextdotjs, SiTailwindcss, SiVite,
    SiJavascript, SiTypescript, SiReact,

} from "react-icons/si";

const style = `text-xs inline-flex items-center font-bold leading-sm  px-3
                py-1 rounded-full gap-2`


export const TypescriptTag = () => {
    return (
        <div className={`${style} bg-blue-300 text-blue-900 `}>
            <SiTypescript size={15} className="fill-blue-600 " />
            TypeScript
        </div>
    )
}

export const ReactTag = () => {
    return (
        <div className={`${style} bg-blue-300 text-blue-900 `}>
            <SiReact size={15} className="fill-blue-700" />
            React
        </div>
    )
}

export const TailwindTag = () => {
    return (
        <div className={`${style} bg-blue-300 text-blue-900 `}>
            <SiTailwindcss size={15} className="fill-sky-500" />
            Tailwind
        </div>
    )
}

export const NextTag = () => {
    return (
        <div className={`${style} bg-gray-200 text-gray-900 `}>
            <SiNextdotjs size={15} />
            Next.js
        </div>
    )
}

export const JavaScriptTag = () => {
    return (
        <div className={`${style} bg-yellow-200 text-yellow-900 `}>
            <SiJavascript size={15} className="fill-yellow-500 " />
            JavaScript
        </div>
    )
}

export const ViteTag = () => {
    return (
        <div className={`${style} bg-purple-200 text-purple-900 `}>
            <SiVite size={15} className="fill-purple-500 " />
            Vite
        </div>
    )
}
