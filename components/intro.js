import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <>
      <div className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8">
        <div className="relative flex items-center gap-x-4">
          <Image
            width={40}
            height={40}
            src="/images/jotish.jpeg"
            alt="Profile Image"
            className=" rounded-full ring-1 dark:ring-white/10 ring-primary/5"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-primary dark:text-white">
              <a href="#">
                <span className="absolute inset-0"></span>
                Jotish Sharma
              </a>
            </p>
            <p className="text-zinc-500 dark:text-zinc-400">
              Fullstack Developer &amp; UI/UX
            </p>
          </div>
        </div>
        <p className="text-3xl mt-6 font-medium lg:text-4xl tracking-tight text-primary dark:text-white">
          Hi, welcome to my portfolio!
        </p>
        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl">
          I&apos;m a passionate and experienced full-stack developer
          specializing in React, Next.js, and the MERN stack.
          <br />
          <br />
          With a strong background in both front-end and back-end development, I
          create dynamic and responsive web applications that deliver
          exceptional user experiences.
        </p>
      </div>
    </>
  );
};

export default Intro;
