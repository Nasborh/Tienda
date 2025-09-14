
import { HeaderUp,HeaderHalf, Headerdown} from './Components/Header';

import { Footer } from './Components/Footer';
import { ThemeInit } from "../.flowbite-react/init";

export default function App() {
   return (
    <>
    <ThemeInit />
      <HeaderUp/>
      <HeaderHalf/>
      <Headerdown/>
      <Footer/>
    </>

  );
}