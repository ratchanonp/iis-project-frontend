import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="h-screen w-screen flex justify-center items-center">
        <div className="h-[932px] w-[430px]">
        <Main />
        <NextScript />
        </div>
      </body>
    </Html>
  )
}