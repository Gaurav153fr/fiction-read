import React from 'react'

const Page = () => {
  return (
    


    <div style={styles.container}>
    <h1 style={styles.header}>DMCA Policy</h1>
    <p style={styles.text}>
      <strong>FictionRead</strong> highly respects the intellectual property
      of others, and as such, treats matters regarding intellectual property
      with the utmost seriousness. Meeting the needs of IP owners, especially
      with regard to their books’ files sanctioned under copyright protection
      laws, comes first. On account of this, we aim to ensure that said files
      are <strong>NOT PUBLISHED</strong> on our website.
    </p>

    <p style={styles.text}>
      <strong>FictionRead</strong> does not advocate digital piracy.
    </p>

    <p style={styles.text}>
      If you believe that your copyrighted work has been plagiarized or copied
      in a way that infringes upon your copyright and is accessible on our
      website, you are within your rights to notify our copyright agent, in
      accordance with the Digital Millennium Copyright Act of 1998 (DMCA). For
      your complaints to be valid, the complaining party must provide the
      following information upon issuing a notice of copyright infringement:
    </p>

    <ul style={styles.list}>
      <li>
        A physical or electronic signature of a person authorized to act on
        behalf of the owner of an exclusive right that is allegedly infringed.
      </li>
      <li>
        Identification of the copyrighted work claimed to have been
        infringed, or, if multiple copyrighted works at a single online site
        are covered by a single notification, a representative list of such
        works at that site.
      </li>
      <li>
        Identification of the material that is claimed to be infringing or to
        be the subject of infringing activity and that is to be removed or
        access to which is to be disabled, and information reasonably
        sufficient to permit the service provider to locate the material.
      </li>
      <li>
        Information reasonably sufficient to permit the service provider to
        contact the complaining party, such as an address, telephone number,
        and, if available, an email address at which the complaining party may
        be contacted.
      </li>
      <li>
        A statement that the complaining party has a good faith belief that
        use of the material in the manner complained of is not authorized by
        the copyright owner, its agent, or the law.
      </li>
      <li>
        A statement that the information in the notification is accurate, and
        under penalty of perjury, that the complaining party is authorized to
        act on behalf of the owner of an exclusive right that is allegedly
        infringed.
      </li>
    </ul>

    <p style={styles.text}>
      To expedite the copyright infringement processing, please submit a
      faxed, written, or emailed notice to our designated copyright complaint
      agent’s email address:
    </p>

    <p style={styles.contactInfo}>readnoveltl@gmail.com</p>
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
text: {
  color: "#555",
  lineHeight: "1.6",
},
list: {
  margin: "20px 0",
  padding: "0 20px",
  color: "#555",
},
contactInfo: {
  fontWeight: "bold",
  color: "#333",
},

};




export default Page