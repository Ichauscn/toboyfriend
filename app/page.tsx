"use client"; // Add this line at the very top
import React, { useState, useEffect } from "react";
import {
  Leaf,
  Moon,
  Heart,
  Book,
  User,
  Trees,
  Cloud,
  Feather,
  Music,
  Coffee,
  MessageCircle,
  Camera,
  Calendar,
  Star,
  MapPin,
} from "lucide-react";

import ForestProfile from "./components/ForestProfile";
import InnerDialogue from "./components/InnerDialogue";

export default function Page() {
  const [showInnerDialogue, setShowInnerDialogue] = useState(false);

  return (
    <div>
      {showInnerDialogue ? (
        <InnerDialogue onBack={() => setShowInnerDialogue(false)} />
      ) : (
        <ForestProfile onExplore={() => setShowInnerDialogue(true)} />
      )}
    </div>
  );
}
