import { HeaderUp, HeaderHalf, Headerdown } from "./Components/Header";
import { Index } from "./Pages/Index";
import { Footer } from "./Components/Footer";
import { ThemeInit } from "../.flowbite-react/init";

export default function App() {
  return (
    <>
      <ThemeInit />
      <HeaderUp />
      <HeaderHalf />
      <Headerdown />
      <Index />
      <Footer />
    </>
  );
}
