---
layout: default
title: Exploring Play-Learners' Analytics in a Serious Game for Literacy Improvement
---

{% assign pub = site.data.publications.conference.co-author | where:"id", "serious-games-analytics" | first %}


<nav aria-label="breadcrumb">
  <ol class="breadcrumb bg-transparent px-0 mb-1">
    <li class="breadcrumb-item"><a href="{{ site.baseurl }}/publications/" class="site-link">Publications</a></li>
    <li class="breadcrumb-item active text-dark" aria-current="page">{{ pub.shortTitle }}</li>
  </ol>
</nav>

<div class="project-description">
    <h1>{{ pub.title }}</h1>
    <div class="row">
        <div class="col-md-5 offset-md-4">
            <figure>
                <img class = "img-fluid highlight-img border border-secondary my-3" 
                    src = "{{ site.baseurl | append: '/publications/images/' | append: pub.imageFilePath }}"
                    alt="{{ pub.imageAltText }}"
                >
                <figcaption class="figure-caption text-center text-dark">{{ pub.imageCaption }}</figcaption>
            </figure>
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
    <a href="{{ pub.locationLink }}" class="btn btn-sm btn-info float-end mx-2">
        View at {{ pub.locationLabel }}
        <i class="fa fa-external-link publication-icon"></i>
    </a>
</div>