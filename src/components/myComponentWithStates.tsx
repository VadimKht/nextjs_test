'use client'
import React, { useEffect, useState } from "react";
import styles from "../app/page.module.css"

export default function MyComponentWithStates(props: {myProp?:Number}){
	const [mystate, setMystate] = useState(0);	

	useEffect(()=>{
		// if there is a prop given, assign. if no, set myState to 0
		if(props.myProp != undefined){
			setMystate(Number(props.myProp));
			return;
		}
		setMystate(0);
	}, [props.myProp])

	// i was confused about making new lines so i did them through br instead
	return <p className={styles.component}>
			Your prop is { (props.myProp == undefined) ? "not defined" : Number(props.myProp)} <br/>
			Your state is {mystate} <br/> 
			Click on this button to increase it <br/>
			<button onClick={()=>setMystate(mystate+1)}>
				press
			</button>
		</p>
}


