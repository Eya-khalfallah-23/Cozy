import Categ1 from '../../assets/categ1.jfif';
import Categ2 from '../../assets/categ2.jfif';
import Categ3 from '../../assets/categ3.jfif';
import Categ4 from '../../assets/categ4.png';

const SecondPart = () => {
    return (
        <div className="bg-beige flex flex-col text-center justify-center p-16">
                <div>
                    <h2 className="text-lg text-gray-800">Shop by categories</h2>
                    <h1 className="text-5xl font-bold text-gray-800 mt-5">Popular Categories</h1>
                </div>
                <div className="flex justify-center items-center gap-32 mt-6">
                <div className="flex flex-col text-center justify-center">
    <div className="w-[200px] h-[330px] rounded-full bg-white">
        <img src={Categ1} alt="Left" className="h-full w-full object-cover rounded-full" />
    </div>
    <h2 className="text-2xl font-semibold text-gray-800 mt-3">Bio-herbal</h2>
</div>

<div className="flex flex-col text-center justify-center">
    <div className="w-[200px] h-[330px] rounded-full bg-white mt-16">
        <img src={Categ2} alt="Left" className="h-full w-full object-cover rounded-full" />
    </div>
    <h2 className="text-2xl font-semibold text-gray-800 mt-3">Body lotion</h2>
</div>

<div className="flex flex-col text-center justify-center">
    <div className="w-[200px] h-[330px] rounded-full bg-white">
        <img src={Categ3} alt="Left" className="h-full w-full object-cover rounded-full" />
    </div>
    <h2 className="text-2xl font-semibold text-gray-800 mt-3">Candle-spa</h2>
</div>

<div className="flex flex-col text-center justify-center">
    <div className="w-[200px] h-[330px] rounded-full bg-white mt-16">
        <img src={Categ4} alt="Left" className="h-full w-full object-cover rounded-full" />
    </div>
    <h2 className="text-2xl font-semibold text-gray-800 mt-3">Skin care</h2>
</div>

                </div>
            </div>
    );
};

export default SecondPart;