---
layout: default
title: Daniel Hickmott
---

<div class="container">
    <div class="project-description">
        <h1>{{ site.data.publications.journal.first[0].title }}</h1>
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <img class = "img-fluid project-img border border-secondary my-3" 
                    src = "{{ site.baseurl | append: '/publications/images/' | append: site.data.publications.journal.first[0].imageFilePath }}">
            </div>
        </div>
        <div class="publication-details">
            <h2>Details</h2>
            <p class="publication-authors">{{ site.data.publications.journal.first[0].authors }}</p>
            <p class="publication-journal">In {{ site.data.publications.journal.first[0].journal }}, Volume {{ site.data.publications.journal.first[0].volume }}, Issue {{ site.data.publications.journal.first[0].issue }}</p>
            <p class="publication-dates">Published {{ site.data.publications.journal.first[0].publicationDate }}</p>
        </div>
        <h2>Abstract</h2>
        <p>{{ site.data.publications.journal.first[0].abstract }}</p>
        <a href="{{ site.baseurl | append: '/publications/' }}" class="btn btn-sm btn-info float-right">
            View My Other Publications
            <i class="fa fa-list project-icon"></i>
        </a>
        <a href="{{ site.data.publications.journal.first[0].locationLink }}" class="btn btn-sm btn-info float-right mx-2"
            target="_blank">
            View at {{ site.data.publications.journal.first[0].locationLabel }}
            <i class="fa fa-external-link publication-icon"></i>
        </a>
    </div>
</div>