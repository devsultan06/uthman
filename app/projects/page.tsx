import ConnectSection from "@/components/BaseTemplate/connect";
import { BaseFooter } from "@/components/BaseTemplate/footer";
import { BaseTemplateLayout } from "@/components/BaseTemplate/layout";
import { ProjectsSec } from "@/components/projects/ProjectsSec";

import Link from "next/link";
import React from "react";

export default function Projects() {

    return (
        <BaseTemplateLayout>
            <header className="container mx-auto px-4 py-8">
                <nav className="flex gap-3 items-center mb-16">
                    <Link
                        href="/"
                        className="text-base hover:text-zinc-400 flex items-center gap-1 group"
                    >
                        <span className="underline group-hover:decoration-wavy decoration-1">
                            Home
                        </span>
                        <span className="transition-transform duration-200 transform group-hover:rotate-90">
                            ↗
                        </span>
                    </Link>
                    <Link
                        href="/CV/cv.pdf"
                        download
                        className="text-base hover:text-zinc-400 flex items-center gap-1 group"
                    >
                        <span className="underline group-hover:decoration-wavy decoration-1">
                            View resume
                        </span>
                        <span className="transition-transform duration-200 transform group-hover:rotate-90">
                            ↗
                        </span>
                    </Link>
                </nav>
            </header >
            <ProjectsSec />
            <ConnectSection />
            <BaseFooter />
        </BaseTemplateLayout>
    )
}
