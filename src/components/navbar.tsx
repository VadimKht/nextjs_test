'use client'

import "@/styles/navbar.scss"
import Image from "next/image"
import { useContext, useEffect, useLayoutEffect } from "react"
import { ThemeContext } from "@/app/layout"

export default function Navbar()
{
    const context = useContext(ThemeContext);

    function ChangeTheme(){
        if(context.theme == "Dark")
        {
            context.setTheme("Light")
            localStorage.setItem("theme", "Light");
        }
        else{
            context.setTheme("Dark");
            localStorage.setItem("theme", "Dark");
        }
    }

    useLayoutEffect(()=>{
        const thm = localStorage.getItem("theme");
        thm == "Light" ? context.setTheme("Light") : context.setTheme("Dark");
    }, [])

    //  Can't apply it in layout because layout puts the body inside the provider?
    //  which makes it impossible to useAppSelector. additionally, there is a problem of the body having next js'
    //  class already, so i can't just assign className...
    useEffect(() => {
        document.body.classList.remove(context.theme == "Dark" ? "Light" : "Dark");
        document.body.classList.add(context.theme);

        // changes css class depending on current state
        const NavbarElement = document.getElementById("navbar");
        if(NavbarElement)
        {
            NavbarElement.classList.remove(context.theme == "Dark" ? "Light" : "Dark");
            NavbarElement.classList.add(context.theme);
        } 
    }, [context.theme]);


    return <div className={`row navbar ${context.theme}`} id="navbar">
        <div className="row navbar__left__row">
            <div className="navbar__icon__container">
                <a href="./">
                    <Image src="/images/icon.png" className="navbar__icon" alt="icon" width={64} height={64}></Image>
                </a>
            </div>
            <ul className="row">
                <li className="navbar__nav__page"><a href="/projects">Project links</a></li>
            </ul>
        </div>
        <div className="row">
            <div className="navbar__nav__item row navbar__switch__theme__btn">
                <button onClick={ChangeTheme}>switch theme</button>
            </div>
        </div>
    </div>
}