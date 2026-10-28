// Add or update a project's write-up here. Optional gallery images should live in assets/projects/.
window.projectData = {
  "medirag": {
    category: "AI & Machine Learning",
    title: "MediRAG",
    subtitle: "An Agentic RAG System for Healthcare Record Analysis",
    summary: "A healthcare-focused AI application that helps retrieve and analyze information in documents by combining source-aware retrieval with specialized processing workflows.",
    overview: "MediRAG processes PDF, DOCX, and FHIR JSON documents, creates local embeddings with Ollama, and stores vectors with source metadata in FAISS. LangGraph coordinates question answering, record comparison, BMI calculation, and selected rule-based checks. The router currently uses deterministic rules, so this is workflow orchestration rather than a fully autonomous agent.",
    highlights: ["Grounds document answers in retrieved passages.", "Separates retrieval, BMI calculations, record comparison, and predefined checks into dedicated workflows.", "Uses local Ollama models with a FAISS vector index.", "Provides source details so users can review the material behind a response."],
    problem: "Healthcare information can be spread across multiple documents, making specific details harder to find and records more time-consuming to compare. A generated answer can also sound convincing without being supported by the source. MediRAG explores retrieval and explicit workflows to make document-based answers easier to review.",
    solution: "The application retrieves relevant passages before generating an answer, preserves source information for review, and sends calculations or predefined checks through separate deterministic paths. This keeps document search, language-model generation, and mathematical or rule-based operations distinct.",
    focus: ["Generative AI", "RAG", "Agentic workflows", "Vector search", "Healthcare document analysis"],
    features: [
      { title: "Multi-format document processing", text: "Ingests PDF, DOCX, and FHIR JSON files, extracts their content, and splits text into overlapping chunks for retrieval." },
      { title: "Retrieval-augmented question answering", text: "Creates embeddings with Ollama's nomic-embed-text model, retrieves relevant chunks from FAISS, and uses local Phi-3 through Ollama to draft an answer with available source passages." },
      { title: "LangGraph workflow orchestration", text: "Uses deterministic, rule-based routing to direct supported requests to search, calculation, combined, comparison, and selected demo workflows." },
      { title: "Patient record comparison", text: "Searches each selected record independently, generates record-specific answers, and returns a comparison with available source snippets." },
      { title: "BMI calculation", text: "Extracts height and weight from the request or retrieved record, normalizes units, checks configured bounds, and calculates BMI with Python rather than language-model arithmetic." },
      { title: "Selected rule-based checks", text: "Includes limited medicine-pair and laboratory-range demonstrations based on predefined tables. These are educational examples, not complete clinical reference systems." }
    ],
    engineering: [
      { title: "Separate retrieval from generation", text: "Relevant document chunks are retrieved and supplied as context before the language model drafts a response." },
      { title: "Route tasks to specialized workflows", text: "LangGraph coordinates distinct paths instead of treating every request as identical free-form question answering." },
      { title: "Keep BMI deterministic", text: "A Python formula handles the calculation, reducing reliance on language-model arithmetic." },
      { title: "Keep record contexts separate", text: "Comparison searches each selected source independently to reduce the chance of mixing retrieved passages." },
      { title: "Combine generative AI with explicit rules", text: "The prototype pairs retrieval and generation with deterministic calculations and small predefined demo checks." }
    ],
    limitations: [
      "MediRAG is an educational prototype, not a clinically validated diagnostic or treatment system.",
      "Retrieved passages and generated responses need human verification; incorrect retrieval can associate information with the wrong record.",
      "Medicine-pair and laboratory checks use limited predefined rules and are not comprehensive clinical reference systems.",
      "BMI is a numerical calculation, not a diagnosis or complete health assessment.",
      "No claim is made that the system is hallucination-free, clinically validated, or certified under a healthcare privacy regulation."
    ],
    technologies: ["Python", "LangChain", "LangGraph", "FAISS", "Ollama", "Phi-3", "nomic-embed-text", "FastAPI", "React", "Vite"],
    responsibleUse: "The interface screenshots use fictional/demo records. MediRAG is an educational prototype and should not be used as a substitute for qualified medical advice.",
    diagrams: "medirag-flow-diagrams.html",
    github: "https://github.com/ArtiMhaske34/MediRAG",
    images: [
      { src: "assets/projects/medirag-overview.png", alt: "MediRAG overview screen showing record search, combined search and BMI, record comparison, and local API status", caption: "Workspace overview — main analysis paths and local service status." },
      { src: "assets/projects/medirag-search-bmi.png", alt: "MediRAG search and BMI response with source evidence panel", caption: "Search + BMI prototype capture — the evidence panel shows a record mismatch in this example; verify source-to-record matching." },
      { src: "assets/projects/medirag-document-library.png", alt: "MediRAG document library for importing synthetic FHIR records and local documents", caption: "Document library — import synthetic FHIR data or add local supported files." },
      { src: "assets/projects/medirag-record-comparison.png", alt: "MediRAG compare-records workspace showing selected records and a generated comparison", caption: "Compare records — review each selected record and the generated comparison." }
    ]
  },
  "oil-spill": {
    category: "AI & Machine Learning · Computer Vision",
    title: "Oil Spill Detection & Analysis Using Deep Learning",
    subtitle: "AI-Powered Marine Environmental Intelligence | Computer Vision | Semantic Segmentation",
    summary: "A SAR satellite-image analysis prototype that uses a lightweight U-Net-style model to identify potential spill regions, measure scene-level signals, and help analysts prioritize scenes for further review.",
    overview: "The application processes grayscale SAR imagery and produces pixel-level predictions, probability heatmaps, binary masks, and overlays. A Streamlit dashboard combines these visualizations with spill coverage, predicted probabilities, a project-defined prioritization score, and scene-level review tools.",
    problem: "Manually reviewing large collections of satellite scenes can take time and make it difficult to decide which images deserve closer inspection. The model output also needs to be presented in a way analysts can interpret and verify.",
    solution: "A lightweight semantic-segmentation model produces a probability map for each scene. The dashboard turns that output into visual overlays and scene metrics, supports single-image and batch workflows, ranks scenes using the project's scoring rule, and lets an analyst inspect the underlying image and predictions.",
    focus: ["Deep Learning", "Computer Vision", "Semantic Segmentation", "SAR Satellite Imagery", "Environmental Analytics"],
    features: [
      { title: "SAR image analysis", text: "Analyzes grayscale Synthetic Aperture Radar imagery after grayscale conversion, normalization, and tensor preparation." },
      { title: "Pixel-level U-Net segmentation", text: "Uses a lightweight encoder-decoder U-Net-style model with skip connections to predict potential spill regions." },
      { title: "Probability maps and masks", text: "Produces pixel-level probability maps, thresholded binary masks, and overlays on the original SAR scene." },
      { title: "Scene-level analytics", text: "Calculates spill pixels, pixel coverage, mean and maximum predicted probabilities, and a project-defined prioritization score." },
      { title: "Single and batch analysis", text: "Supports single images, multiple uploads, local folders, and ZIP or folder uploads; batch outputs can be ranked and exported as CSV." },
      { title: "Scene inspection", text: "Provides a scene inspector for reviewing the SAR image, heatmap, segmentation mask, overlay, and calculated metrics." }
    ],
    engineering: [
      { title: "Build an end-to-end workflow", text: "Connects preprocessing, model inference, output visualization, metrics, prioritization, and analyst review in one Streamlit application." },
      { title: "Make model output inspectable", text: "Shows probability heatmaps, segmentation masks, and prediction overlays alongside the original image." },
      { title: "Support batch triage", text: "Aggregates per-scene metrics, ranks scenes with the project's scoring mechanism, and exports a CSV for follow-up analysis." },
      { title: "Keep scores within their intended use", text: "Describes the score as a project-defined prioritization indicator, not an official environmental-risk classification." }
    ],
    sections: [
      { eyebrow: "MODEL & TRAINING", title: "Lightweight U-Net-style segmentation", text: "The encoder-decoder architecture uses convolution blocks, batch normalization, ReLU activation, max pooling, transposed convolutions, and skip connections. It was trained on paired SAR images and masks with a combined Binary Cross-Entropy and Dice Loss objective.", list: ["3 training epochs", "Batch size: 4", "Adam optimizer · learning rate 0.0001", "Input and output shape: 1 × 256 × 256"] },
      { eyebrow: "DATASET", title: "Paired SAR scenes and masks", text: "The project reports 6,455 SAR image samples paired with segmentation masks. Inputs are single-channel grayscale images normalized to [0, 1]." },
      { eyebrow: "EXPERIMENTAL EVALUATION", title: "Reported model metrics", metrics: [{ label: "Dice score", value: "0.7362" }, { label: "IoU", value: "0.6270" }, { label: "Average loss", value: "0.7465" }], note: "The evaluation subset was created after training on the complete dataset. These scores are not strict held-out test results; independent, geographically separated evaluation is needed to assess generalization." },
      { eyebrow: "PROJECT OBJECTIVE", title: "Help prioritize scenes for further review", text: "The project explores an integrated computer-vision and analytics workflow that identifies potential regions in available SAR imagery and helps organize scenes for analyst investigation." }
    ],
    highlights: ["Transforms SAR imagery into probability maps, masks, and overlays.", "Reports scene-level metrics and project-defined priorities for analyst review.", "Supports single-scene inspection and batch analysis with CSV export."],
    limitations: [
      "This is an experimental decision-support prototype, not an independently validated environmental risk assessment.",
      "Reported metrics are from a post-training evaluation subset, not a strict held-out test set.",
      "SAR look-alikes and varied geographic, sea, sensor, and resolution conditions can affect predictions and create false positives.",
      "Predicted probability is a model output and is not necessarily a calibrated probability of real-world oil presence.",
      "Coverage is pixel-based; physical area estimates require reliable geospatial metadata and ground-sampling distance.",
      "The project-defined score helps prioritize review and is not an official environmental risk classification. Analyst verification remains necessary."
    ],
    technologies: ["Python", "PyTorch", "Streamlit", "NumPy", "Pandas", "Matplotlib", "OpenCV", "CUDA", "U-Net", "Semantic Segmentation"],
    responsibleUse: "Model predictions and the project-defined score are intended to support experimental review only. They are not definitive evidence of an oil spill or its severity.",
    diagrams: "oil-spill-flow-diagrams.html",
    github: "https://github.com/ArtiMhaske34/OilSpillAI",
    images: [
      { src: "assets/projects/oilspill-dashboard.png", alt: "Oil spill analysis Streamlit dashboard showing model details and image input modes", caption: "Dashboard — model information and single or batch image input modes." },
      { src: "assets/projects/oilspill-single-image.png", alt: "Oil spill application displaying an uploaded grayscale SAR image", caption: "Single-image analysis — inspect a SAR scene before running inference." },
      { src: "assets/projects/oilspill-analysis-overview.png", alt: "Analysis overview with scene count, spill coverage, predicted probability, and scene priority ranking", caption: "Analysis overview — compare scene-level coverage and prioritization metrics." },
      { src: "assets/projects/oilspill-priority-scene.png", alt: "Highest-priority scene with spill coverage and a segmentation overlay on SAR imagery", caption: "Priority scene — inspect the predicted segmentation overlay and project-defined priority." },
      { src: "assets/projects/oilspill-scene-inspector.png", alt: "Scene inspector with SAR image, probability heatmap, and segmentation overlay", caption: "Scene inspector — review the source image, probability heatmap, and overlay together." },
      { src: "assets/projects/oilspill-analysis-summary.png", alt: "AI analysis summary describing predicted scene coverage, mean predicted probability, and project-defined priority", caption: "Analysis summary — model outputs and the explicit project-defined score caveat." }
    ]
  },
  "face-liveness": {
    category: "AI & Machine Learning · Computer Vision",
    title: "Face Recognition with Liveness Detection",
    subtitle: "Real-Time Face Recognition | Liveness Verification | Computer Vision | REST APIs",
    summary: "A biometric-authentication prototype that combines facial identity matching with blink and head-motion liveness cues, exposed through a FastAPI backend.",
    overview: "The system processes webcam frames with OpenCV, detects and aligns faces with InsightFace, and uses ArcFace to create 512-dimensional facial embeddings. It compares an incoming embedding with registered representations using cosine similarity. MediaPipe Face Mesh tracks eye landmarks and face movement across consecutive frames; the backend returns recognition and liveness results together.",
    problem: "Face matching can identify a familiar face in a photograph or video without determining whether the person is physically present. That leaves a presentation-attack risk for systems that rely on identity similarity alone.",
    solution: "This project combines face matching with lightweight liveness heuristics. It evaluates blink patterns using eye landmarks and head movement across frames, then combines the implemented liveness result with recognition status in the response.",
    focus: ["Computer Vision", "Face Recognition", "Liveness Verification", "Real-Time Video", "REST APIs"],
    features: [
      { title: "Face registration", text: "Detects a face, generates a facial embedding, and stores its registered identity representation locally." },
      { title: "ArcFace recognition", text: "Uses InsightFace with ArcFace to generate 512-dimensional embeddings and compare them with registered representations." },
      { title: "Cosine-similarity matching", text: "Ranks identity matches by cosine similarity and checks the top match against a configured threshold." },
      { title: "Eye-blink checks", text: "Uses MediaPipe Face Mesh eye landmarks to calculate the Eye Aspect Ratio (EAR) and look for blink patterns across frames." },
      { title: "Head-motion checks", text: "Tracks facial position across consecutive frames and evaluates movement against the implemented condition." },
      { title: "REST API and video endpoints", text: "FastAPI exposes registration, recognition, video-feed, and recognition-history functionality; annotated video output is available where supported by the running application." },
      { title: "Local storage", text: "Stores facial embeddings and recognition history locally, including Pickle-based embedding serialization as described in the project." }
    ],
    engineering: [
      { title: "Separate identity from liveness", text: "Identity similarity and movement-based liveness are calculated as distinct signals before the authentication decision." },
      { title: "Use compact facial representations", text: "ArcFace produces 512-dimensional embeddings that can be compared with registered representations using cosine similarity." },
      { title: "Analyze consecutive frames", text: "Blink and head-motion checks rely on landmark and position changes over time rather than a single still image." },
      { title: "Expose modular functionality", text: "FastAPI endpoints provide a backend interface for registration, recognition, video, and history operations." }
    ],
    sections: [
      { eyebrow: "REPORTED EXPERIMENTAL RESULTS", title: "ArcFace and FaceNet baseline comparison", comparison: { columns: ["Metric", "ArcFace", "FaceNet baseline"], rows: [["Recognition accuracy", "90.5%", "74.2%"], ["Precision", "96.8%", "93.1%"], ["Recall", "97.2%", "91.4%"], ["F1-score", "97.0%", "92.2%"], ["Embedding dimension", "512", "128"], ["Reported model size", "88 MB", "93 MB"]] }, note: "These are reported results, not independently verified benchmarks. The report gives an approximate ArcFace runtime of 5–10 FPS; the FaceNet runtime figure needs clarification. Dataset and evaluation details affect how these figures should be interpreted." },
      { eyebrow: "PROJECT OBJECTIVE", title: "Combine identity matching with lightweight liveness cues", text: "Develop a modular biometric-authentication prototype that pairs facial identity matching with blink and head-motion checks, and exposes the functionality through a backend API." }
    ],
    highlights: ["Combines ArcFace identity embeddings with MediaPipe-based blink and head-motion cues.", "Uses cosine similarity and a configurable recognition threshold.", "Exposes registration, recognition, video-feed, and history functions through FastAPI.", "Stores embeddings and recognition history locally."],
    limitations: [
      "Blink and head-motion checks are lightweight heuristics, not a dedicated presentation-attack detection model.",
      "These checks do not guarantee protection against photographs, video replays, masks, or other spoofing techniques.",
      "Recognition results can vary with lighting, pose, camera quality, enrollment images, and threshold selection.",
      "The reported metrics are preliminary and require independent evaluation across varied data and conditions.",
      "Face embeddings and recognition logs are biometric data; local storage still requires informed consent, access control, and appropriate retention practices."
    ],
    technologies: ["Python", "OpenCV", "InsightFace", "ArcFace", "ONNX Runtime", "MediaPipe Face Mesh", "FastAPI", "REST APIs", "NumPy", "Pickle serialization"],
    responsibleUse: "This prototype demonstrates biometric matching and basic liveness cues; it should not be treated as a secure identity-verification system without robust testing and stronger presentation-attack defenses.",
    diagrams: "face-recognition-flow-diagrams.html",
    images: [
      { src: "assets/projects/face-live-demo.png", alt: "Live face recognition demo with a face box, match confidence, liveness status, and performance indicators", caption: "Live recognition demo — annotated face, similarity output, and liveness indicators." },
      { src: "assets/projects/face-spoof-demo.png", alt: "Face authentication interface showing an unknown identity and a spoof-detected status", caption: "Liveness demo — an example status response for an unconfirmed live presence." },
      { src: "assets/projects/face-registration-demo.png", alt: "Face registration interface capturing a face and entering a user name before saving", caption: "Registration screen — capture a face and enroll a local identity representation." }
    ]
  },
  "customer-churn": {
    category: "Data Analytics · Machine Learning · Business Intelligence",
    title: "Customer Churn Intelligence Dashboard",
    subtitle: "Predictive Analytics, SQL Business Intelligence & Machine Learning",
    summary: "An interactive Streamlit platform that brings together customer analytics, SQL exploration, churn prediction, model evaluation, explanation, and data-quality review.",
    overview: "Customer Churn Intelligence uses the IBM Telco Customer Churn dataset to explore how customer demographics, tenure, subscribed services, contracts, payment methods, and charges relate to churn. A unified Streamlit dashboard connects data exploration and quality checks with SQLite-backed SQL analytics, XGBoost predictions, model evaluation, local explanations, and human-reviewed retention planning.",
    problem: "Customer churn patterns are difficult to investigate when data exploration, segment analysis, prediction, and model evaluation live in separate tools. A probability alone can also be hard to interpret without its evaluation context, feature explanations, and underlying segment data.",
    solution: "The application creates a connected workflow from CSV data to validation, SQL aggregation, machine-learning estimates, and interactive visual analysis. Users can explore customer segments, estimate individual or batch churn risk, inspect model trade-offs and feature contributions, and review potential outreach capacity using stated cost assumptions.",
    focus: ["Customer Analytics", "Churn Prediction", "SQL & SQLite", "Model Evaluation", "Explainable ML", "Streamlit Dashboards"],
    features: [
      { title: "Interactive churn analytics", text: "KPI cards and Plotly visuals summarize customers, churn, retention, average tenure, and segment-level patterns. Contract, payment-method, and internet-service filters support focused exploration." },
      { title: "Individual churn prediction", text: "A fitted XGBoost pipeline estimates churn probability from customer, service, contract, and billing inputs, then displays the predicted class, configurable threshold, descriptive risk band, and suggested review action." },
      { title: "Batch CSV prediction", text: "Validates uploaded customer columns, maps compatible fields, applies the saved preprocessing pipeline, and returns downloadable predictions and risk categories. Uploaded data does not automatically retrain the model." },
      { title: "Model evaluation and thresholds", text: "Compares XGBoost, Logistic Regression, and a simple baseline using accuracy, precision, recall, F1, ROC-AUC, a confusion matrix, ROC curve, and an interactive threshold explorer." },
      { title: "Prediction explainability", text: "Shows local feature contributions for an individual estimate and global feature importance for the model. These describe model behavior and do not establish cause." },
      { title: "Read-only SQL analytics", text: "Loads supported records into local SQLite and uses read-only SQL patterns for counts, churn rates, segment comparisons, and aggregations; query plans and result tables remain visible." },
      { title: "Optional AI-assisted analysis", text: "An optional OpenAI integration can summarize available SQL results in natural language. Core dashboard, analytics, and model workflows do not require an API key." },
      { title: "CSV exploration and quality checks", text: "Explores general CSV structure separately from churn-model inputs and checks missing values, unexpected categories, duplicates, ranges, and batch compatibility." },
      { title: "Outreach capacity planning", text: "Estimates how many contacts fit a user-provided budget and cost assumptions; this is a capacity estimate, not an ROI or saved-customer forecast." }
    ],
    sections: [
      { eyebrow: "DATASET PROFILE", title: "IBM Telco Customer Churn", list: ["Dashboard snapshot: 7,043 customer records and 20 columns, including the churn label.", "Customer attributes cover demographics, tenure, services, contract type, payment method, monthly charges, and total charges.", "The prediction form accepts 19 customer input features.", "The dashboard includes data-quality checks; screenshots show missing values and duplicate-profile counts for the displayed source data."] },
      { eyebrow: "MODEL EVALUATION", title: "Compare classification trade-offs", comparison: { columns: ["Model", "Accuracy", "Precision (Yes)", "Recall (Yes)", "F1 (Yes)", "ROC-AUC"], rows: [["XGBoost pipeline", "0.803", "0.661", "0.532", "0.590", "0.842"], ["Logistic regression", "0.806", "0.657", "0.559", "0.604", "0.842"], ["Prior baseline", "0.735", "0.000", "0.000", "0.000", "0.500"]] }, note: "The captured evaluation uses a stratified 20% test split with random seed 42 and treats Churn=Yes as the positive class. These are project-reported results; performance depends on the dataset, split, preprocessing, and decision threshold." },
      { eyebrow: "ANALYTICAL WORKFLOW", title: "From customer data to reviewed decisions", list: ["Load customer CSV data and inspect the schema.", "Validate missing values, categories, numeric ranges, duplicates, and required fields.", "Use read-only SQLite queries to calculate customer and segment metrics.", "Apply the fitted preprocessing and model pipeline to individual or batch customer inputs.", "Evaluate model performance and threshold trade-offs; inspect local and global feature contributions.", "Review dashboard outputs and any retention planning with a human decision-maker."] },
      { eyebrow: "BUSINESS APPLICATIONS", title: "Support evidence-informed retention review", list: ["Investigate segments with different observed churn rates.", "Compare patterns across contract, tenure, services, payment methods, and charges.", "Prioritize customer records for review using model estimates.", "Inspect model trade-offs before selecting a decision threshold.", "Estimate outreach capacity using explicit budget and contact-cost assumptions."] },
      { eyebrow: "PROJECT OUTCOME", title: "One workspace for churn analysis", text: "The project brings exploratory analytics, SQL, machine learning, model evaluation, explainability, and data validation into a single interactive application. It demonstrates a practical data-to-decision workflow while keeping customer-level interventions subject to human review." }
    ],
    highlights: ["Connects CSV exploration, local SQL analytics, and churn modeling in one Streamlit application.", "Supports individual and batch estimates with threshold and risk-band context.", "Makes model comparison and local/global feature explanations inspectable.", "Separates optional AI summaries and assumption-based campaign planning from the core model workflow."],
    engineering: [
      { title: "Keep training and inference preprocessing aligned", text: "The fitted pipeline applies the preprocessing expected by the model to customer inputs, reducing schema and transformation drift between training and prediction." },
      { title: "Make classification trade-offs visible", text: "The evaluation area presents threshold effects alongside precision, recall, flagged-customer counts, and confusion-matrix outcomes." },
      { title: "Ground SQL summaries in query results", text: "The optional natural-language analysis layer uses approved, read-only analytical results as context; the plan and returned rows remain available to inspect." },
      { title: "Keep batch data separate from training", text: "Uploaded customer CSVs can be explored or scored when their inputs are compatible, but do not automatically update or retrain the existing model." },
      { title: "Treat explanations as model diagnostics", text: "Local contributions and global feature importance help inspect model behavior but are not evidence of causal drivers." }
    ],
    limitations: [
      "Churn probabilities are estimates of model output, not guarantees of future behavior.",
      "Model metrics depend on the dataset and evaluation design; further validation on appropriately separated, representative data is needed before operational use.",
      "Feature contributions and global importance describe model behavior and do not establish causal effects.",
      "Risk bands and suggested actions are descriptive decision-support aids, not automatic customer decisions.",
      "Campaign planning uses user-entered cost assumptions and does not measure ROI or predict saved customers.",
      "Customer-level outreach and retention actions should be reviewed by people and follow applicable privacy and fairness practices."
    ],
    technologies: ["Python", "Streamlit", "Pandas", "NumPy", "SQL", "SQLite", "XGBoost", "Scikit-learn", "Plotly", "Joblib", "OpenAI API (optional)"],
    responsibleUse: "This project is an analytics and decision-support prototype. Churn predictions are not certain outcomes, explanations are not causal evidence, and customer-level retention actions remain subject to human review.",
    diagrams: "customer-churn-flow-diagrams.html",
    images: [
      { src: "assets/projects/churn-dashboard/overview.png", alt: "Customer Churn Intelligence dashboard overview with filters, customer KPIs, and segment churn charts", caption: "Overview — customer KPIs, segment filters, and churn analysis." },
      { src: "assets/projects/churn-dashboard/individual-prediction-form.png", alt: "Individual customer prediction form with account, service, and billing attributes", caption: "Individual prediction — enter the customer attributes used by the fitted pipeline." },
      { src: "assets/projects/churn-dashboard/prediction-result.png", alt: "Customer churn probability, predicted class, risk band, and feature-based explanation", caption: "Prediction result — estimated probability with class threshold and review context." },
      { src: "assets/projects/churn-dashboard/model-evaluation.png", alt: "Held-out model comparison for XGBoost, Logistic Regression, and a baseline", caption: "Model evaluation — compare classification metrics on the displayed test split." },
      { src: "assets/projects/churn-dashboard/threshold-and-confusion-matrix.png", alt: "Precision and recall threshold analysis and confusion matrix", caption: "Threshold analysis — review precision/recall trade-offs and classification counts." },
      { src: "assets/projects/churn-dashboard/roc-curve.png", alt: "ROC curve comparing XGBoost churn predictions against the chance baseline", caption: "ROC curve — discrimination performance shown against the chance baseline." },
      { src: "assets/projects/churn-dashboard/local-explanation.png", alt: "Local feature contributions for an individual churn probability estimate", caption: "Local explanation — factors that raise or lower this model estimate; not causal effects." },
      { src: "assets/projects/churn-dashboard/global-feature-importance.png", alt: "Global feature-importance chart for the customer churn model", caption: "Global feature importance — model-level diagnostic of features used by the classifier." },
      { src: "assets/projects/churn-dashboard/sql-ai-analytics.png", alt: "Read-only SQL analytics workflow with a visible plan and customer churn query results", caption: "SQL + AI analyst — inspect the read-only analysis plan and returned segment metrics." },
      { src: "assets/projects/churn-dashboard/data-quality-overview.png", alt: "Customer data quality checks showing rows, missing values, unexpected categories, and duplicate profiles", caption: "Data quality — summary checks for the displayed customer dataset." },
      { src: "assets/projects/churn-dashboard/data-quality-details.png", alt: "Customer data quality details including numeric ranges and CSV monitoring upload", caption: "Quality monitoring — inspect value ranges and validate an incoming customer CSV." }
    ]
  },
  "air-traffic": {
    category: "Data Analytics",
    title: "Air Traffic Analysis Dashboard",
    subtitle: "An Interactive Flight Operations and Performance Analytics Project",
    summary: "An interactive Power BI dashboard for exploring flight volume, delays, cancellations, airline performance, monthly patterns, and airport activity across 261,748 flight records.",
    overview: "The Air Traffic Analysis Dashboard transforms the 1994 Flight Timing Dataset into an interactive Power BI report. KPI cards, charts, airline and month filters, and airport-level geographic views help users compare operations and investigate patterns without reviewing records one by one.",
    problem: "Flight datasets contain many individual timing, airline, airport, and outcome fields. Reviewing the records one at a time makes it harder to compare punctuality, cancellations, and airline or monthly patterns.",
    solution: "The dashboard brings key measures and visual comparisons into one Power BI report. Users can filter by airline and month, review delay and cancellation patterns, and explore airport-related activity through a geographic view.",
    focus: ["Power BI", "Flight Operations Analytics", "Data Visualization", "KPI Reporting", "Interactive Filtering"],
    features: [
      { title: "Flight performance KPIs", text: "Summarizes total flights, average departure and arrival delays, cancelled flights, and an on-time percentage measure." },
      { title: "Delay and cancellation analysis", text: "Uses visual summaries to explore delay behavior and cancellation counts or proportions." },
      { title: "Airline comparisons", text: "Lets users compare arrival performance across airline carriers." },
      { title: "Monthly trends", text: "Shows changes in flight punctuality, cancellations, and early arrivals over time." },
      { title: "Airport-level geographic view", text: "Provides a map-based view of flight activity associated with airport locations." },
      { title: "Interactive report filters", text: "Airline and month slicers update the report so users can investigate selected subsets of the data." }
    ],
    sections: [
      { eyebrow: "DATASET PROFILE", title: "1994 flight timing data", list: ["Dataset: 1994 Flight Timing Dataset.csv", "261,748 records and 23 columns", "Includes flight schedules, actual timings, airlines, airports, distance, delays, cancellations, and diversions", "Fields include month, day, carrier, flight number, origin, destination, arrival delay, departure delay, and cancellation status"] },
      { eyebrow: "PROJECT OBJECTIVES", title: "Turn flight records into operational insight", list: ["Analyze arrival and departure delays and flight cancellation patterns.", "Compare arrival performance across airlines.", "Explore monthly flight activity and on-time performance.", "Visualize airport-related flight activity on a map.", "Use interactive airline and month filters to investigate selected records."] },
      { eyebrow: "ANALYTICAL WORKFLOW", title: "From flight records to an interactive report", list: ["Inspect the dataset and understand field types.", "Prepare data in Power Query where needed.", "Create analytical measures for flight counts, average delays, cancellations, and on-time performance.", "Build KPI cards, charts, airline comparisons, monthly trends, and airport map views.", "Arrange visuals into a Power BI report and add airline and month slicers.", "Use the filters to explore flight performance and investigate patterns."] },
      { eyebrow: "ANALYTICAL VALUE", title: "Explore patterns across airlines, months, and airports", text: "The report brings flight-volume indicators, delay metrics, cancellation analysis, monthly visualizations, airline comparisons, and airport mapping into one interactive Power BI dashboard. Users can filter the report to focus their exploration and compare operational patterns across selected subsets of the data." },
      { eyebrow: "KEY LEARNINGS", title: "Presenting operational data clearly", list: ["Organized flight data for analysis.", "Matched visual types to operational questions.", "Presented delay and cancellation measures through KPI cards and charts.", "Combined time trends, airline comparisons, and geographic context in one interactive report."] },
      { eyebrow: "MEASURE NOTE", title: "On-time performance depends on its definition", text: "The dashboard includes an on-time percentage KPI. Its exact interpretation depends on the measure definition used in the Power BI model." }
    ],
    highlights: ["Brings delay, cancellation, and flight volume measures together.", "Supports airline and month-based exploration with slicers.", "Combines operational trends with airport-level geographic context."],
    engineering: [
      { title: "Work with a substantial flight dataset", text: "The report is built around 261,748 rows and 23 columns of flight timing and operational data." },
      { title: "Pair measures with visual context", text: "KPIs summarize selected performance measures, while airline charts, monthly trends, cancellation visuals, and maps support deeper exploration." },
      { title: "Make the report interactive", text: "Airline and month slicers let users apply a filter context and compare the resulting views." }
    ],
    technologies: ["Microsoft Power BI", "Power Query", "DAX", "CSV Data", "Data Visualization", "Business Intelligence"],
    diagrams: "air-traffic-flow-diagrams.html",
    images: []
  },
  "business-dashboard": {
    category: "Data Analytics",
    title: "Financial Income Sources & Performance Dashboard",
    subtitle: "Microsoft Excel | Financial Data Analysis | KPI Reporting | Interactive Dashboard Design",
    summary: "An interactive Excel dashboard for exploring income sources, monitoring actual revenue against targets, reviewing operating profit, and comparing business performance across years and customer segments.",
    overview: "The dashboard consolidates financial data into a visual interface with year selection, income-source analysis, monthly trends, target monitoring, operating-profit views, and B2B/B2C comparisons. It is designed to help users explore income distribution and performance across 2020–2024.",
    problem: "Financial performance data can be difficult to interpret when income sources, targets, monthly trends, operating profit, and customer segments must be reviewed separately. Users need a clear way to compare these measures and explore changes over time.",
    solution: "An interactive Excel dashboard brings the key financial measures into one reporting interface. Year selection and visual summaries let users explore revenue categories, compare actual income with targets, examine monthly patterns, and review B2B and B2C segments.",
    focus: ["Financial Data Analysis", "Income Source Analysis", "KPI Reporting", "Data Visualization", "Interactive Excel Dashboards"],
    features: [
      { title: "Income-source analysis", text: "Explores revenue distribution across licensing, renting, subscriptions, usage fees, advertising, and asset sales." },
      { title: "Target monitoring", text: "Compares actual income with target income to review achievement and performance gaps." },
      { title: "Monthly income trends", text: "Visualizes monthly income patterns to explore changes across the selected year." },
      { title: "Income breakdowns", text: "Examines individual revenue streams within broader income categories." },
      { title: "Operating-profit analysis", text: "Displays monthly operating-profit trends across selected periods." },
      { title: "B2B and B2C comparison", text: "Explores financial performance across Business-to-Business and Business-to-Consumer segments." },
      { title: "Interactive year selection", text: "Switches the dashboard view across years 2020–2024." }
    ],
    sections: [
      { eyebrow: "DATASET PROFILE", title: "Financial performance data", list: ["Dataset: Financial Performance and Income Analysis Dataset", "Approximately 900 records across 2020–2024", "Excel spreadsheet with year, month, income sources and breakdowns, counts, income, target income, operating profit, and marketing strategies", "Income categories: licensing, renting, subscription, usage fees, advertising, and asset sales", "Marketing segments: B2B and B2C"] },
      { eyebrow: "PROJECT WORKFLOW", title: "From dataset to interactive dashboard", list: ["Inspect and organize the financial dataset.", "Examine income categories, target income, and operating-profit measures.", "Analyze monthly and yearly financial trends.", "Develop visualizations for key financial indicators.", "Arrange charts and performance summaries into an interactive dashboard.", "Use year selection to explore income distribution and business performance."] },
      { eyebrow: "KEY LEARNINGS", title: "Financial analysis through visual reporting", list: ["Strengthened financial data analysis and visualization skills.", "Practiced presenting financial KPIs through an interactive dashboard.", "Explored income distribution, target monitoring, and operating-profit analysis.", "Organized multiple financial measures into a unified reporting interface."] },
      { eyebrow: "PROJECT OUTCOME", title: "One view of income and performance", text: "Created an interactive Excel dashboard that brings income sources, revenue trends, target comparisons, operating profits, and marketing-segment analysis together to make financial information easier to explore." }
    ],
    highlights: ["Brings income-source, target, monthly-trend, and profit views into one workbook.", "Supports year-by-year exploration across 2020–2024.", "Compares B2B and B2C financial performance."],
    technologies: ["Microsoft Excel", "Financial Data Analysis", "Data Visualization", "KPI Reporting", "Interactive Dashboard Design"],
    images: [
      { src: "assets/projects/income-dashboard-2024.png", alt: "Financial income sources dashboard with 2024 selected, income target, category breakdown, operating profit, and B2B and B2C views", caption: "2024 dashboard view — income sources, target progress, operating profit, and customer segments." },
      { src: "assets/projects/income-dashboard-2023.png", alt: "Financial income dashboard for 2023 showing income-source performance and monthly indicators", caption: "2023 dashboard view." },
      { src: "assets/projects/income-dashboard-2022.png", alt: "Financial income dashboard for 2022 with selected year and source-level financial metrics", caption: "2022 dashboard view." },
      { src: "assets/projects/income-dashboard-2021.png", alt: "Financial income dashboard for 2021 showing target comparison and income categories", caption: "2021 dashboard view." },
      { src: "assets/projects/income-dashboard-2020.png", alt: "Financial income dashboard for 2020 with annual income-source analysis", caption: "2020 dashboard view." }
    ]
  },
  "fishy-splash": {
    category: "Gaming Project",
    title: "Fishy Splash",
    subtitle: "2D Unity Game · C# · Underwater Arcade",
    summary: "A cartoon-style underwater game with lively fish, dynamic spawning, expressive player reactions, and three levels that add playful twists to the fishing challenge.",
    overview: "Fishy Splash is a 2D Unity game built around an animated underwater world. Fish move with varied directions and speeds while new fish and bubbles appear over time. The game combines menu and scene navigation, reusable prefabs, visual effects, and level-specific mechanics. The player character reacts to the outcome: a happy expression after a successful catch and a sad expression when a catch is missed.",
    problem: "Create a playful 2D game that feels active and expressive, with enough variation to keep the fishing challenge engaging across multiple levels.",
    solution: "Fishy Splash pairs randomized fish movement and spawning with animated bubbles, interactive menus, and three levels that introduce bombs, deceptive mirage fish, and shifting hooks. Player expressions add immediate feedback when a catch succeeds or is missed.",
    focus: ["Unity", "C#", "2D Game Development", "Gameplay Systems", "UI & Animation"],
    features: [
      { title: "Living underwater scene", text: "A colorful underwater setting combines fish sprites, bubbles, and visual effects to create an animated game environment." },
      { title: "Randomized fish movement", text: "Fish swim in varied directions and at different speeds, making the scene feel dynamic rather than static." },
      { title: "Automatic spawning and bubbles", text: "A coroutine spawns fish at randomized intervals and positions; bubble effects rise and fade as new fish appear." },
      { title: "Interactive menus and scenes", text: "The main menu includes Play, How to Play, and Settings controls, with scene navigation into gameplay." },
      { title: "Expressive player feedback", text: "The player character shows a happy reaction after catching a fish and a sad reaction when a catch is missed, making the outcome easy to read." },
      { title: "Reusable game objects", text: "Fish and bubble prefabs support reusable object creation and help keep scene setup organized." }
    ],
    sections: [
      { eyebrow: "LEVEL DESIGN", title: "Three levels, three twists.", list: ["Level 1 — Bait and Switch: some fish are bombs, so hitting one deducts points.", "Level 2 — Mirage Reef: deceptive mirage fish look real and challenge players to tell them apart.", "Level 3 — Hook Spin: two hooks switch positions with side-arrow controls, adding a timing and strategy element."] },
      { eyebrow: "MY CONTRIBUTION", title: "Gameplay, UI, and reusable systems.", list: ["Developed C# scripts for fish movement and spawning.", "Implemented randomized movement and spawn timing.", "Created reusable fish and bubble prefabs.", "Designed and integrated main-menu UI and scene navigation.", "Worked on visual effects and player reaction animations."] },
      { eyebrow: "PROJECT OUTCOME", title: "An expressive, multi-level 2D game.", text: "Built an underwater game experience combining animated characters, dynamic spawning, interactive menus, reusable Unity objects, and level-specific gameplay mechanics." }
    ],
    engineering: [
      { title: "Frame-rate independent motion", text: "Uses Vector2 movement with Time.deltaTime so fish movement is not tied to the frame rate." },
      { title: "Controlled gameplay variation", text: "Uses Random.Range() to vary fish directions, speeds, positions, and spawning intervals." },
      { title: "Repeated spawning with coroutines", text: "Coroutines manage recurring fish spawning, while Instantiate() creates fish and bubble objects at runtime." },
      { title: "Unity scene and UI systems", text: "Uses Unity UI components and Scene Management to connect the menu with gameplay scenes." }
    ],
    highlights: ["Three levels introduce distinct gameplay mechanics.", "Happy and sad player reactions communicate catch and miss outcomes.", "Reusable prefabs and coroutine-based spawning support dynamic scenes."],
    technologies: ["Unity 2022", "C#", "Unity UI System", "Canvas", "2D Sprites", "Prefabs", "Coroutines", "Unity Scene Management"],
    videos: [
      { title: "Level 2 — Mirage Reef", src: "assets/videos/fishy-splash-level-2-mirage-reef.mp4", caption: "Gameplay capture of the Mirage Reef level." },
      { title: "Level 3 — Hook Spin", src: "file:///C:/Users/ganes/Videos/Captures/Fishy%20Splash%20-%20Level3_HookTwist%20-%20Windows,%20Mac,%20Linux%20-%20Unity%202022.3.53f1%20_DX11_%202026-10-28%2019-53-31.mp4", caption: "Gameplay capture of the hook-switching level." },
      { title: "Main Menu", src: "file:///C:/Users/ganes/Videos/Captures/Fishy%20Splash%20-%20MainMenu%20-%20Windows,%20Mac,%20Linux%20-%20Unity%202022.3.53f1%20_DX11_%202026-10-28%2019-45-17.mp4", caption: "Main menu and game entry point capture." }
    ],
    images: [
      { src: "assets/projects/fishy-splash-game-flow.png", alt: "Fishy Splash game flow and system block diagram showing menu choices, level selection, game manager, fish spawning and behavior, collisions, and all three levels", caption: "Game flow & system architecture — from the main menu and level selection to the gameplay systems and three level mechanics." },
      { src: "assets/projects/fishy-splash-system-diagram.png", alt: "Fishy Splash system diagram connecting the main menu, gameplay scene, fish spawner, bubble effects, fish prefabs, and randomized movement", caption: "System overview — menu, gameplay scene, fish spawning, reusable prefabs, and movement." },
      { src: "assets/projects/fishy-splash-animator.png", alt: "Unity Animator controller showing idle, happy, sad, alert, and talk player animation states", caption: "Player Animator — includes happy and sad reaction states alongside idle, alert, and talk." },
      { src: "assets/projects/fishy-splash-you-win.png", alt: "Colorful Fishy Splash You Win screen with restart, home, and next level buttons", caption: "Level completion — win screen with restart, home, and next-level actions." },
      { src: "assets/projects/fishy-splash-game-over.png", alt: "Fishy Splash Game Over screen with a sad fish and restart and home buttons", caption: "Game over — time-up state with restart and home options." }
    ]
  },
  "monstermerge-rush": {
    category: "Gaming Project",
    title: "Monster Merge Rush",
    subtitle: "A 2D Side-Scrolling Endless Runner with Monster Growth and Group Expansion",
    summary: "A Unity 2D runner about guiding a growing group of fluffy Monster Puffs through a scrolling world, collecting rewards, and avoiding hazards as the pace increases.",
    overview: "Monster Merge Rush combines continuous side-scrolling with monster growth, group expansion, coin collection, and bomb hazards. Consuming humans increases monster size and advances group-growth milestones. Bomb collisions remove a monster from the group, while progressive speed increases add challenge. The game presents three visual themes: Green Forest, Dark Thunderstorm, and Icy Landscape.",
    problem: "Endless runners need a clear reason to keep moving and replay. This project explores a progression loop where collecting humans changes the monster group, while hazards and rising speed create consequences and challenge.",
    solution: "The core loop connects running, consuming humans, growing and expanding the group, collecting coins, and avoiding bombs. Layered backgrounds create a sense of movement and depth, while changing environment themes add visual variety.",
    focus: ["Unity 2D", "C# Gameplay Systems", "Endless Runner", "Parallax Scrolling", "Collision & Progression"],
    features: [
      { title: "Side-scrolling runner", text: "A continuously moving playfield brings humans, coins, and bombs into the player's path." },
      { title: "Monster growth", text: "Consuming humans increases the Monster Puff's size and progresses the growth counter." },
      { title: "Group expansion", text: "Human-consumption milestones add another monster, turning progression into a group-management mechanic." },
      { title: "Bomb hazards", text: "A successful bomb collision removes one monster; the run can continue while the group survives." },
      { title: "Coins and score", text: "Collectible coins contribute to the reward and score loop during a run." },
      { title: "Changing pace and worlds", text: "Running speed increases over time, and the game features Green Forest, Dark Thunderstorm, and Icy Landscape themes." }
    ],
    sections: [
      { eyebrow: "CORE GAMEPLAY", title: "Run, grow, and keep the group alive.", text: "The run is built around a repeating sequence: move through the world, consume humans to grow, expand the group at milestones, collect coins, avoid bombs, and survive the increasing pace." },
      { eyebrow: "WORLD DESIGN", title: "Three visual environments.", list: ["Green Forest — the default woodland setting.", "Dark Thunderstorm — a darker, storm-themed world.", "Icy Landscape — a cold visual theme for a different atmosphere."] },
      { eyebrow: "GAMEPLAY LOOP", title: "A risk-and-reward run.", text: "The player balances growth and rewards against survival: consuming humans grows the monsters, collecting coins builds the score, and each bomb makes the remaining group more valuable. As speed rises, every decision has less time to make." }
    ],
    engineering: [
      { title: "Frame-independent movement", text: "Use Time.deltaTime with transform movement so scrolling and movement remain consistent across frame rates." },
      { title: "Layered parallax", text: "Move background layers at different speeds to suggest depth, then reposition paired sprites to maintain an infinite scrolling effect." },
      { title: "Growth and group state", text: "Track human consumption, monster growth, active group size, and score as related but distinct gameplay values." },
      { title: "Collision-driven hazards", text: "Use 2D colliders and guarded collision handling so a bomb contact removes a group member only once." },
      { title: "Progressive difficulty", text: "Increase running speed over time or distance and clamp it to a maximum to keep the challenge bounded." }
    ],
    highlights: ["A distinctive growth-and-group-expansion loop inside an endless runner.", "Bomb collisions make the monster group a limited resource.", "Three environment themes and layered scrolling add visual variety."],
    technologies: ["Unity", "C#", "Unity 2D", "Sprite Renderer", "Transform Movement", "Collider2D", "Prefabs", "TextMeshPro"],
    diagrams: "monstermerge-flow-diagrams.html",
    videos: [
      { title: "Intro Scene", src: "assets/videos/monster-merge-rush-intro.mp4", caption: "Opening scene and game introduction." },
      { title: "Parallax Scene", src: "assets/videos/monster-merge-rush-parallax.mp4", caption: "Side-scrolling environment and layered background capture." },
      { title: "Theme 1 — Green Forest", src: "assets/videos/monster-merge-rush-theme-1.mp4", caption: "Gameplay capture of the forest environment theme." },
      { title: "Theme 2 — Dark Thunderstorm", src: "assets/videos/monster-merge-rush-theme-2.mp4", caption: "Gameplay capture of the thunderstorm environment theme." },
      { title: "Theme 3 — Icy Landscape", src: "assets/videos/monster-merge-rush-theme-3.mp4", caption: "Gameplay capture of the icy environment theme." }
    ],
    images: []
  }
};
