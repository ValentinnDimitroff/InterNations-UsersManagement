import React from 'react'
import { Create, SimpleForm, TextInput } from '../_design'
import { useNotify } from 'ra-core'

const GroupsCreate = props => {
    const notify = useNotify()

    return (
        <Create {...props} onSuccess={() => notify("Group created successfully!")}>
            <SimpleForm {...props} redirect="list">
                <TextInput source="title" />
            </SimpleForm>
        </Create>
    )
}

GroupsCreate.propTypes = {

}

export default GroupsCreate
