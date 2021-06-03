import React, { Component } from 'react'
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
export default class Tables extends Component {
    render() {
        return (
          <div>
            <BootstrapTable data={this.props.data}>
              <TableHeaderColumn isKey dataField='city'>
                Город
              </TableHeaderColumn>
              <TableHeaderColumn dataField='district'>
                Район
              </TableHeaderColumn>
              <TableHeaderColumn dataField='estimation'>
                Оценка
              </TableHeaderColumn>
            </BootstrapTable>
          </div>
        );
      }
}