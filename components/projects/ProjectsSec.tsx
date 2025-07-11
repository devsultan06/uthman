import { UserProjectsData2 } from "../../config/user-data/projects";
import Image from "next/image";
import Link from "next/link";

export const ProjectsSec = () => {

    return (
        <section className="container mx-auto px-4 mb-16">
            <div className="flex justify-between mb-4">
                <h2 className="text-2xl font-bold mb-8">Projects</h2>

            </div>
            <div className="space-y-24">
                {UserProjectsData2.map((project, index) => (
                    <div
                        key={project.title}
                        className="flex flex-col md:flex-row gap-8 items-start"
                    >
                        {index % 2 === 1 && (
                            <div className="hidden lg:block md:w-[300px] flex-shrink-0">
                                <Image
                                    src={project.previewImage}
                                    width={300}
                                    height={180}
                                    alt={`${project.title} Preview`}
                                    className="rounded-lg shadow-lg transform rotate-12 transition duration-300 hover:rotate-0 max-w-[300px] max-h-[180px]"
                                />
                            </div>
                        )}
                        {
                            <div className="block lg:hidden  md:w-[300px] flex-shrink-0">
                                <Image
                                    src={project.previewImage}
                                    width={300}
                                    height={180}
                                    alt={`${project.title} Preview`}
                                    className="rounded-lg shadow-lg  transition duration-300  max-w-[300px] max-h-[180px]"
                                />
                            </div>
                        }
                        <div className="flex-1 space-y-4">
                            <h3 className="text-xl font-semibold underline hover:decoration-wavy">
                                <Link href={project.url} target="_blank">
                                    {project.title}
                                </Link>
                            </h3>
                            <p className="text-zinc-400">{project.role}</p>
                            <p className="text-zinc-300 leading-relaxed">
                                {project.description}
                            </p>
                            <Link
                                href={project.url}
                                className="inline-flex items-center gap-2 text-zinc-300 hover:text-zinc-100 group"
                                target="_blank"
                            >
                                <span className="underline group-hover:decoration-wavy">
                                    {project.url}
                                </span>
                                <span className="transition-transform duration-200 transform group-hover:rotate-90">
                                    ↗
                                </span>
                            </Link>
                        </div>
                        {index % 2 === 0 && (
                            <div className="hidden lg:block md:w-[300px] flex-shrink-0">
                                <Image
                                    src={project.previewImage}
                                    width={300}
                                    height={180}
                                    alt={`${project.title} Preview`}
                                    className="rounded-lg shadow-lg transform -rotate-12 transition duration-300 hover:rotate-0 max-w-[300px] max-h-[180px]"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
