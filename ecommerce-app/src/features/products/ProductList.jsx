import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./productSlice";
import { addToCart } from "../cart/cartSlice";
import { Link } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);
  const categories = [...new Set((items || []).map((p) => p.category))];
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sortType, setSortType] = useState("");

  // Filter (search + category)
  const filtered = items.filter((p) => {
    const matchesSearch = p.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category ? p.category === category : true;

    return matchesSearch && matchesCategory;
  });

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    if (sortType === "low") return a.price - b.price;
    if (sortType === "high") return b.price - a.price;
    return 0;
  });

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (status === "loading") return <h1>Loading...</h1>;

  return (
    <div>

      {/*  Controls */}
      <div className="flex gap-4 p-4 flex-wrap">
        
        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2"
        />

        {/* Sort */}
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="border p-2 cursor-pointer">
          <option value="">Sort By</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
        </select>

        {/* Category */}
      <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="border p-2 cursor-pointer">
        <option  value="">All Categories</option>

  {categories.map((cat) => (
    <option key={cat} value={cat}>
      {cat.charAt(0).toUpperCase() + cat.slice(1)}
    </option>
  ))}
</select>

      </div>

      {/*  Products */}
      {sorted.length === 0 ? (
        <h2 className="p-4 text-gray-500">No products found</h2>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {sorted.map((p) => (
            <div key={p.id} className="border p-4 rounded">

              <Link to={`/product/${p.id}`}>
                <img
                  src={p.thumbnail}
                  className="h-40 w-full object-cover"
                />
                <h2 className="font-semibold">{p.title}</h2>
              </Link>

              <p>${p.price}</p>

              <button
                onClick={() => dispatch(addToCart(p))}
                className="bg-blue-500 text-white px-2 py-1 mt-2 rounded active:shadow-sm active:scale-95 hover:bg-blue-800">Add to Cart</button>

            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default ProductList;