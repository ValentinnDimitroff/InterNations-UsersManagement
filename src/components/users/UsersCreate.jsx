import React from "react";
import { Create, useOnSuccess } from "../_design";
import UsersForm from "./UsersForm";

const UsersCreate = (props) => {
  const onSuccess = useOnSuccess("User created successfully!", "list");

  return (
    <Create {...props} onSuccess={onSuccess}>
      <UsersForm />
    </Create>
  );
};

export default UsersCreate;
