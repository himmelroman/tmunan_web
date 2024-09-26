import { Auth0Provider } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import Root from '~/routes/root'

const domain = import.meta.env.VITE_AUTH0_DOMAIN
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID
const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL

const AuthRoot = () => {
	const navigate = useNavigate()

	const onRedirectCallback = appState => {
		navigate(appState?.returnTo || window.location.pathname)
	}

	return (
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			authorizationParams={{
				redirect_uri: redirectUri,
			}}
			onRedirectCallback={onRedirectCallback}
		>
			<Root />
		</Auth0Provider>
	)
}

export default AuthRoot
