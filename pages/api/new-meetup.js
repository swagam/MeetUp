import { MongoClient } from "mongodb";

const handler= async (req,res)=>{
    if(req.method == 'POST'){
        console.log("Received");
    
        const body = req.body;
        const client = await MongoClient.connect('mongodb+srv://Vera2021:Vera2021*@cluster0.vkouq.mongodb.net/MeetUp?retryWrites=true&w=majority');
        const db = client.db();
        const meetUpCollections = db.collection("MeetUp");
        const result = await meetUpCollections.insertOne(body);
        console.log(result);
        client.close();
    }
}
export default handler;