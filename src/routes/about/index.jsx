/**
 *
 * About
 *
 */
import { useEffect } from 'react'
import styles from './index.module.scss'

const About = () => {
	useEffect(() => {
		document.title = 'About'
	}, [])

	return (
		<div className={styles.cont}>
			<span className='material-symbols-outlined'>help_center</span>
		</div>
	)
}

export default About
