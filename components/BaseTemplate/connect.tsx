"use client";

import { useState } from "react";
import ContactModal from "./contactmodal";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { AnimatedTestimonialsDemo } from "./testimonial";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export default function ConnectSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-8">What I&apos;m doing now?</h2>

        {/* Card 1: Exploring Opportunities */}
        <div className="group relative flex flex-col gap-2 rounded-xl p-5 bg-zinc-900/30 hover:bg-zinc-800 transition-colors border border-zinc-700 mb-4">
          <h3 className="text-lg font-semibold text-white">Exploring Opportunities</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            I'm currently focused on refining my design skills, learning Java to expand my technical range, and exploring opportunities that align with my passion for thoughtful, user-centered experiences.
          </p>
        </div>

        {/* Card 2: What I'm Reading */}
        <div className="group relative flex flex-col md:flex-row gap-4 rounded-xl p-4 hover:bg-zinc-800 transition-colors border border-zinc-700">
          <img
            src="/images/book.png" // replace with your actual image path
            alt="The Design of Everyday Things"
            className="w-24 h-32 object-cover rounded-md"
          />
          <div>
            <h3 className="text-lg font-semibold mb-1">What I&apos;m Reading Now</h3>
            <p className="text-sm text-zinc-400 mb-2 italic">
              “I believe great design starts with a great mindset. Here&apos;s what I&apos;m currently reading to stay inspired.”
            </p>
            <p className="text-sm text-zinc-300">📖 The Design of Everyday Things by Don Norman</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-16 ">
        <h2 className="text-2xl font-bold mb-4">Collaborators I Build With</h2>
        <p className="text-sm text-zinc-400 mb-6">
          Designers, developers, and dreamers who help bring big ideas to life — I’ve been fortunate to build alongside brilliant minds who challenge and inspire me every step of the way.
        </p>

        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </section>

      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-4">A Few Quirky Bits About Me</h2>
        <p className="text-sm text-zinc-400 mb-6 max-w-xl">
          These little things shape how I work, collaborate, and create:
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-zinc-300">
          <li className="flex items-center gap-2">
            🐾 <span>Curious cat – I love asking “why” and digging into how things work.</span>
          </li>
          <li className="flex items-center gap-2">
            😍 <span>Social and shy – I’m both a people person and a quiet observer.</span>
          </li>
          <li className="flex items-center gap-2">
            ✈️ <span>Explorer – I enjoy discovering new places, tools, and ideas.</span>
          </li>
          <li className="flex items-center gap-2">
            🦉 <span>Night owl – My creative spark usually hits after dark.</span>
          </li>
        </ul>
      </section>

        <section className="container mx-auto px-4 mb-16 ">
        <h2 className="text-2xl font-bold mb-4">Proof in the Pixels</h2>
        {/* <p className="text-sm text-zinc-400 mb-6">
          Designers, developers, and dreamers who help bring big ideas to life — I’ve been fortunate to build alongside brilliant minds who challenge and inspire me every step of the way.
        </p> */}

           < AnimatedTestimonialsDemo />

      </section>



      <div className="max-w-3xl mx-auto border mb-16 bg-zinc-800/50 border-zinc-700 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Let&apos;s build something great together</h3>
        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
          Whether you&apos;re looking to collaborate on a project, need a developer for your team,
          or just want to chat about ideas — I&apos;d love to hear from you. Let&apos;s connect and see
          what we can create!
        </p>
        <button
          onClick={() => setOpen(true)}
          className="bg-gray-100 text-black px-6 py-3 rounded-md font-medium hover:bg-white transition"
        >
          Connect With Me
        </button>
      </div>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
