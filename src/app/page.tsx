import styles from './page.module.css'
import Image  from 'next/image'
import MyComponent from '../components/myComponent'
import MyComponentWithStates from '../components/myComponentWithStates'
import MyComponentWithSharedStates from '../components/myComponentWithSharedStates'
import MyComponentReadFS from '../components/myComponentReadFS'

export default function Home() {
  return (
    <>
		<header className={[styles.center, styles.headStyle].join(" ")}>
			<Image className={styles.borderRadius} src="/Untitled.png" width={200} height={200} alt="white"/>
			<h1>my page</h1>
		</header>
		<main className={styles.center}>
			<div className={styles.componentlist}>
				{/*Basic component*/}
				<MyComponent />
				{/*Component that has both props and states. myProp sets up the starting value for state.
					If myProp is not defined then the state is assigned to 0*/}
				<MyComponentWithStates myProp={8} />
				<MyComponentWithStates />
				
				{/* Shared state */}
				<MyComponentWithSharedStates />
				
				{/* Reads from server */}
				<MyComponentReadFS />
			</div>
		</main>
		<footer>
		</footer>
	</>
  )
}
