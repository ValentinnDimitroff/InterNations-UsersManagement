import React from 'react'
import { CompactForm } from 'ra-compact-ui'
import { Box } from '@material-ui/core'
import { TextInput } from 'ra-ui-materialui'
import { minLength, required } from 'ra-core'

const GroupsForm = props => {
    return (
        <CompactForm {...props}
            redirect="list"
            layoutComponents={[<Box />]}
        >
            <Box>
                <TextInput source="title" validate={[required(), minLength(3)]}/>
            </Box>
        </CompactForm>
    )
}

export default GroupsForm
