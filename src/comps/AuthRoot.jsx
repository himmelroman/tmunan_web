import { Auth0Provider } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Root from '~/routes/root'

const AuthRoot = () => {
	useEffect(() => {
		console.log('AuthRoot mounted')
		return () => console.log('AuthRoot unmounted')
	}, [])

	const navigate = useNavigate()

	const domain = import.meta.env.VITE_AUTH0_DOMAIN
	const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID
	const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL

	const onRedirectCallback = appState => {
		navigate(appState?.returnTo || window.location.pathname)
	}

	if (!(domain && clientId && redirectUri)) {
		console.log('Auth0 environment variables not set%c', 'color: red')
		console.log('domain:', domain)
		console.log('clientId:', clientId)
		console.log('redirectUri:', redirectUri)
		return null
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
