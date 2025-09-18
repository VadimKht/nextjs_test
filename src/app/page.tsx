"use client"
import { useAppSelector } from "@/lib/hooks";
import "@/styles/mainpage.scss"
import { useEffect, useState } from "react";

export default function Home() {
  const theme = useAppSelector((state) => state.themeReducer.value);
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
