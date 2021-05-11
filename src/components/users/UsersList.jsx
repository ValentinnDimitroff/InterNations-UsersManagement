import React from "react";
import {
  List,
  Datagrid,
  EmailField,
  EditButton,
  DeleteButton,
  FullNameField,
} from "../_design";

const UsersList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <FullNameField source="fullName" label="Name" />
        <EmailField source="email" />
        {/* TODO: Groups counts */}
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default UsersList;
