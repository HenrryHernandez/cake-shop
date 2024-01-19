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

      <section className="sec-2">
        <h1 className="text-5xl">Some of our craft</h1>

        <div className="icons">
          <div
            ref={cakeIcon}
            className="icon-btn underline"
            onClick={() => selectIcon(BAKERY_OPTIONS.CAKE)}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 64 64"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
              }}
            >
              <rect
                id="_36---Cake"
                x="0"
                y="0"
                width="64"
                height="64"
                style={{ fill: "none" }}
              />
              <path
                d="M58.332,22.479c0,3.69 -4.032,6.965 -10.24,8.996"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <path
                d="M32,33.637c-4.632,0 -8.973,-0.561 -12.697,-1.539"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <path
                d="M25.027,11.018c2.221,-0.271 4.559,-0.416 6.973,-0.416c1.845,0 3.645,0.085 5.383,0.246"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <path
                d="M43.742,11.831c8.646,1.923 14.59,5.903 14.59,10.496l0,10.195c0,0.658 -0.29,1.282 -0.794,1.706c-0.503,0.423 -1.168,0.603 -1.816,0.491c-0.524,-0.091 -1.07,-0.185 -1.581,-0.274c-1.428,-0.247 -2.89,0.189 -3.95,1.178c0,0.001 0,0.001 0,0.001c-3.088,2.884 -11.921,4.065 -17.686,4.123c-4.297,0.043 -5.618,-0.841 -8.134,-1.936c0,0 -2.67,2.672 -5.028,5.672c-1.685,2.143 -3.538,1.531 -4.552,0.239c-1.508,-1.921 -2.106,-6.403 -3.366,-7.213c-1.485,-0.954 -2.963,-1.904 -4.05,-2.603c-1.064,-0.684 -1.707,-1.862 -1.707,-3.127c0,-3.048 0,-8.452 0,-8.452c0,-3.943 4.38,-7.434 11.09,-9.56"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <path
                d="M57.058,34.536l0,7.704c0,6.158 -11.228,11.158 -25.058,11.158c-11.627,0 -21.415,-3.534 -24.238,-8.319c-0.535,-0.906 -0.82,-1.858 -0.82,-2.839l0,-8.675"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <path
                d="M51.822,19.94l0.182,1.82"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <path
                d="M13.689,23.762l-1.092,-1.456"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <circle
                cx="27.714"
                cy="19.94"
                r="5.519"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <circle
                cx="37.383"
                cy="17.501"
                r="3.349"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <path
                d="M37.383,14.152c0,0 -0.697,-3.546 1.958,-5.387"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <path
                d="M27.582,17.534c0,0 0.066,-7.932 -8.237,-9.534"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
            </svg>
          </div>
          <div
            ref={cupcakeIcon}
            className="icon-btn"
            onClick={() => selectIcon(BAKERY_OPTIONS.CUPCAKE)}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 64 64"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
              }}
            >
              <rect
                id="_21---Cake"
                x="0"
                y="0"
                width="64"
                height="64"
                style={{ fill: "none" }}
              />
              <path
                d="M47.541,38.773l-31.082,0l4.104,18.873l22.874,0l4.104,-18.873Z"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <path
                d="M45,23.773c4.142,0 7.5,3.357 7.5,7.5c0,0 0,0 0,0c0,4.142 -3.358,7.5 -7.5,7.5"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <path
                d="M19,38.773c-4.142,0 -7.5,-3.358 -7.5,-7.5c0,0 0,0 0,0c0,-4.143 3.358,-7.5 7.5,-7.5l0.614,0c0.742,-6.179 6.008,-10.975 12.386,-10.975c2.513,0 4.854,0.744 6.813,2.025"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <path
                d="M44.386,23.773c0,2.398 -0.142,4.244 -0.567,5.5"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <path
                d="M25,24l0,1"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <circle
                cx="44.102"
                cy="18.484"
                r="5.289"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <path
                d="M34.425,53.83l5.581,0l1.419,-6.79"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <path
                d="M46.052,13.148c0,0 0.714,-1.785 2.231,-2.945"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
            </svg>
          </div>
          <div
            ref={donutIcon}
            className="icon-btn"
            onClick={() => selectIcon(BAKERY_OPTIONS.DONUT)}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 64 64"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
              }}
            >
              <rect
                id="_22---Cake"
                x="0"
                y="0"
                width="64"
                height="64"
                style={{ fill: "none" }}
              />
              <path
                d="M58.332,25.081c0,3.69 -4.032,6.964 -10.24,8.996"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <path
                d="M32,36.239c-4.632,0 -8.973,-0.561 -12.697,-1.539"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <ellipse
                cx="32"
                cy="25.081"
                rx="9.763"
                ry="4.347"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <path
                d="M7.375,36.508c-1.064,-0.684 -1.707,-1.862 -1.707,-3.127c0,-3.048 0,-8.452 0,-8.452c0,-6.471 11.799,-11.725 26.332,-11.725c14.533,0 26.332,5.254 26.332,11.725l0,10.194c0,0.658 -0.29,1.283 -0.794,1.706c-0.503,0.424 -1.168,0.604 -1.816,0.492c-0.524,-0.091 -1.07,-0.185 -1.581,-0.274c-1.428,-0.247 -2.89,0.189 -3.95,1.178c0,0 0,0.001 0,0.001c-3.088,2.884 -7.19,4.432 -11.413,4.307c-2.153,-0.063 -4.456,-0.131 -6.273,-0.184c-2.246,-0.066 -4.463,-0.514 -6.558,-1.326c-0.526,-0.203 -1.066,-0.412 -1.576,-0.61c-1.628,-0.631 -3.469,-0.346 -4.831,0.747c0,0 -0.001,0.001 -0.001,0.001c-1.309,1.05 -3.141,1.146 -4.553,0.239c-2.256,-1.45 -5.602,-3.601 -7.611,-4.892Z"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <path
                d="M57.058,37.552l0,2.086c0,6.159 -11.228,11.158 -25.058,11.158c-11.627,0 -21.415,-3.534 -24.238,-8.319c-0.535,-0.906 -0.82,-1.858 -0.82,-2.839l0,-3.471"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <path
                d="M51.822,22.542l0.182,1.82"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <path
                d="M13.689,26.364l-1.092,-1.456"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
            </svg>
          </div>
          <div
            ref={pieIcon}
            className="icon-btn"
            onClick={() => selectIcon(BAKERY_OPTIONS.PIE)}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 64 64"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
              }}
            >
              <rect
                id="_34---Cake"
                x="0"
                y="0"
                width="64"
                height="64"
                style={{ fill: "none" }}
              />
              <path
                d="M58.332,25.081c0,3.69 -4.032,6.964 -10.24,8.996"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <path
                d="M32,36.239c-4.632,0 -8.973,-0.561 -12.697,-1.539"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <path
                d="M7.375,36.508c-1.064,-0.684 -1.707,-1.862 -1.707,-3.127c0,-3.048 0,-8.452 0,-8.452c0,-6.471 11.799,-11.725 26.332,-11.725c14.533,0 26.332,5.254 26.332,11.725l0,10.194c0,0.658 -0.29,1.283 -0.794,1.706c-0.503,0.424 -1.168,0.604 -1.816,0.492c-0.524,-0.091 -1.07,-0.185 -1.581,-0.274c-1.428,-0.247 -2.89,0.189 -3.95,1.178c0,0 0,0.001 0,0.001c-3.088,2.884 -7.19,4.432 -11.413,4.307c-2.153,-0.063 -4.456,-0.131 -6.273,-0.184c-2.246,-0.066 -4.463,-0.514 -6.558,-1.326c-0.526,-0.203 -1.066,-0.412 -1.576,-0.61c-1.628,-0.631 -3.469,-0.346 -4.831,0.747c0,0 -0.001,0.001 -0.001,0.001c-1.309,1.05 -3.141,1.146 -4.553,0.239c-2.256,-1.45 -5.602,-3.601 -7.611,-4.892Z"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <path
                d="M6.942,36.167c0.157,0.142 0.327,0.273 0.509,0.39c2.009,1.291 5.284,3.396 7.512,4.828c1.425,0.916 3.276,0.819 4.597,-0.241c0.001,-0.001 0.001,-0.001 0.001,-0.001c1.349,-1.083 3.172,-1.365 4.785,-0.74c0.487,0.189 1.001,0.388 1.505,0.583c2.158,0.836 4.443,1.298 6.756,1.366c1.804,0.053 4.065,0.12 6.181,0.182c4.217,0.124 8.312,-1.422 11.395,-4.301c0,0 0,0 0,0c1.065,-0.994 2.534,-1.433 3.969,-1.184c0.369,0.064 0.756,0.131 1.139,0.197c0.614,0.106 1.24,-0.012 1.767,-0.324l0,2.716c0,6.159 -11.228,11.158 -25.058,11.158c-11.627,0 -21.415,-3.534 -24.238,-8.319c-0.535,-0.906 -0.82,-1.858 -0.82,-2.839l0,-3.471Z"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <path
                d="M51.822,22.542l0.182,1.82"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
              <path
                d="M13.689,26.364l-1.092,-1.456"
                style={{ fill: "none", strokeWidth: "1.4px" }}
              />
            </svg>
          </div>
        </div>

        <Carousel iconSelected={iconSelected} />
      </section>

      <Footer />
    </Layout>
  );
}
