"use client";

import Spline from "@splinetool/react-spline";
import Image from "next/image";
import React, { useState } from "react";

const Projects = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleAccordion = (index) => {
    setActiveIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };
  return (
    <>
      <div
        href="https://lexingtonthemes.com/"
        className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-white dark:bg-secondary  dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl p-8"
      >
        <div className=" md:h-[500px] md:w-[500px]  ">
          <Spline
            className="scale-[1]"
            scene="https://prod.spline.design/bocyIfa7IbjrnXvD/scene.splinecode"
          />
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap ">
            <div className="flex items-center text-sm font-medium text-primary dark:text-white">
              <Image
                src="/nextjslogo.svg"
                width={20}
                height={20}
                className="invert"
                alt="logo"
              />
              <span className="ml-2.5">NextJS</span>
            </div>

            <div className="flex items-center ml-6 text-sm font-medium text-primary dark:text-white">
              <Image src="/reactjslogo.svg" width={20} height={20} alt="logo" />
              <span className="ml-2.5"> ReactJS</span>
            </div>
            <div className="flex items-center ml-6 text-sm font-medium text-primary dark:text-white">
              <svg
                viewBox="0 0 256 154"
                aria-label="Tailwind CSS"
                className="flex-none w-4 h-4 stroke-current"
                width="64"
                height="64"
                astro-icon="logos:tailwindcss-icon"
              >
                <path
                  fill="#38bdf9"
                  d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
                ></path>
              </svg>
              <span className="ml-2.5"></span>
            </div>
            <div className="flex items-center  text-sm font-medium text-primary dark:text-white">
              <Image src="/nodejslogo.svg" width={20} height={20} alt="logo" />
            </div>
          </div>
          <p className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl mt-8">
            Projects
          </p>

          <div
            className="mt-6"
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            <h2 id="accordion-flush-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                onClick={() => toggleAccordion(1)}
                aria-expanded={activeIndexes.includes(1)}
                aria-controls="accordion-flush-body-1"
              >
                <span>Shillong Archery</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 shrink-0 ${
                    activeIndexes === 1 ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-1"
              className={`${activeIndexes.includes(1) ? "" : "hidden"}`}
              aria-labelledby="accordion-flush-heading-1"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Shillong Archery is a cutting-edge web application developed
                  using Next.js, shadcn, Tailwind CSS, and MongoDB. This project
                  provides a comprehensive platform for showcasing real-time
                  results of archery competitions, allowing users to stay
                  up-to-date with the latest scores and rankings.
                </p>
              </div>
            </div>
            {/* two */}
            <h2 id="accordion-flush-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                onClick={() => toggleAccordion(2)}
                aria-expanded={activeIndexes.includes(2)}
                aria-controls="accordion-flush-body-2"
              >
                <span>Travel On</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 shrink-0 ${
                    activeIndexes === 2 ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-2"
              className={`${activeIndexes.includes(2) ? "" : "hidden"}`}
              aria-labelledby="accordion-flush-heading-2"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Travel On is a dynamic and user-friendly website built with
                  Next.js, shadcn, Tailwind CSS, and MongoDB. This platform
                  offers a seamless experience for users to explore and book
                  amazing tours and travel packages, catering to their
                  wanderlust and providing them with unforgettable adventures.
                </p>
              </div>
            </div>
            {/* {three} */}
            <h2 id="accordion-flush-heading-3">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                onClick={() => toggleAccordion(3)}
                aria-expanded={activeIndexes.includes(3)}
                aria-controls="accordion-flush-body-3"
              >
                <span>Web App Clones </span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 shrink-0 ${
                    activeIndexes === 3 ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-2"
              className={`${activeIndexes.includes(3) ? "" : "hidden"}`}
              aria-labelledby="accordion-flush-heading-2"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  I&apos;ve built clones of popular web apps like Amazon,
                  Spotify, Netflix, and a job portal using Next.js, shadcn,
                  Tailwind CSS, and MongoDB. These projects highlight my skills
                  in creating responsive, scalable web applications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
