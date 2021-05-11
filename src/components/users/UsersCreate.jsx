import React from 'react'
import { useNotify } from 'ra-core'
import { Create, SimpleForm, TextInput } from '../_design'

const UsersCreate = (props) => {
    const notify = useNotify()

    return (
        <Create {...props} onSuccess={() => notify("User created successfully!")}>
            <SimpleForm {...props} redirect="list">
                <TextInput source="firstName" />
                <TextInput source="lastName" />
                <TextInput source="email" />
            </SimpleForm>
        </Create>
    )
}

export default UsersCreate
