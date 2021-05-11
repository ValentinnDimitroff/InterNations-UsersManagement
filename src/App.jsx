import React from "react";
import { Admin, Resource } from "react-admin";
import { createBrowserHistory as createHistory } from "history";
import { dataProvider, i18nProvider } from "./ra-providers";
import { crudResources } from "./components";
import { apiOnlyResources } from "./constants";

const history = createHistory();

export const App = (props) => {
  return (
    <Admin
      {...props}
      title="InterNations Admin"
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
      history={history}
    >
      {addCrudResources(crudResources)}
      {addApiOnlyResources(apiOnlyResources)}
    </Admin>
  );
};

const addCrudResources = (resCollection) => {
  return resCollection.map(({ name, crud, ...rest }) => (
    <Resource key={name} name={name} {...crud} {...rest} />
  ));
};

const addApiOnlyResources = (apiResources) => {
  return Object.keys(apiResources).map((key) => (
    <Resource key={apiResources[key].name} name={apiResources[key].name} />
  ));
};
