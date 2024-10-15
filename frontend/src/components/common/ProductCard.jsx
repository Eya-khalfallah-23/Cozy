import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';


const ProductCard = ({ image, productName, productCategory, price }) => {
    return (
        <div className="relative flex flex-col items-center w-[280px] h-[350px] rounded-lg bg-beige bg-opacity-90 shadow-custom">
          <FontAwesomeIcon 
            icon={faHeartRegular} 
            color="gray" 
            size="xl" 
            className="absolute top-4 right-4" 
          />
          <img src={image} alt={productName} className="w-[75%] h-auto mt-6" />
          <h3 className="text-lg font-bold text-gray-800">{productName}</h3>
          <h3 className="text-sm font-bold text-gray-500">{productCategory}</h3>
          <div className="flex items-center justify-center gap-2 mt-3">
            <h3 className="flex-1 text-2xl font-bold text-gray-800">{price}</h3>
            <button className="flex-1 w-32 h-10 bg-customGreen text-white text-center font-bold text-lg rounded-md hover:bg-[#c0dfa1] transition duration-200">
              Add to
              <FontAwesomeIcon icon={faCartShopping} color="white" size="sm" className="ml-1" />
            </button>
          </div>
        </div>
      );
      
  };
  
  export default ProductCard;