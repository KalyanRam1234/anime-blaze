import { useRouter } from "next/router";
import { useState, useEffect} from "react";
import {
    doc,
    setDoc, 
    collection,
    serverTimestamp,
  } from 'firebase/firestore';
  import db from '../../../utils/firebase';
import { auth } from "../../../utils/firebase";

function AnimeDetails({details}){

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

    const router=useRouter();
    const email=userEmail? userEmail : "unknown";

    useEffect(()=>{
        getUser();
    },[auth])

    const addItem=async()=>{
        const newItem= {
            "image": details.image,
            "title": details.title,
            "animeId": details.id,
            "id": details.id +"_"+ email,
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
        <div className="w-full bg-[#3c3b3b] ">
            <div className="grid grid-cols-12 px-4 md:px-8 pt-24 md:pt-28 xl:pt-0 xl:gap-2">

                <div className="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3">
                    <div className="w-full xl:h-screen xl:flex xl:flex-col xl:justify-center xl:items-center px-4 xl:px-0">
                        <img src={details.image} alt={details.title} className="object-cover h-[350px] md:h-[400px] mx-auto md:mx-0"/>
                        
                    </div>
                </div>

                <div className="col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-6 text-white mt-6 md:mt-0">
                    <div className="md:h-[400px] xl:h-screen flex flex-col justify-center">
                        <div className="text-4xl md:text-5xl font-bold">
                            {details.title}
                        </div>
                        <div className="mt-6 flex flex-row">
                            <button className="md:text-lg text-white bg-green-150 border-none outline-none rounded-3xl px-4 py-2 " onClick={(e)=>{
                                e.preventDefault();
                                var p=details.episodes[0].id.split("-episode")[0]
                                if(details.id=="gogoanimehd.io") router.push(`/watch/${p}`)
                                else  router.push(`/watch/${details.id}`)
                            }}>
                            Watch Now
                            </button> 

                            <button className="md:text-lg text-black bg-[#FFDD95] border-none outline-none rounded-3xl px-4 py-2 ml-4" onClick={(e)=>{
                                e.preventDefault();
                                addItem();
                            }}>
                            Add To List
                            </button> 
                        </div>
                        <div className="mt-6 text-ellipsis overflow-hidden">
                            {details.description }
                        </div>
                    </div>
                </div>

                <div className="col-span-12 xl:col-span-3 xl:my-0 my-6 xl:border-t-0 border-t-2 border-green-150">
                    <div className="xl:h-screen flex flex-col justify-center text-white md:px-4 mt-4 xl:pt-0">

                        <div className=" my-1">
                            <div>
                                <span className="mr-2 font-semibold text-lg ">Other Names :</span>
                                <span>{details.otherName}</span>
                            </div>
                        </div>

                        <div className="flex flex-row  my-1">
                            <div className="font-semibold mr-2 text-lg">Type :  </div>
                            <div>{details.type}</div>
                        </div>

                        <div className="flex flex-row  my-1">
                            <div className="font-semibold mr-2 text-lg">Release Date :  </div>
                            <div>{details.releaseDate}</div>
                        </div>

                        <div className=" my-1">
                            <div>
                                <span className="mr-2 font-semibold text-lg">Status :</span>
                                <span>{details.status}</span>
                            </div>
                        </div>

                        <div className=" my-1">
                            <div>
                                <span className="mr-2 font-semibold text-lg">Episodes :</span>
                                <span>{details.totalEpisodes}</span>
                            </div>
                        </div>

                        <div className=" my-1">
                            <div>
                                <span className="mr-2 font-semibold text-lg">Genres :</span>
                                <span>{details?.genres?.map((e)=>(
                                    <button className="border-[1px] px-5 rounded-3xl mr-2 mb-2  hover:bg-green-150 hover:border-none pb-[2px]">{e}</button>
                                ))}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimeDetails;