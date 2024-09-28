/**
 *
 * Projects
 *
 */
import styles from './index.module.scss'

const Project = ({ title, id }) => {
	return (
		<div
			className={styles.project}
			tabIndex='0'
			// onClick={() => window.open(`https://rt.tmunan.icu/${id}`, '_blank')}
		>
			<h3>{title}</h3>
			<span data-spacer />
			<button>
				<span className='material-symbols-outlined'>launch</span>
			</button>
		</div>
	)
}

const mockProjects = [
	{ title: 'Project 1', id: 'project1' },
	{ title: 'Project 2', id: 'project2' },
	{ title: 'Project 3', id: 'project3' },
	{ title: 'Project 4', id: 'project4' },
]

const Projects = () => {
	return (
		<div className={styles.cont}>
			<h2>Projects</h2>
			<div className={styles.list}>
				{mockProjects.map((project, i) => (
					<Project key={i} {...project} />
				))}
			</div>
			<button className={styles.new}>New</button>
		</div>
	)
}

export default Projects
