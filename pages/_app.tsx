import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import 'animate.css/animate.min.css';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
