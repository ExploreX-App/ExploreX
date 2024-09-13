import { FaChild, FaDog, FaBan, FaCreditCard, FaSuitcase, FaClock, FaBed, FaInfoCircle } from "react-icons/fa";
import "./HotelTermsOfUse.style.css"

const TermsOfUse = () => {
    return (
       <div>
         <p>You can request additional services for Mayflower Park Hotel - Please enter them at the next step!</p>
         <table className="terms-table">
            <tbody>
                <tr>
                    <td><FaClock /> <strong>Check-in:</strong></td>
                    <td>From 16:00 <br /> Guests are required to show a photo ID and credit card upon check-in.</td>
                </tr>
                <tr>
                    <td><FaClock /> <strong>Check-out:</strong></td>
                    <td>Until 12:00</td>
                </tr>
                <tr>
                    <td><FaInfoCircle /> <strong>Cancellation/Prepayment:</strong></td>
                    <td>Policies vary according to accommodation type. Please check the conditions of your required option when selecting your option.</td>
                </tr>
                <tr>
                    <td><FaChild /> <strong>Children & Bed Policies:</strong></td>
                    <td>All children are welcome. <br />Children aged 18 years and above are considered adults at this property. If you're traveling with children, please check the maximum capacity for the room you selected.</td>
                </tr>
                <tr>
                    <td><FaBed /> <strong>Crib and Extra Bed Policies:</strong></td>
                    <td>This property does not provide cribs or extra beds.</td>
                </tr>
                <tr>
                    <td><FaSuitcase /> <strong>Age Restriction:</strong></td>
                    <td>The minimum age for check-in is 21.</td>
                </tr>
                <tr>
                    <td><FaDog /> <strong>Pets:</strong></td>
                    <td>Pets are allowed on request. Charges may apply.</td>
                </tr>
                <tr>
                    <td><FaSuitcase /> <strong>Group Reservations:</strong></td>
                    <td>When booking more than 7 rooms, different policies and additional supplements may apply.</td>
                </tr>
                <tr>
                    <td><FaCreditCard /> <strong>Accepted Credit Cards:</strong></td>
                    <td>
                        This hotel accepts the following cards and reserves the right to temporarily hold an amount prior to arrival:
                        <div className="payment-logos">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><FaBan /> <strong>Cash Not Accepted:</strong></td>
                    <td>Cash is not accepted at this property.</td>
                </tr>
            </tbody>
         </table>
       </div>
    );
};

export default TermsOfUse;
