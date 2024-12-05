import { FaHeart } from "react-icons/fa";

export default function CardHeader({className = '', ...props}){
    return(
        <div className='relative'>
            <img 
                src='/assets/images/products/p001-img1.jpg'
                alt=""
                aria-label=""
                loading="lazy" />
            <div className="absolute top-3 right-3 bg-white w-5 rounded-full aspect-square">
                <FaHeart />
            </div>
        </div>
    )
}