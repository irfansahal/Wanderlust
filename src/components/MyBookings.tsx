import { auth } from "@/lib/auth";
import { Calendar, CheckCircle2, Clock, Eye, Hash, Trash2 } from "lucide-react";
import { headers } from "next/headers";
import CancelMyBooking from "./cancelMyBooking";

interface MyBookings {
            _id: string,
            username: string,
            name: string,
            email: string,
            emailVerified: boolean,
            image: string,
            createdAt: string,
            updatedAt: string,
            country: string,
            category: string,
            price: string,
            duration: string,
            date: string,
            description: string      
}


function BookingsHeader() {
  return (
    <div className="mb-8 w-7xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        My Bookings
      </h1>
      <p className="mt-2 text-sm text-gray-500">
        Manage and view your upcoming travel plans
      </p>
    </div>
  );
}

function BookingCard({
  booking,
  status = "confirmed",
}: {
  booking: MyBookings;
  status?: "confirmed" | "pending";
}) {
  const isPending = status === "pending";

   const createdDate = new Date(booking.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

  return (
    <div className="flex items-stretch gap-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="h-44 w-56 shrink-0 overflow-hidden rounded-xl">
        {/* eslint-disable-next-line @next/next/no-img-element -- static design mock */}
        <img
          src={booking.image}
          alt="Booking destination"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <span
          className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
            isPending
              ? "bg-amber-100 text-amber-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {isPending ? (
            <Clock className="h-3.5 w-3.5" />
          ) : (
            <CheckCircle2 className="h-3.5 w-3.5" />
          )}
          {isPending ? "Pending" : "Confirmed"}
        </span>

        <h2 className="mt-2 text-xl font-bold text-gray-900">{booking.name}</h2>

        <div className="mt-2 space-y-1.5 text-sm text-gray-600">
          <p className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gray-400" />
            Departure: {createdDate}
          </p>
          <p className="flex items-center gap-2">
            <Hash className="h-4 w-4 text-gray-400" />
            Booking ID: {booking._id}
          </p>
        </div>

        <p className="mt-2 text-2xl font-bold text-cyan-600">${booking.price}</p>

        <div className="mt-auto flex items-center justify-end gap-3 pt-4">
          <CancelMyBooking bookingId={booking._id}/>

        
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-md bg-cyan-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-cyan-700"
          >
            <Eye className="h-4 w-4" />
            View
          </button>
        
        </div>
      </div>
    </div>
  );
}

export default async function MyBookings() {

    const session = await auth.api.getSession({
      headers : await headers()
    })

    const currentUser = session?.user

    const res = await fetch(`http://localhost:8000/find-booking/${currentUser?.email}`)
    const myBookingData = await res.json();
    console.log("currentUser",myBookingData);
    
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <BookingsHeader />

      <div className="space-y-6">
       {myBookingData.currentUserBookings.map((booking : MyBookings, index: number)=>{
        return (
           <BookingCard key={index} booking={booking} />
        )
       })}
        {/* <BookingCard image="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80" />
        <BookingCard
          image="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80"
          status="pending"
        /> */}
      </div>
    </div>
  );
}
