const root = document.querySelector('#project-detail');
const projectId = new URLSearchParams(window.location.search).get('project');
const project = window.projectData?.[projectId];

if (!project) {
  root.innerHTML = '<p class="eyebrow">PROJECT DETAILS</p><h1>Project not found</h1><p class="detail-summary">Choose a project from the portfolio to see its details.</p><a class="button button-primary" href="index.html#projects">Back to projects <span>↗</span></a>';
} else {
  document.title = `${project.title} | Arti Mhaske`;
  const diagramLink = project.diagrams ? `<a class="button button-secondary" href="${project.diagrams}">Explore the project flows <span>↗</span></a>` : '';
  const githubLink = project.github ? `<a class="button button-secondary" href="${project.github}" target="_blank" rel="noopener noreferrer">View source on GitHub <span>↗</span></a>` : '';
  const focus = project.focus?.length ? `<section class="detail-section"><p class="eyebrow">PROJECT FOCUS</p><h2>Areas explored.</h2><div class="tags">${project.focus.map(item => `<span>${item}</span>`).join('')}</div></section>` : '';
  const problemSolution = project.problem || project.solution ? `<div class="detail-two-column">${project.problem ? `<section class="detail-section"><p class="eyebrow">THE PROBLEM</p><h2>Why this project?</h2><p class="detail-copy">${project.problem}</p></section>` : ''}${project.solution ? `<section class="detail-section"><p class="eyebrow">THE APPROACH</p><h2>How it works.</h2><p class="detail-copy">${project.solution}</p></section>` : ''}</div>` : '';
  const features = project.features?.length ? `<section class="detail-section"><p class="eyebrow">KEY FEATURES</p><h2>Purpose-built workflows.</h2><div class="detail-feature-grid">${project.features.map((feature, index) => `<article class="detail-feature"><span>${String(index + 1).padStart(2, '0')}</span><h3>${feature.title}</h3><p>${feature.text}</p></article>`).join('')}</div></section>` : '';
  const engineering = project.engineering?.length ? `<section class="detail-section"><p class="eyebrow">ENGINEERING HIGHLIGHTS</p><h2>Design decisions.</h2><div class="detail-engineering-list">${project.engineering.map(item => `<article><h3>${item.title}</h3><p>${item.text}</p></article>`).join('')}</div></section>` : '';
  const extraSections = project.sections?.length ? project.sections.map(section => `<section class="detail-section"><p class="eyebrow">${section.eyebrow}</p><h2>${section.title}</h2>${section.text ? `<p class="detail-copy">${section.text}</p>` : ''}${section.list?.length ? `<ul class="detail-bullets">${section.list.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}${section.metrics?.length ? `<div class="detail-metrics">${section.metrics.map(metric => `<article><strong>${metric.value}</strong><span>${metric.label}</span></article>`).join('')}</div>` : ''}${section.comparison ? `<div class="detail-table-wrap"><table class="detail-comparison"><thead><tr>${section.comparison.columns.map(item => `<th>${item}</th>`).join('')}</tr></thead><tbody>${section.comparison.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>` : ''}${section.note ? `<p class="detail-copy detail-small-note">${section.note}</p>` : ''}</section>`).join('') : '';
  const limitations = project.limitations?.length ? `<section class="detail-section detail-limitations"><p class="eyebrow">LIMITATIONS & RESPONSIBLE AI</p><h2>Designed with clear boundaries.</h2><ul>${project.limitations.map(item => `<li>${item}</li>`).join('')}</ul></section>` : '';
  const highlights = project.highlights?.length ? `<section class="detail-section detail-highlights"><p class="eyebrow">PROJECT HIGHLIGHTS</p><h2>What it explores.</h2><ul>${project.highlights.map(item => `<li>${item}</li>`).join('')}</ul></section>` : '';
  const videos = project.videos?.some(video => video.available !== false) ? `<section class="detail-section" id="gameplay-videos"><p class="eyebrow">GAMEPLAY VIDEOS</p><h2>Watch it in action.</h2><div class="detail-video-grid">${project.videos.filter(video => video.available !== false).map(video => `<article class="detail-video"><video controls preload="metadata" playsinline><source src="${video.src}" type="video/mp4">Your browser does not support HTML video.</video><div class="detail-video-copy"><h3>${video.title}</h3><p>${video.caption}</p></div></article>`).join('')}</div></section>` : '';
  const gallery = project.images?.length ? `<section class="detail-section"><p class="eyebrow">PROJECT VISUALS</p><h2>Inside the project.</h2><div class="detail-gallery">${project.images.map((image, index) => { const item = typeof image === 'string' ? { src: image, alt: `${project.title} screenshot ${index + 1}` } : image; return `<figure><img src="${item.src}" alt="${item.alt}" loading="lazy">${item.caption ? `<figcaption>${item.caption}</figcaption>` : ''}</figure>`; }).join('')}</div></section>` : '';
  root.innerHTML = `
    <a class="detail-back" href="index.html#projects">← Back to all projects</a>
    <section class="detail-hero">
      <p class="eyebrow">${project.category}</p>
      <h1>${project.title}</h1>${project.subtitle ? `<p class="detail-subtitle">${project.subtitle}</p>` : ''}
      <p class="detail-summary">${project.summary}</p>
      <div class="detail-actions">${diagramLink}${githubLink}<a class="button button-primary" href="index.html#contact">Contact me <span>↗</span></a></div>
    </section>
    ${focus}
    ${problemSolution}
    <section class="detail-section">
      <p class="eyebrow">OVERVIEW</p><h2>About this project.</h2><p class="detail-copy">${project.overview}</p>
    </section>
    ${extraSections}
    ${features}
    ${highlights}
    ${engineering}
    <section class="detail-section">
      <p class="eyebrow">TOOLS & TECHNOLOGIES</p><h2>Built with.</h2>
      <div class="tags">${project.technologies.map(item => `<span>${item}</span>`).join('')}</div>
    </section>
    ${videos}
    ${gallery}
    ${limitations}
    ${project.responsibleUse ? `<aside class="detail-note"><span class="eyebrow">RESPONSIBLE USE</span><p>${project.responsibleUse}</p></aside>` : ''}
    <div class="detail-footer-link"><a class="text-link" href="index.html#projects">← Return to the full project collection</a></div>`;
}
