'use client'
import React, { useEffect } from "react";
import { useState } from 'react';
import styles from "../app/page.module.css"

export default function myComponentReadFS() {
	const [data, setData] = useState("nothing");
	const [input, setInput] = useState("");
	// should probably use domainip as a state or prop??
	let DomainIP: string;
	
	useEffect(() => {
		DomainIP = document.location.origin.toString();
		fetch(DomainIP+"/api/GetText").then(a=>a.json().then(b=>setData(b.message.toString())));
	  }, [])
	
	
	function sendAPICallGET(){
		fetch(DomainIP+"/api/GetText").then(a=>a.json().then(b=>setData(b.message.toString())));
	}
	async function sendAPICallPOST(){
		await fetch(DomainIP+'/api/SetText/', {
		method: "POST",
		mode: "cors",
		headers: {
      		"Content-Type": "application/json",
		},
		body: JSON.stringify({content: input}),
		});
	}
	function handleChange(e: any){
		setInput(e.target.value);
	}
	return(
		<>
		<p className={styles.component}>{data}</p>
		<button onClick={sendAPICallGET}>click to update! (change the text in the public/mydata)</button><br/>
		<input onChange={handleChange}/> <br/>
		<button onClick={sendAPICallPOST}>change the file to above input</button>
		</>
	)
}