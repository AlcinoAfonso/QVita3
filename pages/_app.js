// pages/_app.js
import "../styles/globals.css";   // aqui é o lugar certo para CSS global

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
