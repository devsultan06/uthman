"use client";

import Link from "next/link";

export function BaseFooter() {
  return (
    <footer className="py-12 border-t border-zinc-800">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="flex flex-col space-y-8">
          {/* Credits Section */}
          <div className="text-center border-zinc-800/50 pt-8">
            <p className="text-zinc-400 text-sm mb-3">
              Built by Sultan  :))  you can find me on  {" "}
              <Link
                href="https://github.com/devsultan06"
                target="_blank"
                rel="noopener noreferrer"
                className="lola hover:text-blue-300 font-medium"
              >
                Github
              </Link>
              <span> and   <Link
                href="https://discord.com/users/1097891811395129434"
                target="_blank"
                rel="noopener noreferrer"
                className="lola hover:text-blue-300 font-medium"
              >
                Discord
              </Link></span>

              <span>  and don&apos;t forget to check out my <Link
                href="/CV/cv.pdf"
                download
                className="lola hover:text-blue-300 font-medium"
              >
                Resume!
              </Link>
              </span>
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}
