---
layout: default
title: Daniel Hickmott
---

<div class="project-description">
    <h1>{{ site.data.publications.journal.first[1].title }}</h1>
    <div class="row">
        <div class="col-md-4 offset-md-4">
            <img class = "img-fluid highlight-img border border-secondary my-3" 
                src = "{{ site.baseurl | append: '/publications/images/' | append: site.data.publications.journal.first[1].imageFilePath }}">
        </div>
    </div>
    <div class="publication-details">
        <h2>Details</h2>
        <p class="publication-authors">{{ site.data.publications.journal.first[1].authors }}</p>
        <p class="publication-journal">In {{ site.data.publications.journal.first[1].journal }}, Volume {{ site.data.publications.journal.first[1].volume }}, Issue {{ site.data.publications.journal.first[1].issue }}</p>
        <p class="publication-dates">Published {{ site.data.publications.journal.first[1].publicationDate }}</p>
    </div>
    <h2>Abstract</h2>
    <p>{{ site.data.publications.journal.first[1].abstract }}</p>
    <a href="{{ site.baseurl | append: '/publications/' }}" class="btn btn-sm btn-info float-right">
        View My Other Publications
        <i class="fa fa-list project-icon"></i>
    </a>
    <a href="{{ site.data.publications.journal.first[1].locationLink }}" class="btn btn-sm btn-info float-right mx-2"
        target="_blank">
        View at {{ site.data.publications.journal.first[1].locationLabel }}
        <i class="fa fa-external-link publication-icon"></i>
    </a>
</div>