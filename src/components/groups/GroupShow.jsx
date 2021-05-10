import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { Show, BoxedShowLayout, Tab, TabbedShowLayout, TextField, RaBox } from '../_design'

const GroupShow = props => {
    const location = useLocation()

    if (location.pathname.endsWith('show')) {
        return <Redirect to={`${location.pathname}/details`} />
    }

    return (
        <Show {...props}>
            <TabbedShowLayout>
                <Tab label="Details" path="details">
                    <TextField source="title" />
                </Tab>
                <Tab label="Users" path="users">
                    <span>list with users</span>
                </Tab>
            </TabbedShowLayout>
        </Show>
    )
}

GroupShow.propTypes = {

}

export default GroupShow
