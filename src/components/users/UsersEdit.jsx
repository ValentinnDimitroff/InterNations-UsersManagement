import React from 'react'
import { Edit } from 'react-admin'
import { useOnSuccess } from '../_design'
import UserTitle from './common/UserTitle'
import UsersForm from './UsersForm'

const UsersEdit = (props) => {
    const onSuccess =  useOnSuccess("User edited successfully!", "list")
    
    return (
        <Edit {...props} title={<UserTitle />} onSuccess={onSuccess}>
            <UsersForm />
        </Edit>
    )
}

export default UsersEdit
