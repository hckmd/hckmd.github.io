---
layout: default
title: Daniel Hickmott
---

<div class="project-description">
    <h1>{{ site.data.publications.conference.co-author[1].title }}</h1>
    <div class="row">
        <div class="col-md-4 offset-md-4">
            <img class = "img-fluid highlight-img border border-secondary my-3" 
                src = "{{ site.baseurl | append: '/publications/images/' | append: site.data.publications.conference.co-author[1].imageFilePath }}">
        </div>
    </div>
    <div class="publication-details">
        <h2>Details</h2>
        <p class="publication-authors">{{ site.data.publications.conference.co-author[1].authors }}</p>
        <p class="publication-conference">Presented at the {{ site.data.publications.conference.co-author[1].conference }} conference</p>
        <p class="publication-dates">In {{ site.data.publications.conference.co-author[1].location }} during {{ site.data.publications.conference.co-author[1].conferenceDate }}</p>
    </div>
    <h2>Abstract</h2>
    <p>{{ site.data.publications.conference.co-author[1].abstract }}</p>
    <a href="{{ site.baseurl | append: '/publications/' }}" class="btn btn-sm btn-info float-right">
        View My Other Publications
        <i class="fa fa-list project-icon"></i>
    </a>
    <a href="{{ site.data.publications.conference.co-author[1].locationLink }}" class="btn btn-sm btn-info float-right mx-2"
        target="_blank">
        View at {{ site.data.publications.conference.co-author[1].locationLabel }}
        <i class="fa fa-external-link publication-icon"></i>
    </a>
</div>