/**
 *
 * Profile
 *
 */
import { useAuth0 } from '@auth0/auth0-react'
import styles from './index.module.scss'
import { useEffect } from 'react'

const Account = () => {
	const { user } = useAuth0()

	useEffect(() => {
		document.title = 'Account Settings'
		console.log('user', user)
	}, [user])

	return (
		<div className={styles.cont}>
			<span className='material-symbols-outlined'>account_circle</span>
			<h1>Account</h1>
			<h2>Info</h2>
			<p>{user.name}</p>
			<p>{user.email}</p>
			<h2>Billing</h2>
			<p>
				You are currently on the pigeon mail plan. Stay tuned for when we&apos;re ready to upgrade you to
				automated billing.
			</p>
			<h2>Delete account</h2>
			<button className={styles.delete}>Delete Account</button>
		</div>
	)
}

export default Account
