import classNames from "classnames"

export default function Button({children, className = '', ...props}){

    // classes
    const buttonClass = classNames(
        'block max-w-full py-2 rounded-lg  font-semibold', className
    )
    return(
        <button className={buttonClass} {...props}>
            {children}
        </button>
    )
}