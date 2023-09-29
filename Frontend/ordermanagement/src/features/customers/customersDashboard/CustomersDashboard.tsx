import React from 'react';
import {
  Customer,
  useGetCustomersQuery,
} from '../../../graphql/generated/schema';
import { Grid, Typography } from '@mui/material';
import CustomerList from './CustomerList';

export default function CustomersDashboard() {
  const { data: customersData, loading, error } = useGetCustomersQuery();

  if (loading) {
    return <div>...loading</div>;
  }

  if (error || !customersData) {
    return <div>Error...</div>;
  }

  const customers = customersData.customers as Customer[];
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          component='div'
          variant='h5'
          display='block'
          gutterBottom
          align='center'
        >
          Customers List
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <CustomerList customers={customers} />
      </Grid>
    </Grid>
  );
}
