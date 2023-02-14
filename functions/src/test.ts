import * as sanctions from "sanctions";
import { saveList } from "./common";


// For testing the sanctions module
test_fetch();

export async function test_fetch() {
    try {
      console.log("fetch");
      // const list = await sanctions.dfat_gov_au__consolidated_list();
      const list = await sanctions.bis_doc_gov__denied_persons();
      console.log("fetch done, save...");
      // await saveList(list, "dfat_gov_au__consolidated_list", "fieldId");
      await saveList(list, "robert_test_list", "fieldId");
    } catch (error) {
      console.log("error ", error);
    }
  }
