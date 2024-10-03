/**
 *
 * About
 *
 */
import { useEffect } from 'react'
import styles from './index.module.scss'

// mock session taking between 1 and 8 hours, sometime during september 2024
const mockSessions = [
	{
		id: '1f2e3d4c5b6a7890',
		start_time: '2024-08-15T10:30:00',
		end_time: '2024-08-15T12:45:00',
	},
	{
		id: '9876543210fedcba',
		start_time: '2024-08-22T18:15:00',
		end_time: '2024-08-22T19:00:00',
	},
	{
		id: 'abcdef0123456789',
		start_time: '2024-09-03T09:45:00',
		end_time: '2024-09-03T15:30:00',
	},
	{
		id: 'zyxwvutsrqponmlk',
		start_time: '2024-09-17T14:00:00',
		end_time: '2024-09-17T14:25:00',
	},
	{
		id: 'jihgfedcba987654',
		start_time: '2024-09-28T20:30:00',
		end_time: '2024-09-28T23:10:00',
	},
]

const padZero = number => number.toString().padStart(2, '0')

const fDate = date => {
	const day = padZero(date.getDate())
	const month = padZero(date.getMonth() + 1)

	const year = String(date.getFullYear()).slice(-2)
	const hours = padZero(date.getHours())
	const minutes = padZero(date.getMinutes())

	return `${day}.${month}.${year} ${hours}:${minutes}`
}

const Dashboard = () => {
	useEffect(() => {
		document.title = 'Dashboard'
	}, [])

	let totalMs = 0

	return (
		<div className={styles.cont}>
			<span className='material-symbols-outlined'>dashboard_2</span>
			<h2>Status</h2>
			<p>No active sessions.</p>
			<h2>Usage History</h2>
			<table className={styles.sessions_table}>
				<thead>
					<tr>
						<th>Session ID</th>
						<th>Start Time</th>
						<th>End Time</th>
						<th>Duration</th>
					</tr>
				</thead>
				<tbody>
					{mockSessions.map((session, i) => {
						const startTime = new Date(session.start_time)
						const endTime = new Date(session.end_time)
						const durationMs = endTime - startTime
						const durationHours = Math.floor(durationMs / (1000 * 60 * 60))
						const durationMinutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60))

						totalMs += durationMs

						return (
							<tr key={i}>
								<td>{session.id}</td>
								<td>{fDate(startTime)}</td>
								<td>{fDate(endTime)}</td>
								<td>{`${padZero(durationHours)}h ${padZero(durationMinutes)}m`}</td>
							</tr>
						)
					})}
					<tr className={styles.total}>
						<td />
						<td />
						<td>Total</td>
						<td className={styles.total_value}>
							{Math.floor(totalMs / (1000 * 60 * 60))}h{' '}
							{Math.floor(totalMs % (1000 * 60 * 60)) / (1000 * 60)}m
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Dashboard
