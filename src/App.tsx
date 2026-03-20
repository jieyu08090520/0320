/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function App() {
  return (
    <motion.div 
      className="box bg-white w-full max-w-[600px] shadow-[15px_15px_0px_0px_rgba(0,0,0,0.15)] rounded-xl overflow-hidden m-4"
      whileHover={{ 
        x: [0, -4, 4, -4, 4, 0],
      }}
      transition={{ 
        duration: 0.4,
        ease: "easeInOut"
      }}
    >
      <div 
        className="top h-[330px] relative bg-cover bg-center"
        style={{ backgroundImage: `url('https://pic.pimg.tw/sidney6811/1529508979-1559019819_n.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <h2 className="absolute bottom-6 left-6 text-white text-4xl font-bold flex flex-col items-start leading-tight">
          浮光書店
          <span className="smalltxt text-sm font-normal opacity-80 tracking-widest mt-1">Illumination Books</span>
        </h2>
      </div>
      
      <div className="bottom p-8 text-gray-800">
        <ul className="space-y-6">
          <li className="flex flex-col sm:flex-row sm:items-baseline gap-2">
            <h3 className="font-bold text-gray-500 text-sm uppercase tracking-wider min-w-[100px]">地址</h3>
            <span className="text-lg">台北市大同區赤峰街47巷16號2樓</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-baseline gap-2">
            <h3 className="font-bold text-gray-500 text-sm uppercase tracking-wider min-w-[100px]">電話</h3>
            <span className="text-lg">02 2550 7288</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-baseline gap-2">
            <h3 className="font-bold text-gray-500 text-sm uppercase tracking-wider min-w-[100px]">開放時間</h3>
            <div className="flex flex-col">
              <span className="text-lg">14:00 – 21:30</span>
              <span className="text-sm text-emerald-600 font-medium">今日正常營業</span>
            </div>
          </li>
        </ul>
        
        <div className="buttons flex gap-4 mt-10">
          <a 
            href="#" 
            className="btn1 px-8 py-3 bg-[#ff7526] text-white rounded-full font-semibold hover:bg-[#e6641e] transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            前往網站
          </a>
          <a 
            href="#" 
            className="btn2 px-8 py-3 border-2 border-gray-200 text-gray-600 rounded-full font-semibold hover:bg-gray-50 transition-all active:scale-95"
          >
            更多訊息
          </a>
        </div>
      </div>
    </motion.div>
  );
}
