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
		</div>
	)
}

export default Home
