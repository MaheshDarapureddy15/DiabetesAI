import Link from "next/link"
import {
  Heart,
  Mail,
  Linkedin,
  Globe,
  Shield,
  Award,
  Users,
  Clock,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Company Info */}
          <div className="space-y-6 flex flex-col items-start">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Heart className="h-10 w-10 text-blue-400" />
                <div className="absolute inset-0 h-10 w-10 bg-blue-400 rounded-full blur-lg opacity-30 animate-pulse" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
                  DiabetesAI
                </span>
                <div className="text-xs text-blue-300 font-medium">Health Intelligence</div>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Empowering individuals with AI-driven diabetes risk assessment and personalized health insights for better
              preventive care and healthier lives.
            </p>
            {/* Social/contact links removed as requested */}
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-slate-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/predict"
                  className="text-sm text-slate-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" />
                  Risk Assessment
                </Link>
              </li>
              <li>
                <Link
                  href="/history"
                  className="text-sm text-slate-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" />
                  Prediction History
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" />
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-sm text-slate-300 flex items-center">
                <Shield className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                AI Risk Assessment
              </li>
              <li className="text-sm text-slate-300 flex items-center">
                <Award className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                Health Recommendations
              </li>
              <li className="text-sm text-slate-300 flex items-center">
                <Users className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                Progress Tracking
              </li>
              <li className="text-sm text-slate-300 flex items-center">
                <Clock className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                24/7 Availability
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="text-slate-400 text-xs text-center md:text-left mb-2 md:mb-0">
              © {new Date().getFullYear()} DiabetesAI. All rights reserved.
              </div>
              <div className="text-slate-400 text-xs text-center md:text-right">
              Built with 💛 using Next.js and AI technology
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
