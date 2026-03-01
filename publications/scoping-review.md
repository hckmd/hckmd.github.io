---
layout: default
title: A Scoping Review of Studies on Computational Thinking in K–12 Mathematics Classrooms
---

{% assign pub = site.data.publications.journal.first | where:"id", "scoping-review" | first %}

<nav aria-label="breadcrumb">
  <ol class="breadcrumb bg-transparent px-0 mb-1">
    <li class="breadcrumb-item"><a href="{{ site.baseurl }}/publications/" class="site-link">Publications</a></li>
    <li class="breadcrumb-item active text-dark" aria-current="page">{{ pub.shortTitle }}</li>
  </ol>
</nav>

<div class="project-description">
    <h1>{{ pub.title }}</h1>
    <div class="row">
        <div class="col-md-4 offset-md-4">
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
        <p class="publication-journal">In {{ pub.journal }}, Volume {{ pub.volume }}, Issue {{ pub.issue }}</p>
        <p class="publication-dates">Published {{ pub.publicationDate }}</p>
    </div>
    <h2>Abstract</h2>
    <p>{{ pub.abstract }}</p>
    <a href="{{ site.baseurl | append: '/publications/' }}" class="btn btn-sm btn-info float-right">
        View My Other Publications
        <i class="fa fa-list project-icon"></i>
    </a>
    <a href="{{ pub.locationLink }}" class="btn btn-sm btn-info float-right mx-2">
        View at {{ pub.locationLabel }}
        <i class="fa fa-external-link publication-icon"></i>
    </a>
</div>