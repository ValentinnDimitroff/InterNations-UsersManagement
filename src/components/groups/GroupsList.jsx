import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
} from '../_design'

const GroupsList = props => {
    return (
        <List {...props} >
            <Datagrid rowClick="show">
                <TextField source="title" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    )
}

export default GroupsList
