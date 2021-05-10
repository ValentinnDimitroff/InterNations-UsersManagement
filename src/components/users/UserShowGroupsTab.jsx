import React from 'react'
import PropTypes from 'prop-types'
import { Datagrid, ReferenceArrayField } from 'ra-ui-materialui'
import { resourcesMap } from '../../constants'
import { TextField } from '../_design'

const UserShowGroupsTab = ({ record, ...props }) => {
    return (
        <ReferenceArrayField
            reference={resourcesMap.groups.name}
            source="groups_ids"
            record={record}
            {...props}
        >
            <Datagrid>
                <TextField source="title" />
            </Datagrid>
        </ReferenceArrayField>
    )
}

UserShowGroupsTab.propTypes = {

}

export default UserShowGroupsTab
