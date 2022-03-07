import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getNotes } from "./redux/action";
import React from "react";
import Modal from "./Components/Modal";
function App() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.Notes.notes);
  const [idSelected, setIdSelected] = React.useState(null);
  const [showModalEdit, setShowModalEdit] = React.useState(false);
  const [edit, setEdit] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [add, setAdd] = useState(false);
  useEffect(() => {
    dispatch(getNotes());
  }, []);
  console.log(notes);
  return (
    <>
      <div className="text-center">
        <button
          onClick={() => {
            setEdit(false);
            setDeleted(false);
            setAdd(true);
            setShowModalEdit(true);
          }}
          className="bg-green-200 rounded-xl cursor-pointer hover:scale-105 uppercase p-1 text-lg font-bold "
        >
          NEW
        </button>
      </div>
      <div className="space-y-4">
        {notes?.map((item) => (
          <>
            <div
              ket={item.id}
              className="flex justify-center items-center space-x-2"
            >
              <div className="text-3xl font-bold">{item.value}</div>
              <button
                onClick={() => {
                  setAdd(false);
                  setDeleted(false);
                  setEdit(true);
                  setIdSelected(item.id);

                  setShowModalEdit(true);
                }}
                className="bg-[#FDA135] rounded-xl cursor-pointer hover:scale-105 uppercase p-1 text-lg font-bold"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  setEdit(false);
                  setAdd(false);
                  setDeleted(true);
                  setIdSelected(item.id);
                  setShowModalEdit(true);
                }}
                className="bg-[#F8130F] rounded-xl cursor-pointer hover:scale-105 uppercase p-1 text-lg font-bold"
              >
                Delete
              </button>
            </div>
          </>
        ))}
      </div>
      {showModalEdit && (
        <Modal
          add={add}
          edit={edit}
          deleted={deleted}
          setShowModalEdit={setShowModalEdit}
          id={idSelected}
        />
      )}
    </>
  );
}

export default App;
