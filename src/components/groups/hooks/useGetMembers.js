import { useGetManyReference } from "ra-core";
import { resourcesMap } from "../../../constants";

export const useGetMembers = (groupId) => {
  const { data, loaded, loading } = useGetManyReference(
    resourcesMap.usergroup.name,
    "group_id",
    groupId,
    { page: 1, perPage: 99999 },
    { field: "user_id", order: "DESC" },
    {}
  );

  const member_ids = loaded
    ? Object.keys(data).map((key) => data[key].user_id)
    : [];

  return { data, member_ids, loaded, loading };
};
