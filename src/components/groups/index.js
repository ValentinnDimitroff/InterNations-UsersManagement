import { resourcesMap } from "../../constants";
import GroupsList from "./GroupsList";
import GroupsEdit from "./GroupsEdit";
import GroupsCreate from "./GroupsCreate";
import GroupShow from "./GroupShow";

export default {
  crud: {
    list: GroupsList,
    show: GroupShow,
    edit: GroupsEdit,
    create: GroupsCreate,
  },
  ...resourcesMap.groups,
};
