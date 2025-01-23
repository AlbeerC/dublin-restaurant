
function MenuItem({ data }) {

  return (
    <div className="menu-item bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{data.name}</h3>
      <p className="text-gray-600 mb-4">{data.description}</p>
      <p className="text-blue-600 font-bold">${data.price}</p>
    </div>
  );
}

export default MenuItem;
