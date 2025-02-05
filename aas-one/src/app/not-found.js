'use client'
// /app/not-found/page.js
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const NotFoundPage = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    gsap.from('.avatar', { opacity: 0, y: -50, duration: 1 });
  }, []);

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <div style={styles.container}>
      <div className="avatar" onClick={handleClick} style={styles.avatar}>
        <img src="/images/avatar.jpg" alt="Avatar" style={styles.image} />
      </div>
      {showMessage && (
        <div style={styles.messageContainer}>
          <h1 style={styles.title}>404 - Page Not Found</h1>
          <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    color: '#b8860b', // Gold color
  },
  avatar: {
    cursor: 'pointer',
    marginBottom: '2rem',
  },
  image: {
    width: '150px',
    height: '150px',
    borderRadius: '50%', // Make it round
  },
  messageContainer: {
    opacity: 0,
    animation: 'fadeIn 0.5s forwards',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.25rem',
  },
};

export default NotFoundPage;

