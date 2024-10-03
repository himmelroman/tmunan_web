/**
 *
 * Redux Store
 *
 */
import { configureStore, createSelector, createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
	name: 'ui',
	initialState: {
		project_sort_by: 'updated',
		project_sort_order: 'desc',
	},
	reducers: {
		setProjectSortBy: (s, { payload }) => {
			s.project_sort_by = payload
		},
		setProjectSortOrder: (s, { payload }) => {
			s.project_sort_order = payload
		},
	},
})

export const { setProjectSortBy, setProjectSortOrder } = uiSlice.actions

export const dataSlice = createSlice({
	name: 'data',
	initialState: {
		id: '',
		username: '',
		email: '',
		avatar: '',
		projects: [
			{ title: 'Besarabia 1', id: 'besarabia_1', updated: '2024-07-22T18:15:00' },
			{ title: 'Besarabia 2', id: 'besarabia_2', updated: '2024-08-13T12:11:00' },
			{ title: 'tmunan test', id: 'tmunan_test', updated: '2024-08-15T10:30:00' },
			{ title: 'Planets jungles', id: 'planets_jungles', updated: '2024-08-16T03:26:05' },
		],
	},
	reducers: {
		setData: (s, { payload }) => {
			s = payload
		},
		setProjects: (s, { payload }) => {
			s.projects = payload
		},
		updateProject: (s, { payload }) => {
			const { id, data } = payload
			const index = s.projects.findIndex(p => p.id === id)
			Object.assign(s.projects[index], data)
		},
	},
})

export const { setData, setProjects, updateProject } = dataSlice.actions

export const selectUI = s => s.ui

export const selectData = s => s.data

export const selectProjectSortOrder = createSelector(selectUI, ui => ui.project_sort_order)

export const selectProjectSortBy = createSelector(selectUI, ui => ui.project_sort_by)

export const selectProjects = createSelector(
	selectData,
	selectProjectSortBy,
	selectProjectSortOrder,
	(data, sortBy, sortOrder) => {
		const projects = [...data.projects]

		if (sortBy === 'updated') {
			projects.sort((a, b) => {
				if (sortOrder === 'asc') {
					return new Date(a.updated) - new Date(b.updated)
				}
				return new Date(b.updated) - new Date(a.updated)
			})
		} else if (sortBy === 'title') {
			projects.sort((a, b) => {
				if (sortOrder === 'asc') {
					return a.title.localeCompare(b.title)
				}
				return b.title.localeCompare(a.title)
			})
		}

		return projects
	}
)

export const store = configureStore({
	reducer: {
		ui: uiSlice.reducer,
		data: dataSlice.reducer,
	},
})

export default store
