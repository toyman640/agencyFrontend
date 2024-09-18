import React from 'react';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const FirstCompAdminI = () => (
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Shoreline Industries</td>
            <td>13</td>
            <td>22-05-2013</td>
            <td><Badge bg="success">Active</Badge></td>
            <td>
              <Button variant="info">Details</Button>
              <Button variant="primary">Activate/Deactivate</Button>
              <Button variant="warning">Edit</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Agency Name</td>
            <td>13</td>
            <td>22-05-2013</td>
            <td><Badge bg="secondary">Inactive</Badge></td>
            <td>
              <Button variant="info">Details</Button>
              <Button variant="primary">Activate/Deactivate</Button>
              <Button variant="warning">Edit</Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Agency Name</td>
            <td>13</td>
            <td>22-05-2013</td>
            <td><Badge bg="danger">Deactivated</Badge></td>
            <td>
              <Button variant="info">Details</Button>
              <Button variant="primary">Activate/Deactivate</Button>
              <Button variant="warning">Edit</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>

  </div>
);

export default FirstCompAdminI;
