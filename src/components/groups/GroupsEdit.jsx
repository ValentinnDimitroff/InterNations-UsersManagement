import React from "react";
import { Edit } from "react-admin";
import { useOnSuccess } from "../_design";
import GroupsForm from "./GroupsForm";

const GroupsEdit = (props) => {
  const onSuccess = useOnSuccess("Group edited successfully!", "list");

  return (
    <Edit {...props} onSuccess={onSuccess}>
      <GroupsForm />
    </Edit>
  );
};

export default GroupsEdit;
