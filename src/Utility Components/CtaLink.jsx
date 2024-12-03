import { Link } from "react-router";
import classNames from "classnames";

export default function CtaLink({children, className = '', LinkTo, ...props}){

    const ctaLinkClass = classNames(
        'py-2 text-center rounded-lg', className
    )
    return(
        <Link className={ctaLinkClass} to={LinkTo} {...props}>{children}</Link>
    )
}