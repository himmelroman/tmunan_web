/**
 *
 * Profile
 *
 */
import { useAuth0 } from '@auth0/auth0-react'
import styles from './index.module.scss'
import { useEffect } from 'react'

const Profile = () => {
	const { user } = useAuth0()

	useEffect(() => {
		document.title = 'Profile'
		console.log('User info', user)
	}, [user])

	return (
		<div className={styles.cont}>
			<span className='material-symbols-outlined'>account_circle</span>
			<div>{user.email}</div>
			<h3>Billing</h3>
			<h3>Delete account</h3>
		</div>
	)
}

export default Profile
