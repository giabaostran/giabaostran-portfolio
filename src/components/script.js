export const bio = {
  firstName: "Gia Bao",
  lastName: " Tran",
  email: "giabaotran@cmail.carleton.ca",
  hook: "CS @ Carleton · builder of things.",
  gitHub: "https://github.com/giabaostran",
  linkedIn: "https://www.linkedin.com/in/giabaostran/",
  school:"Carleton University"
};

export const experiences = [
  {
    role: "DevSecOps Engineer (Co-op)",
    company: "Deloitte",
    date: "January 24 - April 24",
    desc: "Provisioned AWS infrastructure for EDAP project used by over 20 Data Scientists across firms like Canada Post, Purolator, ...",
    tags: ["Terraform", "AWS", "Teradata", "Python", "Teradata SQL"],
  },
  {
    role: "Software Developer (Co-op)",
    company: "Deloitte",
    date: "September 23 - December 23",
    desc: "Streamlined RBAC Request process to save up to 2 weeks per request, helping team handle tickets more efficiently. Application used by WiPro and Innovapost employees",
    tags: [
      "PowerApps",
      "PowerAutomate",
      "Microsoft Power Automate",
      "Microsoft PowerApps",
      "Microsoft Sharepoint",
      "Java",
    ],
  },
  {
    role: "Site Reliability Engineer (Co-op)",
    company: "Innovapost",
    date: "January 23 - April 23",
    desc: "Developed multiple automation solution for IT Operation teams, helping their management process easier by implementing document attachment functionality to Canada Post's sites",
    tags: ["Python", "C#", ".NET CORE", "WinForm", "SQL"],
  },
  {
    role: "IT Specialist (Part-time)",
    company: "Flextra Electronics",
    date: "October 22 - April 23",
    desc: "Performed responsiblies of technical support by installing computer hardware, softwares, network infrastructures and website SEO, increasing company presense online ",
    tags: ["Customer Service", "IT Support Principles"],
  },
  {
    role: "Front-end Developer (Volunteer)",
    company: "VNPT Group",
    date: "May 22 - June 22",
    desc: "Contributed to HIS (Medical App) by designing and developed multiple front-end interface",
    tags: ["HTML", "CSS", "SCSS", "Javascript"],
  },
];

export const projects = [
  {
    name: "Nimbus Wallet (in-progress)",
    desc: "A finance management application using the MERN stack for expense tracking, budgeting, and financial insights. Implementing a CI/CD pipeline with Docker and Jenkins for deployment on Raspberry Pi.",
    tags: ["Next.js", "Docker", "Jenkins", "Raspberry Pi", "SSH"],
    date: "2025",
    github: "https://github.com/giabaostran/",
  },
  {
    name: "Cyber-Tetris (in-progress)",
    desc: "A Tetris clone in Java Swing featuring core gameplay mechanics, real-time scoring, and increasing difficulty. Includes a client-server system for local wireless multiplayer.",
    tags: ["Java"],
    date: "2025",
    github: "https://github.com/giabaostran/Cyber-Tetris/",
  },
  {
    name: "Nascita - Coffee Shop Management System",
    desc: "A Go-based microservice architecture with gRPC for bi-directional streaming and Gorilla Mux for routing, improving scalability by ~40%.",
    tags: ["Go", "gRPC"],
    date: "2024",
    github: "https://github.com/giabaostran/Nascita-Coffee-Shop-Management-System/",
  },
  {
    name: "Zein - AI Generative SaaS",
    desc: "A web-based AI assistant built with Next.js and Node.js, integrating OpenAI and Replicate APIs for generative AI features.",
    tags: ["Next.js", "Prisma", "TypeScript", "Zod", "Clerk", "React Hook Form", "Stripe", "OpenAI"],
    date: "2024",
    github: "https://github.com/giabaostran/Zein-AI-Generative-SaaS/",
  },
  {
    name: "TicTacToe",
    desc: "A classic web-based Tic Tac Toe game playable in the browser.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind", "React"],
    date: "2023",
    demo: "https://ticktackto.netlify.app/",
    github: "https://ticktackto.netlify.app/",
  },
];

// export const FEATURED = 6;
// export const screenshots = {};

