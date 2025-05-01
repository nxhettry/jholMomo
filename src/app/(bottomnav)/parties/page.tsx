"use client";

import { useCallback, useState } from "react";
import { Plus, Minus, ShoppingBag, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { IoSearch } from "react-icons/io5";
import { Input } from "@/components/ui/input";

const Parties = () => {
  return (
    <div className="flex items-start justify-center h-full w-full overflow-x-hidden ">
      <div className="flex flex-col h-full w-[400px] max-w-[450px] bg-gray-100 scrollbar-hidden overflow-y-scroll">
        <header className="sticky top-0 z-10 bg-white border-b p-4 shadow-sm">
          <div className="relative flex items-center justify-center">
            <button
              className="absolute left-0"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold text-center">Party Records</h1>
          </div>
        </header>
        <main className="flex-1 p-4">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">
                <Button className="w-full h-12">Add New Party</Button>
                <p className="text-gray-500 font-normal text-center"> or</p>
                <div className="border border-slate-200 rounded-lg p-2 px-3 flex justify-between items-center">
                  <IoSearch className="text-gray-500" />
                  <Input
                    type="text"
                    placeholder="Search Parties ..."
                    className="border-none font-normal text-sm text-gray-500 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none shadow-none"
                  />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label
                  htmlFor="item-select"
                  className="block text-sm font-medium mb-2"
                >
                  Select Item
                </label>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <ShoppingBag className="mr-2 h-4 w-4" /> Add to Order
              </Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Parties;
