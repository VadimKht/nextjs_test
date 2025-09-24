import "@/styles/projects_page.scss"

export default function Projects() {
    return (
      <div className="projects">
          <h2 className="centered projects__title">Projects</h2>
          <ul>
              <li>
                  <a href="./windows/" className="title">Window manager</a>
                  <p className="description">CSS-manipulation based window manager. Written in pure javascript </p>
              </li>
              <li>
                  <a href="./clickergame/" className="title">Clicker game</a> 
                  <p className="description">clicker game written in pure javascript </p>
              </li>
              <li>
                  <a href="./todo-list/" className="title">todo list</a> 
                  <p className="description todolistdescr">localstorage category based todo list with ability to exchange existing todo lists</p>
              </li>
              <li>
                <a href="./belft/" className="title">3d test</a> 
                <p className="description">WebGL learning experience project with matrix calculations done on CPU. user can set matrix transformation to one cube to see how 4by4 matrix affects graphics</p>
              </li>
              <li>
                <a href="./2d_game/rework/" className="title">webgl testing</a> 
                <p className="description">Instanced rendering on WebGL 2.0, no attributes in shader, only uniforms and hardcoded rectangle vertex set</p>
              </li>
              <li>
                <a href="./builds/vue_project/" className="title">Vue build (backend cut, old project, unstable)</a> 
                <p className="description">Vue learning experience project, backend part cut. Most interesting stuff is on the source code on github</p>
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
  