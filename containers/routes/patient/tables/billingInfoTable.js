import React from 'react';
import classNames from 'classnames';

import { withStyles } from 'material-ui/styles';
import Table from 'material-ui/Table';
import TableBody from 'material-ui/Table/TableBody';
import TableCell from 'material-ui/Table/TableCell';
import TableHead from 'material-ui/Table/TableHead';
import TablePagination from 'material-ui/Table/TablePagination';
import TableRow from 'material-ui/Table/TableRow';
import TableSortLabel from 'material-ui/Table/TableSortLabel';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import { FieldArray, reduxForm } from 'redux-form'
import * as rdField from '../../../../components/form/renderField'
import * as utils from '../../../../components/functions/functions'
import * as actions from '../../../../actions'


const styles = theme => ({
  root: {
    width: '100%',
    // maxWidth:'100vw',
    // marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    borderTop:'2px solid grey'
  },
  table: {
    // minWidth: 700,
    // maxWidth:'100vw'
  },
  row: {
    height:'32px',
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
    '&:hover': {backgroundColor:'#e0e0e0', cursor:'pointer'}
  }
});


function SimpleTable(props) {
  const { classes, data, currentProvider, chooseBill, currentBill } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className="table-head-cells">
            <TableCell>Invoice #</TableCell>
            <TableCell>Provider</TableCell>
            <TableCell>Spec</TableCell>
            <TableCell>Billing am</TableCell>
            <TableCell>Billing dt</TableCell>
            <TableCell>Empl</TableCell>
            <TableCell>Auto</TableCell>
            <TableCell>Other</TableCell>
          </TableRow>
        </TableHead>
        <FieldArray 
                  name={`allBills.treating_providers[${currentProvider}].specialties[0].services`}
                  component={rdField.renderBillingInfo} 
                  classes={classes} 
                  currentBill={currentBill}
                  chooseBill={chooseBill}
                  utils={utils}
                  />
      </Table>
    </Paper>
  );
}


const TempSimpleTable = withStyles(styles)(SimpleTable);
export default reduxForm({
    form: 'billing' // a unique name for this form
})(TempSimpleTable);
