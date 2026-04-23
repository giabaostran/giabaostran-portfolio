export default function Project({ project }) {
  const hasImg = !!project.screenshotURL;

  return (
    <div className="project">
      <div className="project-row">
        <div className="thumb-wrap">
          {!hasImg && (
            <div className="thumb-placeholder">
              <ThumbIcon />
              <span className="thumb-hint">Screenshot</span>
            </div>
          )}

          {hasImg && (
            <img id={`thumb-${project.name}`}
              className="thumb-img"
              src={project.screenshotURL}
              alt={project.name}
            />
          )}
        </div>

        <div className="project-body">
          <div className="project-top">
            <span className="project-name">
              {project.name} - ({project.date})
            </span>

            <span className="project-links-inline">
              {project.demo && (
                <a href={project.demo} className="project-link">
                  ↗ demo
                </a>
              )}

              {project.github && (
                <a href={project.github} className="project-link">
                  ↗ github
                </a>
              )}
            </span>
          </div>

          <p className="project-desc">{project.desc}</p>

          <div className="project-tags">
            {project.tags.map((t, i) => (
              <span key={i} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ThumbIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="4"
        width="18"
        height="13"
        rx="1.5"
        stroke="#39ff8a"
        strokeWidth="1.2"
      />
      <path
        d="M1 13l4-4 3 3 4-5 7 7"
        stroke="#39ff8a"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="5.5" cy="8.5" r="1.5" fill="#39ff8a" />
    </svg>
  );
}
