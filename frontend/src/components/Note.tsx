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
const Note = ({
  current,
  noteChanger,
  remover,
  color,
}: {
  current: Notes;
  noteChanger: any;
  remover: any;
  color: Color;
}) => {
  const [state, setState] = React.useState(current);
  const handleChange = (event: any) => {
    const newState = { ...state, text: event.target.value };
    setState(newState);
    noteChanger.bind(null, state)();
  };
  return (
    <div key={current.id} className="col-3 ">
      <div className={`bg-dark rounded prime-border-${color.name}`}>
        <div className="row p-3 ">
          <div className="col-12 flex-row-reverse d-flex ">
            <button
              onClick={remover.bind(null, state)}
              className={`btn prime-button-${color.name} col-3`}
              type="submit"
              name="dismiss"
            >
              ✕
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

export default Note;
