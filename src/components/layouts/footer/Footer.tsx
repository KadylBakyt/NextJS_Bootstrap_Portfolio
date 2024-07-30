import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer className='bg-dark'>
            <Container>
                <Row>
                    <Col className="sm-12">
                        <div className="copyright-box">
                            <p className="copyright">&copy; Copyright {year}. All Rights Reserved</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>   
    );
}
