import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import Link from 'next/link'
import { useState } from 'react'
import { Input } from "@/components/ui/input"
export function DialogComponent() {
  return (
    
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" disabled={0 === 0}>Checkout</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Checkout</DialogTitle>
          <DialogDescription>
            Please insert your phone number to confirm checkout.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="name"
              className="col-span-3"
              placeholder="Phone Number"
              type="number"
              onChange={()=>{}}
            />
          </div>
        </div>
        <DialogFooter>
        <DialogTrigger asChild>
          <Button type="submit" disabled={'phone'.length < 8} onClick={()=>{}}><Link href="/Success">Confirm </Link> </Button>
        </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
