import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start place-content-center">
        <div className="list-inside list-decimal text-sm text-center text-5xl font-[family-name:var(--font-geist-mono)]">
          <div className="transition delay-100 duration-300 ease-in-out hover:-translate-y-3 hover:text-indigo-300 font-bold text-5xl">
            <h1><a href="http://localhost:3000/converter">Currency Converter</a></h1>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row justify-center w-full">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://github.com/Imtiyaz-Rahman/Formative-Project-Currency-Slinger/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read.md doc
          </a>
        </div>
      </main>
    </div>
  );
}
