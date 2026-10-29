"use client"
import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

import React from 'react';

const CancelMyBooking =  ({bookingId}:{bookingId : string}) => {
 
    const router = useRouter()

    console.log("front end",bookingId);
    
    const deleteHandler = async () => {
        const res = await fetch(`http://localhost:8000/deleting/${bookingId}`, {
            method : "DELETE",
        })
        const deletedData = await res.json();
        console.log(deletedData);
        
        if(deletedData){
            router.refresh()
        }
    }

    return (
        <div>
            <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-md border border-red-300 bg-white px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
           onClick={deleteHandler}
          >
            <Trash2 className="h-4 w-4" />
            Cancel
          </button>
        </div>
    );
};

export default CancelMyBooking;