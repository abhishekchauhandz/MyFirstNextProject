// src/pages/dashboard.tsx
'use client'

import { useState } from 'react';
import { Container, Row, Col, Nav, ListGroup } from 'react-bootstrap';
import { FaSignOutAlt, FaEnvelope, FaClipboardList, FaHome } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import EnquiriesAdmin from './EnquiriesAdmin';
import "../dashboard/dashboard.css"
import NewsletterAdmin from './NewsLetterAdmin';
import Link from 'next/link';



const MainDashboard = () => {
  const { user, userName, logout } = useAuth();
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [currentSection, setCurrentSection] = useState('Inquiries');



  return (
    <>
      <Container fluid>
        <Row>
          <Col
            xs={2}
            className={`sidebar ${isSidebarHovered ? 'expanded' : ''}`}
            onMouseEnter={() => setIsSidebarHovered(true)}
            onMouseLeave={() => setIsSidebarHovered(false)}
          >
            <ListGroup>
              <ListGroup.Item action onClick={() => setCurrentSection('Inquiries')}>
                <FaClipboardList
                />Enquiries
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => setCurrentSection('Newsletter')}>
                <FaEnvelope /> Newsletter
              </ListGroup.Item>
              <ListGroup.Item action onClick={logout}>
                <FaSignOutAlt /> Logout
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col
            xs={10}
            className={`main-content ${isSidebarHovered ? 'shifted' : ''}`}
          >
            <header id='header' className={`navbar-custom ${isSidebarHovered ? 'shifted' : 'header fixed-top d-flex align-items-center'}`}>
              <div className='container d-flex align-items-center justify-content-between'>
                <div id='logo'>
                  <img src='assets/img/logo.png' />
                </div>
                <div className='title'>
                  <h2>Welcome, {userName || "Admin"}</h2>
                </div>

                <Link href="/" passHref>
                  <FaHome style={{ cursor: 'pointer', fontSize: '1.5rem', color: '#000' }} />
                </Link>
                <i className="bi bi-list mobile-nav-toggle"></i>

              </div>
            </header>
            <Container>
              {currentSection === 'Inquiries' && <EnquiriesAdmin />}
              {currentSection === 'Newsletter' && <NewsletterAdmin />}
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainDashboard;


