import './FooterTables.css';

export default function FooterTables() {
  return (
    <>
      <table>
        <thead className="footerHeaderStyle">
          <tr>
            <th>THE BASICS</th>
          </tr>
        </thead>
        <tbody>
          <tr className="footerTableBodyStyle">
            <td>About TMDB</td>
            <td>Contact Us</td>
            <td>Support Forums</td>
            <td>API</td>
            <td>System Status</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead className="footerHeaderStyle">
          <tr>
            <th>GET INVOLVED</th>
          </tr>
        </thead>
        <tbody>
          <tr className="footerTableBodyStyle">
            <td>Contribution Bible</td>
            <td>Add New Movie</td>
            <td>Add New TV Show</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead className="footerHeaderStyle">
          <tr>
            <th>COMMUNITY</th>
          </tr>
        </thead>
        <tbody>
          <tr className="footerTableBodyStyle">
            <td>Guidelines</td>
            <td>Discussions</td>
            <td>Leaderboard</td>
            <td>Twitter</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th className="footerHeaderStyle">LEGAL</th>
          </tr>
        </thead>
        <tbody>
          <tr className="footerTableBodyStyle">
            <td>Terms of Use</td>
            <td>API Terms of Use</td>
            <td>Privacy Policy</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
