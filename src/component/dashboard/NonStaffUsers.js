import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Navigation from './Navigation';
import { getNonStaffUser, activateUser, deactivateUser } from '../../redux/user/userSlice';

const NonStaffUser = () => {
  const dispatch = useDispatch();
  const { nonStaffUser } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getNonStaffUser());
  }, [dispatch]);

  const handleActivate = (userId) => {
    console.log(userId);
    dispatch(activateUser(userId)).then(() => {
      dispatch(getNonStaffUser());
    });
  };

  const handleDeactivate = (userId) => {
    dispatch(deactivateUser(userId)).then(() => {
      dispatch(getNonStaffUser());
    });
  };

  return (
    <Navigation>
      <div>
        <h2 className="text-center">List of Agencies</h2>

        <div>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Account Name</th>
                <th>Email</th>
                <th>Name</th>
                <th>Account Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {nonStaffUser && nonStaffUser.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.agency_name}</td>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>
                    <Badge bg={user.is_active ? 'success' : 'secondary'}>
                      {user.is_active ? 'Active' : 'Inactive'}
                    </Badge>
                  </td>
                  <td>
                    {user.is_active ? (
                      <Button variant="primary" onClick={() => handleDeactivate(user.id)}>Deactivate</Button>
                    ) : (
                      <Button variant="warning" onClick={() => handleActivate(user.id)}>Activate</Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </Navigation>
  );
};

export default NonStaffUser;
