import "@/styles/projects_page.scss"

export default function Projects() {
    return (
      <div className="projects">
          <h2 className="centered projects__title">Projects</h2>
          <ul>
              <li>
                  <a href="./windows/" className="title">Window manager</a>
                  <p className="description">code that uses position:absolute and allows you to drag windows in real time. Written in pure javascript </p>
              </li>
              <li>
                  <a href="./clickergame/" className="title">Clicker game</a> 
                  <p className="description">game where you should click to win, written in javascript </p>
              </li>
              <li>
                  <a href="./todo-list/" className="title">todo list</a> 
                  <p className="description todolistdescr">I kept hearing about todo list as a beginner project, but never saw the fun in it. However, recently i&apos;ve been playing bloodborne, trying to complete an achievement for all weapons, and i found someone&apos;s todo list, which was very helpful. So I made my own one for anything. You can reposition lists, copy and paste the &rsquo;save file&rsquo; and its always saved to localstorage</p>
              </li>
              <li>
                <a href="./belft/" className="title">3d test</a> 
                <p className="description">webgl beginner 3d project, attempt to understand opengl without special math libraries. unstable, doesn&apos;t work as intended anymore, needs to be rewritten with new knowledge</p>
              </li>
              <li>
                <a href="./2d_game/rework/" className="title">webgl testing</a> 
                <p className="description">2D Instanced rendering without using any attributes, only uniforms and hardcoded data such as retangle vertex set. The result itself is only movement, rotation, and setting objects</p>
              </li>
              <li>
                <a href="./builds/vue_project/" className="title">Vue build (backend cut, old project, unstable)</a> 
                <p className="description">My old attempt to make comment section with authorization using vue and vue router, original version interacts with local mysql server, but setting it up is not easy</p>
              </li>
              <li>
                <a href="./hilel/homework14-main/pages/index.html" className="title">Hilel homework 14</a> 
                <p className="description"></p>
              </li>
              <li>
                <a href="./hilel/homework16-main/pages/index.html" className="title">Hilel homework 16</a> 
                <p className="description"></p>
              </li>
              <li>
                <a href="./hilel/hwfinal-main/pages/index.html" className="title">Hilel final homework</a> 
                <p className="description"></p>
              </li>
          </ul>
      </div>
    )
  }
  