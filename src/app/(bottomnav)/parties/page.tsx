"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

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
import { IoPersonCircleOutline } from "react-icons/io5";

const PARTIES = [
  {
    name: "Party 1",
    phone: "1234567890",
    lastUpdated: "2023-10-01",
    totalOrders: 5,
  },
  {
    name: "Party 2",
    phone: "1234567890",
    lastUpdated: "2023-10-01",
    totalOrders: 5,
  },
  {
    name: "Party 3",
    phone: "1234567890",
    lastUpdated: "2023-10-01",
    totalOrders: 5,
  },
];

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

                {/* // Search Bar */}
                <div className="border border-slate-200 rounded-lg p-2 px-3 flex justify-between items-center">
                  <IoSearch className="text-gray-500" />
                  <Input
                    type="text"
                    placeholder="Search Parties ..."
                    className="border-none font-normal text-xs text-gray-500 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none shadow-none"
                  />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {PARTIES.map((party, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-2 border-b border-slate-200"
                >
                  <div>
                    <div className="flex gap-2 items-center">
                      <IoPersonCircleOutline className="h-12 w-12" />
                      <div>
                        <h2 className="text-md font-normal">{party.name}</h2>
                        <p className="text-xs text-gray-500">
                          Phone: {party.phone}
                        </p>
                      </div>
                    </div>
                    <p className="pl-2 text-xs text-gray-500">
                      Last Order: {party.lastUpdated}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{party.totalOrders}</p>
                    <p className="text-xs text-gray-500">Total Orders</p>
                  </div>
                </div>
              ))}
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
