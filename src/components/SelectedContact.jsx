
import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import ContactList from './ContactList';



//define SelectedContact
//deconstruct selectedContactId and setSelectedContactId from props


export default function SelectedContact ({selectedContactId, setSelectedContactId}) {
    //render selected contact info
    //use selectedContactId prop to fetch contact data from API
    //use setSelectedContactId prop to reset selected contact to null
    //code button function

    //variable to store contact data
    const [contact, setContact] = useState(null);

    useEffect (() => {
    //function to fetch contact data from API
    //use selectedContactId prop to fetch
    async function fetchContact() {
        try {
        //use fetch API for GET request to API endpoint
        //use selectedContactId as param
        const response = await fetch (
            `https://jsonplace-univclone.herokuapp.com/users/${selectedContactId}`);
            //convert response to JSON
            const data = await response.json();
            //update contact state with data
            setContact(data);
        } catch (error) {
            //log error
            console.error(error);
            alert("Error with Request");
        }
    }
    //call fetchContact function
        fetchContact(); 
    },[selectedContactId] //selectedContactId as dependency
    );
        
    //render contact data

    return (
        <div className="selected-contact">
            {contact ? (
                <div>
                    <h4>{contact.name}</h4>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                    <button onClick={() =>
                    setSelectedContactId(null)}>Go Back</button>
                </div>

            ) : (
                
            <p>Loading Please Wait...</p>
               
            )}
            </div>
    );
}



ContactList.propTypes = {
    //setSelectedContactId prop validation
    setSelectedContactId: PropTypes.func.isRequired,
    
}