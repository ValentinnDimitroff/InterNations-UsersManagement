import React from 'react'
import { CompactForm } from 'ra-compact-ui/dist/edit'
import { Box } from '@material-ui/core'
import { TextInput } from 'ra-ui-materialui'

const GroupsForm = props => {
    return (
        <CompactForm {...props}
            redirect="list"
            layoutComponents={[<Box />]}
        >
            <Box>
                <TextInput source="title" />
            </Box>
        </CompactForm>
    )
}

export default GroupsForm
