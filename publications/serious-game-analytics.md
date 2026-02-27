---
layout: default
title: Exploring Play-Learners' Analytics in a Serious Game for Literacy Improvement
---

<div class="project-description">
    {% assign pub = site.data.publications.conference.co-author | where:"id", "serious-games-analytics" | first %}
    <h1>{{ pub.title }}</h1>
    <div class="row">
        <div class="col-md-4 offset-md-4">
            <img class = "img-fluid highlight-img border border-secondary my-3" 
                src = "{{ site.baseurl | append: '/publications/images/' | append: pub.imageFilePath }}">
        </div>
    </div>
    <div class="publication-details">
        <h2>Details</h2>
        <p class="publication-authors">{{ pub.authors }}</p>
        <p class="publication-conference">Presented at the {{ pub.conference }} conference</p>
        <p class="publication-dates">In {{ pub.location }} during {{ pub.conferenceDate }}</p>
    </div>
    <h2>Abstract</h2>
    <p>{{ pub.abstract }}</p>
    <a href="{{ site.baseurl | append: '/publications/' }}" class="btn btn-sm btn-info float-right">
        View My Other Publications
        <i class="fa fa-list project-icon"></i>
    </a>
    <a href="{{ pub.locationLink }}" class="btn btn-sm btn-info float-right mx-2"
        target="_blank">
        View at {{ pub.locationLabel }}
        <i class="fa fa-external-link publication-icon"></i>
    </a>
</div>