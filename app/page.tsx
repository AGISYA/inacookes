import { BiSolidCookie } from "react-icons/bi";
import { FaLocationDot, FaRegBookmark, FaRegHeart } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";

const Home: React.FC = () => {
  return (
    <div className="px-4 md:px-24">
      <div className="mt-2">
      <h1>Your Location</h1>
      <div className="flex">
        <FaLocationDot className="text-blue-500 mt-2" />
        <h1 className="font-medium mx-2 mt-1"> Garut</h1>
      </div>
      </div>
      
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-3xl mb-4">
          <div className="flex items-center border rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Cari produk..."
              className="w-full px-4 py-2 rounded-l-lg focus:outline-none"
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded-r-lg hover:bg-blue-600 focus:outline-none">
              Cari
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold mt-10">Category</h1>
      <div className="h-auto flex flex-col items-center p-5">
        <div className="flex flex-wrap justify-center gap-8">
          <div className="p-6 shadow-md rounded-lg flex flex-col items-center w-72 bg-white">
            <TiShoppingCart className="text-blue-500 text-3xl mb-4" />
            <h2 className="text-xl font-semibold">Category 1</h2>
          </div>
          <div className="p-6 shadow-md rounded-lg flex flex-col items-center w-72 bg-white">
            <FaRegBookmark className="text-blue-500 text-3xl mb-4" />
            <h2 className="text-xl font-semibold">Category 2</h2>
          </div>
          <div className="p-6 shadow-md rounded-lg flex flex-col items-center w-72 bg-white">
            <FaRegHeart className="text-blue-500 text-3xl mb-4" />
            <h2 className="text-xl font-semibold">Category 3</h2>
          </div>
          <div className="p-6 shadow-md rounded-lg flex flex-col items-center w-72 bg-white">
            <BiSolidCookie className="text-blue-500 text-3xl mb-4" />
            <h2 className="text-xl font-semibold">Category 4</h2>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold mt-10">Our Products</h1>
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-7xl shadow-md rounded-lg flex flex-col md:flex-row p-6">
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <img
              src="/images/image 15.jpg"
              alt="Produk"
              className="w-28 h-32 object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center flex-grow md:ml-6 p-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Nama Produk
            </h2>
            <p className="mt-2 text-gray-600">
              Ini adalah deskripsi singkat dari produk. Jelaskan fitur utama dan
              manfaat produk ini di sini.
            </p>
            <div className="mt-4 flex items-center">
              <span className="text-xl font-semibold text-blue-600">
                Rp. 150.000
              </span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 md:ml-6 flex items-center">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>{" "}
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-7xl shadow-md rounded-lg flex flex-col md:flex-row p-6">
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <img
              src="/images/image 14.png"
              alt="Produk"
              className="w-28 h-32 object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center flex-grow md:ml-6 p-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Nama Produk
            </h2>
            <p className="mt-2 text-gray-600">
              Ini adalah deskripsi singkat dari produk. Jelaskan fitur utama dan
              manfaat produk ini di sini.
            </p>
            <div className="mt-4 flex items-center">
              <span className="text-xl font-semibold text-blue-600">
                Rp. 150.000
              </span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 md:ml-6 flex items-center">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>{" "}
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-7xl shadow-md rounded-lg flex flex-col md:flex-row p-6">
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <img
              src="/images/image 6.png"
              alt="Produk"
              className="w-28 h-32 object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center flex-grow md:ml-6 p-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Nama Produk
            </h2>
            <p className="mt-2 text-gray-600">
              Ini adalah deskripsi singkat dari produk. Jelaskan fitur utama dan
              manfaat produk ini di sini.
            </p>
            <div className="mt-4 flex items-center">
              <span className="text-xl font-semibold text-blue-600">
                Rp. 150.000
              </span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 md:ml-6 flex items-center">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
