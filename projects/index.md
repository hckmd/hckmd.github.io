---
layout: default
title: Projects
---

<div class="showcase">
    <h1>Projects</h1>
    <p>
        Some projects I've worked on include:
    </p>         
    {% for project in site.data.projects %}
    <div class="row">
        <div class="card md-2 box-shadow py-3 my-2 mx-2">
            <div class="row">
                <div class ="col-md-4">
                    <img class="card-img-top list-img border border-secondary" 
                        src="{{ site.baseurl | append: '/projects/images/' | append: project.imageFilePath }}">
                </div>
                <div class ="col-md-8">
                    <div class="card-body">
                        <h2>
                            <a href="{{ project.pageName }}" class="site-page-link">
                                {{ project.title }}
                            </a>
                        </h2>
                        <strong>{{project.period }}</strong>
                        <p class="card-text">{{ project.description }}</p>
                    </div>
                </div>
            </div>                  
        </div>
    </div>
    {% endfor %}
</div>