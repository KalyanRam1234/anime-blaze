import Navbar from "@/Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
    doc,
    onSnapshot,
    updateDoc,
    setDoc,
    deleteDoc,
    collection,
    serverTimestamp,
    getDocs,
    query,
    where,
    orderBy,
    limit,
  } from 'firebase/firestore';
  import db from '../../../utils/firebase';
  import { auth } from "../../../utils/firebase";
  
const Page=()=>{

    const [episodes, setEpisodes]=useState([]);
    const colletionRef = collection(db, 'myList');
    const router=useRouter();
    const [userEmail, setEmail]=useState("");

    const getUser=()=>{
        auth.onAuthStateChanged((user)=>{
          if(user){
            setEmail(user?.email)
          }
        })
      }

      async function deleteItem(id) {
        try {
          const schoolRef = doc(colletionRef, id);
          await deleteDoc(schoolRef, schoolRef);
        } catch (error) {
          console.error(error);
        }
      }
          

    useEffect(()=>{
        getUser();
        const q = query(
            colletionRef,
            where('email', '==', userEmail) // does not need index
            
          );
          // const unsub = onSnapshot(collectionRef, (querySnapshot) => {
          const unsub = onSnapshot(q, (querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
              items.push(doc.data());
            });
            setEpisodes(items);
          });
          return () => {
            unsub();
          };
      
    },[auth, userEmail])

    return (
        <div>
            <Navbar/>
            <div className="bg-[#3c3b3b] w-full min-h-screen pt-20 pb-4">
                <div className="text-white text-5xl md:mx-12 mx-4 font-bold border-b-2 border-green-150 pb-4">
                    MyList
                </div>

                <div className="mt-8">
                <div className= "w-full pb-4 ">
                    <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 px-4 md:px-12">
                        {episodes.map((e)=>(
                            <div className="transition ease-in-out  hover:-translate-y-1 hover:scale-105  duration-300" key={e.id}>
                            <a href="#" onClick={(p)=>{
                                p.preventDefault();
                                router.push(`/details/${e.animeId}`)
                            }}>
                            <img
                                className="object-cover h-[60vw] xs:h-[45vw] md:h-[30vw] lg:h-[24vw] xl:h-[22vw] 2xl:h-[20vw] w-full"
                                src={e?.image}
                                alt={e?.title}
                            />
                            </a>
                            <div className="pt-3 pb-2">
                                <h5 className="mb-1 text-lg xl:text-xl font-semibold text-green-150  truncate">
                                {e?.title}
                                </h5>
                                <div>
                                    <button className="w-full  mx-auto bg-green-150 rounded-lg py-2 px-4 text-white text-[16px] mt-3 font-semibold " onClick={(p)=>{
                                        p.preventDefault();
                                        deleteItem(e.id);
                                    }}>
                                        Remove 
                                    </button>
                                </div>   
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Page;

