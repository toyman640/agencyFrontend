import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Navigation from './Navigation';
import FirstCompAgencyO from './FirstCompAgencyO';
import FirstCompAdminO from './FirstCompAdminO';
import { getAgency } from '../../redux/Agency/agencySlice';

const Overview = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  console.log(user);
  const userAgencyInfo = useSelector((state) => state.agency.userAgency);
  console.log(userAgencyInfo);
  const loading = useSelector((state) => state.agency.loading);
  const isAgencyEmpty = !userAgencyInfo || (Array.isArray(userAgencyInfo) && userAgencyInfo.length === 0) || (typeof userAgencyInfo === 'object' && Object.keys(userAgencyInfo).length === 0);

  useEffect(() => {
    if (user && !user.is_staff) {
      dispatch(getAgency());
    }
  }, [dispatch, user]);

  return (
    <Navigation>
      <div className="Cover">
        <p className="CompanyBadge"><Badge className="NameBadge" bg="secondary">SHORELINE INDUSTIRES</Badge></p>
        {user?.data?.is_staff ? (
          <div>
            <FirstCompAdminO />
          </div>
        ) : (
          <div>
            {/* Loading state */}
            {loading ? (
              <p>Loading agency data...</p>
            ) : (
              <div>
                {/* If the user is non-staff and has no associated agency */}
                {isAgencyEmpty ? (
                  <div className="NoAgency">
                    No agency yet set up agency.
                    {' '}
                    <Link to="/create-agency">Create one now</Link>
                  </div>
                ) : (
                  <div className="mt-5">
                    <p>
                      {userAgencyInfo.agency_name}
                      1
                    </p>
                    <p>
                      User ID:
                      {' '}
                      {user?.data?.id}
                    </p>
                    <FirstCompAgencyO />
                    <div>
                      <p className="Testing">1234567</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </Navigation>
  );
};

export default Overview;
