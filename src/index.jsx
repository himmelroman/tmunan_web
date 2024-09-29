import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthGuard from '~/comps/AuthGuard'
import AuthRoot from '~/comps/AuthRoot'
import ErrorPage from '~/comps/ErrorPage'
import About from '~/routes/about'
import Account from '~/routes/account'
import Callback from '~/routes/callback'
import Home from '~/routes/home'
import NotFound from '~/routes/not-found'
import Projects from '~/routes/projects'
import '~/styles/index.scss'
import Dashboard from './routes/dashboard'

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
				path: '/projects',
				element: <AuthGuard component={Projects} />,
			},
			{
				path: '/account',
				element: <AuthGuard component={Account} />,
			},
		],
	},
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
