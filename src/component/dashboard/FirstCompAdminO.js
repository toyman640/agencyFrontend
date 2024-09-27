import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandshake, faListCheck, faCircleXmark, faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import { fetchAgencies } from '../../redux/Agency/agencySlice';

const FirstCompAdminO = () => {
  const dispatch = useDispatch();
  const {
    allAgencies, activeAgencies, inactiveAgencies, loading, error,
  } = useSelector((state) => state.agency);

  useEffect(() => {
    dispatch(fetchAgencies());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }

  return (
    <div>
      <Row>
        <Col lg={3} md={6} sm={12}>
          <Card className="Card">
            <Card.Body>
              <Card.Text>
                <span className="CardInner">
                  <FontAwesomeIcon className="CardIcon" icon={faHandshake} />
                  <span>
                    <CountUp end={allAgencies} duration={2} start={0} separator="," />
                  </span>
                </span>
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted text-center">AGENCIES</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <Card className="Card">
            <Card.Body>
              <Card.Text>
                <span className="CardInner">
                  <FontAwesomeIcon className="CardIcon" icon={faListCheck} />
                  <span>
                    <CountUp end={253} duration={2} start={0} separator="," />
                  </span>
                </span>
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted text-center">PROJECTS(ALL)</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <Card className="Card">
            <Card.Body>
              <Card.Text>
                <span className="CardInner">
                  <FontAwesomeIcon className="CardIcon" icon={faCircleCheck} />
                  <span>
                    <CountUp end={activeAgencies} duration={2} start={0} separator="," />
                  </span>
                </span>
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted text-center">ACTIVE AGENCIES</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <Card className="Card">
            <Card.Body>
              <Card.Text>
                <span className="CardInner">
                  <FontAwesomeIcon className="CardIcon" icon={faCircleXmark} />
                  <span>
                    <CountUp end={inactiveAgencies} duration={2} start={0} separator="," />
                  </span>
                </span>
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted text-center">INACTIVE AGENCIES</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FirstCompAdminO;
