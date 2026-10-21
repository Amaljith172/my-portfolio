import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Terminal,
  ShieldCheck,
  CheckCircle2,
  X,
  Sparkles,
  Server,
  Activity,
  FileText,
  Cpu,
  Layers,
  ArrowRight,
  ShieldAlert,
  AlertTriangle,
  Lightbulb,
  Compass,
} from "lucide-react";

interface ArchitectureStep {
  step: string;
  title: string;
  description: string;
}

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  featured?: boolean;
  badges?: string[];
  description: string;
  fullOverview: string;
  thumbnail: string;
  tech: string[];
  features: string[];
  architecture: {
    title: string;
    description: string;
    steps: ArchitectureStep[];
  };
  challenges: { problem: string; solution: string }[];
  improvements: string[];
  liveDemoUrl: string;
  githubUrl: string;
  icon: any;
}

const projectsList: ProjectItem[] = [
  {
    id: "verdict-flow",
    title: "Verdict Flow (Legal Case Filing & Workflow Automation)",
    category: "Legal Tech & Cloud Systems",
    featured: true,
    badges: ["Featured Project", "Full-Stack System", "FastAPI & React"],
    description:
      "An enterprise-grade digital case filing, document lifecycle tracking, and workflow automation platform engineered with FastAPI, React.js, and MySQL.",
    fullOverview:
      "Architected Verdict Flow to digitize and automate the entire legal case lifecycle from initial petitioner submission to court scheduling. Designed a normalized MySQL relational schema with ER modeling, implemented robust role-based access control (RBAC) across clerks, advocates, and judicial officers, and engineered asynchronous REST API pipelines using FastAPI with automated validation.",
    thumbnail: "/assets/projects/nginx-vhosts.png",
    tech: ["React.js", "FastAPI", "Python", "MySQL", "Docker", "JWT Auth", "REST APIs", "Tailwind CSS"],
    features: [
      "End-to-end digital case filing and automated document verification",
      "Strict Role-Based Access Control (RBAC) for Advocates, Judges & Court Registry",
      "Real-time case docket timeline & automated court hearing notification engine",
      "Secure encrypted PDF document storage with audit logging",
      "Asynchronous query execution with Pydantic validation schemas",
      "Responsive analytics dashboard for pending, dismissed, and active hearings",
    ],
    architecture: {
      title: "Asynchronous Legal Workflow & API Architecture",
      description:
        "High-reliability multi-tier architecture isolating frontend presentation, asynchronous FastAPI endpoints, and transactional MySQL persistence.",
      steps: [
        {
          step: "01",
          title: "Client Case Submission",
          description: "React.js frontend provides multi-step case filing with client-side document validation.",
        },
        {
          step: "02",
          title: "API Gateway & Security",
          description: "FastAPI middleware validates JWT bearer tokens and verifies user role authorization.",
        },
        {
          step: "03",
          title: "Workflow Engine",
          description: "Business logic engine parses petition claims, assigns docket numbers, and initiates review queues.",
        },
        {
          step: "04",
          title: "Transactional Persistence",
          description: "MySQL database records docket metadata and maintains relational integrity across audit logs.",
        },
        {
          step: "05",
          title: "Automated Calendar Dispatch",
          description: "Court hearing schedule updates are broadcasted to advocate and registrar dashboard feeds.",
        },
      ],
    },
    challenges: [
      {
        problem: "Enforcing strict multi-role judicial boundaries without data leakage between competing parties.",
        solution:
          "Implemented granular FastAPI dependency injection security layers verifying claims and case ownership on every endpoint query.",
      },
      {
        problem: "Managing high-volume document uploads without stalling backend request processing.",
        solution:
          "Offloaded file ingestion to streaming asynchronous chunk workers with hash verification.",
      },
    ],
    improvements: [
      "Integrate Elasticsearch for instantaneous full-text searches across legal precedents and filings.",
      "Deploy with Kubernetes Helm charts utilizing horizontal pod autoscalers for judicial peak filing hours.",
    ],
    liveDemoUrl: "https://github.com/Amaljith172",
    githubUrl: "https://github.com/Amaljith172",
    icon: FileText,
  },
  {
    id: "women-safety",
    title: "Women Safety Mobile Application",
    category: "Mobile Security & Real-Time IoT",
    featured: false,
    description:
      "A comprehensive emergency response platform featuring one-touch SOS alerts, continuous GPS location tracking, and a live administrative monitoring dashboard.",
    fullOverview:
      "Engineered an emergency alert application using the MERN stack. Designed with a one-tap panic button that instantly broadcasts real-time GPS coordinates, generates automated distress notifications to registered emergency contacts, and maps active emergency alerts onto a centralized administrative control console.",
    thumbnail: "/assets/projects/sign-language.png",
    tech: ["MERN Stack", "React.js", "Node.js", "Express", "MongoDB", "Geolocation API", "WebSockets"],
    features: [
      "Instant one-tap SOS emergency trigger with audible and silent modes",
      "Real-time continuous GPS coordinate broadcasting with route breadcrumbs",
      "Centralized administrative dashboard with live emergency response map",
      "Incident logging and automated alert notifications to designated contacts",
      "Lightweight, offline-resilient mobile UI with fast recovery",
    ],
    architecture: {
      title: "Real-Time Emergency Telemetry Pipeline",
      description:
        "High-priority WebSocket event pipeline dispatching geolocation telemetry from mobile devices to emergency command dashboards.",
      steps: [
        {
          step: "01",
          title: "SOS Trigger Event",
          description: "User initiates SOS via quick-press hardware button or on-screen emergency toggle.",
        },
        {
          step: "02",
          title: "Geolocation Ingestion",
          description: "Device captures high-accuracy GPS coordinates and packages payload with user ID.",
        },
        {
          step: "03",
          title: "Socket Broadcast",
          description: "Node.js WebSocket cluster pushes distress events with zero polling latency.",
        },
        {
          step: "04",
          title: "Admin Command View",
          description: "Admin dashboard highlights active incident on interactive map with contact metadata.",
        },
      ],
    },
    challenges: [
      {
        problem: "Preventing device battery drainage during prolonged background GPS telemetry tracking.",
        solution:
          "Dynamically adjusted GPS sampling frequency based on motion accelerometer thresholds.",
      },
    ],
    improvements: [
      "Integrate SMS fallback gateway (Twilio) for areas with limited or intermittent mobile data coverage.",
      "Implement machine learning acoustic threat detection for automated scream/impact recognition.",
    ],
    liveDemoUrl: "https://github.com/Amaljith172",
    githubUrl: "https://github.com/Amaljith172",
    icon: ShieldAlert,
  },
  {
    id: "linux-sysadmin",
    title: "Linux System Administration & Hardening",
    category: "Systems & Sysadmin",
    featured: false,
    description:
      "Comprehensive Linux system administration framework covering user access security, automated shell scripting, process management, and storage auditing.",
    fullOverview:
      "Designed and maintained Linux server infrastructure on Ubuntu, implementing rigid access security controls (SUDO privileges, SSH key authentication, UFW firewall), automated disk and log auditing scripts in Bash, and robust systemd service unit lifecycle management.",
    thumbnail: "/assets/projects/linux-sysadmin.png",
    tech: ["Ubuntu", "Linux", "Bash", "Systemd", "UFW Firewall", "Cron"],
    features: [
      "Automated backup & log rotation Bash scripts with cron scheduling",
      "Strict RBAC user & group permission matrix via SUDOERS policies",
      "Custom Systemd daemon unit files with automatic failure recovery",
      "System health auditing scripts with automated email/log threshold alerts",
      "Network interface tuning, iptables rules, and SSH security hardening",
    ],
    architecture: {
      title: "System Automation & Hardening Flow",
      description:
        "Layered system administration model managing process lifecycle, user permissions, and cron background tasks.",
      steps: [
        {
          step: "01",
          title: "User & Privilege Isolation",
          description: "Restricted root login, configured group permissions and granular sudoers rules.",
        },
        {
          step: "02",
          title: "Firewall & Port Shielding",
          description: "Configured UFW firewall policies allowing only SSH key and SSL traffic.",
        },
        {
          step: "03",
          title: "Systemd Daemon Control",
          description: "Custom unit configurations managing service auto-restart on memory or crash limits.",
        },
        {
          step: "04",
          title: "Cron Automation Engine",
          description: "Scheduled Bash maintenance scripts for log pruning, disk check, and backup snapshots.",
        },
      ],
    },
    challenges: [
      {
        problem: "Ensuring background cron scripts execute idempotently without corrupting active system state.",
        solution:
          "Implemented strict lockfiles (`flock`) and error trapped Bash exit codes (`set -euo pipefail`).",
      },
    ],
    improvements: [
      "Convert system provisioning scripts into reusable Ansible playbooks.",
      "Integrate centralized rsyslog logging server with automated log parsing.",
    ],
    liveDemoUrl: "https://github.com/Amaljith172",
    githubUrl: "https://github.com/Amaljith172",
    icon: Terminal,
  },
  {
    id: "monitoring-stack",
    title: "Containerized Observability & Nginx Stack",
    category: "Observability & Cloud Infrastructure",
    featured: false,
    description:
      "Production-ready server observability stack using Prometheus, Node Exporter, and Grafana for real-time system metrics, containerized with Docker and fronted by Nginx.",
    fullOverview:
      "Engineered an end-to-end telemetry monitoring infrastructure. Deployed Node Exporter for Linux kernel metrics, Prometheus for time-series aggregation, and Grafana for unified visual dashboards and webhook alert dispatching, combined with high-performance Nginx virtual hosting and SSL/TLS encryption.",
    thumbnail: "/assets/projects/server-monitoring.png",
    tech: ["Docker", "Docker Compose", "Prometheus", "Grafana", "Node Exporter", "Nginx", "Linux"],
    features: [
      "Real-time visual telemetry for CPU utilization, RAM usage, Disk I/O & Network bandwidth",
      "Prometheus metric scraping pipeline configured with 15-second scraping intervals",
      "Custom Grafana real-time monitoring dashboards with threshold alert rules",
      "Nginx virtual host routing and reverse proxy for upstream application services",
      "Containerized observability deployment using Docker Compose",
    ],
    architecture: {
      title: "Telemetry Metrics Pipeline Architecture",
      description:
        "Scraping and visualization workflow converting Linux kernel counters into actionable Grafana dashboards.",
      steps: [
        {
          step: "01",
          title: "Metric Collection",
          description: "Node Exporter exposes `/metrics` HTTP endpoint with OS CPU, RAM, and disk stats.",
        },
        {
          step: "02",
          title: "Prometheus Scraping",
          description: "Prometheus server periodically pulls and indexes time-series metric data.",
        },
        {
          step: "03",
          title: "Grafana Visualization",
          description: "Grafana queries Prometheus via PromQL to render responsive interactive dashboards.",
        },
        {
          step: "04",
          title: "Alert Notification",
          description: "Alertmanager triggers alerts when CPU usage exceeds 90% threshold.",
        },
      ],
    },
    challenges: [
      {
        problem: "Managing high-cardinality metric storage without exhausting disk space.",
        solution:
          "Configured PromQL metric retention policies and data compaction intervals tuned for server specs.",
      },
    ],
    improvements: [
      "Integrate Grafana Loki for centralized log aggregation alongside Prometheus metrics.",
      "Implement automated auto-scaling scripts triggered via Prometheus Alertmanager Webhooks.",
    ],
    liveDemoUrl: "https://github.com/Amaljith172",
    githubUrl: "https://github.com/Amaljith172",
    icon: Activity,
  },
];

