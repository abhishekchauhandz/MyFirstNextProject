'use client'

import { getDocs, collection } from "firebase/firestore";
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { db } from "../firebaseConfig";


interface Inquiry {
    id: string;
    name: string;
    email: string;
    clinicName: string;
    clinicAddress: string;
    message: string;
  }
  
export default function EnquiriesAdmin () {
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);


    useEffect(() => {
        const fetchInquiries = async () => {
          const querySnapshot = await getDocs(collection(db, 'enquiries'));
          const inquiriesList = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          })) as Inquiry[];
          setInquiries(inquiriesList);
        };
    
        fetchInquiries();
      }, []);
    return (
        <>
            <Row>
                {inquiries.map((inquiry: { id: Key | null | undefined; name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; email: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; clinicName: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; clinicAddress: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; message: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
                  <Col key={inquiry.id} md={4}>
                    <Card>
                      <Card.Body>
                        <Card.Title>{inquiry.name}</Card.Title>
                        <Card.Text>
                          <strong>Email:</strong> {inquiry.email}
                        </Card.Text>
                        <Card.Text>
                          <strong>Clinic Name:</strong> {inquiry.clinicName}
                        </Card.Text>
                        <Card.Text>
                          <strong>Clinic Address:</strong> {inquiry.clinicAddress}
                        </Card.Text>
                        <Card.Text>
                          <strong>Message:</strong> {inquiry.message}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
        </>
    )
}