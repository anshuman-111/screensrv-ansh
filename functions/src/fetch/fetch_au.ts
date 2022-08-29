import * as functions from "firebase-functions";
const sanctions = require("../../../../sanctions");
import { saveList } from "./common";
const listId = "dfat.gov.au";
const fieldId = "Name of Individual or Entity";

export const fetchNLlist = functions.pubsub
  .schedule("5 11 * * *")
  .timeZone("Australia/Sydney")
  .onRun(async () => {
    console.log("This will be run every day at 11:05 AM");
    await fetchAU();
    return null;
  });

export async function fetchAU() {
  try {
    let list = await sanctions.fetchAU();
    await saveList(list, listId, fieldId);
  } catch (error) {
    console.log("error ", error);
  }
}