import Trend1 from '../../assets/6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import ProductCard from '../common/ProductCard';

const TrendingProductsSection = () => {
    return (
        <div className="flex flex-col text-center justify-center p-16 pb-20 bg-customPink bg-opacity-80">
            <div>
                <h2 className="text-xl text-gray-800">Trending Products</h2>
                <h1 className="text-4xl font-bold text-gray-800 mt-5">Having a place set aside for an activity you love <br />makes it more likely that you&apos;ll do it.</h1>
            </div>
            <div className="flex justify-center items-center mt-6">
                <div className="grid grid-cols-4 gap-x-28 gap-y-20 mt-6">
                    <ProductCard image={Trend1} productName="Product Name" productCategory="Product Category" price="32,5dt" />
                    <ProductCard image={Trend1} productName="Product Name" productCategory="Product Category" price="32,5dt" />
                    <ProductCard image={Trend1} productName="Product Name" productCategory="Product Category" price="32,5dt" />
                    <ProductCard image={Trend1} productName="Product Name" productCategory="Product Category" price="32,5dt" />
                    {/* <ProductCard image={Trend1} productName="Product Name" productCategory="Product Category" price="32,5dt" />
                    <ProductCard image={Trend1} productName="Product Name" productCategory="Product Category" price="32,5dt" /> */}
                </div>
            </div>
        </div >
    );
};

export default TrendingProductsSection;