"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import confetti from "canvas-confetti"

// Remove the Playfair_Display import since we're now handling it in layout.tsx
// const playfair = Playfair_Display({ subsets: ["latin"] })

// Translation content
const content = {
  en: {
    nav: {
      home: "Home",
      agenda: "Agenda",
      guide: "Guide",
    },
    hero: {
      title: "David & Zori",
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
      title: "Дейвид & Зори",
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
    <main className="min-h-screen bg-[#f8f7f3] relative overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-olive-600 font-semibold text-xl">D&Z</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-sm uppercase tracking-wider ${activeSection === "home" ? "text-olive-700 border-b-2 border-olive-500" : "text-olive-600 hover:text-olive-700"}`}
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection("agenda")}
              className={`text-sm uppercase tracking-wider ${activeSection === "agenda" ? "text-olive-700 border-b-2 border-olive-500" : "text-olive-600 hover:text-olive-700"}`}
            >
              {t.nav.agenda}
            </button>
            <button
              onClick={() => scrollToSection("guide")}
              className={`text-sm uppercase tracking-wider ${activeSection === "guide" ? "text-olive-700 border-b-2 border-olive-500" : "text-olive-600 hover:text-olive-700"}`}
            >
              {t.nav.guide}
            </button>

            <div className="ml-4 border-l pl-4 border-olive-200">
              <button
                onClick={() => setLanguage(language === "en" ? "bg" : "en")}
                className="flex items-center text-olive-600 hover:text-olive-700"
              >
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-olive-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-md">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-sm uppercase tracking-wider ${activeSection === "home" ? "text-olive-700 font-semibold" : "text-olive-600"}`}
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection("agenda")}
                className={`text-sm uppercase tracking-wider ${activeSection === "agenda" ? "text-olive-700 font-semibold" : "text-olive-600"}`}
              >
                {t.nav.agenda}
              </button>
              <button
                onClick={() => scrollToSection("guide")}
                className={`text-sm uppercase tracking-wider ${activeSection === "guide" ? "text-olive-700 font-semibold" : "text-olive-600"}`}
              >
                {t.nav.guide}
              </button>

              <div className="pt-2 border-t border-olive-200">
                <button
                  onClick={() => setLanguage(language === "en" ? "bg" : "en")}
                  className="flex items-center text-olive-600"
                >
                  <span className="text-sm font-medium">{language === "en" ? "BG" : "EN"}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-olive-50 text-center relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -left-10 top-10">
            <FloralElement className="w-64 h-64 text-olive-700" />
          </div>
          <div className="absolute -right-10 bottom-10">
            <FloralElement className="w-64 h-64 text-olive-700 transform rotate-180" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-8">
            <OliveDecoration className="h-16 w-auto mx-auto text-olive-700 opacity-60" />
          </div>
          <h1 className="text-4xl md:text-6xl font-light text-olive-800 mb-4">{t.hero.title}</h1>
          <p className="text-xl md:text-2xl text-olive-600 mb-8">{t.hero.date}</p>

          <div className="bg-white rounded-lg shadow-sm py-6 px-4 max-w-md mx-auto">
            <p className="text-olive-600 mb-4 text-sm">{t.hero.countdown}</p>
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-light text-olive-800 mb-1">{countdown.days}</div>
                <div className="text-xs text-olive-600">{t.hero.days}</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-light text-olive-800 mb-1">{countdown.hours}</div>
                <div className="text-xs text-olive-600">{t.hero.hours}</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-light text-olive-800 mb-1">{countdown.minutes}</div>
                <div className="text-xs text-olive-600">{t.hero.minutes}</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-light text-olive-800 mb-1">{countdown.seconds}</div>
                <div className="text-xs text-olive-600">{t.hero.seconds}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home/Our Story Section */}
      <section id="home" className="py-16 md:py-24 relative">
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-64 bg-olive-50 opacity-30 -skew-y-3"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-olive-800 mb-8">{t.home.title}</h2>
            <div className="mb-8 relative">
              <div className="absolute -inset-4 bg-olive-100 rounded-lg transform rotate-3 opacity-50"></div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Couple"
                width={600}
                height={400}
                className="rounded-lg shadow-md mx-auto relative"
              />
            </div>
            <p className="text-olive-700 mb-6 leading-relaxed">{t.home.content}</p>
            <p className="text-olive-600 italic">{t.home.join}</p>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-16 md:py-24 bg-olive-50 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-8 text-center">
            <OliveDecoration className="h-12 w-auto mx-auto text-olive-700 opacity-50" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-olive-800 mb-12 text-center">{t.agenda.title}</h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Ceremony */}
              <div className="bg-white rounded-lg shadow-sm p-6 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-medium text-olive-800 mb-3">{t.agenda.ceremony.title}</h3>
                <p className="text-olive-700 font-semibold mb-4">{t.agenda.ceremony.time}</p>
                <p className="text-olive-600 mb-1">{t.agenda.ceremony.location}</p>
                <p className="text-olive-600">{t.agenda.ceremony.address}</p>
              </div>

              {/* Reception */}
              <div className="bg-white rounded-lg shadow-sm p-6 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-medium text-olive-800 mb-3">{t.agenda.reception.title}</h3>
                <p className="text-olive-700 font-semibold mb-4">{t.agenda.reception.time}</p>
                <p className="text-olive-600 mb-1">{t.agenda.reception.location}</p>
                <p className="text-olive-600">{t.agenda.reception.address}</p>
              </div>

              {/* Dinner */}
              <div className="bg-white rounded-lg shadow-sm p-6 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-medium text-olive-800 mb-3">{t.agenda.dinner.title}</h3>
                <p className="text-olive-700 font-semibold mb-4">{t.agenda.dinner.time}</p>
                <p className="text-olive-600">{t.agenda.dinner.details}</p>
              </div>

              {/* Party */}
              <div className="bg-white rounded-lg shadow-sm p-6 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-medium text-olive-800 mb-3">{t.agenda.party.title}</h3>
                <p className="text-olive-700 font-semibold mb-4">{t.agenda.party.time}</p>
                <p className="text-olive-600">{t.agenda.party.details}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section id="guide" className="py-16 md:py-24 relative">
        <div className="absolute top-1/3 right-0 w-full h-64 bg-olive-50 opacity-30 -skew-y-3"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-8 text-center">
            <OliveDecoration className="h-12 w-auto mx-auto text-olive-700 opacity-50" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-olive-800 mb-12 text-center">{t.guide.title}</h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Accommodation */}
              <div className="bg-olive-50 rounded-lg p-6 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-medium text-olive-800 mb-3">{t.guide.accommodation.title}</h3>
                <p className="text-olive-700 mb-3">{t.guide.accommodation.content}</p>
                <p className="text-olive-600 text-sm">{t.guide.accommodation.contact}</p>
              </div>

              {/* Transportation */}
              <div className="bg-olive-50 rounded-lg p-6 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-medium text-olive-800 mb-3">{t.guide.transport.title}</h3>
                <p className="text-olive-700 mb-3">{t.guide.transport.content}</p>
                <p className="text-olive-600 text-sm">{t.guide.transport.schedule}</p>
              </div>

              {/* Gifts */}
              <div className="bg-olive-50 rounded-lg p-6 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-medium text-olive-800 mb-3">{t.guide.gifts.title}</h3>
                <p className="text-olive-700">{t.guide.gifts.content}</p>
              </div>

              {/* Dress Code */}
              <div className="bg-olive-50 rounded-lg p-6 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-medium text-olive-800 mb-3">{t.guide.dress.title}</h3>
                <p className="text-olive-700">{t.guide.dress.content}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-olive-800 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-4">
            <OliveDecoration className="h-10 w-auto mx-auto text-white opacity-30" />
          </div>
          <h2 className="text-2xl font-light mb-4">{t.hero.title}</h2>
          <p>{t.hero.date}</p>
        </div>
      </footer>
    </main>
  )
}

// Decorative SVG Components
function FloralElement({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M100 0C120 40 160 60 200 60C160 80 140 120 140 160C100 140 60 160 20 200C40 160 20 120 0 100C40 80 60 40 60 0C80 40 120 60 100 0Z"
        fill="currentColor"
        fillOpacity="0.5"
      />
      <circle cx="100" cy="100" r="20" fill="currentColor" fillOpacity="0.5" />
    </svg>
  )
}

function OliveDecoration({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 25C30 15 50 5 100 25C150 45 170 35 190 25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M40 25C45 20 55 15 60 25C65 35 55 40 50 35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M160 25C155 20 145 15 140 25C135 35 145 40 150 35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="100" cy="25" r="5" fill="currentColor" />
      <path
        d="M95 15C90 20 90 30 100 35C110 30 110 20 105 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
