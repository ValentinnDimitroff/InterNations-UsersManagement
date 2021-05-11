import React from "react";
import {
  Show,
  ShowTitle,
  GridShowLayout,
  Datagrid,
  DeleteButton,
  FunctionField,
  TextField,
  RaGrid,
  ReferenceField,
  ReferenceManyField,
} from "../_design";
import { resourcesMap } from "../../constants";
import { Pagination } from "ra-ui-materialui";
import AddUserButton from "./buttons/AddUserButton";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  usersGrid: {
    "& > div": {
      display: "flex",
      flex: "0 0 100%",
    },
  },
}));

const GroupShow = (props) => {
  const classes = useStyles();

  return (
    <Show {...props} title={<ShowTitle render={(r) => `Group - ${r.title}`} />}>
      <GridShowLayout>
        <RaGrid container>
          <RaGrid item xs={12} md={6}>
            <TextField source="title" />
            <TextField source="description" />
          </RaGrid>
          <RaGrid item xs={12} md={6}>
            <ReferenceManyField
              label="Users"
              reference={resourcesMap.usergroup.name}
              target={resourcesMap.groups.refId}
              perPage={10}
              pagination={<Pagination />}
              className={classes.usersGrid}
            >
              <Datagrid>
                <ReferenceField
                  link="show"
                  label="Full name"
                  source={resourcesMap.users.refId}
                  reference={resourcesMap.users.name}
                >
                  <FunctionField
                    render={(r) => `${r.firstName} ${r.lastName}`}
                  />
                </ReferenceField>
                <DeleteButton redirect={false} />
              </Datagrid>
            </ReferenceManyField>
            <AddUserButton fullWidth />
          </RaGrid>
        </RaGrid>
      </GridShowLayout>
    </Show>
  );
};

export default GroupShow;
