import React from 'react';
import {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import ContactRow from "./ContactRow";



const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function ContactList({setSelectedContactId}) {

      

    //ContactList [setSelectedContactId] = {setSelectedContactId}

  const [contacts, setContacts] = useState(dummyContacts);
  //render ContactList
  <ContactList setSelectedContactId={setSelectedContactId} />
      useEffect (() => {
        async function fetchContacts() {
           try{
            //fetch API to make GET request to API endpoint
            const response = await fetch ("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
            const data = await response.json();
            
            //setState function to update state of contacts
            setContacts(data);
             } catch (error) {
            console.error(error);
            alert("Error with Request"); //will log any errors in retrieving API request
          }
        }
        fetchContacts ();
      },[]
      );
    
    return (  //render table with Api details
        <table>
          <thead>
            <tr>
              <th colSpan="5">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {contacts.map((contact) => {
              return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId} />
            })}
             
          </tbody>
        </table>
    ); 
}

ContactList.propTypes = {
  //setSelectedContactId prop validation
  setSelectedContactId: PropTypes.func.isRequired,

};