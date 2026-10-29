"use client"

import { Destination } from '@/app/destinations/[destinationId]/page';
import { authClient } from '@/lib/auth.client';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const BookNow = ({destinationDetailsData} : {destinationDetailsData : Destination}) => {
   
      const { data :session , error } = authClient.useSession()
      const user = session?.user
      console.log("session", user);
      
      const bookingHandler = async () => {
          if(!user){
             alert("You Dont Have Access To Book, You First LogIn")
          }else{
              const res = await fetch(`http://localhost:8000/booking/${user?.email}`, {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(destinationDetailsData)
              });
              const bookingData = res.json();
              console.log(bookingData);
              
          }
      }

    return (
        <div>
             <button
          type="button"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#1f9bb8] px-6 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-[#1a869f]"
          onClick={bookingHandler}
         >
          Book Now
          <ArrowRight className="h-4 w-4" />
        </button>
        </div>
    );
};

export default BookNow;