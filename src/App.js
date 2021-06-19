import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Table,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEllipsisV,
  faUser,
  faHome,
  faCommentAlt,
  faCalendarAlt,
  faTasks,
  faCubes,
  faDatabase,
  faMoneyBill,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import Placeholder from "./assets/placeholder.png";
import CustomNutrition from "./assets/Group 8658.svg";
import CustomMealPlan from "./assets/Group 8656.svg";
import ClassicMealPlan from "./assets/Group 8657.svg";
import Consult from "./assets/Group 8655.svg";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

let NavList = [
  {
    icon: faHome,
    text: "Home",
  },
  {
    icon: faCommentAlt,
    text: "Chat",
  },
  {
    icon: faCalendarAlt,
    text: "Schedule",
  },
  {
    icon: faHome,
    text: "Home",
  },
  {
    icon: faUser,
    text: "Clients",
  },
  {
    icon: faTasks,
    text: "Bookings",
  },
  {
    icon: faCubes,
    text: "Packages",
  },
  {
    icon: faDatabase,
    text: "Resources",
  },
  {
    icon: faMoneyBill,
    text: "Finance",
  },
  {
    icon: faCog,
    text: "Settings",
  },
];

let ClientList = [
  {
    type: "Custom Nutrition",
    client: "Walter White",
    name: "Package Name",
    packageStatus: "Active",
    packageStartDate: "25/06/20",
    packageRenewal: "25/07/20",
    programStatus: "Assigned",
    programRenewal: "05/07/20",
  },
  {
    type: "Custom Meal Plan",
    client: "Jesse Pinkman",
    name: "Package Name",
    packageStatus: "Active",
    packageStartDate: "25/06/20",
    packageRenewal: "25/07/20",
    programStatus: "Assigned",
    programRenewal: "05/07/20",
  },
  {
    type: "Classic Meal Plan",
    client: "NA",
    name: "Package Name",
    packageStatus: "Inactive",
    packageStartDate: "N/A",
    packageRenewal: "N/A",
    programStatus: "Not Assigned",
    programRenewal: "N/A",
  },
  {
    type: "Consult",
    client: "Saul Goodman",
    name: "Package Name",
    packageStatus: "Active",
    packageStartDate: "25/06/20",
    packageRenewal: "25/07/20",
    programStatus: "Assigned",
    programRenewal: "05/07/20",
  },
  {
    type: "Custom Nutrition",
    client: "Michael Hubbard",
    name: "Package Name",
    packageStatus: "Active",
    packageStartDate: "25/06/20",
    packageRenewal: "25/07/20",
    programStatus: "Not Assigned",
    programRenewal: "05/07/20",
  },
];

function GetStatus(status) {
  if (status === "Active") {
    return <div className="badge-active">Active</div>;
  } else if (status === "Inactive") {
    return <div className="badge-inactive">Inactive</div>;
  } else if (status === "Assigned") {
    return <div className="badge-assigned">Assigned</div>;
  } else if (status === "Not Assigned") {
    return <div className="badge-not-assigned">Not Assigned</div>;
  }
}

function GetType(type) {
  if (type === "Custom Nutrition") {
    return (
      <div>
        <img className="type-image" src={CustomNutrition} />
        <br />
        <small>Custom Nutrition</small>
      </div>
    );
  } else if (type === "Custom Meal Plan") {
    return (
      <div>
        <img className="type-image" src={CustomMealPlan} />
        <br />
        <small>Custom Meal Plan</small>
      </div>
    );
  } else if (type === "Classic Meal Plan") {
    return (
      <div>
        <img className="type-image" src={ClassicMealPlan} />
        <br />
        <small>Classic Meal Plan</small>
      </div>
    );
  } else if (type === "Consult") {
    return (
      <div>
        <img className="type-image" src={Consult} />
        <br />
        <small>Consult</small>
      </div>
    );
  }
}

function App() {
  return (
    <>
      <div className="Header">
        <Navbar
          bg="dark"
          expand="md"
          variant="dark"
          className="justify-content-between"
        >
          <Navbar.Brand href="/">Sapien Systems</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-menu" />
          <Navbar.Collapse id="navbar-menu">
            <Nav className="ml-auto">
              <Nav.Link href="/">
                <FontAwesomeIcon icon={faBell} />
              </Nav.Link>
              <Nav.Link href="/">
                <FontAwesomeIcon icon={faEllipsisV} />
                <FontAwesomeIcon icon={faEllipsisV} />
                <FontAwesomeIcon icon={faEllipsisV} />
              </Nav.Link>
              <Nav.Link href="/">
                <FontAwesomeIcon icon={faUser} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <main className="main">
        <Container fluid>
          <Row>
            <Col className="sidebar" md="2">
              <div className="d-flex flex-column">
                <div className="coach-info text-center">
                  <div className="coach-picture-container">
                    <img className="coach-picture" src={Placeholder} />
                  </div>
                  <p>
                    <span className="coach-name">Jesse Pinkman</span>
                    <br />
                    <small>Fitness and Nutrition Coach</small>
                  </p>
                </div>
                <div>
                  <ul className="nav-list">
                    {NavList.map(({ icon, text }) => {
                      return (
                        <li>
                          <a href="/">
                            <FontAwesomeIcon icon={icon} />
                            &nbsp; {text}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Col>
            <Col md="10">
              <h2 className="page-title">Program Manager</h2>
              <div>
                <Tabs
                  defaultActiveKey="nutrition"
                  id="uncontrolled-tab-example"
                >
                  <Tab eventKey="fitness" title="Fitness">
                    <div>Fitness</div>
                  </Tab>
                  <Tab eventKey="nutrition" title="Nutrition">
                    <div>
                      <Table className="text-center align-middle">
                        <thead>
                          <tr>
                            <th>Type</th>
                            <th>Client</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Start Date</th>
                            <th>Renewal</th>
                            <th>Status</th>
                            <th>Renewal</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {ClientList.map(
                            ({
                              type,
                              client,
                              name,
                              packageStatus,
                              packageStartDate,
                              packageRenewal,
                              programStatus,
                              programRenewal,
                            }) => {
                              return (
                                <tr className="client-row">
                                  <td>{GetType(type)}</td>
                                  <td>{client}</td>
                                  <td>{name}</td>
                                  <td>{GetStatus(packageStatus)}</td>
                                  <td>{packageStartDate}</td>
                                  <td>{packageRenewal}</td>
                                  <td>{GetStatus(programStatus)}</td>
                                  <td>{programRenewal}</td>
                                  <td>
                                    <Dropdown>
                                      <DropdownToggle>
                                        <FontAwesomeIcon icon={faEllipsisV} />
                                      </DropdownToggle>
                                      <DropdownMenu>
                                        <Dropdown.Item eventKey="1">
                                          View
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="2">
                                          Edit
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="3">
                                          Delete
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="4">
                                          Status
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="5">
                                          Settings
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="6">
                                          Share
                                        </Dropdown.Item>
                                      </DropdownMenu>
                                    </Dropdown>
                                  </td>
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                      </Table>
                    </div>
                  </Tab>
                  <Tab eventKey="journey" title="Journey">
                    <div>Journey</div>
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default App;
