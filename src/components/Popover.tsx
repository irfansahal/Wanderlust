"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { authClient } from "@/lib/auth.client"
import { redirect, useRouter } from "next/navigation"

 function PopoverCard({user} : 
    { user : { name : string ; email : string ; image : string | null | undefined;}}) {

    const router = useRouter()

  const shingOutHandler = async () => {
     await authClient.signOut();
     router.refresh() 
   
  }

  return (
    <Popover>
      <PopoverTrigger render={<button type="button" aria-label="Open user menu">
        <Avatar>
      <AvatarImage
        src={user?.image}
        alt="@shadcn"
        className="grayscale"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
      </button>} />
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2  gap-15 flex">
            <h4 className="leading-none font-medium">Name :- </h4>
            <p className="text-sm text-muted-foreground">
              {user.name}
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Email :-</Label>
              <Input
                id="width"
                defaultValue={user.email}
                className="col-span-2 h-8"
            
              />
            </div>
           
            <div className="grid grid-cols-3 items-center gap-4 justify-center">
            <Button variant="destructive" onClick={shingOutHandler}>
                Sing Out
            </Button>
            </div>
            {/* <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div> */}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverCard