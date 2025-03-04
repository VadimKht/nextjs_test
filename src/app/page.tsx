"use client"
import { useAppSelector } from "@/lib/hooks";
import "@/styles/mainpage.scss"
import { useEffect, useState } from "react";

export default function Home() {
  const theme = useAppSelector((state) => state.value);
  return (
    <div className="center">
      {theme == "Dark" ? <>Theme is dark</> : <>Theme is light</>}
      <h2>Welcome</h2>
      <p>I have no idea what to put on here yet but you can check my <a className="projectslink" href="./projects">mini projects</a></p>
    </div>
  )
}
