---
layout: default
title: Resources
---

<div class="showcase">
    <h1>Resources</h1>
    <p>
        On this page, I have included resources that I have found useful when running professional programs or in my PhD studies. 
        These resources will be most useful to people with similar interests to me (for example, Computing Education and Teacher Professional Learning).
    </p>            
    {% for resource in site.data.resources %}
    <div class="row">
        <div class="card md-2 box-shadow py-3 my-2 mx-2">
            <div class="row">
                <div class ="col-md-4">
                    <img class="card-img-top list-img border border-secondary" 
                        src="{{ site.baseurl | append: '/resources/images/' | append: resource.imageFilePath }}"
                        alt="{{ resource.imageAltText }}"
                        >
                </div>
                <div class ="col-md-8">
                    <div class="card-body">
                        <h2>
                            <a class="site-link" href="{{ resource.pageName }}">
                                {{ resource.title }}
                            </a>
                        </h2>
                        <strong>{{ resource.type }}</strong>
                        <p class="card-text">{{ resource.description }}</p>
                    </div>
                </div>
            </div>                  
        </div>
    </div>
    {% endfor %}
</div>