/**
 *
 * Login Button
 *
 */
import { useAuth0 } from '@auth0/auth0-react'
import Button from '~/comps/Button'
// import styles from './index.module.scss'

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0()

	const handleLogin = async () => {
		await loginWithRedirect({
			appState: {
				returnTo: '/dashboard',
			},
		})
	}

	return <Button name='login' onClick={handleLogin} icon='lock' />
}

export default LoginButton
