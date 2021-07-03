---
layout: default
title: Daniel Hickmott
---

<div class="showcase">
    <h2>Projects</h2>
    <p>
        There are three main projects that I have been involved in while working at the University of Newcastle. 
        You can find out more about each of these by clicking the <i>Project Details</i> button on each of the items below.
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
                        <h4>{{ project.title }}</h4>
                        <strong>{{project.period }}</strong>
                        <p class="card-text">{{ project.description }}</p>
                        <div class="list-item-buttons">
                            <a href="{{ project.pageName }}" class="btn btn-sm btn-info float-right">
                                Project Details
                                <i class="fa fa-info-circle project-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>                  
        </div>
    </div>
    {% endfor %}
</div>