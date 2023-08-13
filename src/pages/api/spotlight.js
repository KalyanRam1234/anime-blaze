export default async function handler(req,res){
    try{
        const response=await fetch('https://api.consumet.org/anime/gogoanime/top-airing?page=1');
        const data=await response.json().then((e)=>{
            res.status(200).json(e);
        });
    }
    catch(error){
        res.status(500).json({message : error})
    }
}