import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography, Container } from '@mui/material';

const UserDashboard = () => {
  const user = useSelector(state => state.user.user);

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h5">User Dashboard</Typography>
          <Typography variant="body1">Name: {user.name}</Typography>
          <Typography variant="body1">Phone: {user.phone}</Typography>
          <Typography variant="body1">Email: {user.email}</Typography>
          <Typography variant="body1">Address: {user.address}</Typography>
          <Typography variant="body1">College: {user.college}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default UserDashboard;
