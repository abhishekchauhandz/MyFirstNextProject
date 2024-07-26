// components/Newsletter.tsx

'use client'
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/app/firebaseConfig';
import { Table, Container } from 'react-bootstrap';


const NewsletterAdmin = () => {
  const [newsletterSubs, setNewsletterSubs] = useState<any>([]);

  useEffect(() => {
    const fetchNewsletterSubs = async () => {
      const querySnapshot = await getDocs(collection(db, 'newsletter'));
      const newsletterList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setNewsletterSubs(newsletterList);
    };

    fetchNewsletterSubs();
  }, []);

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Date Subscribed</th>
          </tr>
        </thead>
        <tbody>
          {newsletterSubs.map((sub: { id: Key | null | undefined; email: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; dateSubscribed: string | number | Date; }, index: number) => (
            <tr key={sub.id}>
              <td>{index + 1}</td>
              <td>{sub.email}</td>
              <td>{new Date(sub.dateSubscribed).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default NewsletterAdmin;

