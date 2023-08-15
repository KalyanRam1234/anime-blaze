'use client';

import { Modal } from 'flowbite-react';
import { useRouter } from 'next/router';
import { useState,useRef } from 'react';

export const Search=()=> {
  
  const [openModal, setOpenModal] = useState(); // State variable to show/hide the lend to student roll number modal
  const inputRef = useRef("") // Inputted roll number
  const [results, setResults]=useState([]);
  const router=useRouter();
  const handleCode=(e)=>{
    inputRef.current=e.target.value;

    const getResults=async()=>{
        try{
            let res=await fetch(process.env.NEXT_PUBLIC_ANIME_API+`/${e.target.value}`);
            let val=await res.json();
            setResults(val?.results)
        }
        catch(error){
            console.log(error);
        }
        
    }

    getResults();
  }
  
  return (
    <>
      {/* Button to display the modal to enter a book code to lend the book to a student */}
    
      <a href="#" className="block py-2 pl-3 pr-4 text-white hover:text-green-150 md:hover:bg-transparent rounded md:bg-transparent md:p-0 " aria-current="page" onClick={() =>{
        if(openModal=='default') setOpenModal(undefined)
        else setOpenModal('default')
      } }>Search</a>

       {/* Modal once displayed */}
      <Modal show={openModal === 'default'} onClose={() => setOpenModal(undefined)} size="6xl" className='items-start pt-16' >
          <div className="flex items-start justify-between rounded-t  px-5 pt-2 bg-[#242428]">
                
                <div>
                    <button aria-label="Close" className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5  text-white " type="button" onClick={() => setOpenModal(undefined)}>

                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>

              </div>
          </div>

          <div className='bg-[#242428] pb-4'>
              <div className=" text-white">
                      
                  <div className=" w-4/5 mx-auto">
                      <div className="text-2xl text-green-150 font-semibold">Search Anime</div>
                      <input type="text" className="border-0 border-b-2  border-green-150 text-lg  focus:ring-0 focus:outline-none focus:border-green-150 px-0 bg-transparent w-full mt-2" placeholder="Enter Anime Name" ref={inputRef} onChange={handleCode} />

                  </div>

              </div>
          </div>

          {results?.length>4 ? <div className='bg-[#242428] h-[300px] overflow-y-auto '>
            {results?.map((res)=>(
                <div className='flex flex-row w-4/5 py-1 hover:px-2 hover:cursor-pointer hover:rounded mx-auto hover:bg-[#3c3b3b] mb-2' onClick={(e)=>{
                    e.preventDefault();
                    router.push(`/details/${res.id}`)
                }}>
                <div>
                    <img src={res.image} className='w-12 object-cover '></img>
                </div>
                <div className='text-white ml-2 py-1 truncate '>
                    <div className='text-lg md:text-xl font-semibold text-green-150 '>
                        {res.title}
                    </div>
                    <div>
                        <span className='mr-2 md:text-md font-semibold'>Release Date : </span>
                        <span>{res.releaseDate}</span>
                    </div>
                </div>
            </div>
            ))}
            
        </div> 
        
        : 

        <div className='bg-[#242428] '>
            {results?.map((res)=>(
                <div className='flex flex-row w-4/5 py-1 hover:px-2 hover:cursor-pointer hover:rounded mx-auto hover:bg-[#3c3b3b] mb-2' onClick={(e)=>{
                    e.preventDefault();
                    router.push(`/details/${res.id}`)
                }}>
                <div>
                    <img src={res.image} className='w-12 object-contain'></img>
                </div>
                <div className='text-white ml-2 py-1 truncate'>
                    <div className='text-lg md:text-xl font-semibold text-green-150 '>
                        {res.title}
                    </div>
                    <div>
                        <span className='mr-2  md:text-md font-semibold'>Release Date : </span>
                        <span>{res.releaseDate}</span>
                    </div>
                </div>
            </div>
            ))}
            
        </div>
        }
          
        <div className='bg-[#242428] h-4'>

        </div>
      </Modal>
    </>
  )
}

