import { useGetList } from "ra-core";
import { useMemo } from "react";
import { resourcesMap } from "../../../constants";
import { useGetMembers } from "./useGetMembers";

export const useGetNotMembers = (record) => {
  const { member_ids, loaded: loadedMembers } = useGetMembers(
    record && record.id
  );
  const {
    data: usersData,
    ids: user_ids,
    loaded: loadedUsers,
  } = useGetList(resourcesMap.users.name);

  const notMembers = useMemo(() => {
    return loadedMembers && loadedUsers
      ? user_ids
          .filter((id) => !member_ids.includes(id))
          .map((id) => usersData[id])
      : [];
  }, [loadedMembers, loadedUsers, member_ids, user_ids, usersData]);

  return { data: notMembers, loaded: loadedMembers && loadedUsers };
};
