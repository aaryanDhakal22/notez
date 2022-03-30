import NoteList from "./components/NoteList";
import React from "react";

// const initialNote: Notes = {
//   text: "This is a test",
//   date: { day: 10, month: "Feb", year: 2003 },
//   id: 1,
// };
interface Color {
  code: number;
  name: string;
}
const App = () => {
  const [color, setColor] = React.useState<Color>({ code: 0, name: "blue" });
  const handleColor = () => {
    const new_code = (color.code + 1) % 3;
    let new_color: Color = { code: new_code, name: " asdf" };
    switch (new_code) {
      case 0:
        new_color.name = "blue";
        break;
      case 1:
        new_color.name = "red";
        break;
      case 2:
        new_color.name = "orange";
        break;
      default:
        throw new Error();
    }
    setColor(new_color);
    console.log(new_color);
  };
  return (
    <div className="container">
      <div onClick={handleColor} className="display-2 text-light text-center">
        Not<span className={`prime-text-${color.name}`}>ez</span>
      </div>
      <br />
      <div className="container row g-5">
        <NoteList color={color} />
      </div>
    </div>
  );
};
export default App;

