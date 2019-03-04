import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
// import Phone from "@material-ui/icons/Phone";
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';
// import Location_on from '@material-ui/icons/location_on'; wtf cannot find location_on?

function arrowGenerator(color) {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.95em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${color} transparent`,
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.95em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: `${color} transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: '-0.95em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: `transparent ${color} transparent transparent`,
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: '-0.95em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: `transparent transparent transparent ${color}`,
      },
    },
  };
}

const styles = theme => ({
  htmlPopper: arrowGenerator('#dadde9'),
  htmlTooltip: {
    backgroundColor: '#FFFFFF',
    color: 'rgba(0,0,0)',
    maxWidth: 380,
    fontSize: theme.typography.pxToRem(18),
    border: '1px solid #dadde9',
    '& b': {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
});

class Hover extends Component {

  state = {
    arrowRef: null,
  };

  handleArrowRef = node => {
    this.setState({
      arrowRef: node,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div
        style={{
          position: "fixed",
          padding: "0",
          margin: "0",
          top: "50%",
          left: "95vw",
          width: "100%",
          height: "100%"
        }}
      >
        {/* <Tooltip title="Add" placement="left">
          <Fab color="primary" aria-label="Add">
            <AddIcon />
          </Fab>
        </Tooltip> */}

        <Tooltip
          title="Add"
          placement="left"
          classes={{
            popper: classes.htmlPopper,
            tooltip: classes.htmlTooltip,
          }}
          PopperProps={{
            popperOptions: {
              modifiers: {
                arrow: {
                  enabled: Boolean(this.state.arrowRef),
                  element: this.state.arrowRef,
                },
              },
            },
          }}
          title={
            <React.Fragment>
              <Phone />+86 6748 4917<br /><br />
              <Email />sales@ledsigns.com<br /><br />
              {/* <Location_on /> */}
              Premier @ 8 Kaki Bukit Ave 4 #03-22, Singapore 415875
            </React.Fragment>
          }
        >
          <Fab color="primary" aria-label="Add">
            <Phone />
          </Fab>
        </Tooltip>
      </div>
    );
  }
}

Hover.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hover);