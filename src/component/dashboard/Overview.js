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
  const userAgencyInfo = useSelector((state) => state.agency.userAgency);
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
        {user?.data?.is_staff ? (
          <div>
            <FirstCompAdminO />
          </div>
        ) : (
          <div>
            {loading ? (
              <p>Loading agency data...</p>
            ) : (
              <div>
                {isAgencyEmpty ? (
                  <div className="NoAgency">
                    No agency yet set up agency.
                    {' '}
                    <Link to="/create-agency">Create one now</Link>
                  </div>
                ) : (
                  <div className="mt-5">
                    <div>
                      <p className="CompanyBadge"><Badge className="NameBadge" bg="secondary">{userAgencyInfo.agency_name}</Badge></p>
                      <FirstCompAgencyO />
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
