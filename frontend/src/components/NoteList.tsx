import Note from "./Note";
import React from "react";
import AddNote from "./AddNote";
interface Time {
  day: number;
  month: string;
  year: number;
}
interface Notes {
  text: string;
  date: Time;
  id: string;
}
interface SetAction {
  type: "SET";
  payload: Notes;
}
interface RemoveAction {
  type: "REMOVE";
  payload: Notes;
}
type Actions = SetAction | RemoveAction;

interface Color {
  code: number;
  name: string;
}
const initialNotes: Notes[] = [
  { text: "This is a test", date: { day: 10, month: "Feb", year: 2003 }, id: "1" },
  {
    text: "This is another test i want to try",
    date: { day: 1, month: "Feb", year: 2003 },
    id: "2",
  },
  {
    text: "The others arent as helpful as me",
    date: { day: 10, month: "March", year: 2002 },
    id: "3",
  },
  { text: "Another One", date: { day: 5, month: "April", year: 2002 }, id: "4" },
];
const NoteList = ({ color }: { color: Color }) => {
  //Reducer funtion
  // const noteReducer = (state: Notes[], action: Actions) => {
  //   switch (action.type) {
  //     case "SET":
  //       return state;
  //     case "REMOVE":
  //       return state;
  //     default:
  //       throw new Error();
  //   }
  //   return state;
  // };

  // States
  const [noteList, setNoteList] = React.useState(initialNotes);

  // Handler
  const handleNoteList = (newNote: Notes) => {
    let tempNote = noteList;
    for (let note of tempNote) {
      if (note.id == newNote.id) {
        note.text = newNote.text;
      }
    }
    setNoteList(noteList);
  };
  const handleAddNote = (newNote: Notes) => {
    newNote.id = Date();
    setNoteList((noteList) => [newNote, ...noteList]);
    console.log(noteList);
  };
  const handleRemoval = (toRemoveNote: Notes) => {
    console.log(toRemoveNote);
    const newNoteList = noteList.filter((item: Notes) => {
      return item.id !== toRemoveNote.id;
    });
    setNoteList(newNoteList);
  };
  return (
    <>
      <AddNote color={color} onAdd={handleAddNote} />
      {noteList.map((note: Notes) => (
        <Note
          color={color}
          key={note.id}
          current={note}
          noteChanger={handleNoteList}
          remover={handleRemoval}
        />
      ))}
    </>
  );
};

export default NoteList;
