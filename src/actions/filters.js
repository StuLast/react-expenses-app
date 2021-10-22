import { SET_TEXT_FILTER, SET_START_DATE, SET_END_DATE, SORT_BY } from "./types";

//SET_TEXT_FILTER

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

//SORT_BY_AMOUNT
const setSortByAmount = () => ({
  type: "SORT_BY",
  sortBy: "amount",
});

//SORT_BY_DATE
const setSortByDate = () => ({
  type: "SORT_BY",
  sortBy: "date",
});

//SET_START_DATE
const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});

//SET_END_DATE
const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});

export {
  setTextFilter,
  setSortByAmount,
  setSortByDate,
  setStartDate,
  setEndDate
}