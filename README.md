# Arti Mhaske — Portfolio

A responsive, static portfolio built with HTML, CSS, and JavaScript. Open `index.html` directly in a browser or serve this folder with a static web server.

## Included

- Resume download (`Arti_Mhaske_Resume.docx`)
- AI/ML, data analytics, and gaming project sections
- Leadership and certification details based on the supplied resume
- Custom CSS illustrations for project cards; no external project image links are required
- MediRAG flow diagram gallery at `medirag-flow-diagrams.html`
- Clickable detail pages for every project, using a shared layout

## Updating project details

Open `project-data.js` and edit the entry for the project you want to update. Each entry contains its summary, overview, highlights, technology tags, and an optional `images` list. Put screenshots in `assets/projects/` and add their relative paths to that list. The MediRAG, Oil Spill, and Face Recognition entries include feature cards, engineering highlights, limitations, screenshots, and separate flow-diagram pages. MediRAG and Oil Spill also include GitHub links.

Every project card links to the shared `project.html` detail layout, with project-specific content selected by its URL. Each detail page links to its flow-diagram page, where jump buttons navigate vertically arranged supplied diagrams.

## Before publishing

- Review project descriptions and add public repository/demo links or screenshots when ready.
- Update the portfolio year label if you publish in a later year.

No build step or backend is required. Keep the `assets` folder beside the HTML file.


