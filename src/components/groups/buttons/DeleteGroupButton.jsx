import React from 'react'
import PropTypes from 'prop-types'
import { useGetMembers } from '../hooks/useGetMembers'
import { DeleteButton } from 'ra-ui-materialui'

const DeleteGroupButton = ({ record, ...props }) => {
    const { member_ids, loaded } = useGetMembers(record && record.id)

    return (
        <DeleteButton {...props} disabled={loaded && member_ids.length > 0} record={record} />
    )
}

DeleteGroupButton.propTypes = {
    record: PropTypes.object,
}

export default DeleteGroupButton
