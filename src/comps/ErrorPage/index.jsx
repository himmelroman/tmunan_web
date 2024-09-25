import { useRouteError } from 'react-router-dom'
import styles from './index.module.scss'

const ErrorPage = () => {
	const error = useRouteError()

	return (
		<div className={styles.cont}>
			<h1>Oops!</h1>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	)
}

export default ErrorPage
