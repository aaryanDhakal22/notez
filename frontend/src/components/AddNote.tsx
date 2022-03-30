import React from "react";
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
interface Color {
  code: number;
  name: string;
}
const AddNote = ({ onAdd, color }: { onAdd: any; color: Color }) => {
  const initialValue: Notes = {
    text: "",
    date: { day: 10, month: "Feb", year: 2003 },
    id: Date(),
  };

  const [state, setState] = React.useState<Notes>(initialValue);
  const handleChange = (event: any) => {
    const newState = { ...state, text: event.target.value };
    setState(newState);
  };
  const handleSave = (event: any) => {
    onAdd.bind(null, state)();

    setState({ ...state, text: "" });
  };
  return (
    <div className="col-3 ">
      <div className={`bg-dark rounded second-border-${color.name}`}>
        <div className="row p-3 ">
          <div className="col-12 flex-row-reverse d-flex ">
            <button
              className={`btn second-button-${color.name} col-3 text-light`}
              type="submit"
              name="dismiss"
              onClick={handleSave}
            >
              +
            </button>
          </div>
          <div className="col-12 my-3">
            <textarea
              className="bg-dark text-light text-area-comp"
              rows={8}
              placeholder="Type Something"
              value={state.text}
              onChange={handleChange}
            />
          </div>
          <div className=" col-12 text-light">
            {state.date.day} {state.date.month}, {state.date.year}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
