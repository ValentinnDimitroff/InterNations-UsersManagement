import React from 'react'
import { Show, ShowTitle, GridShowLayout, Datagrid, DeleteButton, FunctionField, TextField, RaGrid, ReferenceField, ReferenceManyField, MuiIcons } from '../_design'
import { resourcesMap } from '../../constants'
import { makeStyles } from '@material-ui/styles'
import { Pagination } from 'ra-ui-materialui'
import AddUserButton from './buttons/AddUserButton'

const useStyles = makeStyles(() => ({
    usersLabel: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}))

const GroupShow = props => {
    const classes = useStyles()

    return (
        <Show {...props} title={<ShowTitle render={r => `Group - ${r.title}`} />}>
            <GridShowLayout>
                <RaGrid container>
                    <RaGrid item xs={12} md={6}>
                        <TextField source="title" />
                        <TextField source="description" />
                    </RaGrid>
                    <RaGrid item xs={12} md={6}>
                        <ReferenceManyField
                            label="Users"
                            reference={resourcesMap.usergroup.name}
                            target={resourcesMap.groups.refId}
                            perPage={10}
                            pagination={<Pagination />}
                        >
                            <Datagrid>
                                <ReferenceField link="show" label="Full name" source={resourcesMap.users.refId} reference={resourcesMap.users.name}>
                                    <FunctionField render={r => `${r.firstName} ${r.lastName}`} />
                                </ReferenceField>
                                <DeleteButton redirect={false}/>
                            </Datagrid>
                        </ReferenceManyField>
                        <AddUserButton fullWidth />
                    </RaGrid>
                </RaGrid>
            </GridShowLayout>
        </Show>
    )
}

export default GroupShow
