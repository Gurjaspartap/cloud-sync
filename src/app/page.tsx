import Image from "next/image";
import Navbar from "./components/Navbar";
import Upload from "./components/UploadBox";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>

      <Navbar />
      <Upload />
      <Features />
      <Footer />
    </>
  );
}
