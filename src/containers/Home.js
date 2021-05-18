import PropTypes from "prop-types";
import React, { Component } from "react";
import { Responsive, Sidebar, Visibility } from "semantic-ui-react";
import Sec3 from "./section-3";
import Header from "./header";
import HomeProductList from "./HomeProductList";
import "../assets/css/homepage.css";
import Sec9 from "./section-9";
import { withRouter } from "react-router-dom";

const getWidth = () => {
  const isSSR = typeof window === "undefined";
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        />
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        {children}
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const HomepageLayout = () => (
  <ResponsiveContainer class="container">
    <div class="header-search">
      <Header />
    </div>
    <br></br>
    <hr class="divider"></hr>
    <br></br>
    <section class="products-section">
      <div class="products-title">
        <h1>Product List</h1>
      </div>
      <br></br>
      <br></br>
      <div class="products-div">
        <HomeProductList />
      </div>
    </section>
    <hr class="divider"></hr>
    <Sec3 />
    <hr class="divider"></hr>
    <div class="section-title">
      <h1>ToubKal</h1>
      <h3>We Thank You For Shopping At our Store.</h3>
    </div>
    <Sec9 />
  </ResponsiveContainer>
);
export default withRouter(HomepageLayout);
