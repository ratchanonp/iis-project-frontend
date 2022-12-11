import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="h-screen w-screen flex justify-center">
        <div className="h-[932px] w-[430px] overflow-scroll border-2">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
