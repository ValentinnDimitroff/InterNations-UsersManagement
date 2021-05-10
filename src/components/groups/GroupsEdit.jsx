import React from 'react'
import { Edit } from 'react-admin'
import GroupsForm from './GroupsForm'

const GroupsEdit = props => {
    return (
        <Edit {...props}>
            <GroupsForm />
        </Edit>
    )
}

GroupsEdit.propTypes = {

}

export default GroupsEdit
