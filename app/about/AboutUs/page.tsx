import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Us - FictionRead</h1>

      <p style={styles.text}>
        At <strong>FictionRead</strong>, we're passionate about the magic of storytelling and the profound impact that literature can have on our lives. 
        We believe that great stories should be accessible to everyone, regardless of language barriers, and we're here to bridge that gap.
      </p>

      <h2 style={styles.subHeader}>Our Mission</h2>
      <p style={styles.text}>
        Our mission is simple yet profound: to bring the world of novels to you, our cherished readers. 
        We are dedicated to the art of translation, breaking down language boundaries so that you can immerse yourself in captivating tales from around the globe. 
        Our goal is to provide a platform where you can explore the rich diversity of literary voices, cultures, and perspectives that exist worldwide.
      </p>

      <h2 style={styles.subHeader}>What We Do</h2>
      <p style={styles.text}>
        At <strong>FictionRead</strong>, we take great care in selecting and translating novels that capture the essence of their original language and culture. 
        Our team of talented translators and editors work tirelessly to ensure that the stories we present maintain their authenticity, while becoming accessible to a wider audience. 
        We're not just translating words; we're preserving the soul of each story.
      </p>

      <h2 style={styles.subHeader}>Why We Do It</h2>
      <p style={styles.text}>
        We're not just a website; we're a community of avid readers and literature enthusiasts. We believe in the power of storytelling to connect people, spark imaginations, and foster empathy. 
        By sharing these stories with you, we hope to offer moments of escape, reflection, and inspiration in your busy lives.
      </p>

      <h2 style={styles.subHeader}>Join Us on This Journey</h2>
      <p style={styles.text}>
        Whether you're a seasoned bookworm or a newcomer to the world of novels, we invite you to embark on this literary journey with us. 
        Explore new worlds, meet intriguing characters, and experience the beauty of different cultures—all from the comfort of your screen. 
        We are committed to continuously expanding our library, so there's always something new to discover.
      </p>

      <h2 style={styles.subHeader}>Connect With Us</h2>
      <p style={styles.text}>
        We value your input and engagement. Feel free to connect with us through comments, feedback, and suggestions. Your voice matters, and it helps us improve and grow.
      </p>

      <p style={styles.text}>
        Thank you for choosing <strong>FictionRead</strong> as your literary companion. Together, let's explore the wonders of literature and share the joy of reading. 
        Welcome to our world of stories.
      </p>

      <p style={styles.footer}>Happy reading!</p>
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
  footer: {
    fontSize: '18px',
    marginTop: '30px',
    fontWeight: 'bold',
    color: '#444',
  },
};

export default About;
