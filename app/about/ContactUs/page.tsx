import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Us - Get in Touch with FictionRead</h1>

      <p style={styles.text}>
        At <strong>FictionRead</strong>, we value your feedback, questions, and suggestions. 
        We're here to assist you and provide the best possible reading experience. Please don't hesitate 
        to reach out to us through the following contact options:
      </p>

      <h2 style={styles.subHeader}>Customer Support</h2>
      <p style={styles.text}>
        For any inquiries, technical issues, or general questions, our customer support team is here to help. 
        You can contact us via email at:
      </p>

      <p style={styles.contactInfo}>
        <strong>Email:</strong> fictionreadtl@gmail.com
      </p>

      <p style={styles.text}>
        We strive to respond to all inquiries promptly and provide the assistance you need.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  },
  header: {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#444',
  },
  subHeader: {
    fontSize: '24px',
    marginTop: '20px',
    marginBottom: '10px',
    color: '#555',
  },
  text: {
    fontSize: '18px',
    marginBottom: '15px',
  },
  contactInfo: {
    fontSize: '20px',
    margin: '10px 0',
    fontWeight: 'bold',
    color: '#222',
  },
};

export default Contact;
