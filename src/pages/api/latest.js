export default async function handler(req,res){
    try{
        const {page}= req.query;
        
        const response=await fetch(process.env.NEXT_PUBLIC_ANIME_API+`/recent-episodes?page=${page}`);
        const data=await response.json().then((e)=>{
            res.status(200).json(e);
        });
    }
    catch(error){
        res.status(500).json({message : error})
    }
}