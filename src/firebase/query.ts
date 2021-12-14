import { collection, getDocs, doc, setDoc, serverTimestamp, query ,orderBy,getDoc,deleteDoc,updateDoc } from "firebase/firestore";
import { blogData } from "../interfaces/blog.interfaces";
import { db } from "./firebase";

export interface Idata {
    title : string
    story : string
    createdAt? : any
    updateAt? : any
}


export const getCollectionFB = async (collectionId : string) => {
    const q = query(collection(db, collectionId),orderBy('createdAt' , 'desc'));
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


export const setDocumentFB = async (data : Idata) => {
    const newCityRef = doc(collection(db, "blog"));

    await setDoc(newCityRef, {
        ...data,
        createdAt : serverTimestamp(),
        updateAt : serverTimestamp()
    });
}

export const getDocumentFB = async (collectionId : string , documentId : string) => {
    const docRef = doc(db, collectionId, documentId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        console.log("No such document!");
    }
    return {
        id : documentId,
        ...docSnap.data(),
    }

}

export const deleteDocumentFB = async (collectionId : string , documentId : string) => {

    await deleteDoc(doc(db, collectionId, documentId));

}

export const updateDocumentFB = async (collectionId : string , documentId : string ,data : Idata) => {

    const washingtonRef = doc(db, collectionId, documentId);

    await updateDoc(washingtonRef, {
        ...data,
        updateAt : serverTimestamp()
    });
}
