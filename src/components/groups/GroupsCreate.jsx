import React from 'react'
import { Create, SimpleForm, TextInput } from '../_design'

const GroupsCreate = props => {
    return (
        <Create {...props}>
            <SimpleForm {...props} redirect="list">
                <TextInput source="title" />
            </SimpleForm>
        </Create>
    )
}

GroupsCreate.propTypes = {

}

export default GroupsCreate
