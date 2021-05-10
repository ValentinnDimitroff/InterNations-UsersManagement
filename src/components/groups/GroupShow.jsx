import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { Show, GridShowLayout, Datagrid, DeleteButton, FunctionField, Tab, TabbedShowLayout, TextField, RaGrid, ReferenceField, ReferenceManyField } from '../_design'
import { resourcesMap } from '../../constants'

const GroupShow = props => {
    // const location = useLocation()

    // if (location.pathname.endsWith('show')) {
    //     return <Redirect to={`${location.pathname}/details`} />
    // }

    return (
        <Show {...props}>
            <GridShowLayout>
                <RaGrid container>
                    <RaGrid item xs={12}>
                        <TextField source="title" />
                        <TextField source="description" />
                    </RaGrid>
                    <RaGrid item xs={12}>
                        <ReferenceManyField
                            label="Users"
                            reference={resourcesMap.usergroup.name}
                            target={resourcesMap.groups.refId}
                            perPage={10}
                            {...props}
                        >
                            <Datagrid>
                                <ReferenceField link="show" label="Names" source={resourcesMap.users.refId} reference={resourcesMap.users.name}>
                                    <FunctionField render={r => `${r.firstName} ${r.lastName}`} />
                                </ReferenceField>
                                <DeleteButton />
                            </Datagrid>
                        </ReferenceManyField>
                    </RaGrid>
                </RaGrid>
            </GridShowLayout>
        </Show>
    )
}

GroupShow.propTypes = {

}

export default GroupShow
