import React, { Component } from 'react';
import Image from 'next/image';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

export default function About() {
    return (
        <Container id="about" className='py-4 mt-4'>
            <Row>
                <Col className="sm-12">
                    <Row className="row box-shadow-full">
                        <Col md={6}>
                            <Row>
                                <div className="col-sm-6 col-md-5">
                                    <Image
                                        alt="It's me" 
                                        src="/me.png" 
                                        width={150}
                                        height={200}
                                    />
                                </div>
                                <div className="col-sm-6 col-md-7">
                                    <div className="about-info">
                                        <p><span className="title-s">Name: </span> <span>Kadyl Bakyt</span></p>
                                        <p><span className="title-s">Profile: </span> <span>Full stack web developer</span></p>
                                        <p><span className="title-s">Email: </span> <span>kalau.bakyt@gmail.com</span></p>
                                        <p><span className="title-s">Phone: </span> <span>+7 (778) 611-88-27</span></p>
                                    </div>
                                </div>
                            </Row>
                            <div className="skill-mf">
                                <p className="title-s">Skills</p>

                                <span>HTML</span>
                                <ProgressBar now={95} label="95%" />

                                <span>CSS3</span>
                                <ProgressBar now={70} label="70%" />

                                <span>PHP</span>
                                <ProgressBar now={90} label="90%" />

                                <span>JAVASCRIPT</span>
                                <ProgressBar now={60} label="60%" />

                                <span>Docker</span>
                                <ProgressBar now={90} label="90%" />

                                <span>Linux</span>
                                <ProgressBar now={90} label="90%" />
                                
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className="about-me pt-4 pt-md-0">
                                <div className="title-box-2">
                                    <h5 className="title-left">
                                        About me
                                    </h5>
                                </div>
                                <p className="lead">
                                    Experienced Web Developer adept in all stages of advanced web development. 
                                    Knowledgeable in user interface, testing, and debugging processes. 
                                    Bringing forth expertise in design, installation, testing and maintenance of web systems.
                                    Equipped with a diverse and promising skill-set. Proficient in an assortment of technologies, 
                                    including PHP(Laravel, Phalcon, Slim), JavaScript(jQuery, React, NextJS), HTML, CSS(Bootstrap, MUI), 
                                    Docker, RabbitMQ, Nginx, Linux, MySQL, MariaDB and PostgreSQL. 
                                    Able to effectively self-manage during independent projects, as well as collaborate in a team setting.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
