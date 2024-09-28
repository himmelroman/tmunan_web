/**
 *
 * Layout
 *
 */
import { useAuth0 } from '@auth0/auth0-react'
import FocusLock from 'react-focus-lock'
import { NavLink, Outlet } from 'react-router-dom'
import LoginButton from '~/comps/LoginButton'
// import LogoutButton from '~/comps/LogoutButton'
import styles from './index.module.scss'
import Loader from '~/comps/Loader'
import ProfileButton from '~/comps/ProfileButton'

const Root = () => {
	const { isAuthenticated, isLoading } = useAuth0()

	if (isLoading) return <Loader />

	return (
		<FocusLock className={styles.cont}>
			<nav className={styles.nav}>
				<NavLink to='/' className={styles.logo}>
					Logo
				</NavLink>
				<NavLink to='/about'>About</NavLink>
				{isAuthenticated && (
					<>
						<NavLink to='/dashboard'>Dashboard</NavLink>
						<NavLink to='/profile'>Profile</NavLink>
					</>
				)}
				<div className={styles.spacer} />
				{isAuthenticated ? <ProfileButton /> : <LoginButton />}
			</nav>
			<Outlet />
		</FocusLock>
	)
}

export default Root
