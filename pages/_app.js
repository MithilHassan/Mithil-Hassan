import Header from "../components/Header";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Header />
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
