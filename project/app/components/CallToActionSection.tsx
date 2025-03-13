"use client";

import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CallToActionSection() {
  return (
    <section className="py-20 bg-red-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 bg-gray-50">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                まずは無料相談から
              </h2>
              <p className="text-gray-600 mb-8">
                未経験でも安心してスタートできます。
                あなたの新しいキャリアについて、専門のアドバイザーが丁寧にご相談に応じます。
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">電話でのお問い合わせ</p>
                    <p className="text-blue-600 text-xl font-bold">0120-XXX-XXX</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">メールでのお問い合わせ</p>
                    <p className="text-blue-600">info@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">お名前</Label>
                  <Input id="name" placeholder="山田 太郎" />
                </div>
                <div>
                  <Label htmlFor="email">メールアドレス</Label>
                  <Input id="email" type="email" placeholder="example@email.com" />
                </div>
                <div>
                  <Label htmlFor="phone">電話番号</Label>
                  <Input id="phone" type="tel" placeholder="090-XXXX-XXXX" />
                </div>
                <div>
                  <Label htmlFor="message">お問い合わせ内容</Label>
                  <Textarea
                    id="message"
                    placeholder="ご質問やご要望をお書きください"
                    className="h-32"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-6 rounded-full text-lg font-semibold"
                >
                  無料相談を申し込む
                  <ArrowRight className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}