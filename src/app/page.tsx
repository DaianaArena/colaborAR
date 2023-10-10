import { Inter } from "next/font/google";
import Colaborators from "./sections/Colaborators";
import Header from "./sections/Header";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <nav className="sticky top-0 flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 flex-wrap ">
        <div className="px-6">
          <div className="!visible  grow  items-center !flex basis-auto">
            <ul className="mx-2 flex flex-row justify-between">
              <li>
                <a
                  className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white p-2 [&.active]:border-primary [&.active]:text-primary"
                  href="#inicio"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  className="block transition duration-150 ease-in-out text-purple-800 p-2 "
                  href="#colaboradores"
                >
                  Colaboradores
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        id="inicio"
        className="bg-neutral-100 p-12 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200"
      >
        <Header />
      </div>

      <div id="colaboradores" className=" p-12  text-white bg-purple-900">
        <h2 className="mb-4 text-4xl font-semibold">Colaboradores</h2>
        <Colaborators />
      </div>

      <div
        id="inicio"
        className="bg-neutral-100 p-12 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200"
      >
        <p >
          Developed with ♥ by 
          <a
            href="https://daianaarena.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold px-2 text-md text-purple-500 "
          >
            Daiana Arena
          </a>
        
        </p>
      </div>
    </>
  );
}
