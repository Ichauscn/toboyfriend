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
  School,
  Home,
  Sparkles,
} from "lucide-react";

import InnerDialogue from "./InnerDialogue";

const ForestProfile = () => {
  // 使用 useEffect 来初始化滚动位置状态
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState("story");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showInnerDialogue, setShowInnerDialogue] = useState(false);

  // 在客户端挂载后设置 isClient
  useEffect(() => {
    setIsClient(true);
  }, []);

  // 只在客户端处理滚动事件
  useEffect(() => {
    if (isClient) {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isClient]);

  // 如果显示内心对话页面，直接返回 InnerDialogue 组件
  if (showInnerDialogue) {
    return <InnerDialogue onBack={() => setShowInnerDialogue(false)} />;
  }

  const personalityTraits = [
    {
      icon: <Heart className="w-6 h-6 text-rose-400" />,
      title: "同理心与温柔",
      description:
        "天生具有抚慰人心的能力，常常无需言语就能给予他人情感上的慰藉。",
    },
    {
      icon: <Trees className="w-6 h-6 text-emerald-400" />,
      title: "内在力量",
      description: "尽管内心挣扎，但始终保持沉稳冷静的外表。",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      title: "洞察力",
      description: "能敏锐地感知他人的意图和动机，对人性有着复杂的理解。",
    },
  ];

  const weaknesses = [
    {
      icon: <Cloud className="w-6 h-6 text-blue-400" />,
      title: "回避型依恋",
      description: "在面对冲突或情感复杂性时倾向于退缩。",
    },
    {
      icon: <Moon className="w-6 h-6 text-purple-400" />,
      title: "自我怀疑",
      description:
        "内心深处存在着深深的自我怀疑，认为无法成为山青应得的理想伴侣。",
    },
  ];

  const memories = [
    {
      date: "14岁",
      title: "初遇山青",
      description: "她成为了我生命中的白月光，是我仰慕却觉得配不上的一切象征。",
    },
    {
      date: "2024年1月",
      title: "重逢",
      description: "八年后的重逢，决定以自己的方式静静守护这段感情。",
    },
  ];

  // 页签内容配置
  const tabContent = {
    story: (
      <div className="space-y-8">
        <div className="bg-gray-900/40 border border-gray-800 rounded-lg p-6">
          <div className="mb-4">
            <h3 className="text-2xl text-emerald-400 font-semibold">
              背景故事
            </h3>
          </div>
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              我的故事开始在粤西一个安静的小县城，那里的天空总是潮湿的，夏天的暴雨来得又急又猛，就像我匆匆溜走的童年。寄宿学校的铁床是我最熟悉的栖息地，而飘着咸鱼和凉晒衣物的气味的乡下，是我逃离的另一个容身之所。那时的我，像极了巷子里那些无人管束的野猫，学会了在人前做个乖巧的表演家。可笑的是，这种在不同生存环境间切换的本领，竟成了我最引以为傲的技能。{" "}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="bg-gray-900/40 border border-gray-800 rounded-lg p-6 hover:bg-gray-800/40 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-emerald-400" />
                <span className="font-semibold">{memory.date}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-emerald-300">
                {memory.title}
              </h3>
              <p className="text-gray-300">{memory.description}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    personality: (
      <div className="space-y-8">
        <div className="grid md:grid-cols-3 gap-6">
          {personalityTraits.map((trait, index) => (
            <div
              key={index}
              className="bg-gray-900/40 border border-gray-800 rounded-lg p-6 hover:bg-gray-800/40 transition-all duration-300"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center gap-2 mb-4">
                {trait.icon}
                <h3 className="font-semibold">{trait.title}</h3>
              </div>
              <p className="text-gray-300">{trait.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/40 border border-gray-800 rounded-lg p-6">
          <div className="mb-4">
            <h3 className="text-2xl text-emerald-400 font-semibold">
              性格特征
            </h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-purple-400">
              <User className="w-5 h-5" />
              <span>INFJ人格</span>
            </div>
            <p className="text-gray-300">
              朋友们总说我像一本合上的书，封面平淡无奇，内页却不知藏着多少故事。确实，我的内心世界热闹得很，我一个人逍遥自在。我那点敏感心思，就像是放大镜下的尘埃，细微到不值一提，却总被自己无限放大。遇到情感上的风浪，我的第一反应永远是转身就走
              ——
              仿佛这样就能假装风浪不存在。说到底，我大概是这世上最擅长"逃跑"的旁观者了。
            </p>
          </div>
        </div>
      </div>
    ),
    philosophy: (
      <div className="space-y-8">
        <div className="bg-gray-900/40 border border-gray-800 rounded-lg p-6">
          <div className="mb-4">
            <h3 className="text-2xl text-emerald-400 font-semibold">
              人生哲学
            </h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Book className="w-5 h-5 text-emerald-400" />
              <span className="italic">"Silence is golden"</span>
            </div>
            <p className="text-gray-300">
              人生不如意，十有八九。这话说得俗气，却是我最真实的体悟。独处对我来说，与其说是选择，不如说是命运的馈赠。就像那些独自生长在墙缝中的野草，不需要特别的照料，却总能找到属于自己的生存之道。
              我始终相信，沉默是最后的优雅。在这个人人都急于表达的时代，我选择做一个安静的倾听者。或许是性格使然，又或许是习惯使然，我总是下意识地把自己藏在层层心墙之后。这种克制，某种程度上也是一种自我保护吧
              —— 虽然有时连我自己都会觉得，这保护未免太过周全了些。
            </p>
            <div className="mt-6 p-4 bg-gray-800/40 rounded-lg">
              <p className="text-emerald-300 italic">
                回望来时路，那些独自承担的时光，那些不愿打扰他人的固执，构成了现在的我。也许这不是最好的生存之道，但至少，这是我找到的，最适合自己的生存方式。
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  };

  const parallaxStyle = isClient
    ? {
        transform: `translateY(${scrollY * 0.5}px)`,
        opacity: 0.4,
      }
    : {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-teal-900 to-emerald-950 text-gray-100">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center"
          style={parallaxStyle}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)",
          }}
        />

        <div className="absolute inset-0">
          <div className="h-full flex flex-col items-center justify-center">
            <Leaf
              className="w-16 h-16 text-emerald-400 mb-6"
              style={{
                animation: "bounce 3s infinite",
              }}
            />
            <h1 className="text-7xl font-bold mb-6 tracking-wider">枫叶</h1>
            <p className="text-2xl italic text-gray-300 mb-8">
              "沉默是金，沉静如海"
            </p>
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-4">
                <School className="w-5 h-5 text-emerald-400" />
                <span className="text-lg">广东理工学院 · 风景园林专业</span>
              </div>
              <div className="flex items-center gap-4">
                <Star className="w-5 h-5 text-amber-400" />
                <span className="text-lg">大三在读</span>
              </div>

              {/* Inner World Exploration Button */}
              <button
                onClick={() => setShowInnerDialogue(true)}
                className="mt-8 px-8 py-4 bg-emerald-800/60 hover:bg-emerald-700/60 rounded-lg 
                          transition-all duration-300 transform hover:scale-105 
                          border border-emerald-600/30 backdrop-blur-sm 
                          flex items-center gap-3 shadow-lg hover:shadow-emerald-900/30"
              >
                <Heart className="w-6 h-6" />
                <span className="text-lg">探索内心世界</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-8 p-1 rounded-lg bg-gray-900/40">
            {["story", "personality", "philosophy"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-emerald-800/60 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab === "story" && (
                  <Book className="w-5 h-5 inline-block mr-2" />
                )}
                {tab === "personality" && (
                  <User className="w-5 h-5 inline-block mr-2" />
                )}
                {tab === "philosophy" && (
                  <Feather className="w-5 h-5 inline-block mr-2" />
                )}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">{tabContent[activeTab]}</div>
      </div>

      {/* Floating Inner World Button */}
      <button
        onClick={() => setShowInnerDialogue(true)}
        className="fixed bottom-8 right-8 p-4 bg-emerald-800/80 hover:bg-emerald-700/80 
                  rounded-full shadow-lg hover:shadow-xl transition-all duration-300 
                  transform hover:scale-110 backdrop-blur-sm border border-emerald-600/30"
      >
        <Heart className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ForestProfile;
