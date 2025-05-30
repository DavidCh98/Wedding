"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import confetti from "canvas-confetti"

// Translation content
const content = {
  en: {
    nav: {
      home: "Home",
      agenda: "Agenda",
      guide: "Guide",
    },
    hero: {
      title: "Deyvid & Zornitsa",
      date: "September 20, 2025",
      countdown: "Time until we say 'I do'",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    home: {
      title: "Our Story",
      content:
        "We met five years ago during a summer vacation in Greece. What started as a chance encounter on a sunny beach turned into a beautiful love story. After years of adventures together, we're excited to begin our greatest adventure yet - marriage.",
      join: "We invite you to join us in celebrating our special day.",
    },
    agenda: {
      title: "Wedding Day Agenda",
      ceremony: {
        title: "Ceremony",
        time: "6:00 PM - 7:00 PM",
        location: "St. Mary's Church",
        address: "123 Church Street",
      },
      reception: {
        title: "Reception",
        time: "7:30 PM - Late",
        location: "Green Garden Venue",
        address: "456 Garden Avenue",
      },
      dinner: {
        title: "Dinner",
        time: "8:00 PM",
        details: "A three-course meal will be served",
      },
      party: {
        title: "Celebration",
        time: "9:30 PM - Late",
        details: "Dancing and celebration",
      },
    },
    guide: {
      title: "Guest Guide",
      accommodation: {
        title: "Accommodation",
        content: "We've arranged special rates at Hotel Elegance. Please mention our wedding when booking.",
        contact: "Phone: +1 234 567 890",
      },
      transport: {
        title: "Transportation",
        content: "Shuttle services will be available from Hotel Elegance to the venue and back.",
        schedule: "Departures: 5:00 PM, 5:30 PM, Returns: 11:00 PM, 12:00 AM",
      },
      gifts: {
        title: "Gifts",
        content:
          "Your presence is our present. If you wish to give something, we would appreciate contributions to our honeymoon fund.",
      },
      dress: {
        title: "Dress Code",
        content:
          "Formal attire. The celebration will take place outdoors on grass, so please consider appropriate footwear.",
      },
    },
  },
  bg: {
    nav: {
      home: "Начало",
      agenda: "Програма",
      guide: "Наръчник",
    },
    hero: {
      title: "Дейвид & Зорница",
      date: "20 Септември, 2025",
      countdown: "Време до нашето 'Да'",
      days: "Дни",
      hours: "Часа",
      minutes: "Минути",
      seconds: "Секунди",
    },
    home: {
      title: "Нашата История",
      content:
        "Срещнахме се преди пет години по време на лятна ваканция в Гърция. Това, което започна като случайна среща на слънчев плаж, се превърна в красива любовна история. След години на приключения заедно, ние сме развълнувани да започнем нашето най-голямо приключение - брака.",
      join: "Каним ви да се присъедините към нас в празнуването на нашия специален ден.",
    },
    agenda: {
      title: "Програма на Сватбения Ден",
      ceremony: {
        title: "Церемония",
        time: "18:00 - 19:00",
        location: "Църква Света Мария",
        address: "ул. Църковна 123",
      },
      reception: {
        title: "Прием",
        time: "19:30 - Късно",
        location: "Зелена Градина",
        address: "бул. Градински 456",
      },
      dinner: {
        title: "Вечеря",
        time: "20:00",
        details: "Ще бъде сервирано тристепенно меню",
      },
      party: {
        title: "Празненство",
        time: "21:30 - Късно",
        details: "Танци и празненство",
      },
    },
    guide: {
      title: "Наръчник за Гости",
      accommodation: {
        title: "Настаняване",
        content: "Организирахме специални цени в Хотел Елеганс. Моля, споменете нашата сватба при резервация.",
        contact: "Телефон: +1 234 567 890",
      },
      transport: {
        title: "Транспорт",
        content: "Ще има шатъл услуги от Хотел Елеганс до мястото на събитието и обратно.",
        schedule: "Заминавания: 17:00, 17:30, Връщания: 23:00, 00:00",
      },
      gifts: {
        title: "Подаръци",
        content:
          "Вашето присъствие е нашият подарък. Ако желаете да дадете нещо, бихме оценили принос към нашия фонд за меден месец.",
      },
      dress: {
        title: "Дрескод",
        content:
          "Официално облекло. Празненството ще се проведе на открито на трева, така че моля, съобразете подходящи обувки.",
      },
    },
  },
}

export default function Home() {
  const [language, setLanguage] = useState<"en" | "bg">("en")
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [confettiPlayed, setConfettiPlayed] = useState(false)
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Calculate time until wedding
  useEffect(() => {
    const weddingDate = new Date("2025-09-20T18:00:00") // 6 PM on wedding day

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = weddingDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setCountdown({ days, hours, minutes, seconds })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const t = content[language]

  // Confetti effect on page load
  useEffect(() => {
    if (!confettiPlayed) {
      const duration = 3 * 1000
      const animationEnd = Date.now() + duration
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

      const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min
      }

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now()

        if (timeLeft <= 0) {
          return clearInterval(interval)
        }

        const particleCount = 50 * (timeLeft / duration)

        // Olive green themed confetti colors
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ["#7d9057", "#5f7542", "#b8c3a2", "#ebeee6", "#f7f8f5"],
        })
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ["#7d9057", "#5f7542", "#b8c3a2", "#ebeee6", "#f7f8f5"],
        })
      }, 250)

      setConfettiPlayed(true)
    }
  }, [confettiPlayed])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-olive-50 to-white relative overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 border-b border-olive-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-buongiornocryt text-5xl text-olive-700 tracking-wide">D&Z</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                activeSection === "home"
                  ? "text-olive-700 border-b-2 border-olive-500 pb-1"
                  : "text-olive-600 hover:text-olive-700 hover:scale-105"
              }`}
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection("agenda")}
              className={`text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                activeSection === "agenda"
                  ? "text-olive-700 border-b-2 border-olive-500 pb-1"
                  : "text-olive-600 hover:text-olive-700 hover:scale-105"
              }`}
            >
              {t.nav.agenda}
            </button>
            <button
              onClick={() => scrollToSection("guide")}
              className={`text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                activeSection === "guide"
                  ? "text-olive-700 border-b-2 border-olive-500 pb-1"
                  : "text-olive-600 hover:text-olive-700 hover:scale-105"
              }`}
            >
              {t.nav.guide}
            </button>

            <div className="ml-6 border-l pl-6 border-olive-200">
              <button
                onClick={() => setLanguage(language === "en" ? "bg" : "en")}
                className="flex items-center text-olive-600 hover:text-olive-700 transition-colors duration-300 bg-olive-50 px-3 py-2 rounded-full"
              >
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-olive-600 hover:text-olive-700 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm py-4 px-4 shadow-lg border-t border-olive-100">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-sm uppercase tracking-wider font-medium transition-colors duration-300 ${
                  activeSection === "home" ? "text-olive-700 " : "text-olive-600"
                }`}
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection("agenda")}
                className={`text-sm uppercase tracking-wider font-medium transition-colors duration-300 ${
                  activeSection === "agenda" ? "text-olive-700 " : "text-olive-600"
                }`}
              >
                {t.nav.agenda}
              </button>
              <button
                onClick={() => scrollToSection("guide")}
                className={`text-sm uppercase tracking-wider font-medium transition-colors duration-300 ${
                  activeSection === "guide" ? "text-olive-700 " : "text-olive-600"
                }`}
              >
                {t.nav.guide}
              </button>

              <div className="pt-2 border-t border-olive-200">
                <button
                  onClick={() => setLanguage(language === "en" ? "bg" : "en")}
                  className="flex items-center text-olive-600 bg-olive-50 px-3 py-2 rounded-full"
                >
                  <span className="text-sm font-medium">{language === "en" ? "BG" : "EN"}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-olive-50 via-white to-olive-100 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute -left-10 top-10">
            <AngelsDecoration className="w-64 h-64 text-olive-700 opacity-30" />
          </div>
          <div className="absolute -right-10 bottom-10">
            <AngelsDecoration className="w-64 h-64 text-olive-700 opacity-30 transform rotate-180" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-8">
            <OliveDecoration className="h-16 w-auto mx-auto text-olive-600 opacity-70" />
          </div>
          <h1 className="font-buongiornocryt text-9xl md:text-9xl font-light text-olive-800 mb-6 tracking-wide">
            {t.hero.title}
          </h1>
          <p className="text-2xl md:text-3xl text-olive-600 mb-12 font-light">{t.hero.date}</p>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl py-8 px-6 max-w-lg mx-auto border border-olive-100">
            <p className="text-olive-700 mb-6 text-lg font-medium">{t.hero.countdown}</p>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-light text-olive-800 mb-2">{countdown.days}</div>
                <div className="text-sm text-olive-600 uppercase tracking-wider">{t.hero.days}</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-light text-olive-800 mb-2">{countdown.hours}</div>
                <div className="text-sm text-olive-600 uppercase tracking-wider">{t.hero.hours}</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-light text-olive-800 mb-2">{countdown.minutes}</div>
                <div className="text-sm text-olive-600 uppercase tracking-wider">{t.hero.minutes}</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-light text-olive-800 mb-2">{countdown.seconds}</div>
                <div className="text-sm text-olive-600 uppercase tracking-wider">{t.hero.seconds}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home/Our Story Section */}
      <section id="home" className="py-20 md:py-32 relative bg-white">
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-64 bg-gradient-to-r from-olive-50 to-transparent opacity-30 -skew-y-3"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-buongiornocryt text-9xl md:text-9xl font-light text-olive-800 mb-12">{t.home.title}</h2>
            <div className="mb-12 relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-olive-100 to-olive-50 rounded-2xl transform rotate-3 opacity-50"></div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Couple"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl mx-auto relative"
              />
            </div>
            <p className="text-lg text-olive-700 mb-8 leading-relaxed max-w-3xl mx-auto">{t.home.content}</p>
            <p className="text-xl text-olive-600 italic font-light">{t.home.join}</p>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-20 md:py-32 bg-gradient-to-br from-olive-50 to-olive-100 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12 text-center">
            <OliveDecoration className="h-12 w-auto mx-auto text-olive-600 opacity-60 mb-6" />
            <h2 className="font-buongiornocryt text-9xl md:text-9xl font-light text-olive-800 mb-4">{t.agenda.title}</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Ceremony */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-olive-100">
                <h3 className="font-buongiornocryt text-8xl font-medium text-olive-800 mb-4">{t.agenda.ceremony.title}</h3>
                <p className="text-lg text-olive-700 font-medium mb-4">{t.agenda.ceremony.time}</p>
                <p className="text-olive-600 mb-2 font-medium">{t.agenda.ceremony.location}</p>
                <p className="text-olive-600">{t.agenda.ceremony.address}</p>
              </div>

              {/* Reception */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-olive-100">
                <h3 className="font-buongiornocryt text-8xl font-medium text-olive-800 mb-4">{t.agenda.reception.title}</h3>
                <p className="text-lg text-olive-700 font-medium mb-4">{t.agenda.reception.time}</p>
                <p className="text-olive-600 mb-2 font-medium">{t.agenda.reception.location}</p>
                <p className="text-olive-600">{t.agenda.reception.address}</p>
              </div>

              {/* Dinner */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-olive-100">
                <h3 className="font-buongiornocryt text-8xl font-medium text-olive-800 mb-4">{t.agenda.dinner.title}</h3>
                <p className="text-lg text-olive-700 font-medium mb-4">{t.agenda.dinner.time}</p>
                <p className="text-olive-600">{t.agenda.dinner.details}</p>
              </div>

              {/* Party */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-olive-100">
                <h3 className="font-buongiornocryt text-8xl font-medium text-olive-800 mb-4">{t.agenda.party.title}</h3>
                <p className="text-lg text-olive-700 font-medium mb-4">{t.agenda.party.time}</p>
                <p className="text-olive-600">{t.agenda.party.details}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section id="guide" className="py-20 md:py-32 relative bg-white">
        <div className="absolute top-1/3 right-0 w-full h-64 bg-gradient-to-l from-olive-50 to-transparent opacity-30 -skew-y-3"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12 text-center">
            <OliveDecoration className="h-12 w-auto mx-auto text-olive-600 opacity-60 mb-6" />
            <h2 className="font-buongiornocryt text-9xl md:text-9xl font-light text-olive-800 mb-4">{t.guide.title}</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Accommodation */}
              <div className="bg-gradient-to-br from-olive-50 to-olive-100 rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-olive-200">
                <h3 className="font-buongiornocryt text-8xl font-medium text-olive-800 mb-4">
                  {t.guide.accommodation.title}
                </h3>
                <p className="text-olive-700 mb-4 leading-relaxed">{t.guide.accommodation.content}</p>
                <p className="text-olive-600 font-medium">{t.guide.accommodation.contact}</p>
              </div>

              {/* Transportation */}
              <div className="bg-gradient-to-br from-olive-50 to-olive-100 rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-olive-200">
                <h3 className="font-buongiornocryt text-8xl font-medium text-olive-800 mb-4">{t.guide.transport.title}</h3>
                <p className="text-olive-700 mb-4 leading-relaxed">{t.guide.transport.content}</p>
                <p className="text-olive-600 font-medium">{t.guide.transport.schedule}</p>
              </div>

              {/* Gifts */}
              <div className="bg-gradient-to-br from-olive-50 to-olive-100 rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-olive-200">
                <h3 className="font-buongiornocryt text-8xl font-medium text-olive-800 mb-4">{t.guide.gifts.title}</h3>
                <p className="text-olive-700 leading-relaxed">{t.guide.gifts.content}</p>
              </div>

              {/* Dress Code */}
              <div className="bg-gradient-to-br from-olive-50 to-olive-100 rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-olive-200">
                <h3 className="font-buongiornocryt text-8xl font-medium text-olive-800 mb-4">{t.guide.dress.title}</h3>
                <p className="text-olive-700 leading-relaxed">{t.guide.dress.content}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-br from-olive-800 to-olive-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6">
            <OliveDecoration className="h-12 w-auto mx-auto text-white opacity-40" />
          </div>
          <h2 className="font-buongiornocryt text-8xl font-light mb-4 tracking-wide">{t.hero.title}</h2>
          <p className="text-xl opacity-90">{t.hero.date}</p>
        </div>
      </footer>
    </main>
  )
}

// Define both decoration components
function AngelsDecoration({ className = "" }) {
  return <Image src="/angels.svg" alt="Angels decoration" width={200} height={200} className={className} />
}

function OliveDecoration({ className = "" }) {
  return (
    <div className={`relative w-[200px] h-[200px] ${className}`}>
      <Image src="/angels.svg" alt="Angels decoration" fill style={{ objectFit: "contain" }} />
    </div>
  )
}
