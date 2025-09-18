'use client'

import "@/styles/navbar.scss"
import Image from "next/image"
import { useEffect } from "react"
import { Switched, SetVal, TestLog, themeSlice } from "@/lib/features/DarkTheme/darkSlice"
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks"

export default function Navbar()
{
    const store = useAppStore();
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.themeReducer.value);

    function ChangeTheme(){

        dispatch(Switched());
    }

    //  Can't apply it in layout because layout puts the body inside the provider?
    //  which makes it impossible to useAppSelector. additionally, there is a problem of the body having next js'
    //  class already, so i can't just assign className...
    useEffect(() => {
        document.body.classList.remove(theme == "Dark" ? "Light" : "Dark");
        document.body.classList.add(theme);

        // changes css class depending on current state
        const NavbarElement = document.getElementById("navbar");
        if(NavbarElement)
        {
            NavbarElement.classList.remove(theme == "Dark" ? "Light" : "Dark");
            NavbarElement.classList.add(theme);
        } 
    }, [theme]);
    
    return <div className={`row navbar ${theme}`} id="navbar">
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