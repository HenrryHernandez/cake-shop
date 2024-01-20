import { useRef, useState } from "react";
import Image from "next/image";

import { Layout } from "../components/layout";
import { Carousel, Footer } from "../components/ui";
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
        <h2 className="text-5xl text-pink-10 text-center">Some of our craft</h2>

        <div className="bg-blue max-w-6xl w-full h-32 gap-x-8 px-8 row-center">
          <div className="w-1/4 h-full bg-red">
            <button
              className="w-full h-full bg-black"
              onClick={() => selectIcon(BAKERY_OPTIONS.CAKE)}
            ></button>
          </div>
          <div className="w-1/4 h-full bg-red">
            <button
              className="w-full h-full bg-black"
              onClick={() => selectIcon(BAKERY_OPTIONS.CUPCAKE)}
            ></button>
          </div>
          <div className="w-1/4 h-full bg-red">
            <button
              className="w-full h-full bg-black"
              onClick={() => selectIcon(BAKERY_OPTIONS.DONUT)}
            ></button>
          </div>
          <div className="w-1/4 h-full bg-red">
            <button
              className="w-full h-full bg-black"
              onClick={() => selectIcon(BAKERY_OPTIONS.PIE)}
            ></button>
          </div>
        </div>

        <Carousel iconSelected={iconSelected} />
      </section>

      <Footer />
    </Layout>
  );
}
