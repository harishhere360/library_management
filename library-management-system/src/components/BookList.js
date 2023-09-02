import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/booksSlice';
import { Card, CardContent, Typography, Container, Grid } from '@mui/material';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <Container>
      <Grid container spacing={3}>
        {books.map(book => (
          <Grid item xs={4} key={book.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Category: {book.category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BookList;
