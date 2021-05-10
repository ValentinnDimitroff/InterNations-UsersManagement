import React from 'react'
import PropTypes from 'prop-types'
import { Datagrid, ReferenceField, ReferenceManyField } from 'ra-ui-materialui'
import { resourcesMap } from '../../constants'
import { TextField } from '../_design'

const UserShowGroupsTab = ({ record, ...props }) => {
    return (
        <ReferenceManyField
            reference={resourcesMap.usergroup.name}
            target={resourcesMap.users.refId}
            record={record}
            {...props}
        >
            <Datagrid>
                <ReferenceField link="show" label="Title" source="group_id" reference={resourcesMap.groups.name}>
                    <TextField source="title" />
                </ReferenceField>
            </Datagrid>
        </ReferenceManyField>
    )
}

UserShowGroupsTab.propTypes = {

}

export default UserShowGroupsTab
