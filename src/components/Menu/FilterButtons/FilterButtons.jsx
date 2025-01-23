import './FilterButtons.css'

function FilterButtons({ filterData, currentFilter, allData }) {

  const categories = ["todo", ...new Set(allData.map((item) => item.category))];

  return (
    <div className="flex flex-wrap justify-center gap-4 my-10">
      {categories.map((category) => (
        <button
          key={category}
          className="filter-button px-6 py-3 rounded-full text-2xl font-semibold transition-colors bg-gray-200 text-gray-800 hover:bg-gray-300 mb-3"
          onClick={() => filterData(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
