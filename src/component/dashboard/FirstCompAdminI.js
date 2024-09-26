import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { getAgency } from '../../redux/Agency/agencySlice';

const FirstCompAdminI = () => {
  const dispatch = useDispatch();
  const agencies = useSelector((state) => state.agency.userAgencies);
  const loading = useSelector((state) => state.agency.loading);
  const error = useSelector((state) => state.agency.error);

  useEffect(() => {
    dispatch(getAgency());
  }, [dispatch]);

  if (loading) return <p className="text-center">Loading agencies...</p>;
  if (error) return <p className="text-center text-danger">{error}</p>;

  return (
    <div>
      <h2 className="text-center">List of Agencies</h2>
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Agency Name</th>
              <th>Projects(Total)</th>
              <th>Date Joined</th>
              <th>Account Status</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {agencies.map((agency, index) => (
              <tr key={agency.id}>
                <td>{index + 1}</td>
                <td>{agency.agency_name}</td>
                <td>
                  3
                  {agency.created_by.name}
                </td>
                <td>22-02-2004</td>
                <td>
                  <Badge bg={agency.created_by.is_active ? 'success' : 'secondary'}>
                    {agency.created_by.is_active ? 'Active' : 'Inactive'}
                  </Badge>
                </td>
                <td colSpan={2}>
                  <div className="ActionButtons">
                    <Button variant="info" size="sm">Details</Button>
                    <Link to={`/update-agency-details/${agency.id}`}>
                      <Button variant="warning" size="sm">
                        Edit
                      </Button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
            <tr>
              <td>2</td>
              <td>Agency Name</td>
              <td>13</td>
              <td>22-05-2013</td>
              <td><Badge bg="secondary">Inactive</Badge></td>
              <td colSpan={2}>
                <div className="ActionButtons">
                  <Button variant="info" size="sm">Details</Button>
                  <Button variant="warning" size="sm">Edit</Button>
                </div>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Agency Name</td>
              <td>13</td>
              <td>22-05-2013</td>
              <td><Badge bg="danger">Deactivated</Badge></td>
              <td colSpan={2}>
                <div className="ActionButtons">
                  <Button variant="info" size="sm">Details</Button>
                  <Button variant="warning" size="sm">Edit</Button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default FirstCompAdminI;
