import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}