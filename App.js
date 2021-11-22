import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap'

function CheckIcon(){
  return (
    <i class="fa fa-check"></i>
  );
}

function CrossIcon(){
  return (
    <i class="fa fa-times"></i>
  );
}


function App() {

  const details = [
    {
      plan: "FREE",
      price: "0",
      users: "Single User",
      storage: "5GB Storage",
      publicProjects: true,
      communityAccess: true,
      privateProjects: false,
      phoneSupport: false,
      subDomain: false,
      reports: false,
    },
    {
      plan: "PLUS",
      price: "9",
      users: "5 Users",
      storage: "50GB Storage",
      publicProjects: true,
      communityAccess: true,
      privateProjects: true,
      phoneSupport: true,
      subDomain: true,
      reports: false,
    },
    {
      plan: "PRO",
      price: "49",
      users: "Unlimited Users",
      storage: "150GB Storage",
      publicProjects: true,
      communityAccess: true,
      privateProjects: true,
      phoneSupport: true,
      subDomain: true,
      reports: true,
    },
  ];
  return (
    <Container className="container">
      <Row className="row">
        {details.map((detail) => (
          <Col className="column">
            <p className="plan">{detail.plan}</p>
            <h1>
              ${detail.price}
              <sub className="subscript">/month</sub>
            </h1>
            <ul>
              <li className={detail.users ? "dark" : "light"}>
                <CheckIcon /> {detail.users}
              </li>
              <li className={detail.storage ? "dark" : "light"}>
                <CheckIcon /> {detail.storage}
              </li>
              <li className={detail.publicProjects ? "dark" : "light"}>
                <CheckIcon /> Unlimited Public Projects
              </li>
              <li className={detail.communityAccess ? "dark" : "light"}>
                {detail.communityAccess ? <CheckIcon /> : <CrossIcon />}{" "}
                Community Access
              </li>
              <li className={detail.privateProjects ? "dark" : "light"}>
                {detail.privateProjects ? <CheckIcon /> : <CrossIcon />}{" "}
                Unlimited Private Projects
              </li>
              <li className={detail.phoneSupport ? "dark" : "light"}>
                {detail.phoneSupport ? <CheckIcon /> : <CrossIcon />} Dedicated
                Phone Support
              </li>
              <li className={detail.subDomain ? "dark" : "light"}>
                {detail.subDomain ? <CheckIcon /> : <CrossIcon />} Unlimited
                Free Subdomains
              </li>
              <li className={detail.reports ? "dark" : "light"}>
                {detail.reports ? <CheckIcon /> : <CrossIcon />} Monthly Status
                Reports
              </li>
            </ul>
            <Button class="btn">BUTTON</Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
