import { collection, getDocs } from "firebase/firestore";
import { blogData } from "../interfaces/blog.interfaces";
import { db } from "./firebase";



export const getCollection = async () => {
    const querySnapshot = await getDocs(collection(db, "blog"));
    const result : any[] = [];
    querySnapshot.forEach((doc) => {
        const docItem : blogData = {
            id: doc.id,
            ...doc.data()
        }
        result.push(docItem)
    });
    return result;
}
