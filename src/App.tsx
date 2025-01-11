import { Toaster } from "@/components/ui/toaster"; import { Toaster as Sonner } from "@/components/ui/sonner"; import { TooltipProvider } from "@/components/ui/tooltip"; import { BrowserRouter } from "react-router-dom"; import Routes from "./Routes"; import Navbar from "./components/Navbar"; import Footer from "./components/Footer"; const App = () => ( <TooltipProvider> <Toaster /> <Sonner /> <BrowserRouter> <div className="min-h-screen bg-[#0A0A0A] text-white"> <Navbar /> <main className="container mx-auto px-4 py-8"> <Routes /> </main> <Footer /> </div> </BrowserRouter> </TooltipProvider> ); export default App;