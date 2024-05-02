import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import logoImg from "../assets/Logo.svg";
import { Container, Header } from "@/styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} />
      </Header>
      <Component {...pageProps} />
    </Container>

  )
}
