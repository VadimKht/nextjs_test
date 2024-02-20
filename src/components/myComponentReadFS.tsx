'use client'
import React, { useEffect } from "react";
import { useState } from 'react';
import styles from "../app/page.module.css"

export default function myComponentReadFS() {
	const [data, setData] = useState("nothing");
	const [input, setInput] = useState("");
	
	useEffect(() => {
		fetch("/api/GetText").then(a=>a.json().then(b=>setData(b.message.toString())));
	}, []);
	
	
	function sendAPICallGET(){
		fetch("/api/GetText").then(a=>a.json().then(b=>setData(b.message.toString())));
	}
	async function sendAPICallPOST(){
		await fetch('/api/SetText/', {
		method: "POST",
		mode: "cors",
		headers: {
      		"Content-Type": "application/json",
		},
		body: JSON.stringify({content: input}),
		});
		sendAPICallGET();
	}
	function handleChange(e: any){
		setInput(e.target.value);
	}
	return(
		<>
		<p className={styles.component}>{data}</p>
		<input onChange={handleChange}/> <br/>
		<button onClick={sendAPICallPOST}>change the file to above input</button>
		</>
	)
}