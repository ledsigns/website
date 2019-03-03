import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div style={{ paddingTop: "20px" }}>
      <TextField
        id="standard-uncontrolled"
        label="Search"
        defaultValue=""
        margin="normal"
      />
      <Paper className={classes.root} elevation={3}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {[
            "Category1",
            "Category2",
            "Category3",
            "Category4",
            "Category5",
            "Category6",
            "Category7",
            "Category8",
            "Category9",
            "Category10",
            "Category11",
            "Category12"
          ].map(value => (
            <Paper
              style={{ margin: "20px", height: "200px", width: "200px" }}
              elevation={1}
            >
              {value}
            </Paper>
          ))}
        </div>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
