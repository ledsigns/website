import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
// import Phone from "@material-ui/icons/Phone";
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';
import Location_on from '@material-ui/icons/LocationOn';
import '../styles/molecules/Hover.scss';

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
    style: { backgroundColor: '#3f51b5' }
  };

  handleArrowRef = node => {
    this.setState({
      arrowRef: node,
    });
  };

  handleHover(hoverStyle) {
    this.setState({
      style: hoverStyle
    })
  }


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
            <>
              <div style={{ display: 'flex', flexDirection: 'row' }}><Phone /><p>+86 6748 4917</p><br /><br /></div>
              <div style={{ display: 'flex', flexDirection: 'row' }}><Email /><p>sales@ledsigns.com</p><br /><br /></div>
              <div style={{ display: 'flex', flexDirection: 'row' }}><Location_on /><p>Premier @ 8 Kaki Bukit Ave 4 #03-22, Singapore 415875</p> <br /> <br /></div>
            </>
          }
        >
          <Fab
            onMouseEnter={() => { this.handleHover({ backgroundColor: '	#33cc33' }) }}
            // color='primary'
            onMouseLeave={() => { this.handleHover({ backgroundColor: '#3f51b5' }) }}
            style={this.state.style}
            aria-label="Add"
            className="onHover">
            <Phone />
          </Fab>
        </Tooltip >
      </div >
    );
  }
}

Hover.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hover);