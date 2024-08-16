import React from 'react'
import "./Account.css";
import { UploadNav } from '../../components/UploadNav'
import { AccountSettings } from '../../components/AccountSettings';

const Account = () => {
  return (
    <div className="account">
      <UploadNav />
      <AccountSettings />
    </div>
  );
};

export default Account;