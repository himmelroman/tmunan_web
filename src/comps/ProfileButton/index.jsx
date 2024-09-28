/**
 *
 * ProfileButton
 *
 */
import { useAuth0 } from '@auth0/auth0-react'
import { useState, useEffect, memo } from 'react'
import styles from './index.module.scss'
import useClasses from '~/lib/useClasses'
import { NavLink } from 'react-router-dom'

const ProfileButton = () => {
	const { logout, user } = useAuth0()

	const [open, setOpen] = useState(false)

	const toggleOpen = () => {
		setOpen(!open)
	}

	const handleClickOutside = e => {
		if (e.target.closest(`.${styles.cont}`)) return
		setOpen(false)
	}

	const handleLogout = () => {
		logout({
			logoutParams: {
				returnTo: window.location.origin,
			},
		})
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside)
		return () => document.removeEventListener('click', handleClickOutside)
	}, [])

	const cls = useClasses(styles.cont, open && styles.open)

	return (
		<div className={cls}>
			<button className={styles.avatar_button} onClick={toggleOpen}>
				<img src={user.picture} alt={user.name} />
			</button>
			{open && (
				<ul className={styles.menu}>
					<li className={styles.email}>
						<NavLink to='/profile'>{user.email}</NavLink>
					</li>
					<li className={styles.logout} onClick={handleLogout} data-button>
						<span className='material-symbols-outlined' data-icon>
							logout
						</span>
						<span className={styles.label}>Log out</span>
					</li>
				</ul>
			)}
		</div>
	)
}

export default memo(ProfileButton)
