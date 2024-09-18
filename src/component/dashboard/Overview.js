import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Navigation from './Navigation';
import FirstCompAgencyO from './FirstCompAgencyO';
import FirstCompAdminO from './FirstCompAdminO';

const Overview = () => (
  <Navigation>
    <div className="Cover">
      <p className="CompanyBadge"><Badge className="NameBadge" bg="secondary">SHORELINE INDUSTIRES</Badge></p>
      <div>
        <FirstCompAgencyO />
      </div>
      <div className="mt-5">
        <FirstCompAdminO />
      </div>
    </div>
  </Navigation>
);

export default Overview;
