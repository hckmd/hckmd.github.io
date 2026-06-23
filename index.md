---
layout: default
title: Home
---

<div class="row align-items-center">
    <div class="col-xs-12 col-md-8 mb-4 mb-md-0">
        <h1 class="mb-3">Daniel (Dan) Hickmott</h1>
        <p class="lead mb-4">
            I design, build and evaluate inclusive learning experiences tailored for K-12 environments, higher education, and professional learning.
        </p>
        <p class="lead mb-4">
            EdTech Specialist based in NSW, Australia. Available for contract work and consultancy.
        </p>
        <div class="d-flex justify-content-center justify-content-md-start">
            <a class="btn btn-info px-4 py-2 text-white shadow-sm" href="{{ site.baseurl | append: '/contact/' }}">
                <i class="fa fa-envelope me-2"></i>Work with me
            </a>
        </div>
    </div>
    <div class="col-xs-12 col-md-4 text-center">
        <div id="profile" class="py-0">
            <img class="portrait shadow" src="{{ site.baseurl | append: '/me.jpg' }}" alt="Portrait photo of Daniel Hickmott">
        </div>
    </div>
</div>
<div class="showcase">
    <h2 class="mt-4">Services</h2>
    <p>I can support your team or project with expertise across these areas:</p>
    <div class="accordion my-4" id="servicesAccordion">
            <div class="accordion-item">
            <h3 class="accordion-header" id="headingLearning">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLearning" aria-expanded="false" aria-controls="collapseLearning"><i class="fa fa-book me-2" aria-hidden="true"></i>Learning Design & Content Development</button>
            </h3>
            <div id="collapseLearning" class="accordion-collapse collapse" aria-labelledby="headingLearning" data-bs-parent="#servicesAccordion">
                <div class="accordion-body">
                    <p>I design and create engaging and adaptable educational resources and professional learning programs for various audiences, including K-12 and higher education.</p>
                    <a href="{{ site.baseurl }}/projects/?tag=Learning+Design&tag=Content+Development" class="btn btn-sm btn-info text-white"><i class="fa fa-book me-2"></i>View Learning Design & Content Development Projects</a>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h3 class="accordion-header" id="headingUX">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUX" aria-expanded="false" aria-controls="collapseUX"><i class="fa fa-desktop me-2" aria-hidden="true"></i>UX Design, Prototyping & App Development</button>
            </h3>
            <div id="collapseUX" class="accordion-collapse collapse" aria-labelledby="headingUX" data-bs-parent="#servicesAccordion">
                <div class="accordion-body">
                    <p>I design and build prototypes, from low-fidelity prototypes (including sketches and mockups), through to interactive prototypes (using HTML, JavaScript and Python) to test ideas and get feedback from users. I create web and mobile applications, using a variety of programming languages (including Python, Swift and C#).</p>
                    <a href="{{ site.baseurl }}/projects/?tag=UX+Design&tag=Prototyping&tag=App+Development" class="btn btn-sm btn-info text-white"><i class="fa fa-desktop me-2"></i>View UX Design, Prototyping & App Development Projects</a>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h3 class="accordion-header" id="headingMixed">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMixed" aria-expanded="false" aria-controls="collapseMixed"><i class="fa fa-flask me-2" aria-hidden="true"></i>Mixed-Methods Evaluation</button>
            </h3>
            <div id="collapseMixed" class="accordion-collapse collapse" aria-labelledby="headingMixed" data-bs-parent="#servicesAccordion">
                <div class="accordion-body">
                    <p>I design, lead and carry out rigorous qualitative (interviews, surveys) and quantitative research methods to evaluate the impact of programs and initiatives.</p>
                    <a href="{{ site.baseurl }}/projects/?tag=Mixed-methods+evaluation" class="btn btn-sm btn-info text-white"><i class="fa fa-flask me-2"></i>View Mixed-Methods Evaluation Projects</a>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h3 class="accordion-header" id="headingAI">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAI" aria-expanded="false" aria-controls="collapseAI"><i class="fa fa-cogs me-2" aria-hidden="true"></i>Applying AI</button>
            </h3>
            <div id="collapseAI" class="accordion-collapse collapse" aria-labelledby="headingAI" data-bs-parent="#servicesAccordion">
                <div class="accordion-body">
                    <p>I apply AI tools (including Generative AI) to enhance and streamline work in software development and learning design, and explore areas where AI can be used effectively and responsibly.</p>
                    <a href="{{ site.baseurl }}/projects/?tag=Applying+AI" class="btn btn-sm btn-info text-white"><i class="fa fa-cogs me-2"></i>View Applying AI Projects</a>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h3 class="accordion-header" id="headingTeaching">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTeaching" aria-expanded="false" aria-controls="collapseTeaching"><i class="fa fa-graduation-cap me-2" aria-hidden="true"></i>Teaching</button>
            </h3>
            <div id="collapseTeaching" class="accordion-collapse collapse" aria-labelledby="headingTeaching" data-bs-parent="#servicesAccordion">
                <div class="accordion-body">
                    <p>I teach in a variety of contexts, including hybrid delivery in higher education and conducting professional learning programs, with a focus on computing and education.</p>
                    <a href="{{ site.baseurl }}/projects/?tag=Teaching" class="btn btn-sm btn-info text-white"><i class="fa fa-graduation-cap me-2"></i>View Teaching Projects</a>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h3 class="accordion-header" id="headingData">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseData" aria-expanded="false" aria-controls="collapseData"><i class="fa fa-bar-chart me-2" aria-hidden="true"></i>Data Analytics & Visualisation</button>
            </h3>
            <div id="collapseData" class="accordion-collapse collapse" aria-labelledby="headingData" data-bs-parent="#servicesAccordion">
                <div class="accordion-body">
                    <p>I design and build data pipelines that process, clean, transform and visualise data, with a focus on learning analytics and log data.</p>
                    <a href="{{ site.baseurl }}/projects/?tag=Data+Analytics+%26+Visualisation" class="btn btn-sm btn-info text-white"><i class="fa fa-bar-chart me-2"></i>View Data Analytics & Visualisation Projects</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="showcase my-2"> 
    <h2>Projects</h2>
    <p>
        You can find out about a few of my projects below, or <a class="site-link" href="{{ site.baseurl | append: '/projects/' }}">you can explore all my projects on this page</a>.
    </p>
        {% assign highlighted_projects = site.data.projects | where: "highlighted", "true" %}
        {% for project in highlighted_projects %}
        {% cycle '<div class="row justify-content-md-center">', '', '' %}
            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <img class="card-img-top" 
                        src="{{ site.baseurl | append: '/projects/images/' | append: project.imageFilePath }}"
                        alt="{{ project.imageAltText }}"
                    >
                    <div class="card-body">
                        <h3>
                            <a href="{{ site.baseurl | append: '/projects/' | append: project.pageName }}" class="site-page-link">
                                {{ project.title }}
                            </a>
                        </h3>
                        <strong>{{project.period }}</strong>
                        <p class="card-text">{{ project.description }}</p>
                        {% include project-badges.html project=project %}
                    </div>
                </div>
            </div>
        {% cycle '', '', '</div><!-- /.row -->' %}
        {% endfor %}
</div>