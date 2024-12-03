import classNames from "classnames"

export default function Header(){
    const headerClass = classNames(
        'font-basic custom-container text-fs-300'
    )
    return(
        <header className={headerClass}>
            navbar
        </header>
    )
}