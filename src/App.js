import React from 'react'
import { Admin, Resource } from 'react-admin'
import { createBrowserHistory as createHistory } from 'history'
import { dataProvider, i18nProvider } from './ra-providers'
import { crudResources } from './components'

const history = createHistory()

export const App = (props) => {
	return (
		<Admin
			{...props}
			title="InterNations Admin"
			dataProvider={dataProvider}
			i18nProvider={i18nProvider}
			history={history}
		// dashboard={Dashboard}
		// theme={theme}
		// customRoutes={routesProvider}
		>
			{addCrudResources(crudResources, null)}
		</Admin>
	);
}

const addCrudResources = (resCollection, permissions) => {
	return resCollection.map(
		(x, i) => <Resource key={i} name={x.basePath} {...x.crud} />
	)
}
