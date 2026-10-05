// Lo que el asistente sabe de Will. Sale de los datos de index.html (PERFIL, EXPERIENCIA,
// PROYECTOS, CERTIFICACIONES, CURSOS, STACK): si cambias algo allá, actualízalo aquí también.
// No pongas aquí nada que no quieras que cualquier visitante lea (dirección, teléfono, sueldo…).

export const PERFIL = `
# Wilfrido Becerril ("Will B.")
- Puesto actual: Líder de TI, Desarrollo y Mejora Continua en BSD SmartPayroll (México).
- En TI desde 2014 (más de ${new Date().getFullYear() - 2014} años).
- Contacto: wbecerril@smartsupport.com.mx · LinkedIn: https://www.linkedin.com/in/wilfrido-becerril-arroyo · GitHub: https://github.com/WillBC1991
- Portafolio: https://willbc1991.github.io (tiene las apps Sobre mí, Proyectos, Currículum, Certificaciones, Contacto y Terminal; el CV en PDF se descarga desde Currículum).

## Experiencia
- 2017 – actual · Líder de TI, Desarrollo y Mejora Continua · BSD SmartPayroll. Dirige el área de TI: desarrollo de herramientas internas, sistemas de RH, infraestructura, soporte y mejora continua. Empezó como Coordinador de Infraestructura de TI, administrando los recursos de TI de múltiples proyectos con base en ITIL y SLAs: help desk, Office 365, redes de voz y datos, centro de datos, respaldos, continuidad del servicio, proveedores e impulso de ISO 27001.
- 2016 – 2017 · Coordinador de Soporte de TI · Praxis. Líder de operación del área de informática: equipo de cómputo de usuario final, compras y cotizaciones, control de activos, Directorio Activo, atención a usuarios VIP, cierre mensual de SLAs y planes estratégicos de operación.
- 2015 – 2016 · Coordinador de las áreas de operación · Mainbit (proyecto Instituto Mexicano del Petróleo). Operación en la sede de México y foráneas: solicitudes de servicios TIC, implementación de equipos, garantías, gestión del personal y revisión de SLAs.
- 2014 – 2015 · Ingeniero en sitio · Instituto Mexicano del Petróleo. Mantenimiento de equipos de cómputo e impresoras, migración de datos, imágenes de sistema operativo y atención de tickets.
- 2013 · Servicio social · PEMEX. Alta de equipos al dominio, soporte remoto, equipos móviles, mantenimiento preventivo y correctivo.

## Formación
- Licenciatura en Ciencias de la Informática · Instituto Leonardo Bravo (2010 – 2014).
- Técnico en Mantenimiento Preventivo y Correctivo · CETIS 33 (2006 – 2010).

## Proyectos (sistemas que ha construido)
- Smart Support: plataforma ITSM para la mesa de servicio. Centraliza solicitudes de soporte, automatiza los flujos de atención y deja trazabilidad. Roles con permisos separados, autenticación obligatoria, desplegada en la nube. Tecnologías: ITSM/ITIL, Firebase Auth, Firestore, Google Cloud Run. Sitio: https://www.smartsupport.com.mx
- Smart Core: PMO (oficina de gestión de proyectos) para controlar proyectos y procesos desde un solo lugar, con acceso por usuario y reportes en PDF y Excel. Google Cloud Run.
- Smart RH: intranet de autoservicio para Recursos Humanos (prototipo en Firebase con acceso por roles).
- Clip-BSD: CRM para conciliación bancaria, control de comisiones e historial de transacciones de las terminales de cobro de cada sucursal. Firebase, Google AI Studio, dashboards.
- Smart Contabilidad: CRM con inteligencia artificial para el equipo contable; registra la jornada laboral y muestra el avance del equipo en tiempo real. Firebase, Google AI Studio, Cloud Run.
- Smart Operaciones: gestión de la operación y del ciclo de vida de los contratos, con analítica. Incluye Llamadas de Calidad integrado con la API de Zoom Phone.
- Incidencias BioTime: integración por API con BioTime Cloud que cruza checadas biométricas contra incidencias y elimina el cruce manual en Excel.
- Extractor de asistencia: herramienta web que lee reportes de asistencia en PDF de distintos distribuidores y los exporta a Excel listos para nómina (PDF.js, SheetJS).

## Certificaciones
- PMP – Profesional en Dirección de Proyectos (PMI, 2025).
- AWS Certified Cloud Practitioner (2025).
- ISO/IEC 27001:2022 Lead Auditor, ISO/IEC 27001 Implementer e ISO/IEC 27001 Internal Auditor (Cert Join, 2024).
- Sistemas de Gestión de Seguridad de la Información ISO 27001 (Udemy, 2024).
- ITIL 4 Foundation (PeopleCert, 2019).
- Scrum Fundamentals Certified – SFC (SCRUMstudy, 2024).
- Six Sigma Yellow Belt (6sigmastudy, 2024).
- CPMAI – Cognitive Project Management in AI, introducción (PMI, 2025).
- ANBAH Essentials with IA (2025).
- Power Platform y Teams: automatización, análisis de datos y apps (Net4skills, 2025).
- Google: Inteligencia Artificial y Productividad (Santander Open Academy, 2024).
- Cloud Computing (Google Actívate, 2023).
- Microsoft Windows 8.1 (Microsoft, 2016).

## Cursos y diplomados
- Asistentes de IA (Net4skills, 2026) · Microsoft Power Automate (Udemy, 2025) · Cisco CCNA 200-125 (Udemy, 2023) y CCNA (Capa Ocho, 2018) · IA: el futuro del trabajo con ChatGPT (ICEMexico, 2023) · Introducción a Windows Server 2012 R2 (Lenovo Partners, 2015).
- Diplomados: Habilidades Gerenciales (Universidad de Alta Dirección, 2024), Centros de Datos, Operaciones de Redes y Servicios (TECH Universidad Tecnológica, 2023), Innovación RedBox (Microsoft, 2020), Metodología ágil con PMI (Netec, 2016).

## Habilidades
Firebase, Firestore, Firebase Auth, JavaScript, HTML/CSS, Google AI Studio, Gemini API, Zoom Phone API, BioTime API, Excel/SheetJS, Google Cloud Run, ITIL, ISO 27001, gestión de proyectos (PMP, Scrum), mejora continua (Six Sigma) y documentación de procesos.
`.trim();
