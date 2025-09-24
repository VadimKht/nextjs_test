import Image from "next/image"
import { ReactElement } from "react"

export default function ProjectItem({ imgsrc = "/Untitled.png", title = "Title", description = "Description" }: {imgsrc?: string, title?: string, description?:string})
{
    return(
        <div className="project__item">
            <Image src={imgsrc} className="navbar__icon" alt="icon" width={256} height={256}></Image>
            <div className="information">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}