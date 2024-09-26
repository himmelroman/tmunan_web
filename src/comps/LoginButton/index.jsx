/**
 *
 * Login Button
 *
 */
import { useAuth0 } from '@auth0/auth0-react'
import styles from './index.module.scss'

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0()

	const handleLogin = async () => {
		await loginWithRedirect({
			appState: {
				returnTo: '/dashboard',
			},
		})
	}

	return (
		<button className={styles.cont} onClick={handleLogin}>
			{/* <span className='material-symbols-outlined'>login</span> */}
			Login
		</button>
	)
}

export default LoginButton
