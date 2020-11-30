import { Post } from '../firebase/firestore.js';

// --------------------------------------Función--------------------------------------------//

export const createAddNote = (userID, username, note, date) => {
  console.log(userID);
  console.log(username);
  console.log(note);
  console.log(date);
  // console.log(Photo);
  Post(userID, username, note, date)
    .then((doc) => {
      console.log('escribe tu post', doc.id);
    })
    .catch((error) => {
      console.error('Error al crear post ', error);
    });
};


// userID: uid,
// name: username,
// note: createNote,
// date,
// photo: photoUser,
