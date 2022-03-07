export const getNotes = () => async (dispatch) => {
  const data = [
    { id: "1", value: "ma premiere notes" },
    { id: "2", value: "ma deuxiéme notes" },
    { id: "3", value: "ma troisiéme notes" },
    { id: "4", value: "ma quatrieme notes" },
  ];
  try {
    dispatch({
      type: "SET_NOTES",
      payload: data,
    });
  } catch (error) {
    console.log("error");
  }
};
