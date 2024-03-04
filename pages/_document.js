import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="bg-white" lang="en">
      <header class="fixed z-10 top-0 inset-x-0 border-b bg-white">
        <nav
          class="flex items-center justify-between max-w-5xl
    mx-auto px-4 h-24"
        >
          <a
            class="p-2 rounded-lg text-gray-700 hover:bg-blue-100"
            href="/blankTool"
          >
            Home
          </a>

          <div class="flex space-x-1 items-center">
            <a
              class="p-2 rounded-lg text-gray-700 hover:bg-blue-100"
              href="/"
              target="_blank"
            >
              Github
            </a>
          </div>
        </nav>
      </header>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
