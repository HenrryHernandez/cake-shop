export const SearchBar = () => {
  return (
    <form className="group relative flex flex-row items-center w-7/12">
      <input
        className="appearance-none w-full phone:text-sm tablet:text-md laptop:text-lg phone:h-8 tablet:h-10 laptop:h-12 focus:outline-none bg-grey-medium rounded-full py-2 pl-6 pr-12 my-8 shadow-md"
        type="text"
        aria-label="Filter projects"
        placeholder="Type to search..."
      />
      <button
        className="absolute right-1 text-white bg-original rounded-full p-2"
        type="button"
        aria-label="Like"
      >
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
      </button>
    </form>
  );
};
