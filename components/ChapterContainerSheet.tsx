
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { List } from "lucide-react"
import ChapterContainer from "./ChapterContainer"
import { useState } from "react"

export function ChapterContainerSheet({id}:{id:string}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="mr-2 bg-muted rounded-full"><List/></Button>
      </SheetTrigger>
      <SheetContent className="p-2">
        <SheetHeader>
          <SheetTitle>All Chapters</SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when youre done.
          </SheetDescription> */}
        </SheetHeader>
       <ChapterContainer id={id} isSheet={true} />
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  )
}
