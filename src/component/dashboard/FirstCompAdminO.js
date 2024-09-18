import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandshake, faListCheck, faCircleXmark, faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';

const FirstCompAdminO = () => (
  <div>
    <Row>
      <Col lg={3} md={6} sm={12}>
        <Card className="Card">
          <Card.Body>
            <Card.Text>
              <div className="CardInner">
                <FontAwesomeIcon className="CardIcon" icon={faHandshake} />
                <p>
                  <CountUp end={137} duration={2} start={0} separator="," />
                </p>
              </div>
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted text-center">AGENCIES</Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3} md={6} sm={12}>
        <Card className="Card">
          <Card.Body>
            <Card.Text>
              <div className="CardInner">
                <FontAwesomeIcon className="CardIcon" icon={faListCheck} />
                <p>
                  <CountUp end={253} duration={2} start={0} separator="," />
                </p>
              </div>
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted text-center">PROJECTS(ALL)</Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3} md={6} sm={12}>
        <Card className="Card">
          <Card.Body>
            <Card.Text>
              <div className="CardInner">
                <FontAwesomeIcon className="CardIcon" icon={faCircleCheck} />
                <p>
                  <CountUp end={125} duration={2} start={0} separator="," />
                </p>
              </div>
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted text-center">ACTIVE AGENCIES</Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3} md={6} sm={12}>
        <Card className="Card">
          <Card.Body>
            <Card.Text>
              <div className="CardInner">
                <FontAwesomeIcon className="CardIcon" icon={faCircleXmark} />
                <p>
                  <CountUp end={12} duration={2} start={0} separator="," />
                </p>
              </div>
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted text-center">INACTIVE AGENCIES</Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default FirstCompAdminO;
