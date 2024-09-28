/**
 *
 * Dashboard
 *
 */
import { useEffect } from 'react'
import styles from './index.module.scss'
import Projects from '~/comps/Projects'
import UsageHistory from '~/comps/UsageHistory'

const Dashboard = () => {
	useEffect(() => {
		document.title = 'Dashboard'
	}, [])

	return (
		<div className={styles.cont}>
			{/* <span className='material-symbols-outlined'>dashboard_2</span> */}
			<Projects />
			<UsageHistory />
		</div>
	)
}

export default Dashboard
