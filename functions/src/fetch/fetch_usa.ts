import * as functions from "firebase-functions";
const sanctions = require("../../../../../sanctions");
import { saveList } from "./common";
const listId = "pmddtc.state.gov";
const fieldId = "Federal Register Notice";

export const fetchUSAlist = functions.pubsub.schedule("5 11 * * *").timeZone("Australia/Sydney").onRun(async () => {
  console.log("This will be run every day at 11:05 AM");
  await fetchUSA();
  return null;
});

export async function fetchUSA() {
  try {
    const list = await sanctions.fetchUSA();
    await saveList(list, listId, fieldId);
  } catch (error) {
    console.log("error ", error);
  }
}