import classNames from "classnames"

export default function CardContent({className = '', ...props}){

    const contentClass = classNames(
        'flex', className
    )
    return(
        <div className={contentClass}>

        </div>

    )
}