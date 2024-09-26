import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthGuard from '~/comps/AuthGuard'
import AuthRoot from '~/comps/AuthRoot'
import ErrorPage from '~/comps/ErrorPage'
import About from '~/routes/about'
import Callback from '~/routes/callback'
import Dashboard from '~/routes/dashboard'
import Home from '~/routes/home'
import NotFound from '~/routes/not-found'
import Profile from '~/routes/profile'
import '~/styles/index.scss'

const router = createBrowserRouter([
	{
		path: '/',
		element: <AuthRoot />,
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
				path: '/callback',
				element: <Callback />,
			},
			{
				path: '*',
				element: <NotFound />,
			},
			{
				path: '/dashboard',
				element: <AuthGuard component={Dashboard} />,
			},
			{
				path: '/profile',
				element: <AuthGuard component={Profile} />,
			},
		],
	},
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
