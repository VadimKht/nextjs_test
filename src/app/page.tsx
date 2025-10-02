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
      <ProjectItem imgsrc="/WindowManager.png" sourcelink="https://github.com/VadimKht/VadimKht.github.io/tree/main/windows" trylink="https://vadimkht.github.io/windows/" title="Window manager" description="Window manager made on HTML CSS JS. You can pull things around and can turn a simple div into window with single function call and create a new window" />
      {context.theme == "Dark" ? 
        <ProjectItem imgsrc="/ClickerDark.png" sourcelink="https://github.com/VadimKht/VadimKht.github.io/tree/main/clickergame" trylink="https://vadimkht.github.io/clickergame/" title="Clicker" description="Just a little clicker game i made on javascript" />
      :
        <ProjectItem imgsrc="/ClickerLight.png" sourcelink="https://github.com/VadimKht/VadimKht.github.io/tree/main/clickergame" trylink="https://vadimkht.github.io/clickergame/" title="Clicker" description="Just a little clicker game i made on javascript" />
      }
      <ProjectItem imgsrc="/raylib game.png" sourcelink="https://github.com/VadimKht/vame" title="Raylib game" description="Attempt at using raylib, made on C. It's unfinished but i planned to make it a parkour game. Lack of quake-like bunnyhopping annoys me so i want to make exactly this next time i continue working on it" />
      <ProjectItem imgsrc="/todolist.png" trylink="https://vadimkht.github.io/todo-list/" sourcelink="https://github.com/VadimKht/VadimKht.github.io/tree/main/todo-list" title="todo list" description="Made on raw javascript, saveable todo list that you can share with your friends, for example, to help them keep track of their ingame achievements" />
      <ProjectItem imgsrc="/3dtest.png" trylink="https://vadimkht.github.io/belft/" sourcelink="https://github.com/VadimKht/VadimKht.github.io/tree/main/belft" title="3D test" description="WebGL cube with inputtable model matrix and second cube to compare them. Most calculations are done on CPU" />
      <ProjectItem imgsrc="/2dgame.png" trylink="https://vadimkht.github.io/2d_game/rework/" sourcelink="https://github.com/VadimKht/VadimKht.github.io/tree/main/2d_game" title="2d game" description="WebGL 2D project main purpose of which is for me to learn instanced rendering" />
      <ProjectItem imgsrc="/vuetest.png" trylink="https://vadimkht.github.io/builds/vue_project/" sourcelink="https://github.com/VadimKht/learning_vue" title="vue project" description="Vue project that's supposed to be used with mysql server locally running. Idea is that you can register/login and make comments. Not done well and project links on this site contains front end only version" />
  </div>
  )
}
