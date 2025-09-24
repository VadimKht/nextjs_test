"use client"
import "@/styles/mainpage.scss";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./layout";
import Image from "next/image";
import ProjectItem from "@/components/project_item";

export default function Home() {
  const context = useContext(ThemeContext);
  return (
    <div className="pad-16 mainbody">
      <div className="center__text">
        {/*theme == "Dark" ? <>Theme is dark</> : <>Theme is light</>*/}
        <h2></h2>
      </div>
      <p>Some of my works can be run in browser at <a href="./projects">projects page</a></p>
      <ProjectItem imgsrc="/WindowManager.png" title="Window manager" description="Raw javascript" />
      {context.theme == "Dark" ? 
        <ProjectItem imgsrc="/ClickerDark.png" title="Clicker" description="Raw javascript" />
      :
        <ProjectItem imgsrc="/ClickerLight.png" title="Clicker" description="Raw javascript" />
      }
      <ProjectItem imgsrc="/raylib game.png" title="Raylib game" description="C raylib" />
      <ProjectItem imgsrc="/todolist.png" title="todo list" description="Raw javascript" />
      <ProjectItem imgsrc="/3dtest.png" title="3D test" description="Raw javascript" />
      <ProjectItem imgsrc="/2dgame.png" title="2d game" description="Raw javascript" />
  </div>
  )
}
