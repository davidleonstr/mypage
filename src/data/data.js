const PROFILE = {
  name: "David León",
  role: "Estudiante de Ingeniería en Sistemas Informáticos y Técnico en Desarrollo de Software.",
  bio: "Me gusta entender cómo funcionan realmente las cosas y cuestionar el “por qué” detrás de los sistemas para crear soluciones limpias, eficientes y con propósito, trabajando de forma autónoma, práctica y adaptable, siempre buscando equilibrar funcionalidad, diseño y escalabilidad mientras exploro nuevas formas de construir software más útil, dinámico y humano.",
  email: "davidalfonsoleoncarmona@gmail.com",
  github: "https://github.com/davidleonstr",
};

const PROJECTS = [
  {
    title: "IC — Intelligent Clipboard",
    description: "Aplicación ligera de escritorio para PyQt6 que corre en segundo plano y automatiza el flujo de trabajo del portapapeles mediante Inteligencia Artificial (API OpenAI/Google), cifrando de forma local las credenciales mediante un cifrado XOR por semilla.",
    tags: ["Python", "PyQt6", "AI API", "Security"],
    link: "https://github.com/davidleonstr/intelligent-clipboard"
  },
  {
    title: "QFlow",
    description: "Un microframework moderno en Python diseñado para agilizar el desarrollo de aplicaciones de escritorio PyQt/PySide mediante decoradores y abstracciones que eliminan el código redundante o boilerplate.",
    tags: ["Python", "PyQt5/6", "PySide2/6", "Framework"],
    link: "https://github.com/davidleonstr/qflow"
  },
  {
    title: "Pym",
    description: "Motor web experimental escrito en Python que integra un servidor compatible con WSGI, un sistema de renderizado dinámico y middleware extensible, inspirado directamente en el clásico modelo embebido de PHP.",
    tags: ["Python", "WSGI", "Web Engine", "Backend"],
    link: "https://github.com/davidleonstr/pym"
  },
  {
    title: "Indura",
    description: "Conjunto de utilidades y microframework en PHP enfocado en el desarrollo rápido de aplicaciones mediante enrutadores de vistas/recursos, layouts, controladores y modelos. ¡Proyecto galardonado y ganador en una Hackathon local!",
    tags: ["PHP 8.0+", "Microframework", "MVC", "Award-Winning"],
    link: "https://davidleonstr.github.io/indura/"
  },
  {
    title: "GGUF-API",
    description: "Wrapper de API de alto rendimiento basado en Flask para servir modelos GGUF (Llama.cpp) de manera local con una interfaz compatible con OpenAI, soportando streaming de tokens en tiempo real vía SSE y validación estricta con Pydantic.",
    tags: ["Python", "Flask", "GGUF", "Llama.cpp", "Pydantic"],
    link: "https://github.com/davidleonstr/gguf-api"
  },
  {
    title: "RPack",
    description: "Librería de Python y CLI para la creación, lectura y administración de paquetes de recursos binarios comprimidos (zlib/lzma) con verificación de integridad por SHA-256, soporte de sistema de archivos virtual (VFS) y compatibilidad con PyInstaller.",
    tags: ["Python", "CLI", "Binary Packaging", "VFS", "Compression"],
    link: "https://github.com/davidleonstr/rpack"
  },
  {
    title: "DirScanner",
    description: "Utilidad de línea de comandos en Python que escanea directorios recursivamente, filtra mediante patrones glob avanzados de estilo .gitignore y unifica los contenidos textuales en un JSON estructurado para auditorías o contextos de IA.",
    tags: ["Python", "CLI", "Automation", "JSON Processing"],
    link: "https://github.com/davidleonstr/dirscanner"
  }
];

const SKILLS = [
  {
    category: "Frontend Development",
    items: ["HTML5", "CSS3", "JavaScript", "React", "TailwindCSS"]
  },
  {
    category: "Backend Development",
    items: ["Python", "Node.js", "PHP", "Java"]
  },
  {
    category: "Bases de Datos",
    items: ["MongoDB", "PostgreSQL", "MySQL"]
  },
  {
    category: "Herramientas & Entorno",
    items: ["Git", "Figma", "Postman", "Linux", "VS Code"]
  }
];

export { PROFILE, SKILLS, PROJECTS };