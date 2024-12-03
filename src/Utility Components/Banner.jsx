import classNames from "classnames"
import { BsFillRocketTakeoffFill } from "react-icons/bs"
import { IoIosLeaf } from "react-icons/io"
import { IoRibbon } from "react-icons/io5"
import { PiShoppingBagFill } from "react-icons/pi"

export default function Banner({className = '', }){

    const bannerClass = classNames(
        'grid grid-cols-2 gap-2 md:grid-cols-4', className
    )

    const svgHolder = classNames(
        'border border-custom-green rounded-lg flex flex-col gap-2 justify-center items-center text-custom-green aspect-square'
    )
    return(
        <div className={bannerClass}>
            <div className={svgHolder}>
                <IoIosLeaf className='text-fs-500'/>
                <p className="text-fs-300 font-semibold">Eco Friendly goods</p>
            </div>
            
            <div className={svgHolder}>
                <PiShoppingBagFill className='text-fs-500'/>
                <p className="text-fs-300 font-semibold">Eco Packaging</p>
            </div>

            <div className={svgHolder}>
                <BsFillRocketTakeoffFill className='text-fs-500'/>
                <p className="text-fs-300 font-semibold">Fast Delivery</p>
            </div>

            <div className={svgHolder}>
                <IoRibbon className='text-fs-500'/>
                <p className="text-fs-300 font-semibold">Certified products</p>
            </div>
        </div>

    )
}