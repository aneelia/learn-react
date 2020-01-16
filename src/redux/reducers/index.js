import { combineReducers } from "redux";
import { books } from "./books";
import { films } from "./films";

export default combineReducers({
    books,
    films
 })