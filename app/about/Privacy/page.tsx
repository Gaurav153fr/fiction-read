import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Privacy Policy for FictionRead</h1>

      <h2 style={styles.subHeader}>1. Introduction</h2>
      <p style={styles.text}>
        Welcome to FictionRead! We value your privacy and are committed to
        protecting your personal information. This Privacy Policy explains how
        we collect, use, disclose, and safeguard your information when you visit
        our website [insert website URL] and use our services. By using
        FictionRead, you agree to the terms of this Privacy Policy.
      </p>

      <h2 style={styles.subHeader}>2. Information We Collect</h2>
      <p style={styles.text}>
        <strong>a. Personal Information</strong>
        <br />
        We may collect personal information that you voluntarily provide to us,
        such as your name, email address, and other contact details when you
        create an account, subscribe to our newsletter, or interact with our
        services.
      </p>
      <p style={styles.text}>
        <strong>b. Usage Data</strong>
        <br />
        We collect information about your interactions with our website and
        services, including your IP address, browser type, operating system,
        referring URLs, and pages viewed.
      </p>
      <p style={styles.text}>
        <strong>c. Cookies and Tracking Technologies</strong>
        <br />
        We use cookies and similar tracking technologies to enhance your
        experience on our website, analyze usage patterns, and personalize
        content. You can manage your cookie preferences through your browser
        settings.
      </p>

      <h2 style={styles.subHeader}>3. How We Use Your Information</h2>
      <p style={styles.text}>
        We use the information we collect for the following purposes:
      </p>
      <ul style={styles.list}>
        <li>To provide, operate, and maintain our services</li>
        <li>To improve, personalize, and expand our offerings</li>
        <li>
          To communicate with you, including sending updates, newsletters, and
          promotional materials
        </li>
        <li>To analyze usage and trends to enhance user experience</li>
        <li>To ensure the security and integrity of our platform</li>
      </ul>

      <h2 style={styles.subHeader}>4. How We Share Your Information</h2>
      <p style={styles.text}>
        We do not sell or rent your personal information to third parties. We
        may share your information in the following circumstances:
      </p>
      <ul style={styles.list}>
        <li>
          With service providers who assist us in operating our platform and
          providing services
        </li>
        <li>With affiliates or partners who perform services on our behalf</li>
        <li>
          To comply with legal obligations, enforce our terms, or protect the
          rights and safety of FictionRead and its users
        </li>
        <li>
          In connection with a merger, acquisition, or sale of all or a portion
          of our business
        </li>
      </ul>

      <h2 style={styles.subHeader}>5. Security</h2>
      <p style={styles.text}>
        We implement reasonable security measures to protect your personal
        information from unauthorized access, disclosure, alteration, and
        destruction. However, no method of transmission over the internet or
        electronic storage is completely secure, and we cannot guarantee
        absolute security.
      </p>

      <h2 style={styles.subHeader}>6. Your Choices</h2>
      <p style={styles.text}>
        You have the right to access, correct, or delete your personal
        information. You can update your account information or opt-out of
        receiving promotional communications by contacting us at [insert
        contact email].
      </p>

      <h2 style={styles.subHeader}>7. Third-Party Links</h2>
      <p style={styles.text}>
        Our website may contain links to third-party sites that are not operated
        by us. We are not responsible for the privacy practices or content of
        these external sites. We encourage you to review the privacy policies of
        any third-party sites you visit.
      </p>

      <h2 style={styles.subHeader}>8. Children&apos;s Privacy</h2>
      <p style={styles.text}>
        FictionRead is not intended for children under the age of 13. We do not
        knowingly collect personal information from children under 13. If we
        become aware that we have collected such information, we will take steps
        to delete it.
      </p>

      <h2 style={styles.subHeader}>9. Changes to This Privacy Policy</h2>
      <p style={styles.text}>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated effective date. We encourage you to
        review this Privacy Policy periodically for any updates.
      </p>

      <h2 style={styles.subHeader}>10. Contact Us</h2>
      <p style={styles.text}>
        If you have any questions or concerns about this Privacy Policy or our
        data practices, please contact us at readnoveltl@gmail.com.
      </p>
    </div>
  );
};

const styles = {
  container: {
    width: "80%",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    color: "#333",
  },
  subHeader: {
    color: "#333",
    marginTop: "20px",
  },
  text: {
    color: "#555",
    lineHeight: "1.6",
  },
  list: {
    margin: "20px 0",
    padding: "0 20px",
    color: "#555",
  },
};

export default PrivacyPolicy;
