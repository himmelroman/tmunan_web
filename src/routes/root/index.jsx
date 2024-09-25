/**
 *
 * Layout
 *
 */
import { Link, Outlet } from 'react-router-dom'
import styles from './index.module.scss'

const Root = () => {
	return (
		<div className={styles.cont}>
			<nav>
				<Link to='/'>Logo</Link>
				<Link to='/about'>About</Link>
				<div className={styles.spacer} />
				<Link to='/login'>Login</Link>
			</nav>
			<Outlet />
		</div>
	)
}

export default Root
