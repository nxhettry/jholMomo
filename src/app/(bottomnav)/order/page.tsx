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

export type OrderItemType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const menuItems = [
  { id: 1, name: "Margherita Pizza", price: 12.99 },
  { id: 2, name: "Chicken Alfredo Pasta", price: 14.99 },
  { id: 3, name: "Caesar Salad", price: 8.99 },
  { id: 4, name: "Cheeseburger", price: 10.99 },
  { id: 5, name: "Fish & Chips", price: 13.99 },
  { id: 6, name: "Vegetable Stir Fry", price: 11.99 },
];

export default function OrderPage() {
  const [selectedItem, setSelectedItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [orderItems, setOrderItems] = useState<OrderItemType[] | []>([]);

  const handleAddItem = useCallback(() => {
    if (!selectedItem) return;

    const item = menuItems.find((item) => item.id.toString() === selectedItem);
    if (!item) return;

    const existingItemIndex = orderItems.findIndex(
      (orderItem) => orderItem.id === item.id
    );

    if (existingItemIndex >= 0) {
      const updatedItems = [...orderItems];
      updatedItems[existingItemIndex].quantity += quantity;
      setOrderItems(updatedItems);
    } else {
      setOrderItems([...orderItems, { ...item, quantity }]);
    }

    setSelectedItem("");
    setQuantity(1);
  }, [orderItems, quantity, selectedItem]);

  const handleDeleteItem = useCallback((id: number) => {
    setOrderItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const incrementQuantity = useCallback(
    () => setQuantity((prev) => prev + 1),
    []
  );
  const decrementQuantity = useCallback(
    () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1)),
    []
  );

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
            <h1 className="text-xl font-bold text-center">Add to Order</h1>
          </div>
        </header>
        <main className="flex-1 p-4">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Add Item</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label
                  htmlFor="item-select"
                  className="block text-sm font-medium mb-2"
                >
                  Select Item
                </label>
                <Select value={selectedItem} onValueChange={setSelectedItem}>
                  <SelectTrigger id="item-select" className="w-full">
                    <SelectValue placeholder="Choose a menu item" />
                  </SelectTrigger>
                  <SelectContent>
                    {menuItems.map((item) => (
                      <SelectItem key={item.id} value={item.id.toString()}>
                        {item.name} - ${item.price.toFixed(2)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium mb-2"
                >
                  Quantity
                </label>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decrementQuantity}
                    className="h-10 w-10 rounded-r-none"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="h-10 px-4 flex items-center justify-center border-y bg-white min-w-[3rem]">
                    {quantity}
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={incrementQuantity}
                    className="h-10 w-10 rounded-l-none"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                onClick={handleAddItem}
                disabled={!selectedItem}
              >
                <ShoppingBag className="mr-2 h-4 w-4" /> Add to Order
              </Button>
            </CardFooter>
          </Card>

          {orderItems.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Current Order</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="divide-y">
                  {orderItems.map((item, index) => (
                    <li key={index} className="py-3 flex justify-between">
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteItem(item.id)}
                        >
                          <Trash className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="font-bold">Total:</span>
                <span className="font-bold">
                  $
                  {orderItems
                    .reduce((sum, item) => sum + item.price * item.quantity, 0)
                    .toFixed(2)}
                </span>
              </CardFooter>
            </Card>
          )}
        </main>
        <footer className="  p-4 ">
          <Button className="w-full" disabled={orderItems.length === 0}>
            Save Order
          </Button>
        </footer>
      </div>
    </div>
  );
}
