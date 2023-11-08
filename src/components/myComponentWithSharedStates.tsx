'use client' 

import React from "react";
import styles from "../app/page.module.css"

function DependentComponent(props: {isActive: boolean})
{
	return(
		(props.isActive == true) ? 
			<li className={styles.noBottomMargin}>Active</li> : 
			<li className={styles.noBottomMargin}>Inactive</li>
	)
}

export default class myComponentWithSharedStates extends React.Component<{}, {Active:number}>{

	constructor(props: {}){
		super(props);
		this.state = { Active: 0 };
		this.NextActive = this.NextActive.bind(this);
	}

	NextActive()
	{
		this.setState({Active: this.state.Active + 1});
		// all inactive is intended
		(this.state.Active >= 4) ? this.setState({Active:0}) : this.setState({Active: this.state.Active+1});
	}

	render(){
		return <ul className={styles.component}>
			<DependentComponent isActive={this.state.Active == 0 ? true : false}/>
			<DependentComponent isActive={this.state.Active == 1 ? true : false}/>
			<DependentComponent isActive={this.state.Active == 2 ? true : false}/>
			<DependentComponent isActive={this.state.Active == 3 ? true : false}/>		
			<button onClick={this.NextActive}>Click to switch</button>
		</ul>
	}
}
