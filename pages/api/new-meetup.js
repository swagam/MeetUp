import { MongoClient } from "mongodb";

const handler= async (req,res)=>{
    if(req.method == 'POST'){
        console.log("Received");
    
        const body = req.body;
        const client = await MongoClient.connect('mongodb+srv://Vera2021:Vera2021*@cluster0.vkouq.mongodb.net/MeetUp?retryWrites=true&w=majority');
        const db = client.db();
        const meetUpCollections = db.collection("MeetUp");
        const result = await meetUpCollections.insertOne(body);
        client.close();
    }
    if(req.method == 'GET'){
        const client = await MongoClient.connect('mongodb+srv://Vera2021:Vera2021*@cluster0.vkouq.mongodb.net/MeetUp?retryWrites=true&w=majority');       
        const db = client.db();
        const meetupsCollection = db.collection('MeetUp');
        const meetupsData = await meetupsCollection.find().toArray();
        client.close();
        res.status(201).json({meetups:meetupsData.map(meetup=>({ title: meetup.title,
            address: meetup.address,
            image: meetup.image,
            id: meetup._id.toString(),}),)
            });
    }
}
export default handler;