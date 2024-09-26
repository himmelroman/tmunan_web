/**
 *
 * AuthGuard
 *
 */
import { withAuthenticationRequired } from '@auth0/auth0-react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

const AuthGuard = ({ component }) => {
	const Component = withAuthenticationRequired(component, {
		onRedirecting: () => (
			<div className={styles.loader}>
				<span className={`material-symbols-outlined ${styles.spinner}`}>progress_activity</span>
			</div>
		),
	})

	return <Component />
}

AuthGuard.propTypes = {
	component: PropTypes.elementType.isRequired,
}

export default AuthGuard