// export function thumbIcon() {
//   return `<svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <rect x="1" y="4" width="18" height="13" rx="1.5" stroke="#39ff8a" stroke-width="1.2"/>
//       <path d="M1 13l4-4 3 3 4-5 7 7" stroke="#39ff8a" stroke-width="1.2" stroke-linejoin="round"/>
//       <circle cx="5.5" cy="8.5" r="1.5" fill="#39ff8a"/>
//     </svg>`;
// }

// export function renderProjects() {
//   const list = document.getElementById("projects-list");
//   list.innerHTML = "";
//   projects.slice(0, FEATURED).forEach((p, i) => {
//     const hasImg = !!screenshots[i];
//     const div = document.createElement("div");
//     div.className = "project";
//     div.innerHTML = `
//         <div class="project-row">
//           <div class="thumb-wrap">
//             <div class="thumb-placeholder" id="placeholder-${i}" style="${hasImg ? "display:none" : ""}">
//               <input type="file" accept="image/*" onchange="loadScreenshot(this,${i})" />
//               ${thumbIcon()}
//               <span class="thumb-hint">Screenshot</span>
//             </div>
//             <img class="thumb-img" id="thumb-${i}"
//               src="${hasImg ? screenshots[i] : ""}"
//               style="${hasImg ? "display:block" : ""}"
//               onclick="openLightbox('${hasImg ? screenshots[i] : ""}')"
//               alt="${p.name}" />
//           </div>

//           <div class="project-body">
//             <div class="project-top">
//               <span class="project-name">${p.name}</span>
//               <span class="project-links-inline">
//                 ${p.demo ? `<a href="${p.demo}" class="project-link">↗ demo</a>` : ""}
//                 ${p.github ? `<a href="${p.github}" class="project-link">↗ github</a>` : ""}
//               </span>
//             </div>
//             <p class="project-desc">${p.desc}</p>
//             <div class="project-tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
//           </div>
//         </div>`;
//     list.appendChild(div);
//   });
// }

// export function loadScreenshot(input, idx) {
//   const file = input.files[0];
//   if (!file) return;
//   const reader = new FileReader();
//   reader.onload = (e) => {
//     screenshots[idx] = e.target.result;
//     const ph = document.getElementById("placeholder-" + idx);
//     const img = document.getElementById("thumb-" + idx);
//     if (ph) ph.style.display = "none";
//     if (img) {
//       img.src = e.target.result;
//       img.style.display = "block";
//       img.onclick = () => openLightbox(e.target.result);
//     }
//   };
//   reader.readAsDataURL(file);
// }

// export function renderArchive() {
//   const tbody = document.getElementById("archive-tbody");
//   tbody.innerHTML = "";
//   projects.forEach((p) => {
//     const tr = document.createElement("tr");
//     tr.innerHTML = `
//         <td>${p.name}</td>
//         <td><div style="display:flex;gap:0.3rem;flex-wrap:wrap;">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div></td>
//         <td>
//           <span style="font-size:0.6rem;color:var(--muted);margin-right:0.6rem;">${p.date}</span>
//           ${p.demo ? `<a href="${p.demo}">demo ↗</a>` : ""}
//           ${p.github ? `<a href="${p.github}">github ↗</a>` : ""}
//         </td>`;
//     tbody.appendChild(tr);
//   });
// }

// export function showArchive() {
//   document.getElementById("main-page").style.display = "none";
//   const a = document.getElementById("archive-page");
//   a.classList.add("active");
//   renderArchive();
//   window.scrollTo(0, 0);
// }

// export function showMain() {
//   document.getElementById("main-page").style.display = "block";
//   document.getElementById("archive-page").classList.remove("active");
//   window.scrollTo(0, 0);
// }

// export function loadAvatar(input) {
//   const file = input.files[0];
//   if (!file) return;
//   const reader = new FileReader();
//   reader.onload = (e) => {
//     const img = document.getElementById("nav-avatar-img");
//     const bg = document.getElementById("avatar-bg");
//     img.src = e.target.result;
//     img.style.display = "block";
//     bg.style.display = "none";
//   };
//   reader.readAsDataURL(file);
// }

// export function openLightbox(src) {
//   if (!src) return;
//   document.getElementById("lightbox-img").src = src;
//   document.getElementById("lightbox").classList.add("open");
// }

// export function closeLightbox() {
//   document.getElementById("lightbox").classList.remove("open");
// }

// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape") closeLightbox();
// });

// renderProjects();
