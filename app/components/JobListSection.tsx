"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const companies = [
  {
    name: "東京交通株式会社",
    location: "東京都新宿区",
    benefits: ["月給35万円以上可", "社会保険完備", "制服貸与"],
    rating: 4.5,
    employees: 250,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80",
  },
  {
    name: "大手町タクシー",
    location: "東京都千代田区",
    benefits: ["入社祝金30万円", "週休2日制", "研修制度充実"],
    rating: 4.3,
    employees: 180,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80",
  },
  {
    name: "みなとタクシー",
    location: "東京都港区",
    benefits: ["昇給年2回", "家族手当あり", "退職金制度"],
    rating: 4.4,
    employees: 150,
    image: "https://images.unsplash.com/photo-1559829604-549d05fb4e44?auto=format&fit=crop&q=80",
  },
];

export default function JobListSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            採用企業一覧
          </h2>
          <p className="text-xl text-gray-600">
            信頼できる企業で安心してスタート
          </p>
        </motion.div>
        <div className="grid gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img
                      src={company.image}
                      alt={company.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                          {company.name}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="w-4 h-4 mr-2" />
                          {company.location}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 mr-1" />
                        <span className="font-semibold">{company.rating}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {company.benefits.map((benefit, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span>従業員数: {company.employees}名</span>
                      </div>
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                        詳細を見る
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}