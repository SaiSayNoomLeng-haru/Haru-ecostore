import { memo } from "react";
import Newsletter from "../Utility Components/Newsletter";
import classNames from "classnames";
import CtaLink from "../Utility Components/CtaLink";
import Banner from "../Utility Components/Banner";

const Home = () => {


    // classes
    const homePageClass = classNames(
        'custom-container'
    )

    const heroClass = classNames(
        'grid gap-2 py-2'
    )
    return(
        <section className={homePageClass}>
        
            <div className={heroClass}>
                <h1 className="text-fs-600 text-custom-green uppercase text-center font-accent">haru eco goods store</h1>
                <p>Welcome to our eco-conscious store, where sustainability meets style! Discover a curated collection of eco-friendly products.</p>
                <img 
                    src="/assets/images/hero.jpg"
                    loading="lazy"
                    aria-label="haru eco hero image"
                    alt="haru eco hero image"
                    className="rounded-lg border-2 border-custom-green" />
                <CtaLink 
                    LinkTo='catalog'
                    className='bg-custom-green text-white'>
                    Go to Catalog
                </CtaLink>
            </div>

            <Banner />



            <Newsletter />
        </section>
    )
}

export default memo(Home);