"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export type Lang = "ko" | "en" | "es"

export const langNames: Record<Lang, string> = {
  ko: "Korean",
  en: "English",
  es: "Spanish",
}

const dictionaries = {
  ko: {
    nav: {
      about: "About",
      aboutChildren: [
        { label: "회사소개", url: "/about/company" },
        { label: "사업관리 방법론", url: "/business" },
      ],
      business: "Business",
      businessChildren: [
        { label: "통신인프라 구축 및 컨설팅", url: "/business/communication" },
        { label: "NI / SI", url: "/business/ni-si" },
        { label: "통합보안솔루션", url: "/business/features" },
        { label: "ITS 및 BIS 구축사업", url: "/business/applications" },
        { label: "Novagate V3", url: "/business/functions" },
      ],
      customers: "Customers",
      customersChildren: [{ label: "주요고객사", url: "/customers" }],
      news: "News",
      home: "홈",
      novagate: "Novagate V3",
    },
    slider: [
      {
        tagline: "끊김없는 소통, 신뢰할 수 있는 기술로 실현합니다.",
        line1: "사람과 세상을 이어주는",
        line2: "따뜻한 네트워크 세상을 열어갑니다",
        highlight: "네트워크",
      },
      {
        tagline: "한걸음 한걸음 쌓아온 오늘이, 내일의 혁신을 만듭니다.",
        line1: "끊임없는 도전과 혁신으로",
        line2: "더 나은 미래를 만들어갑니다",
        highlight: "혁신",
      },
      {
        tagline: "보이지 않는 연결이 모여 사람과 도시, 그리고 세상을 변화시킵니다.",
        line1: "네트워크는 기술을 넘어",
        line2: "세상을 움직이는 보편의 언어입니다.",
        highlight: "글로벌",
      },
    ],
    main: {
      businessAreaTitle: "주요 사업 분야",
      businessAreaDesc: "ICT 기술로 더 나은 연결을 만듭니다.",
      services: [
        "통신인프라 구축 & 컨설팅",
        "ITS & BIS 구축",
        "통합보안솔루션",
        "NI / SI 통합",
      ],
      novagateBannerAlt:
        "NOVAGATE V3.0 플래그십 제품과 CC인증, 국정원 검증필 암호모듈, Zero-Install, TCO 절감 기능 안내",
    },
    businessNav: {
      functions: "주요기능",
      specifications: "제품규격",
      architecture: "적용방안",
    },
    functions: {
      heroTitle: "주요기능",
      heroSub: "Novagate V3.0 기능 상세",
      titles: [
        "1. 보안관리 - 클라이언트장치 포트 구성 및 포트간 접근제어",
        "2. 보안관리 - 클라이언트장치 및 게이트웨이장치 접근 제어",
        "3. 네트워크 구성 - 게이트웨이 장치 네트워크 구성",
        "4. 네트워크 구성 - 사용자PC 그룹별 VLAN 구성",
        "5. 장애 및 운영관리 - 웹 기반 관리환경",
        "6. 장애 및 운영관리 - 보안채널포트에 연결된 장비에 대한 접근제어 및 네트워크 구성",
        "7. 장애 및 운영관리 - 클라이언트장치 장애 시 PC 동작",
        "8. 장애 및 운영관리 - 클라이언트장치 장치 상태 관리",
      ],
      images: [
        "/images/novagate-v3/1.jpg",
        "/images/novagate-v3/2.jpg",
        "/images/novagate-v3/3.jpg",
        "/images/novagate-v3/4.jpg",
        "/images/novagate-v3/5.jpg",
        "/images/novagate-v3/6.jpg",
        "/images/novagate-v3/7.jpg",
        "/images/novagate-v3/8.jpg",
      ],
    },
    specifications: {
      heroTitle: "제품규격",
      heroSub: "Novagate V3.0 상세 사양",
      image: "/images/products/novagate-v3-specifications.jpg",
      itemHeader: "항목",
      specHeader: "사양",
      rows: [
        ["제품명", "Novagate V3.0"],
        ["암호화 방식", "SSL/TLS 기반 VPN"],
        ["지원 프로토콜", "TCP/IP, SSL/TLS, VPN"],
        ["포트 구성", "일반포트, 보안채널포트"],
        ["네트워크 지원", "제1네트워크, 제2네트워크 분리 지원"],
        ["관리 방식", "게이트웨이 중앙집중식 관리"],
        ["적용 환경", "보안영역 접속, 망분리 환경"],
      ],
    },
    architecture: {
      heroTitle: "제품아키텍처",
      heroSub: "Novagate V3.0 시스템 구조",
      image: "/images/products/architecture-diagram.png",
      compositionTitle: "제품 구성",
      compositionDesc: "Novagate V3.0은 게이트웨이 장치와 클라이언트 장치로 구성 됩니다",
      cards: [
        ["전용 OS 탑재", "Novagate는 전용OS가 탑재된 Appliance 제품으로 구성되어 안정적이고 최적화된 성능을 제공합니다."],
        ["보안 콘솔 관리", "클라이언트장치는 Client Console 포트를 통해서만 네트워크 설정이 가능하며, 보안 정책은 Admin Console을 통해 관리 가능합니다."],
        ["로그 중앙 관리", "게이트웨이 장치와 클라이언트장치의 로그는 게이트웨이 장치에 저장되어 중앙에서 통합 관리됩니다."],
        ["웹 기반 관리", "관리자PC는 웹 브라우저 기반의 관리 콘솔을 통해 게이트웨이장치에 대한 시스템 모니터링, 보안정책 설정 및 클라이언트장치 관리가 가능합니다."],
        ["LED 상태 표시", "클라이언트장치는 외부 LED를 통해 장치 상태 확인이 가능하여 직관적인 모니터링을 제공합니다."],
        ["모듈형 구조", "VPN, Monitoring, Bridge, Log 등 다양한 모듈로 구성되어 확장성과 유지보수성이 뛰어납니다."],
      ],
    },
    company: {
      slogan: "세상을 연결하는 기술, 일상의 가치를 만드는 기업",
      name: "아이씨티코리아 ㈜",
      address: "(14055) 경기도 안양시 동안구 시민대로327번길 11-41 206호",
      email: "E-Mail : ttykill@hanmail.net",
    },
  },
  en: {
    nav: {
      about: "About",
      aboutChildren: [
        { label: "Company Introduction", url: "/about/company" },
        { label: "Business Management Methodology", url: "/business" },
      ],
      business: "Business",
      businessChildren: [
        { label: "Communication Infrastructure & Consulting", url: "/business/communication" },
        { label: "NI / SI", url: "/business/ni-si" },
        { label: "Integrated Security Solution", url: "/business/features" },
        { label: "ITS & BIS Implementation", url: "/business/applications" },
        { label: "Novagate V3", url: "/business/functions" },
      ],
      customers: "Customers",
      customersChildren: [{ label: "Major Customers", url: "/customers" }],
      news: "News",
      home: "Home",
      novagate: "Novagate V3",
    },
    slider: [
      {
        tagline: "We realize seamless communication with reliable technology.",
        line1: "Connecting people and the world,",
        line2: "we open up a warmer world of networks",
        highlight: "",
      },
      {
        tagline: "Every step we take today creates the innovations of tomorrow.",
        line1: "With constant challenge and innovation,",
        line2: "we build a better future",
        highlight: "",
      },
      {
        tagline: "Invisible connections come together to change people, cities, and the world.",
        line1: "Networks go beyond technology —",
        line2: "they are the universal language that moves the world.",
        highlight: "",
      },
    ],
    main: {
      businessAreaTitle: "Key Business Areas",
      businessAreaDesc: "Creating better connections with ICT technology.",
      services: [
        "Communication Infrastructure & Consulting",
        "ITS & BIS Implementation",
        "Integrated Security Solution",
        "NI / SI Integration",
      ],
      novagateBannerAlt:
        "NOVAGATE V3.0 flagship product with CC certification, NIS-validated cryptographic module, Zero-Install, and TCO reduction",
    },
    businessNav: {
      functions: "Features",
      specifications: "Specifications",
      architecture: "Architecture",
    },
    functions: {
      heroTitle: "Key Features",
      heroSub: "Novagate V3.0 Feature Details",
      titles: [
        "1. Security Management - Client Device Port Configuration and Inter-Port Access Control",
        "2. Security Management - Client & Gateway Device Access Control",
        "3. Network Configuration - Gateway Device Network Configuration",
        "4. Network Configuration - Group-Based VLAN Configuration for User PCs",
        "5. Security Management - Policy-Based Security Management and Access Control for Client Devices",
        "6. Troubleshooting & Operation Management - Access Control & Network Configuration for Devices Connected to Security Channel Ports",
        "7. Troubleshooting & Operation Management - PC Operation During Client Device Failure",
        "8. Troubleshooting & Operation Management - Client Device Status Management",
      ],
      images: [
        "/images/novagate-v3/e1.jpg",
        "/images/novagate-v3/e2.jpg",
        "/images/novagate-v3/e3.jpg",
        "/images/novagate-v3/e4.jpg",
        "/images/novagate-v3/e5.jpg",
        "/images/novagate-v3/e6.jpg",
        "/images/novagate-v3/e7.jpg",
        "/images/novagate-v3/e8.jpg",
      ],
    },
    specifications: {
      heroTitle: "Specifications",
      heroSub: "Novagate V3.0 Detailed Specifications",
      image: "/images/novagate-v3/specs-en.jpg",
      itemHeader: "Item",
      specHeader: "Specification",
      rows: [
        ["Product Name", "Novagate V3.0"],
        ["Encryption", "SSL/TLS-based VPN"],
        ["Supported Protocols", "TCP/IP, SSL/TLS, VPN"],
        ["Port Configuration", "General ports, Security Channel ports"],
        ["Network Support", "Separated Network 1 / Network 2 support"],
        ["Management", "Gateway-based centralized management"],
        ["Environments", "Secure zone access, network separation"],
      ],
    },
    architecture: {
      heroTitle: "Product Architecture",
      heroSub: "Novagate V3.0 System Structure",
      image: "/images/novagate-v3/architecture-en.png",
      compositionTitle: "Product Composition",
      compositionDesc: "Novagate V3.0 consists of a gateway device and client devices",
      cards: [
        ["Dedicated OS", "Novagate is an appliance product with a dedicated OS, providing stable and optimized performance."],
        ["Secure Console Management", "Client devices can only be configured through the Client Console port, and security policies are managed via the Admin Console."],
        ["Centralized Log Management", "Logs from the gateway and client devices are stored on the gateway device and managed centrally."],
        ["Web-Based Management", "Through a web-based management console, the admin PC can monitor the gateway, configure security policies, and manage client devices."],
        ["LED Status Indicators", "Client devices provide intuitive monitoring through external LED status indicators."],
        ["Modular Structure", "Composed of various modules such as VPN, Monitoring, Bridge, and Log, offering excellent scalability and maintainability."],
      ],
    },
    company: {
      slogan: "Technology that connects the world, a company that creates everyday value",
      name: "ICT KOREA Co., Ltd.",
      address: "#206, 11-41, Simin-daero 327beon-gil, Dongan-gu, Anyang-si, Gyeonggi-do, Korea (14055)",
      email: "E-Mail: ttykill@hanmail.net",
    },
  },
  es: {
    nav: {
      about: "About",
      aboutChildren: [
        { label: "Presentación de la empresa", url: "/about/company" },
        { label: "Metodología de gestión de negocios", url: "/business" },
      ],
      business: "Business",
      businessChildren: [
        { label: "Infraestructura de comunicaciones y consultoría", url: "/business/communication" },
        { label: "NI / SI", url: "/business/ni-si" },
        { label: "Solución de seguridad integrada", url: "/business/features" },
        { label: "Implementación de ITS y BIS", url: "/business/applications" },
        { label: "Novagate V3", url: "/business/functions" },
      ],
      customers: "Customers",
      customersChildren: [{ label: "Principales clientes", url: "/customers" }],
      news: "News",
      home: "Inicio",
      novagate: "Novagate V3",
    },
    slider: [
      {
        tagline: "Realizamos una comunicación sin interrupciones con tecnología fiable.",
        line1: "Conectando a las personas con el mundo,",
        line2: "abrimos un mundo de redes más cálido",
        highlight: "",
      },
      {
        tagline: "Cada paso que damos hoy crea las innovaciones del mañana.",
        line1: "Con constante desafío e innovación,",
        line2: "construimos un futuro mejor",
        highlight: "",
      },
      {
        tagline: "Las conexiones invisibles se unen para transformar personas, ciudades y el mundo.",
        line1: "Las redes van más allá de la tecnología —",
        line2: "son el lenguaje universal que mueve al mundo.",
        highlight: "",
      },
    ],
    main: {
      businessAreaTitle: "Principales áreas de negocio",
      businessAreaDesc: "Creamos mejores conexiones con tecnología TIC.",
      services: [
        "Infraestructura de comunicaciones y consultoría",
        "Implementación de ITS y BIS",
        "Solución de seguridad integrada",
        "Integración NI / SI",
      ],
      novagateBannerAlt:
        "Producto insignia NOVAGATE V3.0 con certificación CC, módulo criptográfico validado, Zero-Install y reducción de TCO",
    },
    businessNav: {
      functions: "Funciones",
      specifications: "Especificaciones",
      architecture: "Arquitectura",
    },
    functions: {
      heroTitle: "Funciones principales",
      heroSub: "Detalles de las funciones de Novagate V3.0",
      titles: [
        "1. Gestión de seguridad - Configuración de puertos del dispositivo cliente y control de acceso entre puertos",
        "2. Gestión de seguridad - Control de acceso de los dispositivos cliente y pasarela",
        "3. Configuración de red - Configuración de red del dispositivo de pasarela",
        "4. Configuración de red - Configuración VLAN por grupos para los PC de usuario",
        "5. Gestión de seguridad - Gestión de seguridad y control de acceso según la política del dispositivo cliente",
        "6. Gestión de fallos y operación - Control de acceso y configuración de red para los equipos conectados a los puertos de canal de seguridad",
        "7. Gestión de fallos y operación - Funcionamiento del PC ante fallos del dispositivo cliente",
        "8. Gestión de fallos y operación - Gestión del estado del dispositivo cliente",
      ],
      images: [
        "/images/novagate-v3/s1.jpg",
        "/images/novagate-v3/s2.jpg",
        "/images/novagate-v3/s3.jpg",
        "/images/novagate-v3/s4.jpg",
        "/images/novagate-v3/s5.jpg",
        "/images/novagate-v3/s6.jpg",
        "/images/novagate-v3/s7.jpg",
        "/images/novagate-v3/s8.jpg",
      ],
    },
    specifications: {
      heroTitle: "Especificaciones",
      heroSub: "Especificaciones detalladas de Novagate V3.0",
      image: "/images/novagate-v3/specs-es.jpg",
      itemHeader: "Elemento",
      specHeader: "Especificación",
      rows: [
        ["Nombre del producto", "Novagate V3.0"],
        ["Cifrado", "VPN basada en SSL/TLS"],
        ["Protocolos admitidos", "TCP/IP, SSL/TLS, VPN"],
        ["Configuración de puertos", "Puertos generales, puertos de canal de seguridad"],
        ["Soporte de red", "Soporte de red 1 / red 2 separadas"],
        ["Gestión", "Gestión centralizada mediante pasarela"],
        ["Entornos", "Acceso a zonas de seguridad, separación de redes"],
      ],
    },
    architecture: {
      heroTitle: "Arquitectura del producto",
      heroSub: "Estructura del sistema Novagate V3.0",
      image: "/images/novagate-v3/architecture-es.png",
      compositionTitle: "Composición del producto",
      compositionDesc: "Novagate V3.0 se compone de un dispositivo de pasarela y dispositivos cliente",
      cards: [
        ["OS dedicado", "Novagate es un producto appliance con un OS dedicado que ofrece un rendimiento estable y optimizado."],
        ["Gestión de consola segura", "Los dispositivos cliente solo pueden configurarse a través del puerto Client Console, y las políticas de seguridad se gestionan mediante la Admin Console."],
        ["Gestión centralizada de registros", "Los registros de los dispositivos de pasarela y cliente se almacenan en el dispositivo de pasarela y se gestionan de forma centralizada."],
        ["Gestión basada en web", "A través de una consola de gestión basada en web, el PC del administrador puede supervisar la pasarela, configurar políticas de seguridad y gestionar los dispositivos cliente."],
        ["Indicadores LED de estado", "Los dispositivos cliente ofrecen una supervisión intuitiva mediante indicadores LED externos."],
        ["Estructura modular", "Compuesto por diversos módulos como VPN, supervisión, Bridge y Log, con excelente escalabilidad y mantenimiento."],
      ],
    },
    company: {
      slogan: "Tecnología que conecta al mundo, una empresa que crea valor cotidiano",
      name: "ICT KOREA Co., Ltd.",
      address: "#206, 11-41, Simin-daero 327beon-gil, Dongan-gu, Anyang-si, Gyeonggi-do, Corea (14055)",
      email: "E-Mail: ttykill@hanmail.net",
    },
  },
} as const

export type Dictionary = (typeof dictionaries)["ko"]

const LanguageContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void; t: Dictionary }>({
  lang: "ko",
  setLang: () => {},
  t: dictionaries.ko,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [lang, setLangState] = useState<Lang>("ko")

  useEffect(() => {
    const saved = window.localStorage.getItem("ict-lang") as Lang | null
    if (saved && ["ko", "en", "es"].includes(saved)) {
      setLangState(saved)
    }
  }, [])

  const setLang = (next: Lang) => {
    setLangState(next)
    window.localStorage.setItem("ict-lang", next)
    router.push("/")
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
