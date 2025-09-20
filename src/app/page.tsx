"use client"
import "@/styles/mainpage.scss";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./layout";

export default function Home() {
  const context = useContext(ThemeContext);
  return (
    <div className="pad-16 mainbody">
      <div className="center__text">
        {/*theme == "Dark" ? <>Theme is dark</> : <>Theme is light</>*/}
        <h2></h2>
      </div>
      <p>Some of my works can be run in browser at <a href="./projects">projects page</a></p>
    </div>
  )
}
