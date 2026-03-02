---
layout: default
title: Media
---

<div class="showcase">
    <h1>Media</h1>
    <p>On this page, I have uploaded copies of presentations from talks that I have given at conferences and have linked to videos of 'elevator pitches' that I have been a part of.</p>
    <h2>Presentations</h2>         
    {% for presentation in site.data.media.presentations %}
    <div class="row">
        <div class="card box-shadow py-3 my-2 mx-2">
            <div class="row">
                <div class ="col-md-4">
                    <img class="card-img-top list-img border border-secondary" src="{{ site.baseurl | append: '/media/images/' | append: presentation.imagePath }}"
                    alt="{{ presentation.imageAltText }}">
                </div>
                <div class ="col-md-8">
                    <div class="card-body">
                        <h3><a class="site-link" href="{{ site.baseurl | append: '/media/files/' | append: presentation.filePath }}">{{ presentation.title }} (Open PDF)</a></h3>
                        <p class="context-text">Presented at {{ presentation.venue }}</p>
                        <p class="card-text">{{ presentation.description }}</p>
                    </div>
                </div>
            </div>                  
        </div>
    </div>
    {% endfor %}
    <h2>Videos</h2>
    {% for video in site.data.media.videos %}
    <div class="row">
        <div class="card box-shadow py-3 my-2 mx-2">
            <div class="row">
                <div class ="col-md-4">
                        <img class="card-img-top list-img border border-secondary" src="{{ site.baseurl | append: '/media/images/' | append: video.imagePath }}"
                        alt="{{ video.imageAltText }}"
                        >
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h3><a class="site-link" href="{{ video.videoLink }}">{{ video.title }} (Watch on YouTube)</a></h3>
                        <p class="context-text">{{ video.context }}</p>
                        <p class="card-text">{{ video.description }}</p>
                    </div>
                </div>
            </div>                  
        </div>
    </div>
    {% endfor %}
</div>