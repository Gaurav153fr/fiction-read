"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BookA, Crown, Feather, Plus, User } from "lucide-react";
import SignButton from "./SignButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUserContext } from "@/hooks/user";

export function ProfileDropDown() {
  const user = useUserContext();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <User />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit">
        <DropdownMenuLabel>Profile</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignButton />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/store">Buy Coins</Link>
        </DropdownMenuItem>
        {user.user && user.user.admin && (
          <DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="flex gap-2 items-center text-lg justify-center">
              <Crown /> Admin
            </DropdownMenuLabel>

            <DropdownMenuItem>
              <Link href="/admin/series" className="flex gap-2 items-center">
                <Plus />
                New Series
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/admin/chapter" className="flex gap-2 items-center">
                <BookA />
                New Chapter
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Link href="/admin/home" className="flex gap-2 items-center">
                <Feather /> Edit Featured
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
