import ImageLeft from "../../assets/home2.jpg";
import ImageRight from "../../assets/home1.jpg";
const FistPart = () => {

    return (
        <div className="relative  w-full flex flex-col items-center justify-center bg-gray-100 mt-14"> {/* Adjust margin to avoid overlap */}
        {/* Container for two side-by-side divs */}
        <div className="flex w-full">
            {/* Left Div */}
            <div className="flex-1 bg-purple-100 h-[700px]">
                <img src={ImageLeft} alt="Left" className="h-full w-full object-cover" />
            </div>

            {/* Right Div */}
            <div className="flex-1 bg-blue-100 h-[700px]">
                <img src={ImageRight} alt="Left" className="h-full w-full object-cover" />
            </div>
        </div>

        {/* Center Div */}
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex items-center justify-center">
            <div className="bg-white bg-opacity-60 p-4 rounded-lg shadow-lg text-center w-full max-w-2xl h-[300px] z-10 flex flex-col items-center justify-center"> {/* Add z-10 to ensure it appears above */}
                <h1 className="text-5xl font-bold text-gray-800">Gentle Makeup<br />Removing Cleanser</h1>
                <h2 className="text-lg text-gray-600 mt-3">THE ALL NEW GORGEOUS COLLECTION</h2>
                <button className="mt-8 px-8 py-3 bg-gray-800 text-white rounded-sm hover:bg-gray-600 transition duration-200">
                    SHOP NOW
                </button>
            </div>
        </div>
    </div>
    );
};

export default FistPart;