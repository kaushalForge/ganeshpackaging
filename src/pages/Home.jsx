import HomePage from "../components/HomePage/page";
import Accordins from "../components/HomePage/accordins";
import SectionOne from "../components/HomePage/SectionOne";
import ShowcaseGallery from "../components/HomePage/showCaseGallery";
import Industries from "../components/HomePage/Industries";
import Process from "../components/HomePage/Process";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-6">
        <HomePage />
      </div>
      <ShowcaseGallery />
      <Industries />
      <SectionOne />
      <div className="container mx-auto px-6 py-4">
        <Accordins />
      </div>
      <Process />
    </>
  );
}
