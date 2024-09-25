/**
 *
 * Login
 *
 */
import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styles from './index.module.scss'
import { Form } from 'react-router-dom'

const Login = () => {
	useEffect(() => {
		document.title = 'Login'
	}, [])

	return (
		<div className={styles.cont}>
			<Form className={styles.form}>
				<input type='text' placeholder='Username' />
				<input type='password' placeholder='Password' />
				<button type='submit'>Login</button>
			</Form>
		</div>
	)
}

export default Login
