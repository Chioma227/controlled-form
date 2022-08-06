import React from 'react'

const Person = ({users, remove}) => {
  return (
    <div>
       <section className="people_container">
          {users.map((user) => {
            const { id, username, email } = user;
            return (
              <div key={id} className="person">
                <div >
                <h3>{username}</h3>
                <p>{email}</p>
              </div>
              <div>
                <button onClick={() =>remove(id)}>Remove</button>
              </div>
              </div>
            );
          })}
        </section>
    </div>
  )
}

export default Person
