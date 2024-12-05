export default function ProductCard({children, className = '', ...props}){

    const productCardClass = classNames(
        'grid'
    )
    return(
        <div>
            {children}
        </div>
    )
}