import matches from "./helpers/data";
import EventParser from "./EventParser";

const eventParser = new EventParser(matches);
eventParser.printAllMatches();
