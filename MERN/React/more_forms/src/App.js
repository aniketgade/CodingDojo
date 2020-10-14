import React from 'react';
import { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import Result from './components/Result';

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const [confirmPassword, setConfirmPassword] = useState("");  

  return (
    <div className="App">
      <UserForm firstName = {firstName} setFirstName = {setFirstName} lastName = {lastName} setLastName = {setLastName} email = {email} setEmail = {setEmail} password = {password} setPassword = {setPassword} confirmPassword = {confirmPassword} setConfirmPassword = {setConfirmPassword} />

      <Result firstName = {firstName} lastName = {lastName} email = {email} password = {password} confirmPassword = {confirmPassword}/>
    </div>
  );
}

export default App;
