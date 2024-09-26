/**
 *
 * LogoutButton
 *
 */
import { useAuth0 } from '@auth0/auth0-react'
import styles from './index.module.scss'

const LogoutButton = () => {
	const { logout } = useAuth0()

	const handleLogout = () => {
		logout({
			logoutParams: {
				returnTo: window.location.origin,
			},
		})
	}

	return (
		<button className={styles.cont} onClick={handleLogout}>
			Log out
		</button>
	)
}

export default LogoutButton
