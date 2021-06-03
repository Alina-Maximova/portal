import React, { Component } from 'react'
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
export default class TablesAd extends Component {
    render() {
        return (
          <div>
            <BootstrapTable data={this.props.data}>
              <TableHeaderColumn isKey dataField='classification'>
                Вид проблемы
              </TableHeaderColumn>
              <TableHeaderColumn dataField='description'>
                Описание проблемы
              </TableHeaderColumn>
               <TableHeaderColumn dataField='email'>
                Email
              </TableHeaderColumn>
              
             
            </BootstrapTable>
          </div>
        );
      }
}