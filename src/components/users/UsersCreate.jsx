import React from 'react'
import { useNotify } from 'ra-core'
import { Create } from '../_design'
import UsersForm from './UsersForm'

const UsersCreate = (props) => {
    const notify = useNotify()

    return (
        <Create {...props} onSuccess={() => notify("User created successfully!")}>
            <UsersForm />
        </Create>
    )
}

export default UsersCreate
