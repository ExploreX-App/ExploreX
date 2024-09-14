import { Button, Card, Container } from "react-bootstrap";
import bannerLogo1 from "../../assets/bannerLogo1.png";

const AdvertisingBanner = () => {
    return (
        <div style={{ margin: "30px 0" }}>
            <Card style={{ width: '100%', height: 'auto', border: '2px solid black', borderRadius: '16px', backgroundColor: '#191e3b' }}>
                <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-around", flexWrap: 'wrap', padding: '10px', overflow: "hidden" }}>
                    <img src={bannerLogo1} alt="Banner Logo" style={{ width: '50px', height: '50px', margin: "5px" }} />
                    <div style={{ color: "#fefefe", fontWeight: "bold", flex: '1', textAlign: 'center', minWidth: '200px' }}> 
                        Save an average of 15% on thousands of hotels when you're signed in 
                    </div>
                    <Button style={{ width: "auto", borderRadius: '18px', margin: "10px", padding: '5px 20px' }}>Sign in</Button>
                    <div style={{ color: "#fefefe", fontWeight: "bold", minWidth: '200px', textAlign: 'center' }}>
                        Sign up, it's free
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default AdvertisingBanner;


