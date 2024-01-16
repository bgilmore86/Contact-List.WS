import React from 'react'
import PropTypes from "prop-types";
import {useState,useEffect} from 'react';



export default function ContactRow ({setSelectedContactId, contact}) {

    return (
        
            
            <tr>
                <td><div><button onClick={() => {
                setSelectedContactId(contact.id);
                }}>{contact.name}</button></div></td>
                <td><div>{contact.email}</div></td>
                <td><div>{contact.phone}</div></td>
        
        
            </tr>
            
        
    );
}
//proptypes for ContactRow,name,email, and phone
ContactRow.propTypes = {
    setSelectedContactId:
PropTypes.func,
    contact: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
}),
};