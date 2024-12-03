import classNames from "classnames";

export default function Newsletter({className = ''}) {

    // classes
    const newsletterClass = classNames(
        'bg-custom-green grid', className
    )
    return(
        <div className={newsletterClass}>
            <h1 className="font-light"></h1>
        </div>
    )
}