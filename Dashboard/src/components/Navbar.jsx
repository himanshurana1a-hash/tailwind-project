export default function Navbar() {
  return (
    <div className="bg-white shadow px-6 py-3 flex justify-between items-center">
      
      <input type="text" placeholder="Search..." className="border px-3 py-1 rounded w-1/3" />

      <div className="flex items-center gap-3">
        <span className="bg-green-500 text-white px-3 py-1 rounded-full">
          H
        </span>
        <div>
          <p className="font-medium">Himanshu Rana</p>
          <p className="text-sm text-gray-500">email@gmail.com</p>
        </div>
      </div>

    </div>
  );
}
