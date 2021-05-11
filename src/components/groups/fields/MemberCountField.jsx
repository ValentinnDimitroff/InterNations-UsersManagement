import React from 'react'
import PropTypes from 'prop-types'
import { FunctionField } from 'ra-ui-materialui'
import { useGetMembers } from '../hooks/useGetMembers'

const MemberCountField = ({ record, ...props }) => {
    const { member_ids } = useGetMembers(record && record.id)

    return (
        <FunctionField {...props}  render={() => member_ids.length} />
    )
}

MemberCountField.propTypes = {
    record: PropTypes.object,
    label: PropTypes.string,
}

export default MemberCountField
