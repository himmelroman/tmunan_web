/**
 *
 * Profile
 *
 */
import { useAuth0 } from '@auth0/auth0-react'
import styles from './index.module.scss'

const Profile = () => {
	const { user } = useAuth0()

	return (
		<div className={styles.cont}>
			<span className='material-symbols-outlined'>account_circle</span>
			<div>{user.email}</div>
		</div>
	)
}

export default Profile
