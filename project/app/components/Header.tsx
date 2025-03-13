"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-bold text-xl text-blue-600">TaxiCareer</div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2">
            <Phone className="w-5 h-5 text-blue-600" />
            <span className="font-semibold">0120-XXX-XXX</span>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            無料相談を予約する
          </Button>
        </div>
      </div>
    </header>
  );
}