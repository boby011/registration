import React from 'react';

const Student = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#f0f0f0',
      fontSize: '24px',
      color: '#333',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      padding: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Welcome to the Student Page</h1>
    
    </div>
  );
};

export default Student;
