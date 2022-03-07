import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Modal({ setShowModalEdit, edit, id, deleted, add }) {
  const notes = useSelector((state) => state.Notes.notes);

  const [stateValue, setStateValue] = useState("");
  const [newNote, setNewNote] = useState("");
  console.log(newNote);
  useEffect(() => {
    const note = notes?.find((item) => item.id == id);
    setStateValue(note);
  }, []);
  const dispatch = useDispatch();
  console.log(stateValue);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                {edit && "modifier cette note"}{" "}
                {deleted && "voulez vous supprimer cette note"}{" "}
                {add && "Vous pouvez ajouter une nouvelle note"}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModalEdit(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            {edit && (
              <div className="relative p-6 flex-auto">
                <input
                  type="text"
                  className="border w-full px-2 py-3 outline-none rounded-lg text-xl font-bold"
                  value={stateValue?.value}
                  onChange={(e) =>
                    setStateValue({ ...stateValue, value: e.target.value })
                  }
                />
              </div>
            )}
            {add && (
              <div className="relative p-6 flex-auto">
                <input
                  type="text"
                  className="border w-full px-2 py-3 outline-none rounded-lg text-xl font-bold"
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                />
              </div>
            )}
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModalEdit(false)}
              >
                Close
              </button>
              {deleted && (
                <button
                  className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    dispatch({ type: "DELETE_NOTE", payload: stateValue.id });
                    setShowModalEdit(false);
                  }}
                >
                  DELETE
                </button>
              )}{" "}
              {edit && (
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    dispatch({ type: "EDIT_NOTE", payload: stateValue });
                    setShowModalEdit(false);
                  }}
                >
                  Save Changes
                </button>
              )}
              {add && (
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    const newNoteWithId = {
                      id: Math.floor(Math.random() * Math.random() * 145),
                      value: newNote,
                    };
                    dispatch({ type: "NEW_NOTE", payload: newNoteWithId });
                    setShowModalEdit(false);
                  }}
                >
                  Add
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default Modal;
