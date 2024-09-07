"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { BookOpenCheck, ChevronsUpDownIcon, Hotel, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavMenu() {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <ChevronsUpDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-3 top-4" align="center">
        <DropdownMenuItem
          className="cursor-pointer flex items-center gap-2"
          onClick={() => router.push("/hotel/new")}
        >
          <Plus size={15} /> <span> Add Hotel </span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer flex items-center gap-2"
          onClick={() => router.push("/my-Hotels")}
        >
          <Hotel size={15} /> <span> My Hotels </span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer flex items-center gap-2"
          onClick={() => router.push("/my-Bookings")}
        >
          <BookOpenCheck size={15} /> <span> My Bookings </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
