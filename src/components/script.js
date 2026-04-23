export const projects = [
  {
    name: "NeuralSearch",
    desc: "Semantic search engine using vector embeddings and HNSW indexing. Handles 1M+ docs with sub-50ms query times.",
    tags: ["Python", "FastAPI", "PyTorch", "Redis"],
    date: "2024",
    demo: "#",
    screenshotURL:"https://media.licdn.com/dms/image/v2/D4E16AQEmMj-DL4B4Mg/profile-displaybackgroundimage-shrink_350_1400/B4EZ0JelC8I4AY-/0/1773980504690?e=1778716800&v=beta&t=f97-tul-WxrTb-ZgnsqlEPCmmhsEEB1BcjPDMTMskOY",
    github: "#",
  },
  {
    name: "Kestrel",
    desc: "Distributed key-value store in Go implementing Raft consensus — leader election, log replication, and snapshotting.",
    tags: ["Go", "Raft", "gRPC"],
    date: "2024",
    github: "#",
  },

  {
    name: "TinyCompiler",
    desc: "Compiler for a subset of C targeting x86-64. Implements lexing, parsing, semantic analysis, and register allocation.",
    tags: ["C++", "LLVM IR", "x86"],
    date: "2023",
    screenshotURL:"https://media.licdn.com/dms/image/v2/D4E16AQEmMj-DL4B4Mg/profile-displaybackgroundimage-shrink_350_1400/B4EZ0JelC8I4AY-/0/1773980504690?e=1778716800&v=beta&t=f97-tul-WxrTb-ZgnsqlEPCmmhsEEB1BcjPDMTMskOY",
    github: "#",
  },
  {
    name: "Flowtrack",
    desc: "Real-time habit tracker with Pomodoro integration. Live multi-device sync via WebSockets.",
    tags: ["React", "Node.js", "WebSocket"],
    date: "2023",
    demo: "#",
    github: "#",
  },
  {
    name: "PixelVM",
    desc: "Bytecode virtual machine for a toy language. Stack-based with a custom garbage collector, written in Rust.",
    tags: ["Rust", "Bytecode", "GC"],
    date: "2022",
    github: "#",
  },
  {
    name: "Scratchpad",
    desc: "Collaborative whiteboard with CRDT-based real-time sync.",
    tags: ["TypeScript", "CRDT", "WebRTC"],
    date: "2022",
    github: "#",
  },
  {
    name: "LogLens",
    desc: "Terminal log viewer with regex search and live tail.",
    tags: ["Go", "TUI"],
    date: "2021",
    github: "#",
  },
  {
    name: "BudgetCLI",
    desc: "Personal finance tracker that lives entirely in the terminal.",
    tags: ["Python", "SQLite"],
    date: "2021",
    github: "#",
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
