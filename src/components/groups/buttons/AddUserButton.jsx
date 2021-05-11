import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'ra-ui-materialui'
import { MuiIcons, useSwitch } from '../../_design'
import { useCreate, useNotify, useRefresh } from 'ra-core'
import { resourcesMap } from '../../../constants'
import { Avatar, Box, CircularProgress, Dialog, Typography } from '@material-ui/core'
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { useGetNotMembers } from '../hooks/useGetNotMembers'
import PersonIcon from '@material-ui/icons/Person';

const AddUserButton = ({ record, ...props }) => {
    const notify = useNotify()
    const refresh = useRefresh()

    const [create, { loading }] = useCreate()
    const [openState, open, close] = useSwitch(false)
    const { data, loaded } = useGetNotMembers(record)

    const handleListItemClick = useCallback(
        (user_id) => {
            const data = {
                [resourcesMap.groups.refId]: record.id,
                [resourcesMap.users.refId]: user_id,
            }

            create(
                resourcesMap.usergroup.name,
                data,
                {
                    onSuccess: () => {
                        notify('User added successfully!')
                        refresh()
                    },
                    onFailure: (error) => notify(`User adding error: ${error.message}`, 'warning'),
                }
            )

            close()
        },
        [record.id, create, close, notify, refresh]
    )

    return (
        <>
            <Button {...props} label="Add User" variant="contained" onClick={open}>
                {loading ? <CircularProgress size="20px" /> : <MuiIcons.Actions.Create />}
            </Button>
            <Dialog onClose={close} aria-labelledby="simple-dialog-title" open={openState}>
                <DialogTitle id="simple-dialog-title">Add user to "{record.title}"</DialogTitle>
                <List>
                    {loaded && data.map(({ id, firstName, lastName }) => (
                        <ListItem button onClick={() => handleListItemClick(id)} key={id}>
                            <ListItemAvatar>
                                <Avatar>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={`${firstName} ${lastName}`} />
                        </ListItem>
                    ))}
                    {data && data.length <= 0
                        && <Box textAlign="center" mb={2}>
                            <Typography>No available users</Typography>
                        </Box>
                    }
                </List>
            </Dialog>
        </>
    )
}

AddUserButton.propTypes = {
    record: PropTypes.object,
}

export default AddUserButton
