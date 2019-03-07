import React, { Component } from "react";
// import api from "./api";
// import { Pagination } from "react-bootstrap";
import Pagination from "./pagination";
import BootstrapTable from "react-bootstrap-table-next";
import { Col, Container, Row } from "react-bootstrap";
import User from "./user";
// import paginationFactory from "react-bootstrap-table2-paginator";
import GetResults from "../api";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";

const results = new GetResults();

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      currentPageNumber: 1,
      totalItems: 1,
      itemsPerPage: 10,
      sideView: false,
      assesementResults: []
    };
  }

  componentDidMount() {
    results.results(1).then(apiResponse => {
      console.log("blog posts", apiResponse);
      this.setState({
        results: apiResponse.data.results,
        currentPageNumber: apiResponse.data.page,
        totalItems: apiResponse.data.num_pages,
        itemsPerPage: apiResponse.data.page_size,
        total: apiResponse.data.num_pages * apiResponse.data.page_size
      });
    });
  }
  onPageChanged = data => {
    results.results(data.currentPage).then(apiResponse => {
      console.log("blog posts", apiResponse.data.results);
      this.setState({
        results: apiResponse.data.results,
        currentPageNumber: apiResponse.data.page,
        totalItems: apiResponse.data.num_pages,
        itemsPerPage: apiResponse.data.page_size,
        total: apiResponse.data.num_pages * apiResponse.data.page_size
      });
    });
  };
  userData = userId => {
    results.userData(userId).then(apiResponse => {
      console.log("blog jhkjh", apiResponse);
      // this.setState({
      //   assesementResults: apiResponse.data.assessment,
      //   sideView: true
      // });

      this.setState(
        { assesementResults: apiResponse.data.assessment, sideView: true },
        () => console.log(this.state).assesementResults
      );
    });
  };

  render() {
    const { assesementResults } = this.state;
    console.log(assesementResults);
    const columns = [
      {
        dataField: "user_id",
        text: "USER ID",
        events: {
          onClick: (e, column, columnIndex, row, rowIndex) => {
            console.log(row.user_id);
            this.userData(row.user_id);
          }
        }
      },
      {
        dataField: "first_name",
        text: "First name"
      },
      {
        dataField: "last_name",
        text: "Last Name"
      }
    ];
    return (
      <div>
        <Container>
          <Row>
            <Col offset={4}>
              <div>
                <Pagination
                  totalRecords={1000}
                  pageLimit={50}
                  pageNeighbours={1}
                  onPageChanged={this.onPageChanged}
                />
                <BootstrapTable
                  keyField="id"
                  data={this.state.results}
                  columns={columns}
                />
              </div>
            </Col>
            {this.state.sideView ? (
              <Col>
                <User userResults={assesementResults} />
              </Col>
            ) : null}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Results;
