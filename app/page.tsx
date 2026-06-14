import { About, Blog, Category, LinkToUs, Slide1 } from "@/components";
import AutoSlide from "@/components/slide/auto.slide.component"

export default function Home() {
  return (
    <div className="flex flex-col items-center border w-full min-h-full ">
      <AutoSlide>
        <Slide1 />
        <div className=" h-screen flex justify-center items-center text-4xl text-gray-3">Content Slide 2</div>
        <Slide1 />
        <div className=" h-screen flex justify-center items-center text-4xl text-gray-3">Content Slide 2</div>
      </AutoSlide>
      <Category />
      <About />
      <LinkToUs />
      <Blog />
    </div>
  );
}
