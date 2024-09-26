/**
 *
 * Dashboard
 *
 */
import styles from './index.module.scss'

const Dashboard = () => {
	return (
		<div className={styles.cont}>
			<span className='material-symbols-outlined'>dashboard_2</span>
			<div>Usage history...</div>
			<div>Current status...</div>
			<button data-primary>Start</button>
			<div>normal link</div>
			<div>output only link</div>
			<div>input only link</div>
			<div>control only link</div>
		</div>
	)
}

export default Dashboard
