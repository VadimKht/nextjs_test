"use server"
import React from "react";
import { promises as fs } from "fs"
import styles from "../app/page.module.css"

// very useful https://vercel.com/guides/loading-static-file-nextjs-api-route
export default async function myComponentReadFS() {
	const file = await fs.readFile(process.cwd() + '/public/mydata.json', 'utf8');
	const data = JSON.parse(file);

	return(
	<p className={styles.component}>{data.content}</p>
	)
}
