"use client"
import React from "react";
import { Trash2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { authClient } from "@/lib/auth.client";
import GetTokenFromClient from "@/lib/getTokenFromClient";

const categories = [
  { label: "Beach", value: "beach" },
  { label: "Mountain", value: "mountain" },
  { label: "City", value: "city" },
  { label: "Adventure", value: "adventure" },
  { label: "Cultural", value: "cultural" },
];

const fieldStyle =
  "h-10 rounded-sm border-0 bg-slate-50 px-3 text-sm text-slate-700 shadow-none placeholder:text-slate-400 focus-visible:ring-1 focus-visible:ring-[#1f9bb8]";

const labelStyle = "text-[13px] font-medium text-slate-800";


const AddingForm = () => {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     const data = Object.fromEntries(new FormData(e.currentTarget));
     console.log(data); // replace with your API call
     
     const token = await GetTokenFromClient()

     console.log(`Bearer ${token}`);
     

     const res = await fetch(`http://localhost:8000/destination-Create`, {
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
            authorization : `Bearer ${token}`
        },
        body : JSON.stringify(data)
     })
     const postDsys = res.json();
     console.log('postDsys',postDsys);
     
  };


    return (
        <div>
             <div className="mx-auto w-full max-w-xl rounded-md border border-slate-100 bg-white p-6 shadow-sm">
        <form onSubmit={handleSubmit}>
          <FieldGroup className="gap-5">
            {/* Destination name */}
            <Field>
              <FieldLabel htmlFor="name" className={labelStyle}>
                Destination Name
              </FieldLabel>
              <Input
                id="name"
                name="name"
                defaultValue="Bali Paradise"
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
                  defaultValue="Indonesia"
                  className={fieldStyle}
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="category" className={labelStyle}>
                  Category
                </FieldLabel>
                <Select items={categories} name="category" defaultValue="beach">
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
      </div>
        </div>
    );
};

export default AddingForm