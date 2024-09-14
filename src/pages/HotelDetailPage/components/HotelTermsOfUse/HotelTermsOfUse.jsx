import {
  FaChild,
  FaDog,
  FaBan,
  FaCreditCard,
  FaSuitcase,
  FaClock,
  FaBed,
  FaInfoCircle,
  FaGlobe,
  FaUsers,
  FaStar,
  FaWifi,
} from "react-icons/fa";
import "./HotelTermsOfUse.style.css";

const TermsOfUse = ({ data, faqRef }) => {
  return (
    <div style={{ padding:"80px 10px" }} ref={faqRef}>
      <div className="fw-bold fs-4">Policies</div>
      {/* <p>
        You can request additional services for Mayflower Park Hotel - Please
        enter them at the next step!
      </p> */}
      <table className="terms-table">
        <tbody>
          <tr>
            <td>
              <FaClock /> <strong>Check-in:</strong>
            </td>
            <td>
              {data?.checkin_time || "16:00"} <br /> Guests are required to show
              a photo ID and credit card upon check-in.
            </td>
          </tr>
          <tr>
            <td>
              <FaClock /> <strong>Check-out:</strong>
            </td>
            <td>{data?.checkout_time || "12:00"}</td>
          </tr>
          <tr>
            <td>
              <FaInfoCircle /> <strong>Cancellation/Prepayment:</strong>
            </td>
            <td>
              {data?.cancellation_policy ||
                "Policies vary according to accommodation type. Please check the conditions of your required option when selecting your option."}
            </td>
          </tr>
          
          <tr>
            <td>
              <FaBed /> <strong>Min Room Distribution:</strong>
            </td>
            <td>
              Adults: {data?.min_room_distribution?.adults} <br />
              Children: {data?.min_room_distribution?.children?.length}
            </td>
          </tr>
          <tr>
            <td>
              <FaBed /> <strong>Crib and Extra Bed Policies:</strong>
            </td>
            <td>
              {data?.extra_bed_policy ||
                "This property does not provide cribs or extra beds."}
            </td>
          </tr>
          <tr>
            <td>
              <FaSuitcase /> <strong>Age Restriction:</strong>
            </td>
            <td>
              {data?.age_restriction || "The minimum age for check-in is 21."}
            </td>
          </tr>
          <tr>
            <td>
              <FaDog /> <strong>Pets:</strong>
            </td>
            <td>Pets are allowed on request. Charges may apply.</td>
          </tr>
          <tr>
            <td>
              <FaSuitcase /> <strong>Group Reservations:</strong>
            </td>
            <td>
              When booking more than 7 rooms, different policies and additional
              supplements may apply.
            </td>
          </tr>
          <tr>
            <td>
              <FaCreditCard /> <strong>Accepted Credit Cards:</strong>
            </td>
            <td>
              This hotel accepts the following cards and reserves the right to
              temporarily hold an amount prior to arrival:
              <div className="payment-logos"></div>
            </td>
          </tr>
          <tr>
            <td>
              <FaBan /> <strong>Cash Not Accepted:</strong>
            </td>
            <td>
              {data?.is_cash_accepted_check_enabled === 1
                ? "Cash is accepted at this property."
                : "Cash is not accepted at this property"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TermsOfUse;
