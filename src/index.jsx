import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { Auth0Provider } from '@auth0/auth0-react'
import ErrorPage from '~/comps/ErrorPage'
import About from '~/routes/about'
import Home from './routes/home'
import Root from './routes/root'
import NotFound from './routes/not-found'

import '~/styles/index.scss'
import Login from './routes/login'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		{/* <Auth0Provider domain='dev-9v3h9v5i.us.auth0.com' clientId='9v3h9v5i' redirectUri={window.location.origin}> */}
		<RouterProvider router={router} />
		{/* </Auth0Provider> */}
	</StrictMode>
)
