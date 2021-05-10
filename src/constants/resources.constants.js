import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PeopleIcon from '@material-ui/icons/People';

const createResourceEntity = (menuLabel, name, icon) => ({
    menuLabel,
    name,
    icon,
    refId: `${name.slice(0, -1)}_id`, // removes the plural "s" in the end and concats "Id"
})

const userEntity = createResourceEntity(
    'menu.users',
    'users',
    PersonOutlineIcon,
)

const groupEntity = createResourceEntity(
    'menu.groups',
    'groups',
    PeopleIcon,
)

export const apiOnlyResources = {
    usergroup: { name: 'usergroup' }
}

export const resourcesMap = {
    users: userEntity,
    groups: groupEntity,
    ...apiOnlyResources
}