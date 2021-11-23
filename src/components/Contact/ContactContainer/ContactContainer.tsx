import React, {useState} from 'react';
import ContactInterface from "../ContactInterface/ContactInterface";

const ContactContainer = () => {
    let users = {};
    const [personState, updatePerson] = useState([
        {
            id: 1,
            name: "nigel",
            lastName: "Maduro",
            age: 28
        },
        {
            id: 2,
            name: "Metsu",
            lastName: "Akai",
            age: 12
        },
        {
            id: 3,
            name: "Carol",
            lastName: "Lieds",
            age: 22
        },
        {
            id: 4,
            name: "Men",
            lastName: "Croes",
            age: 89
        }
    ]);

    const pushHandler = (newName: string) => {
        updatePerson([
            {
                id: 1,
                name: newName,
                lastName: "Maduro",
                age: 28
            }
        ])
    };

    const removeHandler = () => {
        updatePerson([])
    };

    users = personState.map((user) => {
        return <ContactInterface key={user.id} name={user.name} lastName={user.lastName}
                                 age={user.age} clickAction={() => pushHandler("NIGEL!!")} removeAction={removeHandler}/>
    });
    return <>{users}</>
};

export default ContactContainer;
