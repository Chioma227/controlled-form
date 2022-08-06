import React, { useState } from "react";
import { useEffect } from "react";

const Form = () => {
    // states for input fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

// prevent data loss while refreshing browser 
  const getLocalStorage = () =>{
      let person = localStorage.getItem('New User')
      if(person){
          return JSON.parse(localStorage.getItem('New User'))
        }
        else{
            return []
        }
    }
    const [people, setPeople] = useState(getLocalStorage());

useEffect(() => {
    localStorage.setItem('New User', JSON.stringify(people))
},[people])


// remove person from list
    const removePerson = (id) =>{
        setPeople(people.filter((person) => person.id !== id))
    }

    // code to be executed when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && email && password) {
      const newPerson = {
        id: new Date().getTime().toString(),
        username,
        email,
        password,
      };
      setPeople((prevPeople) => {
        return [...prevPeople, newPerson];
      });
      setUsername("");
      setEmail("");
      setPassword("");
    } 
  };

  return (
      <>
      <article className="body">
          <h2 className="header">CONTROLLED FORM</h2>
      <div className="count">{people.length} user(s)</div>
        <form onSubmit={handleSubmit}>
          <main className="form_content">
            <div>
              <label htmlFor="username">Username :</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password :</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </main>
          <div className="btn">
            <button type="submit">Submit</button>
          </div>
        </form>
        <section className="people_container">
          {people.map((person) => {
            const { id, username, email } = person;
            return (
              <div key={id} className="person">
                <div >
                <h3>{username}</h3>
                <p>{email}</p>
              </div>
              <div>
                <button onClick={() =>removePerson(id)}>Remove</button>
              </div>
              </div>
            );
          })}
        </section>
      </article>
    </>
  );
};

export default Form;
