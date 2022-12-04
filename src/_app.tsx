import './index.style.css';
import type { AppProps } from 'next/app';
import { NextPage } from 'next/types';
import { ReactElement } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<PageTransitionEvent, IP> & {
  getLayout: (page: ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);
  return getLayout(<Component {...pageProps} />);
}
