import classNames from "classnames"
import { Link } from "react-router"

export default function Footer(){


    // classes
    const footerClass = classNames(
        'custom-container text-fs-300 bg-custom-green text-custom-white grid grid-cols-2 gap-3 font-basic  rounded-t-[2rem]'
    )

    const linkClass = classNames(
        'hover:text-custom-orange text-fs-300'
    )
    return(
        <footer className={footerClass}>
            <div className="text-center">
                <Link to='/'>
                    <img src='/assets/images/logo-white.png' />
                </Link>
                Eco-friendly place, where sustainability meets style!
            </div>

            <div className="flex flex-col gap-1">
                <p className="font-bold text-fs-400">Menu</p>
                <Link className={linkClass} to="catalog">Catalog</Link>
                <Link className={linkClass} to="about-us">About Us</Link>
                <Link className={linkClass} to='contact-us'>Contacts</Link>
            </div>

            <div className="flex flex-col gap-1">
                <p className="font-semibold text-fs-400">Social Media</p>
                <a className={linkClass} href="https://www.facebook.com">
                    Facebook
                </a>
                <a className={linkClass} href="https://www.instagram.com">
                    Instagram
                </a>
            </div>

            <div className="flex flex-col gap-1">
                <p className="font-bold text-fs-400">Catalog</p>
                <Link className={linkClass} to="catalog">Orgnic cosmetic</Link>
                <Link className={linkClass} to="about-us">Hygiene products</Link>
                <Link className={linkClass} to='contact-us'>Eco Dishes</Link>
                <Link className={linkClass} to='contact-us'>Shoppers</Link>
                <Link className={linkClass} to='contact-us'>Gift sets</Link>
            </div>

            <div className="col-span-full">
                <p className="font-bold text-fs-400">Catalog</p>
                <p>Phone: +1 123 456 8910</p>
                <p>Email: example@mail.com</p>
            </div>

            <div className="custom-divider col-span-full my-2"></div>
            
            <div className="col-span-full">
                <p>
                    &copy; {new Date().getFullYear()} created by <span className="font-bold text-custom-orange">Sai Say Noom Leng</span>. All rights reserved.
                </p>
            </div>
            
            
        </footer>
    )
}