import React, { useEffect } from 'react'
import "./Account.css";
import { UploadNav } from '../../components/UploadNav'
import { AccountSettings } from '../../components/AccountSettings';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Account = () => {
  const navigator = useNavigate();
  const { currentProject } = useSelector((state) => state.currentProject);

  useEffect(() => {
    if (!currentProject) {
      navigator("/home");
    }
  }, [currentProject, navigator]);

  if (!currentProject) {
    return null;
  }

  return (
    <div className="account">
      <AccountSettings />
    </div>
  );
};

export default Account;