import DestinationDetailsContent from "@/components/DestinationDetailsContent";
import DestinationDetailsHeader from "@/components/DestinationDetailsHeader";
import { auth } from "@/lib/auth";
import GetTokenFromServer from "@/lib/getTokenFormServer";
import { headers } from "next/headers";

export interface Destination {
    category : string ;
     country : string ;
    date : string ;
    description : string; 
    duration : string;
    image : string;
    name : string ;
    price : string ;
   _id : string;
}

const DestinationDetails = async ({params }) => {

    const { destinationId } = await params
    console.log(destinationId);
    
   const JWTToken  = await  GetTokenFromServer()

    console.log("Token",JWTToken?.token);
    

    const res = await fetch(`http://localhost:8000/single-destination/${destinationId}`, {
      headers : {
        authorization : `Bearer ${JWTToken?.token}`
      }
    });
    const destinationDetailsData = await res.json()
   
    console.log(destinationDetailsData);
    
    return (
    <main className="flex-1 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6">
        <DestinationDetailsHeader destinationDetailsData={destinationDetailsData.findedData}/>
        <DestinationDetailsContent destinationDetailsData={destinationDetailsData.findedData}/>
      </div>
    </main>
  );
};

export default DestinationDetails;
