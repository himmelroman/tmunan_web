/**
 *
 * Projects
 *
 */
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { useSelector } from 'react-redux'
import { selectProjects } from '~/lib/redux'

const now = new Date()

const Project = ({ id, title, updated }) => {
	const date = new Date(updated)

	let diff = Math.floor((now - date) / (1000 * 60 * 60 * 24))

	if (diff === 0) {
		diff = 'today'
	} else if (diff === 1) {
		diff = 'yesterday'
	} else if (diff > 60) {
		diff = `${Math.floor(diff / 30)} months ago`
	} else {
		diff = `${diff} days ago`
	}

	return (
		<div className={styles.project} tabIndex='0'>
			<div className={styles.title}>{title}</div>
			<div className={styles.updated}>{diff}</div>
			<button onClick={() => window.open(`https://rt.tmunan.icu/${id}`, '_blank')}>
				<span className='material-symbols-outlined'>launch</span>
			</button>
		</div>
	)
}

Project.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	updated: PropTypes.string,
}

const Projects = () => {
	useEffect(() => {
		document.title = 'Projects'
	}, [])

	const projects = useSelector(selectProjects)

	return (
		<div className={styles.cont}>
			<span className='material-symbols-outlined'>category</span>
			{/* <h1>Projects</h1> */}
			<div className={styles.header}>
				<div className={styles.actions}>
					<button className={styles.add_button}>
						<span className='material-symbols-outlined'>add</span> Add New
					</button>
				</div>
			</div>
			<div className={styles.list}>
				{projects.map((project, i) => (
					<Project key={i} {...project} />
				))}
			</div>
		</div>
	)
}

export default Projects
