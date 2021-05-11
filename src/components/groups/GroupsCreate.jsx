import React from "react";
import { Create, useOnSuccess } from "../_design";
import GroupsForm from "./GroupsForm";

const GroupsCreate = (props) => {
  const onSuccess = useOnSuccess("Group created successfully!", "list");

  return (
    <Create {...props} onSuccess={onSuccess}>
      <GroupsForm />
    </Create>
  );
};

export default GroupsCreate;
