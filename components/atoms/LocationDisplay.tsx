import { MdLocationPin } from "react-icons/md";


const LocationDisplay = () => {
  return (
    <div className="flex flex-col items-start">
      {/* Bagian Your Location */}
      <p className="text-gray-500 text-sm">Your Location</p>

      {/* Bagian Garut dengan ikon lokasi */}
      <div className="flex items-center">
        <MdLocationPin className="h-5 w-5 text-red-500" />{/* Ikon Lokasi */}
        <p className="ml-2 text-lg font-semibold">Garut</p> {/* Teks Garut */}
      </div>
    </div>
  );
};

export default LocationDisplay;
