import React from 'react';
import { useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import Navigation from './Navigation';
import FirstCompAgencyO from './FirstCompAgencyO';
import FirstCompAdminO from './FirstCompAdminO';

const Overview = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <Navigation>
      <div className="Cover">
        <p className="CompanyBadge"><Badge className="NameBadge" bg="secondary">SHORELINE INDUSTIRES</Badge></p>
        {!user?.is_staff && (
          <div>
            <FirstCompAgencyO />
          </div>
        )}
        {user && user.is_staff && (
          <div className="mt-5">
            <FirstCompAdminO />
          </div>
        )}
      </div>
    </Navigation>
  );
};

export default Overview;
