import React, { useEffect, useState } from "react";
import Header from "./Header";
import firebase from "../firebase";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Container,
} from "@chakra-ui/react";
const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("contacts")
      .onSnapshot((snapshot) => {
        const newProjects = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(newProjects);
      });
  }, []);
  return (
    <div>
      <Header />
        <Table variant="simple" size="lg">
          <TableCaption>Queryies</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th >Phone</Th>
              <Th>Message</Th>
            </Tr>
          </Thead>
          <Tbody>
            {contacts.map((contact, index) => {
              return (
                <Tr>
                  <Td>{contact['name']}</Td>
                  <Td>{contact['email']}</Td>
                  <Td>{contact['phone']}</Td>
                  <Td>{contact['message']}</Td>
                 
                </Tr>
              );
            })}
          </Tbody>
        </Table>
    </div>
  );
};

export default AdminDashboard;
