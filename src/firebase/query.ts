import { collection, getDocs, doc, setDoc, serverTimestamp, query ,orderBy } from "firebase/firestore";
import { blogData } from "../interfaces/blog.interfaces";
import { db } from "./firebase";

export interface data {
    title : string
    story : string
}


export const getCollection = async () => {
    const q = query(collection(db, "blog"));
    const querySnapshot = await getDocs(q);
    const result : any[] = [];
    querySnapshot.forEach((doc) => {
        const docItem : blogData = {
            id: doc.id,
            ...doc.data()
        }
        result.push(docItem)
    });
    console.log(result)
    return result;
}


export const setDocument = async (data : data) => {
    const newCityRef = doc(collection(db, "blog"));

    await setDoc(newCityRef, {
        ...data,
        createdAt : serverTimestamp()
    });
}

