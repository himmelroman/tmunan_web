/**
 *
 * Home
 *
 */
import { useEffect } from 'react'
import styles from './index.module.scss'

const Home = () => {
	useEffect(() => {
		document.title = 'Tmunan web'
	}, [])

	return (
		<div className={styles.cont}>
			<span className='material-symbols-outlined'>home</span>
			<h1>The Bloody Unnamed Thing</h1>
		</div>
	)
}

export default Home