// Interactive Card Component with Mouse Spotlight & Clean Action Button
function ProjectCard({
  project,
  index,
  isInView,
  onOpenModal,
}: {
  project: ProjectItem;
  index: number;
  isInView: boolean;
  onOpenModal: (p: ProjectItem) => void;
}) {
  const IconComponent = project.icon;
  const [imgLoaded, setImgLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      whileHover={{ y: -10, scale: 1.01 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-3xl bg-neutral-950/90 border border-white/15 overflow-hidden flex flex-col justify-between transition-all duration-500 shadow-2xl hover:border-white/40 hover:shadow-[0_0_40px_rgba(255,255,255,0.14)]"
      style={{
        background: isHovered
          ? `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.08), rgba(10, 10, 10, 0.96))`
          : "rgba(10, 10, 10, 0.9)",
      }}
    >
      {/* Dynamic Mouse-Reactive Border Highlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.3), transparent 70%)`,
          maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      {/* Card Content Top Section */}
      <div>
        {/* Large Thumbnail Top Container */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-900">
          {!imgLoaded && (
            <div className="absolute inset-0 bg-neutral-900 animate-pulse flex items-center justify-center">
              <IconComponent className="w-10 h-10 text-white/20 animate-bounce" />
            </div>
          )}

          <img
            src={project.thumbnail}
            alt={project.title}
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />

          {/* Top Category Badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono tracking-widest uppercase text-white font-semibold shadow-lg">
              <IconComponent className="w-3 h-3 text-white" />
              {project.category}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7 space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white transition-colors font-display tracking-tight leading-tight">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-lg text-[10px] font-mono text-gray-300 bg-white/[0.05] border border-white/10 group-hover:border-white/20 group-hover:bg-white/[0.08] transition-all"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Button */}
      <div className="p-6 pt-0 mt-2">
        <button
          onClick={() => onOpenModal(project)}
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider text-white bg-white/10 border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg group/btn cursor-pointer"
        >
          <FileText className="w-4 h-4 text-white group-hover/btn:text-black transition-colors" />
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.15 });
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "challenges" | "improvements">("overview");

  const featuredProject = projectsList.find((p) => p.featured) || projectsList[0];
  const regularProjects = projectsList.filter((p) => p.id !== featuredProject.id);

  const [featImgLoaded, setFeatImgLoaded] = useState(false);
  const [featMousePos, setFeatMousePos] = useState({ x: 0, y: 0 });
  const [featHovered, setFeatHovered] = useState(false);

  const handleFeatMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setFeatMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full min-h-screen bg-black text-white px-4 sm:px-8 md:px-16 py-28 overflow-hidden select-none"
    >
      {/* Background Ambient Lights */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-white/[0.04] rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-white shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="uppercase tracking-widest font-semibold">Portfolio Showcase</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Engineering{" "}
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Project Showcase
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-gray-400 text-base sm:text-lg font-sans max-w-2xl mx-auto leading-relaxed"
          >
            Technical system architecture diagrams, cloud workflows, Linux administration, and full-stack software deployments.
          </motion.p>
        </div>

        {/* FEATURED HERO PROJECT SHOWCASE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          onMouseMove={handleFeatMouseMove}
          onMouseEnter={() => setFeatHovered(true)}
          onMouseLeave={() => setFeatHovered(false)}
          className="group relative rounded-3xl bg-neutral-950 border border-white/20 overflow-hidden shadow-2xl transition-all duration-500 hover:border-white/50 hover:shadow-[0_0_50px_rgba(255,255,255,0.15)]"
          style={{
            background: featHovered
              ? `radial-gradient(800px circle at ${featMousePos.x}px ${featMousePos.y}px, rgba(255, 255, 255, 0.08), rgba(8, 8, 8, 0.98))`
              : "rgba(8, 8, 8, 0.95)",
          }}
        >
          {/* Subtle Shimmer Border */}
          <div
            className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            style={{
              background: `radial-gradient(600px circle at ${featMousePos.x}px ${featMousePos.y}px, rgba(255, 255, 255, 0.3), transparent 70%)`,
              maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
              maskComposite: "exclude",
              WebkitMaskComposite: "xor",
              padding: "1px",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Left: Thumbnail Preview */}
            <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] lg:min-h-full overflow-hidden bg-neutral-900 flex items-center justify-center">
              {!featImgLoaded && (
                <div className="absolute inset-0 bg-neutral-900 animate-pulse flex items-center justify-center">
                  <FileText className="w-12 h-12 text-white/20 animate-bounce" />
                </div>
              )}
              <img
                src={featuredProject.thumbnail}
                alt={featuredProject.title}
                onLoad={() => setFeatImgLoaded(true)}
                className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                  featImgLoaded ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-neutral-950/20 lg:to-neutral-950" />

              <div className="absolute top-6 left-6 z-10 flex flex-wrap gap-2">
                {featuredProject.badges?.map((badge, idx) => (
                  <span
                    key={badge}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase backdrop-blur-md shadow-xl border ${
                      idx === 0
                        ? "bg-white text-black border-white"
                        : "bg-black/70 text-gray-200 border-white/20"
                    }`}
                  >
                    {idx === 0 && <Sparkles className="w-3.5 h-3.5 text-black" />}
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Hero Description & Action Button */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8 bg-neutral-950/90 backdrop-blur-xl">
              <div className="space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-mono tracking-widest text-gray-400 uppercase font-semibold">
                    ★ Featured Innovation
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-tight">
                    {featuredProject.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                  {featuredProject.description}
                </p>

                <div className="space-y-2.5 pt-2 border-t border-white/10">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                    Core Technical Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {featuredProject.features.slice(0, 3).map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-xl text-xs font-mono text-white bg-white/10 border border-white/20 group-hover:border-white/30 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-white/10">
                <button
                  onClick={() => {
                    setSelectedProject(featuredProject);
                    setActiveTab("overview");
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-mono text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-gray-200 transition-all shadow-xl shadow-white/10 cursor-pointer group/btn"
                >
                  <FileText className="w-4 h-4 text-black" />
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* OTHER PROJECTS GRID */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-2xl font-bold text-white font-display tracking-tight flex items-center gap-2">
              <Layers className="w-5 h-5 text-white" />
              DevOps &amp; Software Systems Projects
            </h3>
            <span className="text-xs font-mono text-gray-400">3 Engineering Items</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regularProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                isInView={isInView}
                onOpenModal={(p) => {
                  setSelectedProject(p);
                  setActiveTab("overview");
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* EXPANDED PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.93, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.93, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-neutral-950 border border-white/30 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto"
            >
              {/* Modal Header */}
              <div className="relative p-6 sm:p-8 border-b border-white/10 bg-neutral-900/60 backdrop-blur-md flex items-start justify-between">
                <div className="space-y-2 pr-10">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-mono uppercase tracking-widest text-white font-semibold">
                      {selectedProject.category}
                    </span>
                    {selectedProject.featured && (
                      <span className="px-3 py-1 rounded-full bg-white text-black text-[10px] font-mono uppercase tracking-widest font-bold">
                        ★ Featured Project
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2.5 rounded-full bg-white/10 border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 transition-all cursor-pointer shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-white/10 bg-neutral-950 px-6 overflow-x-auto scrollbar-none">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`py-3.5 px-4 text-xs font-mono uppercase tracking-wider font-semibold border-b-2 transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
                    activeTab === "overview"
                      ? "border-white text-white"
                      : "border-transparent text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <Compass className="w-4 h-4" />
                  Overview &amp; Features
                </button>

                <button
                  onClick={() => setActiveTab("architecture")}
                  className={`py-3.5 px-4 text-xs font-mono uppercase tracking-wider font-semibold border-b-2 transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
                    activeTab === "architecture"
                      ? "border-white text-white"
                      : "border-transparent text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <Cpu className="w-4 h-4" />
                  Architecture Diagram
                </button>

                <button
                  onClick={() => setActiveTab("challenges")}
                  className={`py-3.5 px-4 text-xs font-mono uppercase tracking-wider font-semibold border-b-2 transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
                    activeTab === "challenges"
                      ? "border-white text-white"
                      : "border-transparent text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <AlertTriangle className="w-4 h-4" />
                  Technical Challenges
                </button>

                <button
                  onClick={() => setActiveTab("improvements")}
                  className={`py-3.5 px-4 text-xs font-mono uppercase tracking-wider font-semibold border-b-2 transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
                    activeTab === "improvements"
                      ? "border-white text-white"
                      : "border-transparent text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <Lightbulb className="w-4 h-4" />
                  Future Improvements
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
                {/* 1. OVERVIEW & FEATURES TAB */}
                {activeTab === "overview" && (
                  <div className="space-y-8">
                    <div className="relative rounded-2xl overflow-hidden border border-white/20 max-h-72 bg-neutral-900 shadow-xl">
                      <img
                        src={selectedProject.thumbnail}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                        Project Overview:
                      </h4>
                      <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-sans">
                        {selectedProject.fullOverview}
                      </p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-white/10">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-white" />
                        Key Features &amp; Capabilities:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedProject.features.map((feat) => (
                          <div
                            key={feat}
                            className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-3"
                          >
                            <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-gray-300 leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-white/10">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                        Technologies &amp; Tools Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3.5 py-1.5 rounded-xl text-xs font-mono text-white bg-white/10 border border-white/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. ARCHITECTURE DIAGRAM TAB */}
                {activeTab === "architecture" && (
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-white font-display">
                        {selectedProject.architecture.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400 font-sans">
                        {selectedProject.architecture.description}
                      </p>
                    </div>

                    <div className="space-y-4 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-white/15">
                      {selectedProject.architecture.steps.map((st) => (
                        <div key={st.step} className="relative flex items-start gap-4">
                          <div className="relative z-10 w-10 h-10 rounded-full bg-black border-2 border-white flex items-center justify-center font-mono text-xs font-bold text-white shrink-0 shadow-lg">
                            {st.step}
                          </div>
                          <div className="flex-1 p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                            <h5 className="text-sm font-bold text-white font-display">
                              {st.title}
                            </h5>
                            <p className="text-xs text-gray-300 leading-relaxed font-sans">
                              {st.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. CHALLENGES TAB */}
                {activeTab === "challenges" && (
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-white font-display">
                        Technical Challenges &amp; Engineering Solutions
                      </h4>
                      <p className="text-xs text-gray-400">
                        Critical problems encountered during implementation and how they were resolved.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {selectedProject.challenges.map((ch, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3"
                        >
                          <div className="space-y-1">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-red-400 font-bold flex items-center gap-1.5">
                              <AlertTriangle className="w-3.5 h-3.5" />
                              Problem:
                            </span>
                            <p className="text-xs sm:text-sm text-gray-200">{ch.problem}</p>
                          </div>

                          <div className="space-y-1 pt-2 border-t border-white/10">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-green-400 font-bold flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              Solution:
                            </span>
                            <p className="text-xs sm:text-sm text-gray-300">{ch.solution}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. FUTURE IMPROVEMENTS TAB */}
                {activeTab === "improvements" && (
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-white font-display">
                        Roadmap &amp; Future Architecture Enhancements
                      </h4>
                      <p className="text-xs text-gray-400">
                        Planned technical improvements and feature expansions.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {selectedProject.improvements.map((imp, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3"
                        >
                          <Lightbulb className="w-4 h-4 text-white shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-gray-300">{imp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-white/10 bg-neutral-900/60 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider text-white border border-white/20 bg-white/5 hover:bg-white/15 transition-all"
                >
                  <Terminal className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-gray-200 transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
