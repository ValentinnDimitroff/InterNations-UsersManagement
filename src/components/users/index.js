import { resourcesMap } from "../../constants";
import UsersList from "./UsersList";
import UsersEdit from "./UsersEdit";
import UsersCreate from "./UsersCreate";
import UserShow from "./UserShow";

export default {
  crud: {
    list: UsersList,
    show: UserShow,
    edit: UsersEdit,
    create: UsersCreate,
  },
  ...resourcesMap.users,
};
