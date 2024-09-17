import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Navigation from './Navigation';
import FirstCompO from './FirstCompO';

const Overview = () => (
  <Navigation>
    <div className="Cover">
      <p className="CompanyBadge"><Badge className="NameBadge" bg="secondary">SHORELINE INDUSTIRES</Badge></p>
      <div>
        <FirstCompO />
      </div>
    </div>
  </Navigation>
);

export default Overview;
