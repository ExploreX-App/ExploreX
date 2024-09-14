import React, {useState} from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import loginImg from '../../assets/login.png'
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();


    const handleOnChange = (e) => {
        const targetName = e.target.name;
        let targetValue;

        targetValue = targetName === "checkbox" ? e.target.checked : e.target.value;
        targetName === "email" ? setEmail(e.target.value) : targetName === "password" ? setPassword(e.target.value) : setIsChecked(e.target.checked);

        setFormData({...formData, [targetName]: targetValue})
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', formData.email)
        setFormData({
            email: '',
            password: ''
        });
        setEmail('');
        setPassword('');
        setIsChecked(false);
        navigate('/');
    }

 
  // useHotelQuery
  return (
    <Container fluid="md" className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Row className="w-100 align-items-center">
            {/* 이미지 컬럼 */}
            <Col md={12} className="d-flex justify-content-center">
                <img
                    src={loginImg}
                    alt="Login"
                    className="image-login"
                    style={{ width: '100%', height: '400px', objectPosition: 'top 50%', objectFit: 'cover' }}
                />
            </Col>

            {/* 폼 컬럼 */}
            <Col md={12} className="d-flex justify-content-center mt-5">
                <Form className="form-container" style={{ width: '100%'}} onSubmit={handleOnSubmit}>
                        <Form.Group controlId="formBasicEmail" className='mb-3'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email} 
                                name="email" 
                                required 
                                onChange={handleOnChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword" className='mb-3'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password} 
                                name="password" 
                                required 
                                onChange={handleOnChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="Check me out"
                                checked={isChecked} 
                                name="checkbox" 
                                required 
                                onChange={handleOnChange}
                            />
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                </Form>
            </Col>
        </Row>
    </Container>
);
};

export default LoginPage;