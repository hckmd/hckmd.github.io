---
layout: default
title: Daniel Hickmott
---

<div class="container">
    <div class="showcase">
        <div class="container">
            <h2>First Author Publications</h2>
            <h3>Journal Articles</h3>       
            {% for project in site.data.projects %}
            <div class="row">
                <div class="card md-2 box-shadow py-3 my-2 mx-2">
                    <div class="row">
                        <div class ="col-md-4">
                            <img class="card-img-top project-img" src="{{ project.filePath }}">
                        </div>
                        <div class ="col-md-8">
                            <div class="card-body">
                                <h4>{{ project.title }}</h4>
                                <strong>{{project.period }}</strong>
                                <p class="card-text">{{ project.description }}</p>
                                <button type="button" class="btn btn-sm btn-info float-right">More information</button>
                            </div>
                        </div>
                    </div>                  
                </div>
            </div>
            <h3>Conference Articles</h3>
            
            <h2>Co-Author Publications</h2>
            <h3>Journal Articles</h3>
            <h3>Conference Articles</h3>
    
            {% endfor %}
        </div>
    </div>
</div>