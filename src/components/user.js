import React, { Component } from "react";
// import api from "./api";
import { Card } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";

class User extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.userResults);
    this.state = {
      results: this.props.userResults
    };
  }

  render() {
    const { results } = this.state;
    console.log(results);
    const columns = [
      {
        dataField: "title",
        text: "Title"
      },
      {
        dataField: "code",
        text: " Code"
      },
      {
        dataField: "is_complete",
        text: " Status"
      },
      {
        dataField: "attempt_number",
        text: " Attempt Number"
      },
      {
        dataField: "percentage",
        text: " Percentage"
      }
      // {
      //   dataField: "readiness",
      //   text: " Readiness"
      // },
      // {
      //   dataField: "date_completed",
      //   text: "Date Completed"
      // }
    ];
    return (
      <div>
        <Card>
          <Card.Header>Candidate Results</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <BootstrapTable keyField="id" data={results} columns={columns} />
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default User;
