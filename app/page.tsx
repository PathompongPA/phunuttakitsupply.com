import { About, Blog, Category, Footer, LinkToUs } from "@/components";
import AutoSlide from "@/components/slide/auto.slide.component"

export default function Home() {
  return (
    <div className="flex flex-col items-center border w-full min-h-full">
      <AutoSlide>
        <div className=" flex justify-center items-center text-4xl">Content Slide 1</div>
        <div className=" flex justify-center items-center text-4xl">Content Slide 2</div>
      </AutoSlide>
      <Category />
      <About />
      <LinkToUs />
      <Blog />
    </div>
  );
}
