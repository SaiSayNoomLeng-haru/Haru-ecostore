import classNames from "classnames";
import { useState } from "react";
import Button from "./Button";

export default function Newsletter({className = ''}) {
    const [ sub, setSub ] = useState({
        email: ''
    })
    const [ isValid, setIsValid ] = useState(true);
    const reg_Email = /^[a-zA-Z0-9._%+-]+@+[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    const handleChange = (e) => {
        const { name, value } = e.target;
        setSub(prevData => (
            {
                ...prevData,
                [name] : value
            }
        ))
        setIsValid(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email } = sub;
        
        if(email === '' || !reg_Email.test(email)){
            setIsValid(false);
            console.log('error')
            return;
        }else{
            setIsValid(true);
            console.log(sub.email);
            setSub({email: ''})
        } 
    }

    // classes
    const newsletterClass = classNames(
        'bg-custom-green grid p-3 rounded-lg text-white gap-2 items-center md:justify-center', className
    )

    const inputClass = classNames(
        'indent-2 bg-transparent border py-2 rounded-lg outline-none font-basic placeholder:text-custom-white text-fs-300 focus:border-custom-orange focus:border-2 w-full',
        {
            'border-red-900 animate-shake' : !isValid
        }
    )
    return(
        <div className={newsletterClass}>
            <h1 className="font-light text-fs-500 text-center">Your first purchase with <span className="text-custom-orange">10%</span> off</h1>
            <p className="text-fs-300">Subsribe to our newsletter and get discount on your first purchase</p>

            <form 
                action="" 
                className="flex flex-col gap-2 md:flex-row justify-around"
                onSubmit={handleSubmit}>
                <div className="flex-auto">
                    <input 
                    type="text"
                    id="email"
                    value={sub.email}
                    name="email"
                    className={inputClass}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Enter your Email Address" />

                    {isValid ? '' :
                        <p className="text-fs-300 font-basic italic text-red-900 absolute bottom-[-1rem] left-0">Invalid Email</p>
                    }
                </div>

                <Button className="bg-custom-orange flex-auto md:py-0">
                    Subscribe
                </Button>
            </form>
        </div>
    )
}