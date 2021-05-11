import { useGetManyReference } from "ra-core"
import { resourcesMap } from "../../../constants"

export const useGetMembers = (groupId) => {
    const { data, loaded, loading } = useGetManyReference(
        resourcesMap.usergroup.name,
        "group_id",
        groupId,
        { page: 1, perPage: 99999 },
        { field: 'user_id', order: 'DESC' },
        {},
    )

    return { data, loaded, loading }
}