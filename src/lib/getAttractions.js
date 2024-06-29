import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export async function getLocations(){
    const querySnapshots = await getDocs(collection(db, "locations"));
    const data = []
    querySnapshots.forEach((doc) => {
      data.push(doc.data())
    })
    return data
  }

