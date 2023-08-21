import { useEffect, useState } from "react"
import {
    doc,
    setDoc, 
    collection,
    serverTimestamp,
  } from 'firebase/firestore';
  import db from '../../../utils/firebase';
import { auth } from "../../../utils/firebase";

export const AnimeWatch=({info, id})=>{
    const [currentEpisode, setCurrent]=useState(id? id: 1);
    const [url, setURL]=useState("");
    const [loading, setLoading]=useState(false);

    const EpisodeButtons=Array.from({length : info?.totalEpisodes}, (_,index)=>{
        return <div >
            {currentEpisode==index+1 ? <div className="py-2 px-4 w-16 text-center hover:cursor-pointer mr-2 text-white rounded-md md:text-lg mb-2 hover:bg-green-150 bg-green-150" onClick={()=>{
                setCurrent(index+1);
            }}>
                {index+1}
            </div> : <div className="py-2 px-4 w-16 text-center bg-[#060606] hover:cursor-pointer mr-2 text-white rounded-md md:text-lg mb-2 hover:bg-green-150" onClick={()=>{
                setCurrent(index+1);
            }}>
                {index+1}
            </div>}
            
        </div>
         
    })

    useEffect(()=>{
        const setWatch=async()=>{
            setLoading(true);
            const res=await fetch(window.location.origin+`/api/watch?id=${info?.episodes[currentEpisode-1]?.id}`)

            const data=await res.json().then((e)=>{
                setLoading(false);
                setURL(e?.headers?.Referer)
            })
            
        }
        setWatch();
    },[currentEpisode,setCurrent])

    const collectionRef=collection(db,'myList');
    const [userEmail, setEmail]=useState();
    const [userName, setName]=useState();

    const getUser=()=>{
        auth.onAuthStateChanged((user)=>{
          if(user){
            setName(user?.displayName)
            setEmail(user?.email)
          }
        })
      }

    const email=userEmail? userEmail : "unknown";

    useEffect(()=>{
        getUser();
    },[auth])

    const addItem=async()=>{
        const newItem= {
            "image": info.image,
            "title": info.title,
            "animeId": info.id,
            "id": info.id +"_"+ email,
            "email": email,
            "name": userName ? userName : "unknown",
            "createdAt": serverTimestamp()
        }

        try{
            const itemRef=doc(collectionRef,newItem.id);
            await setDoc(itemRef, newItem);
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <div className="w-full bg-[#3c3b3b] pb-8">
            <div className="grid grid-cols-12 px-4 md:px-12 pt-20 min-h-screen gap-4">
                {loading? 
                <div className="bg-[#3c3b3b] min-h-[400px] text-white text-xl flex w-full justify-center items-center col-span-12">
                <div
                className="inline-block h-16 w-16 animate-spin rounded-full border-8 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-green-150"
                role="status">
              </div>
            </div>
                :
                <div className="col-span-12 border-b-2 border-green-150 pb-8">
                <iframe src={url} allowFullScreen="true" className="checkh mx-auto w-full"></iframe>
            </div>
                }
               
                <div className="col-span-12 mt-4">
                    <div className="text-4xl text-green-150 font-semibold">
                        {info?.title}
                    </div>
                    <div className="mt-6 text-lg text-white">
                        {info?.description}
                    </div>

                    <div className="mt-4 text-lg text-white flex flex-row">
                        <div className="font-semibold mr-2">
                            Release Date : 
                        </div>
                        <div>
                            {info.releaseDate}
                        </div>
                    </div>

                    <div className="mt-2 text-white text-lg">
                        <span className="mr-2 font-semibold text-lg">Status :</span>
                        <span>{info?.status}</span>
                    </div>

                    <div className=" mt-2 text-white">
                        <div>
                            <span className="mr-2 font-semibold text-lg">Genres :</span>
                            <span>{info?.genres?.map((e)=>(
                                <button className="border-[1px] px-5 rounded-3xl mr-2 mb-2  hover:bg-green-150 hover:border-none pb-[2px]">{e}</button>
                            ))}</span>
                        </div>
                    </div>

                    <button className=" text-black bg-[#FFDD95] border-none outline-none rounded-3xl px-4 py-2 mt-2" onClick={(e)=>{
                        e.preventDefault();
                        addItem();
                    }}>
                    Add To List
                    </button>
                    
                </div>

                <div className="col-span-12 mt-4">
                    <div className="text-4xl font-semibold text-[#FFDD95]">
                        Episodes
                    </div>

                    <div className="mt-6 text-white text-lg">
                        <span className="mr-2 font-semibold text-xl">Total Episodes :</span>
                        <span>{info?.totalEpisodes}</span>
                    </div>

                    <div className="mt-2 text-white text-lg">
                        <span className="mr-2 font-semibold text-xl">Current Episode :</span>
                        <span>{currentEpisode}</span>
                    </div>

                    {info?.totalEpisodes>=100 ? 

                    <div className="mt-6 flex flex-row flex-wrap overflow-x-hidden overflow-y-auto h-[300px] ">
                        {EpisodeButtons}
                    </div> 

                    : <div className="mt-6 flex flex-row flex-wrap overflow-x-hidden overflow-y-auto ">
                        {EpisodeButtons}
                    </div>}
                    
                </div>

            </div>

            
        </div>
    )
}