"use client"

const paths = [
    {
        name: "Inicio",
        sectionId: "inicio",
    },
    {
        name: "Skills",
        sectionId: "skills",
    },
    {
        name: "Proyectos",
        sectionId: "proyectos",
    },
];

export const Button = () => {

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {paths.map(path => (
                <div className="flex-1 group" key={path.name}>
                    <button
                        onClick={() => scrollToSection(path.sectionId)}
                        className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500" >
                        <span className="block px-1 pt-1 pb-1">
                            <span className="font-bold block text-lg md:text-sm pb-1 text-indigo-500">{path.name}</span>
                            <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                        </span>
                    </button>
                </div>
            ))
            }
        </>
    )
}
