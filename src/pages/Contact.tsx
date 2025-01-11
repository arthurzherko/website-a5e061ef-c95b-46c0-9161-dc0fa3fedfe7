import { Button } from "@/components/ui/button"; import { Input } from "@/components/ui/input"; import { Textarea } from "@/components/ui/textarea"; export default function Contact() { return ( <div className="mx-auto max-w-2xl space-y-8"> <h1 className="text-center text-4xl font-bold text-purple-500">Связаться с нами</h1> <div className="rounded-lg border border-purple-500 bg-black/50 p-8"> <form className="space-y-6"> <div className="space-y-2"> <label className="text-sm text-gray-300">Имя</label> <Input className="border-purple-500 bg-black/50 text-white" placeholder="Ваше имя" /> </div> <div className="space-y-2"> <label className="text-sm text-gray-300">Email</label> <Input className="border-purple-500 bg-black/50 text-white" type="email" placeholder="email@example.com" /> </div> <div className="space-y-2"> <label className="text-sm text-gray-300">Сообщение</label> <Textarea className="border-purple-500 bg-black/50 text-white" placeholder="Ваше сообщение" rows={4} /> </div> <Button className="w-full bg-purple-600 hover:bg-purple-700">Отправить</Button> </form> </div> </div> )}