import './App.css';
import { useState } from 'react';
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";


export default function App() {
  
  const [selectedContactId, setSelectedContactId] = useState(null);
    {
      if (selectedContactId) { //if selectedContactId is not null,return:
        return <SelectedContact selectedContactId=
        {selectedContactId} setSelectedContactId={setSelectedContactId}/>
      } else { //if else return ContactList component
        return<ContactList />;
    }

  }
}