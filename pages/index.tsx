import { useRef, useState } from "react";
import Image from "next/image";

import {
  CakeIcon,
  Carousel,
  CupcakeIcon,
  DonutIcon,
  Footer,
  Layout,
  PieIcon,
} from "../components";
import { BAKERY_OPTIONS } from "../utils";

export default function HomePage() {
  const cakeIcon = useRef<HTMLDivElement>(null);
  const cupcakeIcon = useRef<HTMLDivElement>(null);
  const donutIcon = useRef<HTMLDivElement>(null);
  const pieIcon = useRef<HTMLDivElement>(null);

  const [iconSelected, setIconSelected] = useState<number>(BAKERY_OPTIONS.CAKE);

  const selectIcon = (iconSelected: number) => {
    setIconSelected(iconSelected);

    cakeIcon.current?.classList.remove("underline");
    cupcakeIcon.current?.classList.remove("underline");
    donutIcon.current?.classList.remove("underline");
    pieIcon.current?.classList.remove("underline");

    switch (iconSelected) {
      case BAKERY_OPTIONS.CAKE:
        cakeIcon.current?.classList.add("underline");
        break;
      case BAKERY_OPTIONS.CUPCAKE:
        cupcakeIcon.current?.classList.add("underline");
        break;
      case BAKERY_OPTIONS.DONUT:
        donutIcon.current?.classList.add("underline");
        break;
      case BAKERY_OPTIONS.PIE:
        pieIcon.current?.classList.add("underline");
        break;
    }
  };

  return (
    <Layout>
      <section className="w-full col-center px-8 pt-16 lg:pt-32 lg:pb-16 sm:px-16 bg-pink-10">
        <div className="max-w-xl h-full col-center gap-y-12">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Cake Shop
          </h1>
          <p className="sm:text-2xl text-center text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            saepe, quia, quod est beatae natus non temporibus quos recusandae
            vero quaerat necessitatibus veritatis at earum eos quo id
            consectetur placeat culpa perferendis dicta illo illum hic!
            Laudantium id quos amet, repellat harum, rerum, aut ut ratione
            tempore assumenda modi ex. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Modi, voluptatem atque nihil consequatur maiores
            dolorum deleniti quo repudiandae alias fuga!
          </p>
        </div>
      </section>

      <div className="waves-container w-full">
        <div className="waves-subcontainer w-full h-80">
          <div className="wave h-full w-full">
            <Image
              src="/wave.svg"
              alt="wave"
              width={100}
              height={100}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className="wave h-full w-full">
            <Image
              src="/wave.svg"
              alt="wave"
              width={100}
              height={100}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>

      <section className="w-full col-center gap-y-8 my-32">
        <h2 className="px-2 sm:px-0 text-4xl sm:text-5xl text-pink-10 text-center">
          Some of our craft
        </h2>

        <div className="w-full w-full gap-x-8 lg:gap-x-16 xl:gap-x-32 px-8 row-center flex-wrap flex">
          <div
            ref={cakeIcon}
            className="w-20 h-20 sm:w-24 sm:h-24 xl:w-32 xl:h-32 sec-2 underline"
            onClick={() => selectIcon(BAKERY_OPTIONS.CAKE)}
          >
            <CakeIcon />
          </div>
          <div
            ref={cupcakeIcon}
            className="w-20 h-20 sm:w-24 sm:h-24 xl:w-32 xl:h-32 mb-4 sec-2"
            onClick={() => selectIcon(BAKERY_OPTIONS.CUPCAKE)}
          >
            <CupcakeIcon />
          </div>
          <div
            ref={donutIcon}
            className="w-20 h-20 sm:w-24 sm:h-24 xl:w-32 xl:h-32 sec-2"
            onClick={() => selectIcon(BAKERY_OPTIONS.DONUT)}
          >
            <DonutIcon />
          </div>
          <div
            ref={pieIcon}
            className="w-20 h-20 sm:w-24 sm:h-24 xl:w-32 xl:h-32 sec-2"
            onClick={() => selectIcon(BAKERY_OPTIONS.PIE)}
          >
            <PieIcon />
          </div>
        </div>

        <Carousel iconSelected={iconSelected} />
      </section>

      <Footer />
    </Layout>
  );
}
