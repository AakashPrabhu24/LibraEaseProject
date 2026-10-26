import React from 'react';

import './ProfileLoanRecord.css';
import { LoanRecord } from '../../../../models/LoanRecord';

interface ProfileLoanRecordProps {
    record: LoanRecord
}

export const ProfileLoanRecord: React.FC<ProfileLoanRecordProps> = ({ record }) => {
    const returned = record.status === 'AVAILABLE';

    return (
        <div className="profile-record">
            <div className="profile-record-top">
                <h4 className="profile-record-title">{record.item?.title ?? 'Unknown book'}</h4>
                <span className={returned ? 'profile-record-badge returned' : 'profile-record-badge loaned'}>
                    {returned ? 'RETURNED' : 'LOANED'}
                </span>
            </div>
            <p>Loan Date: {new Date(record.loanedDate).toDateString()}</p>
            <p>Return by Date: {new Date(record.dueDate).toDateString()}</p>
            {record.returnedDate && <p>Date Returned: {new Date(record.returnedDate).toDateString()}</p>}
        </div>
    );
}