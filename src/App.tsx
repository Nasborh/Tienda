
import { HeaderUp,HeaderHalf} from './Components/Header';
HeaderHalf
import { Footer } from './Components/Footer';
import { ThemeInit } from "../.flowbite-react/init";

export default function App() {
   return (
    <>
    <ThemeInit />
      <HeaderUp/>
      <HeaderHalf/>
      <Footer/>
    </>

  );
}