import { Container, Card } from "react-bootstrap"

const ImportantInformation = () => {
    return (
    <Container style={{padding:"0px"}}>
        <p>When booking multiple rooms, you must enter the name of each guest for each reservation.</p>
        <Card style={{width: '100%', height: 'auto', border: '2px solid #e7e7e7'}}>
            <div style={{padding: "16px", margin: ""}}>
                <p>Note: The four swimming pools at the property are outdoor pools that operate seasonally. Please contact the property for pool opening and closing times.</p>
                <p> - A deposit or prepayment amount will be charged to the guest’s credit card at the time of booking.</p>
                <p>For same-day reservations, if the deposit (first-night charge and tax) cannot be authorized on the credit card, the reservation will be canceled at 6:00 PM.</p>
                <p> - Only guests 21 years or older can check in.</p>
                <p>Included in the daily resort fee:</p>
                <p> - Internet access</p>
                <p> - Fitness center access</p>
                <p> - Local calls/toll-free calls</p>
                <p> - Other services</p>
                <p> - As per Excalibur's policy, you must present the credit card used for the reservation at check-in.</p>
                <p> - If you check out earlier than scheduled, you will still be charged the remaining balance of the total reservation amount (room rate and taxes).</p>
                <p>Note: A fee is charged per night at check-in to cover any incidental charges. For more details, please contact the hotel directly.</p>
                <p>Note: All rooms and suites are non-smoking. If smoking is detected in the room, a fine will be charged.</p>
                <p>Note: The property will authorize a credit or debit card for a deposit of USD 50 per day to cover room rates, taxes, resort fees, and any incidental charges. If your actual charges exceed the pre-authorized amount, additional authorization may be required.</p>
                <p>For U.S. bank customers, it may take up to 7 business days after checkout to release the hold on the authorized amount. For international bank customers, it may take up to 30 days. If you are using a debit card, please be aware that there may be further delays in returning unused funds. Availability of funds after checkout is managed independently by each financial institution.</p>
                <p>Note: This property reserves the right to cancel the reservation without notice if the provided credit card is invalid.</p>
                <p>All guests must present a valid photo ID and credit card at check-in. Any special requests are subject to availability at check-in and may incur additional charges.</p>
            </div>
        </Card>
    </Container>
    )
}

export default ImportantInformation