import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
export default function Document() {
  return (
    <Html className="bg-white" lang="en">
    <meta name="google-site-verification" content="xt084VXLdwKYqQjmQVRA19iFgq-800-yn30XqBWp4Nk" />
      <header className="fixed z-10 top-0 inset-x-0 border-b bg-white">
        <nav
          className="flex items-center justify-between max-w-5xl
    mx-auto px-4 h-24"
        >
          <Link
            href="/"
            className="p-2 rounded-lg text-gray-700 hover:bg-cyan-700"
          >
            Home
          </Link>

          <div className="flex space-x-1 items-center">
            <a
              className="p-2 rounded-lg text-gray-700 hover:bg-cyan-700"
              href="https://github.com/h-morales1"
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
