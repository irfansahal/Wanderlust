"use client"
import { Destination } from '@/app/destinations/[destinationId]/page';
import { Trash2 } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react';

const DeleteingButton =  ({destinationDetailsData } : { destinationDetailsData : Destination}) => {

     const deleteingHandler = async () => {
        const res = await fetch(`http://localhost:8000/delete-destination/${destinationDetailsData._id}`, {
            method : 'DELETE'
        })
     const deletedData = await res.json()
     
     console.log(deletedData);
      if(deletedData){
           redirect('/destinations')
      }
     }
     
    return (
        <div>
            <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-md border border-red-200 bg-white px-4 py-2 text-[12px] font-medium text-red-500 transition-colors hover:bg-red-50"
            onClick={deleteingHandler}
          >
            <Trash2 className="h-3.5 w-3.5" />
            Delete
          </button>
        </div>
    );
};

export default DeleteingButton;