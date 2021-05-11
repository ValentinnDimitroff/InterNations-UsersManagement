import React from 'react'
import { email, minLength, required, useGetList } from 'ra-core'
import { resourcesMap } from '../../constants'
import { SimpleForm, SelectArrayInput, TextInput } from '../_design'

const UsersForm = (props) => {
    const { data, ids, loaded } = useGetList(resourcesMap.groups.name)

    return (
        <SimpleForm {...props} redirect="list">
            <TextInput source="firstName" validate={[required(), minLength(3)]} />
            <TextInput source="lastName" validate={[required(), minLength(3)]} />
            <TextInput source="email" type="email" validate={[required(), email()]} />
            <SelectArrayInput
                source="groups"
                choices={loaded ? ids.map(id => ({ id: data[id], name: data[id].title })) : []}
                validate={[required()]}
            />
        </SimpleForm>
    )
}

export default UsersForm
