import React from "react";
import { List, Datagrid, TextField, EditButton } from "../_design";
import DeleteGroupButton from "./buttons/DeleteGroupButton";
import MemberCountField from "./fields/MemberCountField";

const GroupsList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <TextField source="title" />
        <MemberCountField alignText="center" label="Members Count" />
        <EditButton />
        <DeleteGroupButton />
      </Datagrid>
    </List>
  );
};

export default GroupsList;
