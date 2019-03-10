import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import "../styles/bootstrap-3.3.7-dist/css/bootstrap.min.css";
import classnames from "classnames";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "0"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    console.log("this.props.items");
    console.log(this.props.items);
    return (
      <div style={{ width: "80%" }}>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />

        <Nav tabs>
          {this.props.items.map((item, index) => (
            <NavItem>
              <NavLink
                className={classnames({
                  active: this.state.activeTab === `${index}`
                })}
                onClick={() => {
                  this.toggle(`${index}`);
                }}
              >
                {item.title}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          {this.props.items.map((item, index) => (
            <>
              <TabPane tabId={`${index}`}>
                <Row>
                  <div style={{ padding: "40px 40px 40px 40px " }}>
                    {item.inside}
                  </div>
                </Row>
              </TabPane>
            </>
          ))}
        </TabContent>
      </div>
    );
  }
}
