import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMetrics } from '../redux/metrics/metricsSlice';

const UserList = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMetrics())
      .unwrap() // Unwrap the promise to handle rejected cases
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, [dispatch]);

  useEffect(() => {
    console.log('Users:', users); // This will show the users array when it's available
    console.log('Error:', error); // This will show any error that occurred during fetching
  }, [users, error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Add a check for the existence of the users array
  if (!users || users.length === 0) {
    return <div>No users found.</div>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <div>{user.name}</div>
          <div>{user.rating.average}</div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
