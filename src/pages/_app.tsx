import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
