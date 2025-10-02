import Image from "next/image"
import { ReactElement } from "react"

export default function ProjectItem(
    {imgsrc = "/Untitled.png", title = "Title", description = "Description", sourcelink, trylink}:
    {imgsrc?: string, title?: string, description?: string, sourcelink?: string, trylink?: string})
{
    return(
        <div className="project__item">
            <Image src={imgsrc} className="navbar__icon" alt="icon" width={256} height={256}></Image>
            <div className="information">
                <h4>{title}</h4>
                <p>{description}</p>
                {sourcelink != undefined || trylink != undefined ?
                <div className="links">
                    {trylink != undefined ? <a href={trylink}>Try out</a> : <></>}
                    {sourcelink != undefined ? <a href={sourcelink}>Sourcecode</a> : <></>}
                </div> :
                <></>}
            </div>
        </div>
    )
}