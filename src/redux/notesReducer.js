const initialState = {
  notes: [],
};

export const ActionTypes = {
  SET_NOTES: "SET_NOTES",
  DELETE_NOTE: "DELETE_NOTE",
  NEW_NOTE: "NEW_NOTE",
  EDIT_NOTE: "EDIT_NOTE",
};

export const ActionCreators = {
  setNotes: (payload) => ({ type: ActionTypes.SET_NOTES, payload }),
  deleteNote: (payload) => ({ type: ActionTypes.DELETE_NOTE, payload }),
  newNote: (payload) => ({ type: ActionTypes.NEW_NOTE, payload }),
  editNote: (payload) => ({ type: ActionTypes.EDIT_NOTE, payload }),
};

export default function NotesReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_NOTES:
      return {
        notes: action.payload,
      };

    case ActionTypes.DELETE_NOTE:
      return {
        ...state,
        notes: [...state.notes.filter((note) => note.id !== action.payload)],
      };
    case ActionTypes.NEW_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    case ActionTypes.EDIT_NOTE:
      let notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          note = action.payload;
        }
        return note;
      });
      return { ...state, notes: [...notes] };
    default:
      return state;
  }
}
