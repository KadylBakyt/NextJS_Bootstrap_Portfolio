import React, { useEffect } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {

    return (
        <Container id="hero" className="hero bg-dark text-light">
            <div className="overlay-itro">
                <div className="hero-content display-table">
                    <div className="table-cell">
                        <Row>
                            <h1 className="hero-title mb-4">I am Kadyl Bakyt</h1>
                            <TypeAnimation
                                sequence={[
                                    'Full-stack web developer',
                                    1000,
                                    'DevOps',
                                    1000,
                                    'PHP developer',
                                    1000,
                                    'Linux administrator',
                                    1000
                                ]}
                                wrapper="span"
                                speed={10}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </Row>
                    </div>
                </div>
            </div>
        </Container>
    );
}
