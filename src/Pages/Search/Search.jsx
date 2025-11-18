import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseUser from "../../Hooks/UseUser";

const Search = () => {
  const { user, error } = UseUser();
  const [input, setInput] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [recent, setRecent] = useState([]);

  const navigate = useNavigate();

  const filteredValue = user.filter((val) =>
    val.name.toLowerCase().includes(input.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setRecent((prev) => [input, ...prev.slice(0, 4)]); // keep last 5 searches
      setInput("");
      setDropdown(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        🔍 Search Professionals
      </h1>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setDropdown(true);
            }}
            placeholder="Search by name, skill, or company..."
            className="w-full rounded-full border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition"
          >
            Search
          </button>
        </form>

        {/* Dropdown Suggestions */}
        {dropdown && input && (
          <ul className="absolute w-full bg-white mt-2 rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
            {filteredValue.length > 0 ? (
              filteredValue.map((cust) => (
                <li
                  key={cust.id}
                  onClick={() => {
                    setInput(cust.name);
                    setDropdown(false);
                    navigate(`/users/${cust.id}`);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {cust.name}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No results found</li>
            )}
          </ul>
        )}
      </div>

      {/* Recent Searches */}
      {recent.length > 0 && (
        <div className="max-w-xl mx-auto mt-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Recent Searches
          </h2>
          <div className="flex flex-wrap gap-2">
            {recent.map((term, index) => (
              <span
                key={index}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-300"
                onClick={() => setInput(term)}
              >
                {term}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Search Results */}
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Search Results
        </h2>

        {filteredValue.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredValue.map((cust) => (
              <div
                key={cust.id}
                className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center"
              >
                {/* Avatar */}
                <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {cust.name.charAt(0)}
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold text-gray-800">{cust.name}</h3>
                <p className="text-sm text-gray-500">
                  {cust.role || "Software Engineer"}
                </p>
                <p className="text-xs text-gray-400 mb-4">
                  {cust.location || "Remote"}
                </p>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() => navigate(`/user/${cust.id}`)}
                    className="px-4 py-1 border border-gray-300 rounded-lg hover:bg-gray-100"
                  >
                    View Profile
                  </button>
                  <button className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Connect
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 mt-6">No results. Try another search.</p>
        )}
      </div>
    </div>
  );
};

export default Search;

