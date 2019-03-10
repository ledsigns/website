/* eslint func-names: 0, no-console: 0 */
import React from "react";
import ReactPaginate from "react-paginate";
import "../styles/bootstrap-3.3.7-dist/css/bootstrap.min.scss";

export default class App extends React.Component {
  handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage);

    this.setState({ offset: offset }, () => {
      this.loadCommentsFromServer();
    });
  };
  render() {
    return (
      <>
        <div style={{ paddingTop: "20px" }} className="paginator">
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.props.numberOfPages}
            // marginPagesDisplayed={2}
            // pageRangeDisplayed={this.props.numberOfPages}
            onPageChange={this.props.onChangePage}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </>
    );
  }
}
