---
layout: default
title: Home
---

<div class="row align-items-center py-4 py-md-5">
    <div class="col-xs-12 col-md-8 mb-4 mb-md-0">
        <h1 class="profile-heading display-5 fw-bold text-dark mb-3">Daniel (Dan) Hickmott</h1>
        <p class="lead mb-4 text-secondary" style="font-size: 1.2rem; line-height: 1.6;">
            I design, build and evaluate inclusive learning experiences.
            I combine learning design, tech and research to improve outcomes for learners and educators.
        </p>
        <a class="btn btn-info px-4 py-2 text-white shadow-sm" href="{{ site.baseurl | append: '/contact/' }}">
            <i class="fa fa-envelope me-2"></i>Work with me
        </a>
    </div>
    <div class="col-xs-12 col-md-4 text-center">
        <div id="profile" class="py-0">
            <img class="portrait shadow" src="{{ site.baseurl | append: '/me.jpg' }}" alt="Portrait photo of Daniel Hickmott">
        </div>
    </div>
</div>
<div class="showcase my-2">
    <h2 class="mt-4">Services</h2>
    <p>I can support your team or project with expertise across these areas:</p>
    <div class="accordion my-4" id="servicesAccordion">
        <div class="accordion-item">
            <h3 class="accordion-header" id="headingUX">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUX" aria-expanded="false" aria-controls="collapseUX"><i class="fa fa-desktop me-2" aria-hidden="true"></i>UX Design & Prototyping</button>
            </h3>
            <div id="collapseUX" class="accordion-collapse collapse" aria-labelledby="headingUX" data-bs-parent="#servicesAccordion">
                <div class="accordion-body">
                    <p>Designing user-centered digital tools and creating interactive prototypes (e.g. learning dashboards and Phaser widgets) to test and iterate on concepts.</p>
                    <a href="{{ site.baseurl }}/projects/?tag=UX+Design&tag=Prototyping" class="btn btn-sm btn-info text-white">View related projects</a>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h3 class="accordion-header" id="headingMixed">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMixed" aria-expanded="false" aria-controls="collapseMixed"><i class="fa fa-flask me-2" aria-hidden="true"></i>Mixed-Methods Evaluation</button>
            </h3>
            <div id="collapseMixed" class="accordion-collapse collapse" aria-labelledby="headingMixed" data-bs-parent="#servicesAccordion">
                <div class="accordion-body">
                    <p>Conducting rigorous evaluation using qualitative (interviews, surveys) and quantitative research methods to measure syllabus impact and program outcomes.</p>
                    <a href="{{ site.baseurl }}/projects/?tag=Mixed-methods+evaluation" class="btn btn-sm btn-info text-white">View related projects</a>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h3 class="accordion-header" id="headingLearning">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLearning" aria-expanded="false" aria-controls="collapseLearning"><i class="fa fa-book me-2" aria-hidden="true"></i>Learning Design & Content Development</button>
            </h3>
            <div id="collapseLearning" class="accordion-collapse collapse" aria-labelledby="headingLearning" data-bs-parent="#servicesAccordion">
                <div class="accordion-body">
                    <p>Creating engaging curriculum resources and designing professional learning programs to upskill K-12 teachers in digital technologies.</p>
                    <a href="{{ site.baseurl }}/projects/?tag=Learning+Design&tag=Content+Development" class="btn btn-sm btn-info text-white">View related projects</a>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h3 class="accordion-header" id="headingAI">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAI" aria-expanded="false" aria-controls="collapseAI"><i class="fa fa-cogs me-2" aria-hidden="true"></i>Applying AI</button>
            </h3>
            <div id="collapseAI" class="accordion-collapse collapse" aria-labelledby="headingAI" data-bs-parent="#servicesAccordion">
                <div class="accordion-body">
                    <p>Integrating generative AI tools responsibly for educational experiences, software evaluation, and prototyping.</p>
                    <a href="{{ site.baseurl }}/projects/?tag=Applying+AI" class="btn btn-sm btn-info text-white">View related projects</a>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h3 class="accordion-header" id="headingTeaching">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTeaching" aria-expanded="false" aria-controls="collapseTeaching"><i class="fa fa-graduation-cap me-2" aria-hidden="true"></i>Teaching</button>
            </h3>
            <div id="collapseTeaching" class="accordion-collapse collapse" aria-labelledby="headingTeaching" data-bs-parent="#servicesAccordion">
                <div class="accordion-body">
                    <p>Delivering high-quality lectures and conducting teacher training workshops to facilitate computing education.</p>
                    <a href="{{ site.baseurl }}/projects/?tag=Teaching" class="btn btn-sm btn-info text-white">View related projects</a>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h3 class="accordion-header" id="headingData">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseData" aria-expanded="false" aria-controls="collapseData"><i class="fa fa-bar-chart me-2" aria-hidden="true"></i>Data Analytics & Visualisation</button>
            </h3>
            <div id="collapseData" class="accordion-collapse collapse" aria-labelledby="headingData" data-bs-parent="#servicesAccordion">
                <div class="accordion-body">
                    <p>Analyzing learning analytics data and developing custom dashboards to visualise key outcomes.</p>
                    <a href="{{ site.baseurl }}/projects/?tag=Data+Analytics+%26+Visualisation" class="btn btn-sm btn-info text-white">View related projects</a>
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