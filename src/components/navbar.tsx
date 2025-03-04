'use client'

import "@/styles/navbar.scss"
import Image from "next/image"
import { useEffect } from "react"
import { Switched, themeSlice } from "@/lib/features/DarkTheme/darkSlice"
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks"

export default function Navbar()
{
    const store = useAppStore();
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state)=> state.value);

    function ChangeTheme(){
        dispatch(Switched());
    }

    //  Can't apply it in layout because layout puts the body inside the provider?
    //  which makes it impossible to useAppSelector. additionally, there is a problem of the body having next js'
    //  class already, so i can't just assign className...
    useEffect(() => {
        document.body.classList.remove(theme == "Dark" ? "Light" : "Dark");
        document.body.classList.add(theme);

        // ???
        const NavbarElement = document.getElementById("navbar");
        if(NavbarElement)
        {
            NavbarElement.classList.remove(theme == "Dark" ? "Light" : "Dark");
            NavbarElement.classList.add(theme);
        } 
    }, [theme]);

    useEffect(()=>{
        let cursorPosition: [x: number, y: number] = [0, 0];
        let isInside: boolean = false;
        const NavbarElement = document.getElementById("navbar");
        const NavbarsRect = NavbarElement?.getBoundingClientRect();

        if(NavbarElement instanceof HTMLElement)
        {
            NavbarElement.onmouseenter = (e) => {
                isInside = true;
            };
            NavbarElement.onmouseout = (e) => {
                isInside = false;
                NavbarElement.style.boxShadow = `none`;
            };
        }

        document.onmousemove = (e) => {
            if(isInside && NavbarElement instanceof HTMLElement && NavbarsRect instanceof DOMRect)
            {
                cursorPosition = [e.offsetX, e.offsetY];
                let shadowX, shadowY;
                shadowX = NavbarsRect.width-e.offsetX*2;
                shadowY = NavbarsRect.height-e.offsetY*2;
                // todo figure out how to make shading from sides closer to mouse
                NavbarElement.style.boxShadow = `inset ${shadowX}px ${shadowY}px 64px ${theme == "Dark" ? "#2f2f2f" : "#f2f2f2"}`;
            }
        }

    }, [theme])
    return <div className={`row navbar ${theme}`} id="navbar">
        <div className="row navbar__left__row">
            <div className="navbar__icon__container">
                <Image src="/images/icon.png" className="navbar__icon" alt="icon" width={64} height={64}></Image>
            </div>
            <ul className="row">
                <li className="navbar__nav__page"><a href="./">Main page</a></li>
                <li className="navbar__nav__page"><a href="/projects">Mini projects</a></li>
            </ul>
        </div>
        <div className="row">
            <div className="navbar__nav__item row navbar__switch__theme__btn">
                <button onClick={ChangeTheme}>switch theme</button>
            </div>
            <div className="navbar__nav__page">
                <a href="/about">About</a>
            </div>
        </div>
    </div>
}