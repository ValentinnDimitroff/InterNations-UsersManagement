import React from 'react'
import { Edit, useNotify } from 'react-admin'
import UserTitle from './common/UserTitle'
import UsersForm from './UsersForm'

const UsersEdit = (props) => {
    const notify = useNotify()

    return (
        <Edit {...props} title={<UserTitle />} onSuccess={() => notify("User edited successfully!")}>
            <UsersForm />
        </Edit>
    )
}

export default UsersEdit
