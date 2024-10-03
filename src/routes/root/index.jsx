/**
 *
 * Layout
 *
 */
import { useAuth0 } from '@auth0/auth0-react'
import FocusLock from 'react-focus-lock'
import { Link, NavLink, Outlet } from 'react-router-dom'
import LoginButton from '~/comps/LoginButton'
// import LogoutButton from '~/comps/LogoutButton'
import styles from './index.module.scss'
import Loader from '~/comps/Loader'
import AccountMenu from '~/comps/AccountMenu'
import { useEffect } from 'react'

const Root = () => {
	const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0()

	useEffect(() => {
		if (isAuthenticated) {
			const getToken = async () => {
				const token = await getAccessTokenSilently()
				console.log('token:')
				console.log(token)
				// TODO: get user data
			}
			getToken()
		}
	}, [isAuthenticated, getAccessTokenSilently])

	if (isLoading) return <Loader />

	return (
		<FocusLock className={styles.cont}>
			<nav className={styles.nav}>
				<div className={styles.logo}>
					<img src='/favicon.ico' alt='logo' />
				</div>
				{isAuthenticated && (
					<>
						<NavLink to='/dashboard'>Dashboard</NavLink>
						<Link to='https://rt.tmunan.icu'>App</Link>
					</>
				)}
				<span data-spacer />
				{isAuthenticated ? <AccountMenu /> : <LoginButton />}
			</nav>
			<Outlet />
		</FocusLock>
	)
}

export default Root
