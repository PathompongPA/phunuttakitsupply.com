import { About, Blog, Category, LinkToUs, Slide1, Slide2 } from "@/components";
import AutoSlide from "@/components/slide/auto.slide.component"

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-full ">
      <AutoSlide>
        <Slide1 />
        <Slide2 />
      </AutoSlide>
      <Category />
      <About />
      <LinkToUs />
      <Blog />
    </div>
  );
}
