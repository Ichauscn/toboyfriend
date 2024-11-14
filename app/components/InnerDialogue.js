import React, { useState, useEffect } from "react";
import {
  Heart,
  Book,
  Home,
  Moon,
  Sun,
  Key,
  Lock,
  Tree,
  Star,
  Cloud,
  Birds,
  Compass,
  Wind,
  Mountain,
} from "lucide-react";

const InnerDialogue = () => {
  const [currentStage, setCurrentStage] = useState("start");
  const [responses, setResponses] = useState([]);
  const [fadeIn, setFadeIn] = useState(false);
  const [wallLight, setWallLight] = useState(0.3);
  const [showReflection, setShowReflection] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, [currentStage]);

  const scenes = {
    start: {
      background: "from-slate-900 via-gray-900 to-black",
      content: "在这个由思想构筑的房间里，你感受到了什么？",
      options: [
        {
          text: "我感到安全，这些墙保护着我",
          next: "comfort_zone",
          effect: () => setWallLight(0.4),
        },
        {
          text: "我感到窒息，想要打破这些界限",
          next: "seeking_freedom",
          effect: () => setWallLight(0.2),
        },
        {
          text: "我在黑暗中摸索，寻找属于自己的光",
          next: "finding_light",
          effect: () => setWallLight(0.5),
        },
      ],
    },
    comfort_zone: {
      background: "from-emerald-950 via-green-900 to-teal-950",
      content: "这些墙是用什么砌成的？",
      options: [
        {
          text: "过往的伤痛和自我保护",
          next: "wall_pain",
          effect: () => {
            setResponses((prev) => [
              ...prev,
              "伤痛筑起的高墙，是为了保护那颗脆弱的心",
            ]);
          },
        },
        {
          text: "习惯与安全感",
          next: "wall_habit",
          effect: () => {
            setResponses((prev) => [
              ...prev,
              "习惯像是一层温暖的茧，也是一道无形的墙",
            ]);
          },
        },
        {
          text: "对未知的恐惧",
          next: "wall_fear",
          effect: () => {
            setResponses((prev) => [
              ...prev,
              "恐惧编织的网，让我们困在自己的想象中",
            ]);
          },
        },
      ],
    },
    seeking_freedom: {
      background: "from-blue-950 via-indigo-900 to-purple-950",
      content: "面对这些限制，你想要如何突破？",
      options: [
        {
          text: "正视内心的恐惧",
          next: "face_fear",
          effect: () => setWallLight(0.6),
        },
        {
          text: "寻找新的可能",
          next: "new_possibilities",
          effect: () => setWallLight(0.7),
        },
        {
          text: "拥抱不确定性",
          next: "embrace_unknown",
          effect: () => setWallLight(0.8),
        },
      ],
    },
    finding_light: {
      background: "from-yellow-900 via-amber-800 to-orange-900",
      content: "在黑暗中，你发现了什么样的光？",
      options: [
        {
          text: "内心的温暖",
          next: "inner_warmth",
          effect: () => {
            setWallLight(0.9);
            setResponses((prev) => [
              ...prev,
              "内心的光，永远不会被外界的黑暗熄灭",
            ]);
          },
        },
        {
          text: "创造的火花",
          next: "creative_spark",
          effect: () => {
            setWallLight(1);
            setResponses((prev) => [...prev, "创造是打破黑暗的第一道光"]);
          },
        },
        {
          text: "与他人的联结",
          next: "connection_light",
          effect: () => {
            setWallLight(0.8);
            setResponses((prev) => [...prev, "在他人的眼中，我们都能找到光"]);
          },
        },
      ],
    },
    inner_warmth: {
      background: "from-rose-900 via-pink-900 to-red-900",
      content: "这份温暖让你想到了什么？",
      icon: <Heart className="w-12 h-12 text-rose-500" />,
      reflection: "有时候最深的力量，来自于最温柔的部分",
      options: [
        {
          text: "继续探索",
          next: "final_reflection",
          effect: () => setShowReflection(true),
        },
      ],
    },
    final_reflection: {
      background: "from-purple-900 via-violet-800 to-indigo-900",
      content: "当墙倒塌时，你看到了什么？",
      icon: <Sun className="w-16 h-16 text-yellow-500 animate-spin-slow" />,
      reflection: "原来光一直都在，只是我们习惯了黑暗",
      options: [
        {
          text: "重新开始",
          next: "start",
          effect: () => {
            setWallLight(0.3);
            setResponses([]);
            setShowReflection(false);
          },
        },
      ],
    },
  };

  const currentScene = scenes[currentStage];

  const handleChoice = (option) => {
    setFadeIn(false);
    setTimeout(() => {
      option.effect?.();
      setCurrentStage(option.next);
    }, 500);
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${currentScene.background} text-gray-100 transition-all duration-1000`}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Scene Content */}
          <div
            className={`bg-black/30 backdrop-blur-lg p-8 rounded-xl mb-8 transform transition-all duration-500 ${
              fadeIn ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{
              boxShadow: `0 0 ${wallLight * 100}px ${
                wallLight * 30
              }px rgba(255,255,255,${wallLight / 10})`,
            }}
          >
            {currentScene.icon && (
              <div className="flex justify-center mb-6">
                {currentScene.icon}
              </div>
            )}

            <h2 className="text-2xl font-semibold mb-6 text-center">
              {currentScene.content}
            </h2>

            <div className="space-y-4">
              {currentScene.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleChoice(option)}
                  className="w-full p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 text-left hover:translate-x-2"
                >
                  {option.text}
                </button>
              ))}
            </div>

            {currentScene.reflection && showReflection && (
              <div className="mt-8 p-6 bg-white/5 rounded-lg">
                <p className="text-lg italic text-center">
                  {currentScene.reflection}
                </p>
              </div>
            )}
          </div>

          {/* Response History */}
          {responses.length > 0 && (
            <div className="space-y-4 mt-8">
              {responses.map((response, index) => (
                <div
                  key={index}
                  className="bg-white/5 p-4 rounded-lg text-gray-300 italic text-center"
                  style={{
                    opacity: 1 - index * 0.2,
                  }}
                >
                  {response}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InnerDialogue;
