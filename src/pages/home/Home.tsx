import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
  type MouseEvent,
} from "react";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCode,
  FiFolder,
  FiHome,
  FiLayers,
  FiMail,
  FiMapPin,
  FiMonitor,
  FiMoon,
  FiPhone,
  FiSend,
  FiStar,
  FiSun,
  FiUser,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import {
  SiFirebase,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiReact,
  SiTailwindcss,
  SiTelegram,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import "./home.css";

type Language = "uz" | "en" | "ru";

const LANGUAGE_STORAGE_KEY = "portfolio-language";

const profile = {
  name: "Kamol",
  image:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  email: "k.mamurov17@gmail.com",
  phone: "+998910843650",
  location: "Tashkent, Uzbekistan",
};

const resumeByLanguage: Record<Language, string> = {
  uz: "/resume-uz.jpg",
  en: "/resume-en.jpg",
  ru: "/resume-ru.jpg",
};

const skills = [
  { name: "React", level: 90, icon: SiReact },
  { name: "TypeScript", level: 84, icon: SiTypescript },
  { name: "Tailwind CSS", level: 88, icon: SiTailwindcss },
  { name: "Firebase", level: 80, icon: SiFirebase },
];

const techStack = [
  { name: "React", icon: SiReact },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Vite", icon: SiVite },
];

const socialLinks = [
  { label: "Telegram", icon: SiTelegram, href: "https://t.me/Champions_017" },
  { label: "Instagram", icon: SiInstagram, href: "https://instagram.com/username" },
  { label: "GitHub", icon: SiGithub, href: "https://github.com/kamol1708/games" },
  { label: "LinkedIn", icon: SiLinkedin, href: "https://linkedin.com/in/username" },
];

const translations = {
  uz: {
    profileRole: "Frontend Developer",
    bio: "Men zamonaviy, tez va chiroyli web sahifalar yarataman. Dizayn va kod o'rtasidagi balansni saqlab, foydalanuvchi uchun yoqimli tajriba qurishga e'tibor beraman.",
    navItems: [
      { id: "hero", label: "Bosh sahifa", icon: FiHome },
      { id: "about", label: "Men haqimda", icon: FiUser },
      { id: "skills", label: "Ko'nikmalar", icon: HiOutlineSparkles },
      { id: "services", label: "Xizmatlar", icon: FiLayers },
      { id: "portfolio", label: "Portfolio", icon: FiFolder },
      { id: "contact", label: "Aloqa", icon: FiMail },
    ],
    rotatingRoles: ["Frontend Developer", "UI Portfolio Builder", "React Developer"],
    hero: {
      eyebrow: "Shaxsiy portfolio",
      titlePrefix: "Salom, men",
      intro: "Men",
      primaryCta: "Ishlarimni ko'rish",
      secondaryCta: "CV yuklab olish",
      stats: [
        { value: "12+", label: "Loyihalar" },
        { value: "3+", label: "Yillik amaliyot" },
        { value: "100%", label: "Responsive" },
      ],
      themeToggleLabel: "Temani almashtirish",
      languageLabel: "Til",
    },
    about: {
      eyebrow: "Men haqimda",
      title: "Toza kod, kuchli vizual va silliq tajriba.",
      text: "Men portfolio, landing page, dashboard va admin panellarni zamonaviy usulda yig'aman. Siz keyin ism, rasm va project ma'lumotlarini oson almashtirishingiz uchun hammasini sodda structure bilan qoldirdim.",
      stats: [
        { value: "3+", label: "Yillik o'rganish va amaliyot" },
        { value: "12+", label: "UI konsept va mijoz sahifalari" },
        { value: "100%", label: "Responsive layout e'tibori" },
        { value: "24/7", label: "Oson moslanadigan structure" },
      ],
    },
    skillsSection: {
      eyebrow: "Imkoniyatlar",
      title: "Mening ko'nikmalarim",
      titleAccent: "Ko'nikmalarim",
      text: "Frontend development, component architecture va responsive UI yaratishda e'tiborim asosan tez ishlash, chiroyli ko'rinish va qulay maintain qilishga qaratilgan.",
    },
    servicesSection: {
      eyebrow: "Xizmatlar",
      title: "Nimalarni qura olaman",
      titleAccent: "Qura olaman",
      text: "Bu bo'limga keyin o'zingizning xizmatlaringizni yozib chiqishingiz mumkin.",
      learnMore: "Batafsil",
      items: [
        {
          title: "Landing page dizayni",
          description: "Sotuvga yo'naltirilgan, chiroyli va tez ishlaydigan landing page'lar.",
          icon: FiMonitor,
        },
        {
          title: "React development",
          description: "Reusable komponentlar va toza code structure bilan frontend development.",
          icon: FiCode,
        },
        {
          title: "Portfolio website'lar",
          description: "Shaxsiy brend uchun mos, oson yangilanadigan portfolio website'lar.",
          icon: FiBriefcase,
        },
      ],
    },
    experience: {
      eyebrow: "Tajriba",
      title: "O'rganish yo'li va loyiha o'sishi",
      titleAccent: "loyiha o'sishi",
      text: "Bu timeline ko'rinishini xuddi resume kabi ishlatishingiz mumkin. Sana, kompaniya yoki kurs nomlarini o'zingiznikiga almashtirib olasiz.",
      items: [
        {
          year: "2026",
          title: "Murakkab frontend loyihalar",
          text: "Murakkab UI, animatsiya va responsive portfolio'lar ustida ishlash.",
        },
        {
          year: "2025",
          title: "Dashboard va admin UI",
          text: "React bilan ichki boshqaruv panellari va analitika interfeyslarini yig'ish.",
        },
        {
          year: "2024",
          title: "Freelance landing page'lar",
          text: "Mijozlar uchun promo website va personal portfolio sahifalar yaratish.",
        },
      ],
    },
    portfolio: {
      eyebrow: "Tanlangan ishlar",
      title: "Mening portfolio'm",
      titleAccent: "Portfolio",
      text: "So'nggi UI konseptlar va website loyihalar to'plami.",
      featuredBadge: "Asosiy loyiha",
      previewLabel: "Loyiha prevyusi",
      viewProject: "Loyihani ko'rish",
      github: "GitHub",
      items: [
        {
          title: "Games Project",
          description: "Vercel'ga deploy qilingan interaktiv game project. Live holatda ko'rish va ishlatib ko'rish mumkin.",
          tags: ["React", "Vercel", "Game"],
          accent: "portfolio-card--cyan",
          preview: "preview-grid",
          image: "/game-hub-preview.svg",
          href: "https://games-pi-sepia.vercel.app/",
          github: "https://github.com/kamol1708/games",
          featured: true,
        },
        {
          title: "Task Manager UI",
          description: "Dashboard uslubidagi task management sahifasi, fokus va samaradorlik uchun ishlab chiqilgan.",
          tags: ["UI/UX", "Firebase", "Charts"],
          accent: "portfolio-card--violet",
          preview: "preview-kanban",
          href: "#",
          github: "#",
        },
        {
          title: "Creative Agency",
          description: "Xizmatlar, case'lar va call-to-action bloklari bilan boyitilgan agency website.",
          tags: ["Landing", "Branding", "Vite"],
          accent: "portfolio-card--gold",
          preview: "preview-showcase",
          href: "#",
          github: "#",
        },
      ],
    },
    contact: {
      eyebrow: "Birga ishlaymizmi",
      title: "Portfolio matnlari va rasmlarini keyin bemalol almashtirasiz.",
      text: "Agar xohlasangiz keyingi bosqichda men bunga haqiqiy project rasmlari, admin panel preview yoki backend bilan yuboriladigan form ham qo'sha olaman.",
      items: [
        { label: "Email", value: profile.email, icon: FiMail, href: `mailto:${profile.email}` },
        { label: "Telefon", value: profile.phone, icon: FiPhone, href: `tel:${profile.phone}` },
        { label: "Manzil", value: profile.location, icon: FiMapPin, href: "#" },
      ],
      availability: "Freelance ishlar uchun ochiqman",
      formTitle: "Shunga o'xshash sayt kerakmi?",
      formText: "Quyidagi form demo ko'rinishida ishlaydi. Submit bosilganda xabar email orqali yuboriladi.",
      placeholders: {
        name: "Ismingiz",
        email: "Emailingiz",
        message: "Loyiha tafsilotlari",
      },
      submitIdle: "Xabar yuborish",
      submitLoading: "Yuborilmoqda...",
      success: "Xabar yuborildi. Agar bu birinchi marta bo'lsa, pochtangizga kelgan confirm linkni bosing.",
      error: "Xabar yuborilmadi. Iltimos qayta urinib ko'ring.",
      subjectFallback: "Sayt mehmoni",
    },
  },
  en: {
    profileRole: "Frontend Developer",
    bio: "I build modern, fast, and polished web experiences. I care about the balance between design and code so users get a clean and enjoyable experience.",
    navItems: [
      { id: "hero", label: "Home", icon: FiHome },
      { id: "about", label: "About", icon: FiUser },
      { id: "skills", label: "Skills", icon: HiOutlineSparkles },
      { id: "services", label: "Services", icon: FiLayers },
      { id: "portfolio", label: "Portfolio", icon: FiFolder },
      { id: "contact", label: "Contact", icon: FiMail },
    ],
    rotatingRoles: ["Frontend Developer", "UI Portfolio Builder", "React Developer"],
    hero: {
      eyebrow: "Personal Portfolio",
      titlePrefix: "Hi, I'm",
      intro: "I'm a",
      primaryCta: "View My Work",
      secondaryCta: "Download CV",
      stats: [
        { value: "12+", label: "Projects" },
        { value: "3+", label: "Years practice" },
        { value: "100%", label: "Responsive" },
      ],
      themeToggleLabel: "Toggle theme",
      languageLabel: "Language",
    },
    about: {
      eyebrow: "About Me",
      title: "Clean code, strong visuals, smooth experience.",
      text: "I build portfolios, landing pages, dashboards, and admin panels with a modern approach. I also keep the structure simple so you can easily replace names, images, and project details later.",
      stats: [
        { value: "3+", label: "Years learning and building" },
        { value: "12+", label: "UI concepts and client pages" },
        { value: "100%", label: "Responsive layout focus" },
        { value: "24/7", label: "Easy to customize structure" },
      ],
    },
    skillsSection: {
      eyebrow: "Capabilities",
      title: "My Skills",
      titleAccent: "Skills",
      text: "In frontend development, component architecture, and responsive UI, I focus on speed, polished visuals, and maintainable structure.",
    },
    servicesSection: {
      eyebrow: "Services",
      title: "What I Can Build",
      titleAccent: "Can Build",
      text: "You can later replace this section with your real services and offers.",
      learnMore: "Learn more",
      items: [
        {
          title: "Landing Page Design",
          description: "Sales-focused, polished, and fast landing pages.",
          icon: FiMonitor,
        },
        {
          title: "React Development",
          description: "Frontend development with reusable components and clean code structure.",
          icon: FiCode,
        },
        {
          title: "Portfolio Websites",
          description: "Portfolio websites for personal branding that are easy to update later.",
          icon: FiBriefcase,
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Learning path and project growth",
      titleAccent: "project growth",
      text: "You can use this timeline like a resume section and replace the dates, companies, or course names with your own.",
      items: [
        {
          year: "2026",
          title: "Advanced Frontend Projects",
          text: "Working on complex UI, animation, and responsive portfolio experiences.",
        },
        {
          year: "2025",
          title: "Dashboard and Admin UI",
          text: "Building internal dashboards and analytics interfaces with React.",
        },
        {
          year: "2024",
          title: "Freelance Landing Pages",
          text: "Creating promo websites and personal portfolio pages for clients.",
        },
      ],
    },
    portfolio: {
      eyebrow: "Selected Work",
      title: "My Portfolio",
      titleAccent: "Portfolio",
      text: "A collection of recent UI concepts and website builds.",
      featuredBadge: "Featured Project",
      previewLabel: "Project Preview",
      viewProject: "View Project",
      github: "GitHub",
      items: [
        {
          title: "Games Project",
          description: "An interactive game project deployed on Vercel. It is available live to explore and test.",
          tags: ["React", "Vercel", "Game"],
          accent: "portfolio-card--cyan",
          preview: "preview-grid",
          image: "/game-hub-preview.svg",
          href: "https://games-pi-sepia.vercel.app/",
          github: "https://github.com/kamol1708/games",
          featured: true,
        },
        {
          title: "Task Manager UI",
          description: "A dashboard-style task management interface designed for focus and productivity.",
          tags: ["UI/UX", "Firebase", "Charts"],
          accent: "portfolio-card--violet",
          preview: "preview-kanban",
          href: "#",
          github: "#",
        },
        {
          title: "Creative Agency",
          description: "An agency website enriched with services, case studies, and strong call-to-action sections.",
          tags: ["Landing", "Branding", "Vite"],
          accent: "portfolio-card--gold",
          preview: "preview-showcase",
          href: "#",
          github: "#",
        },
      ],
    },
    contact: {
      eyebrow: "Let's Work Together",
      title: "You can easily replace the portfolio texts and images later.",
      text: "If you want, I can also add real project screenshots, an admin panel preview, or a backend-powered contact form in the next step.",
      items: [
        { label: "Email", value: profile.email, icon: FiMail, href: `mailto:${profile.email}` },
        { label: "Phone", value: profile.phone, icon: FiPhone, href: `tel:${profile.phone}` },
        { label: "Location", value: profile.location, icon: FiMapPin, href: "#" },
      ],
      availability: "Available for freelance work",
      formTitle: "Need a similar website?",
      formText: "The form below works as a demo. When submitted, the message is sent by email.",
      placeholders: {
        name: "Your name",
        email: "Your email",
        message: "Project details",
      },
      submitIdle: "Send Message",
      submitLoading: "Sending...",
      success: "Message sent. If this is your first time, click the confirmation link sent to your email.",
      error: "Message was not sent. Please try again.",
      subjectFallback: "Website visitor",
    },
  },
  ru: {
    profileRole: "Frontend Developer",
    bio: "Я создаю современные, быстрые и аккуратные веб-сайты. Мне важно сохранять баланс между дизайном и кодом, чтобы пользователь получал приятный и понятный опыт.",
    navItems: [
      { id: "hero", label: "Главная", icon: FiHome },
      { id: "about", label: "Обо мне", icon: FiUser },
      { id: "skills", label: "Навыки", icon: HiOutlineSparkles },
      { id: "services", label: "Услуги", icon: FiLayers },
      { id: "portfolio", label: "Портфолио", icon: FiFolder },
      { id: "contact", label: "Контакты", icon: FiMail },
    ],
    rotatingRoles: ["Frontend Developer", "UI Portfolio Builder", "React Developer"],
    hero: {
      eyebrow: "Личное портфолио",
      titlePrefix: "Привет, я",
      intro: "Я",
      primaryCta: "Посмотреть работы",
      secondaryCta: "Скачать CV",
      stats: [
        { value: "12+", label: "Проектов" },
        { value: "3+", label: "Года практики" },
        { value: "100%", label: "Адаптивность" },
      ],
      themeToggleLabel: "Сменить тему",
      languageLabel: "Язык",
    },
    about: {
      eyebrow: "Обо мне",
      title: "Чистый код, сильный визуал и плавный опыт.",
      text: "Я создаю портфолио, landing page, dashboard и admin panel в современном стиле. При этом оставляю структуру простой, чтобы вы позже легко заменили имя, изображения и данные проектов.",
      stats: [
        { value: "3+", label: "Года обучения и практики" },
        { value: "12+", label: "UI-концептов и клиентских страниц" },
        { value: "100%", label: "Фокус на адаптивной вёрстке" },
        { value: "24/7", label: "Структура, которую легко менять" },
      ],
    },
    skillsSection: {
      eyebrow: "Возможности",
      title: "Мои навыки",
      titleAccent: "Навыки",
      text: "Во frontend-разработке, архитектуре компонентов и responsive UI я делаю упор на скорость, аккуратный вид и удобную поддержку проекта.",
    },
    servicesSection: {
      eyebrow: "Услуги",
      title: "Что я могу создать",
      titleAccent: "могу создать",
      text: "Позже вы можете заменить этот блок своими реальными услугами.",
      learnMore: "Подробнее",
      items: [
        {
          title: "Дизайн landing page",
          description: "Красивые, быстрые и ориентированные на продажи landing page.",
          icon: FiMonitor,
        },
        {
          title: "React разработка",
          description: "Frontend-разработка с reusable компонентами и чистой структурой кода.",
          icon: FiCode,
        },
        {
          title: "Сайты-портфолио",
          description: "Сайты-портфолио для личного бренда, которые легко обновлять.",
          icon: FiBriefcase,
        },
      ],
    },
    experience: {
      eyebrow: "Опыт",
      title: "Путь обучения и рост проектов",
      titleAccent: "рост проектов",
      text: "Этот timeline можно использовать как блок резюме и заменить даты, компании или названия курсов на свои.",
      items: [
        {
          year: "2026",
          title: "Сложные frontend-проекты",
          text: "Работа над сложными UI, анимациями и адаптивными портфолио.",
        },
        {
          year: "2025",
          title: "Dashboard и admin UI",
          text: "Сборка внутренних панелей управления и аналитических интерфейсов на React.",
        },
        {
          year: "2024",
          title: "Фриланс landing page",
          text: "Создание промо-сайтов и персональных страниц-портфолио для клиентов.",
        },
      ],
    },
    portfolio: {
      eyebrow: "Избранные работы",
      title: "Моё портфолио",
      titleAccent: "Портфолио",
      text: "Подборка последних UI-концептов и веб-проектов.",
      featuredBadge: "Главный проект",
      previewLabel: "Превью проекта",
      viewProject: "Открыть проект",
      github: "GitHub",
      items: [
        {
          title: "Games Project",
          description: "Интерактивный game project, задеплоенный на Vercel. Его можно открыть и протестировать в live-режиме.",
          tags: ["React", "Vercel", "Game"],
          accent: "portfolio-card--cyan",
          preview: "preview-grid",
          image: "/game-hub-preview.svg",
          href: "https://games-pi-sepia.vercel.app/",
          github: "https://github.com/kamol1708/games",
          featured: true,
        },
        {
          title: "Task Manager UI",
          description: "Интерфейс управления задачами в стиле dashboard, созданный для фокуса и продуктивности.",
          tags: ["UI/UX", "Firebase", "Charts"],
          accent: "portfolio-card--violet",
          preview: "preview-kanban",
          href: "#",
          github: "#",
        },
        {
          title: "Creative Agency",
          description: "Сайт агентства с услугами, кейсами и сильными call-to-action блоками.",
          tags: ["Landing", "Branding", "Vite"],
          accent: "portfolio-card--gold",
          preview: "preview-showcase",
          href: "#",
          github: "#",
        },
      ],
    },
    contact: {
      eyebrow: "Давайте работать вместе",
      title: "Позже вы сможете легко заменить тексты и изображения в портфолио.",
      text: "При желании я могу следующим шагом добавить реальные скриншоты проектов, превью admin panel или contact form с backend.",
      items: [
        { label: "Email", value: profile.email, icon: FiMail, href: `mailto:${profile.email}` },
        { label: "Телефон", value: profile.phone, icon: FiPhone, href: `tel:${profile.phone}` },
        { label: "Локация", value: profile.location, icon: FiMapPin, href: "#" },
      ],
      availability: "Открыт для фриланс-заказов",
      formTitle: "Нужен похожий сайт?",
      formText: "Форма ниже работает как демо. После отправки сообщение уходит по email.",
      placeholders: {
        name: "Ваше имя",
        email: "Ваш email",
        message: "Детали проекта",
      },
      submitIdle: "Отправить сообщение",
      submitLoading: "Отправка...",
      success: "Сообщение отправлено. Если это первый раз, откройте письмо и подтвердите отправку по ссылке.",
      error: "Сообщение не отправлено. Пожалуйста, попробуйте снова.",
      subjectFallback: "Посетитель сайта",
    },
  },
} satisfies Record<Language, unknown>;

const languageOptions: Array<{ code: Language; label: string }> = [
  { code: "uz", label: "UZ" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

const mockupLines = new Array(4).fill(null);

function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [language, setLanguage] = useState<Language>("uz");
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const content = translations[language];
  const navItems = content.navItems;
  const rotatingRoles = content.rotatingRoles;
  const resumeUrl = resumeByLanguage[language];

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (
      savedLanguage === "uz" ||
      savedLanguage === "en" ||
      savedLanguage === "ru"
    ) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -35% 0px",
        threshold: [0.2, 0.35, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navItems]);

  useEffect(() => {
    setTypedText("");
    setRoleIndex(0);
    setIsDeleting(false);
  }, [language]);

  useEffect(() => {
    const currentRole = rotatingRoles[roleIndex];
    const isCompleted = typedText === currentRole;
    const delay = isCompleted ? 1400 : isDeleting ? 45 : 85;

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting && typedText !== currentRole) {
        setTypedText(currentRole.slice(0, typedText.length + 1));
        return;
      }

      if (!isDeleting && isCompleted) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && typedText.length > 0) {
        setTypedText(currentRole.slice(0, typedText.length - 1));
        return;
      }

      setIsDeleting(false);
      setRoleIndex((current) => (current + 1) % rotatingRoles.length);
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [typedText, isDeleting, roleIndex, rotatingRoles]);

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitMessage("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio inquiry from ${
            formData.name || content.contact.subjectFallback
          }`,
          _template: "table",
          _captcha: "false",
          _replyto: formData.email,
        }),
      });

      const data = (await response.json()) as { success?: string; message?: string };

      if (!response.ok) {
        throw new Error(data.message || content.contact.error);
      }

      setSubmitMessage(content.contact.success);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : content.contact.error
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleCardMove(event: MouseEvent<HTMLElement>, intensity = 14) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = (x / rect.width - 0.5) * intensity;
    const rotateX = (0.5 - y / rect.height) * intensity;

    card.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
  }

  function handleCardLeave(event: MouseEvent<HTMLElement>) {
    const card = event.currentTarget;
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <main className="portfolio-shell" data-theme={theme}>
      <div className="portfolio-backdrop" />

      <section id="hero" className="portfolio-panel portfolio-panel--hero">
        <aside className="floating-sidebar" aria-label="Section navigation">
          {navItems.map(({ id, label, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`floating-sidebar__item ${
                activeSection === id ? "is-active" : ""
              }`}
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </aside>

        <div className="portfolio-panel__content hero-grid">
          <div className="hero-copy">
            <div className="hero-toolbar">
              <span className="eyebrow">{content.hero.eyebrow}</span>

              <div className="hero-toolbar__actions">
                <div
                  className="language-switcher"
                  role="group"
                  aria-label={content.hero.languageLabel}
                >
                  {languageOptions.map(({ code, label }) => (
                    <button
                      key={code}
                      type="button"
                      className={`language-switcher__button ${
                        language === code ? "is-active" : ""
                      }`}
                      onClick={() => setLanguage(code)}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className="theme-toggle"
                  onClick={() =>
                    setTheme((current) => (current === "dark" ? "light" : "dark"))
                  }
                  aria-label={content.hero.themeToggleLabel}
                >
                  {theme === "dark" ? <FiSun /> : <FiMoon />}
                </button>
              </div>
            </div>

            <h1>
              {content.hero.titlePrefix} <span>{profile.name}</span>
            </h1>
            <p className="hero-role">
              {content.hero.intro} <span>{typedText}</span>
            </p>
            <p className="hero-bio">{content.bio}</p>

            <div className="hero-actions">
              <a href="#portfolio" className="primary-btn">
                {content.hero.primaryCta}
              </a>
              <a
                href={resumeUrl}
                className="secondary-btn"
              >
                {content.hero.secondaryCta}
              </a>
            </div>

            <div className="hero-socials">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="social-pill"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon />
                  {label}
                </a>
              ))}
            </div>

            <div className="hero-mini-stats">
              {content.hero.stats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="avatar-ring">
              <img src={profile.image} alt={profile.name} className="avatar" />
            </div>

            <div className="tech-orbit">
              {techStack.map(({ name, icon: Icon }) => (
                <div key={name} className="tech-orbit__badge" title={name}>
                  <Icon />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="portfolio-panel">
        <div className="portfolio-panel__content about-grid">
          <div className="about-card about-card--glow">
            <span className="eyebrow">{content.about.eyebrow}</span>
            <h2>{content.about.title}</h2>
            <p>{content.about.text}</p>
          </div>

          <div className="about-card stats-grid">
            {content.about.stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="portfolio-panel">
        <div className="portfolio-panel__content skills-grid">
          <div className="skills-visual">
            <div className="skills-illustration">
              <span className="skills-illustration__glow" />
              <div className="skills-icons">
                {techStack.map(({ name, icon: Icon }) => (
                  <div key={name} className="skills-icons__item">
                    <Icon />
                  </div>
                ))}
              </div>
              <div className="skills-illustration__hand" />
            </div>
          </div>

          <div className="skills-copy">
            <span className="eyebrow">{content.skillsSection.eyebrow}</span>
            <h2>
              {content.skillsSection.title.replace(
                content.skillsSection.titleAccent,
                ""
              ).trim()}{" "}
              <span>{content.skillsSection.titleAccent}</span>
            </h2>
            <p>{content.skillsSection.text}</p>

            <div className="skill-list">
              {skills.map(({ name, level, icon: Icon }) => (
                <div key={name} className="skill-row">
                  <div className="skill-row__label">
                    <span className="skill-row__icon">
                      <Icon />
                    </span>
                    <span>{name}</span>
                    <strong>{level}%</strong>
                  </div>
                  <div className="skill-row__bar">
                    <span style={{ width: `${level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="portfolio-panel">
        <div className="portfolio-panel__content">
          <div className="section-heading section-heading--left">
            <span className="eyebrow">{content.servicesSection.eyebrow}</span>
            <h2>
              {content.servicesSection.title.replace(
                content.servicesSection.titleAccent,
                ""
              ).trim()}{" "}
              <span>{content.servicesSection.titleAccent}</span>
            </h2>
            <p>{content.servicesSection.text}</p>
          </div>

          <div className="services-grid">
            {content.servicesSection.items.map(({ title, description, icon: Icon }) => (
              <article key={title} className="service-card">
                <div className="service-card__icon">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#contact" className="service-card__link">
                  {content.servicesSection.learnMore}
                  <FiArrowUpRight />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-panel">
        <div className="portfolio-panel__content experience-grid">
          <div className="experience-copy">
            <span className="eyebrow">{content.experience.eyebrow}</span>
            <h2>
              {content.experience.title.replace(
                content.experience.titleAccent,
                ""
              ).trim()}{" "}
              <span>{content.experience.titleAccent}</span>
            </h2>
            <p>{content.experience.text}</p>
          </div>

          <div className="timeline">
            {content.experience.items.map((item) => (
              <div key={item.year + item.title} className="timeline-item">
                <span className="timeline-item__year">{item.year}</span>
                <div className="timeline-item__content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio-panel">
        <div className="portfolio-panel__content">
          <div className="section-heading">
            <span className="eyebrow">{content.portfolio.eyebrow}</span>
            <h2>
              {content.portfolio.title.replace(content.portfolio.titleAccent, "").trim()}{" "}
              <span>{content.portfolio.titleAccent}</span>
            </h2>
            <p>{content.portfolio.text}</p>
          </div>

          <div className="portfolio-grid">
            {content.portfolio.items.map((project) => (
              <article
                key={project.title}
                className={`portfolio-card ${project.accent} ${
                  project.featured ? "portfolio-card--featured" : ""
                }`}
                onMouseMove={handleCardMove}
                onMouseLeave={handleCardLeave}
              >
                <a
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                  className="portfolio-card__preview-link"
                >
                  <div className="portfolio-card__preview">
                    {project.featured ? (
                      <span className="portfolio-card__badge">
                        {content.portfolio.featuredBadge}
                      </span>
                    ) : null}
                    {project.image ? (
                      <div className="portfolio-card__live-preview">
                        <div className="portfolio-card__live-bar">
                          <span />
                          <span />
                          <span />
                          <small>{content.portfolio.previewLabel}</small>
                        </div>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="portfolio-card__image"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ) : (
                      <div className={`mockup-window ${project.preview}`}>
                        <div className="mockup-window__bar">
                          <span />
                          <span />
                          <span />
                        </div>

                        <div className="mockup-window__body">
                          {project.preview === "preview-kanban" && (
                            <div className="mockup-columns">
                              {new Array(3).fill(null).map((_, index) => (
                                <div key={index} className="mockup-column">
                                  {new Array(3).fill(null).map((__, itemIndex) => (
                                    <span key={itemIndex} />
                                  ))}
                                </div>
                              ))}
                            </div>
                          )}

                          {project.preview !== "preview-kanban" && (
                            <>
                              <div className="mockup-hero" />
                              <div className="mockup-cards">
                                {mockupLines.map((_, index) => (
                                  <span key={index} />
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </a>

                <div className="portfolio-card__body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="portfolio-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="portfolio-card__actions">
                    <a
                      href={project.href}
                      target={project.href.startsWith("http") ? "_blank" : undefined}
                      rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                      className="portfolio-card__link"
                    >
                      {content.portfolio.viewProject}
                      <FiArrowUpRight />
                    </a>
                    <a
                      href={project.github}
                      target={project.github.startsWith("http") ? "_blank" : undefined}
                      rel={project.github.startsWith("http") ? "noreferrer" : undefined}
                      className="portfolio-card__link portfolio-card__link--ghost"
                    >
                      <SiGithub />
                      {content.portfolio.github}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="portfolio-panel">
        <div className="portfolio-panel__content contact-grid">
          <div className="contact-copy">
            <span className="eyebrow">{content.contact.eyebrow}</span>
            <h2>{content.contact.title}</h2>
            <p>{content.contact.text}</p>

            <div className="contact-list">
              {content.contact.items.map(({ label, value, icon: Icon, href }) => (
                <a key={label} href={href} className="contact-item">
                  <span className="contact-item__icon">
                    <Icon />
                  </span>
                  <span>
                    <strong>{label}</strong>
                    <small>{value}</small>
                  </span>
                </a>
              ))}
            </div>

            <div className="contact-socials">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="social-pill">
                  <Icon />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card__rating">
              <span>
                <FiStar />
                {content.contact.availability}
              </span>
            </div>
            <h3>{content.contact.formTitle}</h3>
            <p>{content.contact.formText}</p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder={content.contact.placeholders.name}
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder={content.contact.placeholders.email}
                value={formData.email}
                onChange={handleInputChange}
              />
              <textarea
                name="message"
                placeholder={content.contact.placeholders.message}
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
              />

              <button
                type="submit"
                className="primary-btn primary-btn--inline"
                disabled={isSubmitting}
              >
                <FiSend />
                {isSubmitting
                  ? content.contact.submitLoading
                  : content.contact.submitIdle}
              </button>

              {submitMessage ? (
                <p className="form-feedback form-feedback--success">{submitMessage}</p>
              ) : null}
              {submitError ? (
                <p className="form-feedback form-feedback--error">{submitError}</p>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
