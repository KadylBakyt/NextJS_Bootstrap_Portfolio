import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { Container, Row, Col, Tabs, Tab, Card, Button } from 'react-bootstrap';
import { FaDocker, FaPhp, FaGithubSquare } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { BsEyeFill } from "react-icons/bs";
import { DiJsBadge, DiReact, DiBootstrap } from "react-icons/di";

export default function Work() {

    const dockerIcon = <FaDocker size={32}/>;
    const jqueryIcon = <SiJquery size={32}/>;
    const jsIcon = <DiJsBadge size={32}/>;
    const reactIcon = <DiReact size={32}/>;
    const bootstrapIcon = <DiBootstrap size={32}/>;
    const phpIcon = <FaPhp size={32}/>;

    return (
        <section id="work" className="mt-3 mb-3">
            <Container>
                <Row>
                    <Col sm={12} className="title-box text-center">
                        <h3 className="title-a">Portfolio</h3>
                        <p className="subtitle-a">
                            Watch my works by switching tabs
                        </p>
                        <div className="line-mf"></div>
                    </Col>
                </Row>

                <Tabs
                    defaultActiveKey="nextjs"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >
                    <Tab eventKey="nextjs" title={<span >{reactIcon}</span>}>
                        <Row>
                            <Col md={4}>
                                <Card className="mt-3">
                                    <Card.Img variant="top" src="./nextjs_multi-lang_app.png" />
                                    <Card.Body>
                                        <Card.Title>Nextjs multi-language form validation</Card.Title>
                                        <Card.Text>
                                            Nextjs14, Typescript, MUI, Formik&Yup, Next-intl  
                                        </Card.Text>
                                        
                                        <Link
                                            target='_blank' 
                                            href="https://next-js-multi-language-app.vercel.app/en"
                                        > 
                                            <Button variant="primary">
                                                <BsEyeFill size={20}/> Live preview
                                            </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="mt-3">
                                    <Card.Img variant="top" src="./portfolio_screen.png" />
                                    <Card.Body>
                                        <Card.Title>Nextjs, Bootstrap portfolio</Card.Title>
                                        <Card.Text>
                                            Nextjs14, Bootstrap5, React-bootstrap, React-icons, React-type-animation 
                                        </Card.Text>
                                        
                                        <Link
                                            target='_blank' 
                                            href="https://next-js-bootstrap-portfolio.vercel.app"
                                        > 
                                            <Button variant="primary">
                                                <BsEyeFill size={20}/> Live preview
                                            </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row> 
                    </Tab>

                    <Tab eventKey="docker" title={<span >{dockerIcon}</span>}>
                        <Row>
                            <Col md={4}>
                                <Card className="mt-3">
                                    <Card.Img variant="top" src="./mongo_express.png" />
                                    <Card.Body>
                                        <Card.Title>MongoDB & Mongo-express</Card.Title>
                                        <Card.Text>
                                            Run MongoDB and Mongo-express with docker-compose  
                                        </Card.Text>
                                        
                                        <Link
                                            target='_blank' 
                                            href="https://github.com/KadylBakyt/MongoDB_MongoExpress_Docker_compose"
                                        > 
                                            <Button variant="primary" >
                                                <FaGithubSquare size={24}/> Open in Github
                                            </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="mt-3">
                                    <Card.Img variant="top" src="./rabbitmq.png" />
                                    <Card.Body>
                                        <Card.Title>RabbitMQ</Card.Title>
                                        <Card.Text>
                                            Run RabbitMQ with Docker Compose
                                        </Card.Text>
                                        
                                        <Link
                                            target='_blank' 
                                            href="https://github.com/KadylBakyt/RabbitMQ-Docker-Compose"
                                        > 
                                            <Button variant="primary">
                                                <FaGithubSquare size={24}/> Open in Github
                                            </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row> 
                    </Tab>

                    <Tab eventKey="php" title={<span >{phpIcon}</span>}>
                        <Row>
                            <Col md={4}>
                                <Card className="mt-3">
                                    <Card.Img variant="top" src="./docker_php_mysql_nginx.png" />
                                    <Card.Body>
                                        <Card.Title>Salary calculator</Card.Title>
                                        <Card.Text>
                                            Salary calculator(PHP, MySQL, jQuery, Bootstrap)
                                        </Card.Text>
                                        
                                        <Link
                                            target='_blank' 
                                            href="https://gitlab.com/kalau.bakyt/salary_calculator"
                                        > 
                                            <Button variant="primary">
                                                <FaGithubSquare size={24}/> Open in Gitlab
                                            </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="mt-3">
                                    <Card.Img variant="top" src="./slim_docker.png" />
                                    <Card.Body>
                                        <Card.Title>Slim Framework 4 Starter App </Card.Title>
                                        <Card.Text>
                                            Slim Framework 4(PHP8.3, MySQL, jQuery, Bootstrap)
                                        </Card.Text>
                                        
                                        <Link
                                            target='_blank' 
                                            href="https://github.com/KadylBakyt/Slim4-php8.3-docker-compose"
                                        > 
                                            <Button variant="primary">
                                                <FaGithubSquare size={24}/> Open in Github
                                            </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row> 
                    </Tab>

                    <Tab eventKey="jquery" title={<span > {jqueryIcon}</span>}>
                        <Row>
                            <Col md={4}>
                                <div className="work-box">
                                    <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox">
                                        <div className="work-img">
                                            <Image
                                                alt="Picture" 
                                                src="./next.svg" 
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                    </a>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Example jQuery project</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row> 
                    </Tab>

                </Tabs>
            </Container>
        </section>
    );
}
