// config/user-data/tech-stack.ts
export const TechStackGroups = [
    {
        title: "Design",
        items: ["Figma", "Behance", "Pinterest", "Adobe XD"],
    },
    {
        title: "Development",
        items: ["Flutter", "Dart", "GitHub"],
    },
    {
        title: "Tools",
        items: ["Discord", "VS Code"],
    },
];


export const TechStackSection = () => {
    return (
        <section className="container mx-auto px-4 mb-16">
            <h2 className="text-2xl font-bold mb-2">My Tech Stack</h2>
            <p className="text-base text-zinc-300 flex  mb-8 items-center ">
                <span>🎨</span> Tools I use daily to turn ideas into delightful user experiences from pixels to prototypes to production
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {TechStackGroups.map((group, index) => (
                    <div
                        key={index}
                        className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6"
                    >
                        <h3 className="text-xl font-semibold text-white mb-4">
                            {group.title}
                        </h3>
                        <ul className="flex flex-wrap gap-2">
                            {group.items.map((item, i) => (
                                <li
                                    key={i}
                                    className="text-sm bg-zinc-700 text-white px-3 py-1 rounded-full"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};
