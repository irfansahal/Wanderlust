"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil, Save, Trash2 } from "lucide-react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Textarea } from "./ui/textarea"
import { Destination } from "@/app/destinations/[destinationId]/page"
import { useState } from "react"

const fieldStyle =
  "h-10 rounded-sm border-0 bg-slate-50 px-3 text-sm text-slate-700 shadow-none placeholder:text-slate-400 focus-visible:ring-1 focus-visible:ring-[#1f9bb8]";

const labelStyle = "text-[13px] font-medium text-slate-800";

const categories = [
  { label: "Beach", value: "beach" },
  { label: "Mountain", value: "mountain" },
  { label: "City", value: "city" },
  { label: "Adventure", value: "adventure" },
  { label: "Cultural", value: "cultural" },
];


export function DialogForm({destinationDetailsData} : {destinationDetailsData : Destination}) {
     
     const [ changed , setChanged ] = useState<Destination>({
        category : destinationDetailsData.category,
     country : destinationDetailsData.country,
    date : destinationDetailsData.date,
    description : destinationDetailsData.description, 
    duration : destinationDetailsData.duration,
    image : destinationDetailsData.image,
    name : destinationDetailsData.name,
    price : destinationDetailsData.price,
   _id : destinationDetailsData._id
     })

     const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()   
      
      const formData = new FormData(e.currentTarget)
      const updatedData = Object.fromEntries(formData.entries())

      console.log(updatedData);
      
      const res = await fetch (`http://localhost:8000/update-destination/${destinationDetailsData._id}`,{
        method : "PATCH",
        headers : {
            "Content-Type": "application/json",
        },
        body : JSON.stringify(updatedData)
      }
      )
      const updateData = await res.json()
      console.log(updateData);
       
      
     }


  return (
     <div className="">
    <Dialog >
        
        <DialogTrigger render={ <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-4 py-2 text-[12px] font-medium text-[#0b1b24] transition-colors hover:bg-slate-50"
          >
            <Pencil className="h-3.5 w-3.5" />
            Edit   
          </button> } />
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          {/* <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Save changes</Button>
          </DialogFooter> */}
            <form onSubmit={handleSubmit} >
          <FieldGroup className="gap-5">
            {/* Destination name */}
            <Field>
              <FieldLabel htmlFor="name" className={labelStyle}>
                Destination Name
              </FieldLabel>
              <Input
                id="name"
                name="name"
                // defaultValue="Bali Paradise"
                value={changed.name}
                onChange={(event : React.ChangeEvent<HTMLInputElement>)=> setChanged({...changed, name : event.target.value})}
                className={fieldStyle}
                required
              />
            </Field>

            {/* Country + Category */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="country" className={labelStyle}>
                  Country
                </FieldLabel>
                <Input
                  id="country"
                  name="country"
                //   defaultValue="Indonesia"
                 value={changed.country}
                onChange={(event : React.ChangeEvent<HTMLInputElement>)=>setChanged({...changed, country : event.target.value }) }
                  className={fieldStyle}
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="category" className={labelStyle}>
                  Category
                </FieldLabel>
                <Select items={categories} name="category"
                //  defaultValue="beach"
                 value={changed.category}
                 onValueChange={(value )=> setChanged({...changed, category : value ?  value : ""})}
                >
                  <SelectTrigger
                    id="category"
                    className={`${fieldStyle} w-full`}
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {categories.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            </div>

            {/* Price + Duration */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="price" className={labelStyle}>
                  Price (USD)
                </FieldLabel>
                <Input
                  id="price"
                  name="price"
                  type="number"
                   placeholder="e.g., 1299"
                  value={changed.price}
                  onChange={(event)=>setChanged({...changed, price : event.target.value})}
                   className={fieldStyle}
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="duration" className={labelStyle}>
                  Duration
                </FieldLabel>
                <Input
                  id="duration"
                  name="duration"
                  placeholder="e.g., 7 Days/6 Nights"
                   value={changed.duration}
                    onChange={(event)=>setChanged({...changed, duration : event.target.value})}
                  className={fieldStyle}
                  required
                />
              </Field>
            </div>

            {/* Departure date */}
            <Field>
              <FieldLabel htmlFor="date" className={labelStyle}>
                Departure Date
              </FieldLabel>
              <Input
                id="date"
                name="date"
                type="date"
                className={fieldStyle}
                value={changed.date}
                onChange={(event)=>setChanged({...changed, date : event.target.value})}
                required
              />
            </Field>

            {/* Image URL */}
            <Field>
              <FieldLabel htmlFor="image" className={labelStyle}>
                Image URL
              </FieldLabel>
              <Input
                id="image"
                name="image"
                type="url"
                placeholder="https://example.com/image.jpg"
                value={changed.image}
                 onChange={(event)=>setChanged({...changed, image : event.target.value})}
                className={fieldStyle}
              />
            </Field>

            {/* Description */}
            <Field>
              <FieldLabel htmlFor="description" className={labelStyle}>
                Description
              </FieldLabel>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe the travel experience..."
                value={changed.description}
                 onChange={(event)=>setChanged({...changed, description : event.target.value})}
                className="min-h-[100px] resize-none rounded-sm border-0 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 shadow-none placeholder:text-slate-400 focus-visible:ring-1 focus-visible:ring-[#1f9bb8]"
              />
            </Field>

            {/* Buttons */}
            <div className="mt-2 flex items-center justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                className="h-10 gap-2 rounded-sm border-red-300 bg-white px-5 text-xs font-normal text-red-500 hover:bg-red-50 hover:text-red-600"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Cancel
              </Button>
              <Button
                type="submit"
                className="h-10 gap-2 rounded-sm bg-[#1f9bb8] px-6 text-xs font-normal text-white hover:bg-[#1a869f]"
              >
                <Save className="h-3.5 w-3.5" />
                Add Travel Package
              </Button>
            </div>
          </FieldGroup>
        </form>
        </DialogContent>
     
    </Dialog>
     </div>
  )
}
