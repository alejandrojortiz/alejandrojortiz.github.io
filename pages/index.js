import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillFilePdf,
  AiOutlineClose,
} from "react-icons/ai";
import Image from "next/image";
import WeightCalcImg from "/images/weight-calc.png";
import LogionImg from "/images/logion.png";
import BarLoadImg from "/images/barload.png";
import MeImg from "/images/avatar.png";
import { NavBar } from "/components/navBar";
import { useState } from "react";

export default function Home() {
  const [open, SetOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Alejandro Ortiz Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* ----------- MOBILE NAV ------------- */}
      <nav
        id="mobile-navigation"
        className={
          "fixed top-0 right-0 bottom-0 left-0 backdrop-blur-sm z-20 md:hidden" +
          (open ? " visible" : " invisible")
        }
      >
        <ul
          className={
            "absolute top-0 right-0 bottom-0 w-10/12 py-4 bg-white drop-shadow-2xl z-10 transition-all" +
            (open ? " translate-x-0" : " translate-x-full")
          }
        >
          <li className="relative pr-5">
            <AiOutlineClose
              className="text-2xl ml-auto cursor-pointer"
              onClick={() => {
                SetOpen(!open);
              }}
            />
          </li>
          <li className="border-b border-inherit cursor-pointer">
            <a
              className="flex items-center p-4"
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/alejandrojortiz"
            >
              <AiFillGithub className="text-2xl" />
              <span className="text-gray-700  py2 rounded-lg">GITHUB</span>
            </a>
          </li>
          <li className="border-b border-inherit cursor-pointer">
            <a
              className="flex items-center p-4"
              target={"_blank"}
              rel="noreferrer"
              href="https://www.linkedin.com/in/alejandrojortiz/"
            >
              <AiFillLinkedin className="text-2xl" />
              <span className="text-gray-700  py2 rounded-lg">LINKEDIN</span>
            </a>
          </li>
          <li className="border-b border-inherit cursor-pointer">
            <a
              className="flex items-center p-4"
              target={"_blank"}
              rel="noreferrer"
              href={"/AlejandroOrtizResume.pdf"}
            >
              <AiFillFilePdf className="text-2xl" />
              <span className="text-gray-700  py2 rounded-lg">RESUME</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* ----------- MOBILE NAV ------------- */}
      <NavBar menuClick={() => SetOpen(!open)} />
      <main className="bg-gradient-to-br from-gray-500 to-gray-200 flex flex-col items-center justify-center">
        <div className=" translate-y-1/2 rounded-full overflow-hidden w-28 h-28 flex items-center justify-center">
          <Image src={MeImg} alt="Profile Picture" />
        </div>
        <div className="flex items-center justify-center">
          <div className="w-11/12 bg-white md:p-3 shadow-xl rounded-md mb-4 items-center">
            <section className="flex flex-col items-center justify-center mb-9">
                <h2 className="text-3xl text-gray-800 mt-[4rem] md:mt-11 text-center">
                  Hi, I&apos;m Alejandro!
                </h2>
                <h3 className="text-2xl text-gray-700 text-center my-5">Software Engineer</h3>
                <div className="text-md leading-6 text-gray-500 max-w-xl text-center">
                  I&apos;m an undergraduate student at Princeton University
                  (Class of 2024), majoring in Computer Science with a minor in
                  Statistics and Machine Learning. I&apos;ve taken courses in a
                  wide breadth of areas, including Algorithms, System Design,
                  Computer Networks, Decentralized Finance, and Blockchains. Through my coursework and
                  personal projects, I&apos;ve built knowledge of both Frontend
                  and Backend development and I&apos;'ve become comfortable writing code in
                  Python, Go, Javascript (React), Solidity, Java, and C. I&apos;m
                  passionate about building clean, effective products for people
                  to use.
                </div>
            </section>
            <section className="mt-2">
              <div>
                <h3 className="text-3xl text-center text-blue-600">Projects</h3>
                <div className="md:flex gap-10 p-1 md:p-2">
                  <div className="text-center border-b pb-1 mb-2 md:shadow-lg md:rounded-xl md:my-5">
                    <Image
                      src={LogionImg}
                      alt="logion-photo"
                      className="mx-auto mb-1"
                    />
                    <a target={"_blank"} rel={"noreferrer"} className="text-blue-600" href="https://logion-web-app.herokuapp.com/">LOGION Website</a>
                    <p className="text-gray-600 mb-1">
                      A website that provides a clean, intuitive interface to
                      interact with LOGION, an NLP model trained on Ancient
                      Greek text developed within the Princeton Classics
                      Department.
                    </p>
                    <p className="text-gray-600">jQuery, Flask, GCP</p>
                  </div>
                  <div className="text-center border-b pb-1 mb-2 md:shadow-lg md:rounded-xl md:my-5">
                    <Image
                      src={WeightCalcImg}
                      alt="weightcalc-photo"
                      className="mx-auto mb-1"
                    />
                    <a target={"_blank"} rel={"noreferrer"} className="text-blue-600" href="https://alejandrojortiz.github.io/weightcalc/">WeightCalc</a>
                    <p className="text-gray-600 mb-1">
                      A fully client-side webapp that calculates the optimal way
                      to load a barbell with a limited set of weights and
                      displays the result in 3D.
                    </p>
                    <p className="text-gray-600">React, Next.js, TailwindCSS, Dexie.js</p>
                  </div>
                  <div className="text-center  pb-1  md:shadow-lg md:rounded-xl md:my-5">
                    <Image
                      src={BarLoadImg}
                      alt="barload-photo"
                      className="mx-auto mb-1"
                    />
                    <a className="text-blue-600" href="https://alejandrojortiz.github.io/barload/" target={"_blank"} rel={"noreferrer"}>BarLoad</a>
                    <p className="text-gray-600 mb-1">
                      The precursor to Weight Calc. Provides a calculator-like
                      UI to add and remove plates from a barbell and find the
                      total weight loaded.
                    </p>
                    <p className="text-gray-600">
                      React, React-Three
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="flex items-center justify-center ">
        <div className="text-center text-gray-700 ">
          © 2023, made by Alejandro Ortiz
        </div>
      </div>
      </main>
    </>
  );
}
