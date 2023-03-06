import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body style={{background:" url(/b.svg) repeat",backgroundSize:" 4px 4px"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
