---
layout: default
title: Daniel Hickmott
---

<div class="container">
    <div class="showcase">
        <div class="container">
            <h2>Media</h2>
            <p>On this page, I have uploaded copies of presentations from talks that I have given at conferences and have linked to videos of 'elevator pitches' that I have been a part of.</p>
            <h3>Presentations</h3>         
            {% for presentation in site.data.media.presentations %}
            <div class="row">
                <div class="card box-shadow py-3 my-2 mx-2">
                    <div class="row">
                        <div class ="col-md-4">
                            <img class="card-img-top list-img border border-secondary" src="{{ site.baseurl | append: '/media/images/' | append: presentation.imagePath }}">
                        </div>
                        <div class ="col-md-8">
                            <div class="card-body">
                                <h4>{{ presentation.title }}</h4>
                                <p class="context-text">Presented at {{ presentation.venue }}</p>
                                <p class="card-text">{{ presentation.description }}</p>
                                <div class="list-item-buttons">
                                    <a href="{{ site.baseurl | append: '/media/files/' | append: presentation.filePath }}"
                                        class="btn btn-sm btn-info float-right"
                                        target="_blank">
                                        Open PDF
                                        <i class="fa fa-file-pdf-o media-icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>                  
                </div>
            </div>
            {% endfor %}
            <h3>Videos</h3>
            {% for video in site.data.media.videos %}
            <div class="row">
                <div class="card box-shadow py-3 my-2 mx-2">
                    <div class="row">
                        <div class ="col-md-4">
                            <img class="card-img-top list-img border border-secondary" src="{{ site.baseurl | append: '/media/images/' | append: video.imagePath }}">
                        </div>
                        <div class ="col-md-8">
                            <div class="card-body">
                                <h4>{{ video.title }}</h4>
                                <p class="context-text">{{ video.context }}</p>
                                <p class="card-text">{{ video.description }}</p>
                                <div class="list-item-buttons">
                                    <a href="{{ video.videoLink }}"
                                        class="btn btn-sm btn-info float-right"
                                        target="_blank">
                                        Watch Video on YouTube
                                        <i class="fa fa-youtube media-icon"></i>
                                    </a>
                                    <a href="{{ video.findOutMoreLink }}"
                                        class="btn btn-sm btn-info float-right mx-2"
                                        target="_blank">
                                        {{ video.findOutMoreLabel }}
                                        <i class="fa fa-external-link media-icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>                  
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</div>