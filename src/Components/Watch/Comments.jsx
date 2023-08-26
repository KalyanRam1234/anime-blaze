// import { Rating } from 'flowbite-react';
import {
    doc,
    setDoc, 
    collection,
    onSnapshot,
    serverTimestamp,
    query,
    where,
    orderBy,
  } from 'firebase/firestore';

import db from '../../../utils/firebase';
import { auth } from "../../../utils/firebase";
import { v4 as uuidv4 } from 'uuid'; 
import { useState , useEffect} from 'react';
export const Comments=({animeId})=>{

    const collectionRef=collection(db,'comment');
    const [userName, setName] = useState();
    const [photo, setPhoto]=useState();
    const [title, setTitle]=useState("");
    const [comment, setComment]=useState("");
    const [comments, setComments]=useState([]);

    const getUser=()=>{
        auth.onAuthStateChanged((user)=>{
          if(user){
            setName(user?.displayName)
            setPhoto(user?.photoURL)
          }
        })
      }

    useEffect(()=>{
        getUser();
        const q = query(
            collectionRef,
            where('animeId', '==', animeId)// does not need index
            
          );
          // const unsub = onSnapshot(collectionRef, (querySnapshot) => {
          const unsub = onSnapshot(q, (querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => { 
              items.push(doc.data());
            });
            setComments(items);
          });
          
          return () => {

            unsub();
          };

    },[auth, comments])


    const addComment=async()=>{

        const newItem= {
            "name": userName,
            "photo": photo,
            "animeId": animeId,
            "id": uuidv4(),
            "details": comment,
            "title": title,
            "createdAt": serverTimestamp()
        }
        if(userName!=null && animeId!=null && animeId!=undefined){

            try{
                const itemRef=doc(collectionRef,newItem.id);
                await setDoc(itemRef, newItem);
            }
            catch(error){
                console.log(error);
            }
        }
    }

    return (
        <div className="border-t-2 border-green-150 pt-4 bg-[#3c3b3b] px-12 pb-6">
            <div className="text-4xl text-green-150 font-semibold">
                Comments
            </div>
            <div className="my-4">
                <div className="text-xl text-white font-semibold flex flex-row">
                    <div className="pr-2">
                        {`${comments.length} Reviews`} 
                    </div>
                    {/* <div className="pl-2"> 
                        4.8
                    </div> */}
                </div>
            </div>
            {/* Add comment */}
            <div className="w-full bg-[#242428] rounded py-4 px-12 mt-4">
                <div className="font-semibold text-2xl text-[#FFDD95] ">
                    Add Comment
                </div>

                <div className="mt-6">
                    <input type="text" className="w-full bg-transparent border-2 text-lg text-white placeholder:text-white placeholder:pl-3 py-1 rounded" placeholder="Add a Title" value={title} onChange={(e)=>{
                        setTitle(e.target.value);
                    }}></input>
                </div>

                <div className="mt-6">
                <textarea name="comment" rows="4" className="w-full bg-transparent border-2 rounded px-2 pt-1 placeholder:text-lg text-white" placeholder="Add your comment here " value={comment} onChange={(e)=>{
                    setComment(e.target.value);
                }}/>
                    
                </div>

                <div className="mt-4 text-lg flex flex-row w-full">
                    <div className="ml-auto">
                        <button className=" bg-[#FFDD95] py-2 px-6  font-semibold" onClick={(e)=>{
                            e.preventDefault();
                            setTitle("");
                            setComment("");
                        }}>
                            CANCEL
                        </button>
                        <button className="ml-4 bg-green-150 py-2 px-8 text-white font-semibold" onClick={(e)=>{
                            e.preventDefault();
                            addComment();
                        }}>
                            POST
                        </button>
                    </div>
                </div>
            </div>

            {/* get comments */}

            {comments.map((item)=>(
                <div className='mt-8'>
                <div className='flex flex-row'>
                    <div className='w-12 h-12'>
                        <img src={item?.photo} className='rounded-3xl'></img>
                    </div>
                    
                    <div className='ml-4 text-xl font-semibold text-[#FFDD95] mt-2 capitalize'>
                        {item?.name}
                    </div>

                    <div className='border-l-2 pl-4 mt-2 ml-4 text-white font-semibold text-xl h-8'>
                    {item.title}
                </div>
                </div>

                <div className='mx-16 text-lg text-white'>
                    {item.details}
                </div>
            </div>
            ))}
            
        </div>
    )
}