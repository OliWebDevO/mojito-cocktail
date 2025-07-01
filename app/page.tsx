import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold flex-center mt-10">
        Mojito Cocktail
      </h1>
      <p className="text-center mt-5">
        A refreshing blend of mint, lime, and rum.
      </p>
      <p className="text-center mt-5">
        Perfect for summer parties or a relaxing evening.
      </p>
    </main>
  );
}
