/**
 *
 * Layout
 *
 */
import { Link, Outlet } from 'react-router-dom'
import FocusLock from 'react-focus-lock'
import styles from './index.module.scss'

const Root = () => {
	return (
		<FocusLock className={styles.cont}>
			<nav className={styles.nav}>
				<Link to='/' className={styles.logo}>
					Logo
				</Link>
				<Link to='/about'>About</Link>
				<div className={styles.spacer} />
				<Link to='/login'>
					<span className='material-symbols-outlined'>login</span>
				</Link>
			</nav>
			<Outlet />
		</FocusLock>
	)
}

export default Root
