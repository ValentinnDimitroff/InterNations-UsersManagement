import React from 'react'
import { Edit, useNotify } from 'react-admin'
import GroupsForm from './GroupsForm'

const GroupsEdit = props => {
    const notify = useNotify()
    
    return (
        <Edit {...props} onSuccess={() => notify("Group edited successfully!")}>
            <GroupsForm />
        </Edit>
    )
}

GroupsEdit.propTypes = {

}

export default GroupsEdit
