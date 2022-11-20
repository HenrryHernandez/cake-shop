import Image from "next/image";

import { Layout } from "../../components/layout";
import { SearchBar } from "../../components/ui";

const Stock = () => {
  return (
    <Layout>
      <div className="stock flex flex-col p-2 items-center justify-center border-2">
        <SearchBar />

        <div className="grid h-full w-full p-8 screen:grid-cols-5 laptop:grid-cols-4 tablet:grid-cols-3 phone:grid-cols-2 auto-rows-auto border-2">
          {/* <div className="border-2 grow">1</div>
          <div className="border-2 grow">2</div>
          <div className="border-2 grow">3</div>
          <div className="border-2 grow">4</div>
          <div className="border-2 grow">5</div>
          <div className="border-2 grow">6</div>
          <div className="border-2 grow">7</div>
          <div className="border-2 grow">8</div>
          <div className="border-2 grow">9</div>
          <div className="border-2 grow">10</div> */}
        </div>

        <button
          className="flex flex-row items-center justify-center text-white phone:h-8 tablet:h-9 laptop:h-10 phone:w-32 tablet:w-36 laptop:w-40 phone:text-sm tablet:text-base laptop:text-lg bg-original rounded-full my-4 p-2"
          type="button"
          aria-label="Like"
        >
          <p className="mr-4">See more</p>
          <i className="fa-solid fa-arrow-down-long"></i>
        </button>
      </div>
    </Layout>
  );
};

export default Stock;
