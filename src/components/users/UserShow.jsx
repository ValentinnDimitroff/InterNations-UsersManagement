import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { Show, ShowSplitter, BoxedShowLayout, Tab, TabbedShowLayout, TextField, RaBox } from '../_design'
import UserProfileAvatar from './common/UserProfileAvatar'
import UserTitle from './common/UserTitle'

const UserShow = (props) => {
    const location = useLocation()

    if (location.pathname.endsWith('show')) {
        return <Redirect to={`${location.pathname}/groups`} />
    }

    return (
        <Show {...props} component="div" title={<UserTitle />}>
            <ShowSplitter
                leftSide={
                    <BoxedShowLayout>
                        <RaBox px={2}>
                            <UserProfileAvatar />
                            <RaBox display="flex" >
                                <TextField source="firstName" />
                                <TextField source="lastName" />
                            </RaBox>
                            <TextField source="email" />
                        </RaBox>
                    </BoxedShowLayout>
                }
                rightSide={
                    <TabbedShowLayout>
                        <Tab label="Groups" path="groups">
                            <div>Empty</div>
                        </Tab>
                    </TabbedShowLayout>
                }
            />
        </Show>
    )
}

export default UserShow
