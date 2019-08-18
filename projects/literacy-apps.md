---
layout: default
title: Daniel Hickmott
---

<div class="container">
    <div class="project-description">
        <h2>{{ site.data.projects[1].title }}</h2>
        <div class="row">
            <div class="col-xs-12 col-md-4">
                <img class = "img-fluid project-img border border-secondary" src = "{{ site.baseurl | append: '/projects/images/' | append: site.data.projects[1].imageFilePath }}">
            </div>
            <div class="col-xs-12 col-md-8 project-summary">
                <p class="context-text">{{ site.data.projects[1].period }}</p>
                <p>{{ site.data.projects[1].description }}</p>
            </div>
        </div>
        <h3>About</h3>
        <p>
            Since 2013, I have worked with academics from the School of Education and the School of Electrical Engineering and Computer Science,at the University of Newcastle, to organise and run Computer Science Professional De`velopment workshops for teachers, titled Coding & STEM 4 Schools.
            The purpose of these program, which are developed in partnership with Google, is to help prepare teachers for the recently endorsed Digital Technologies Curriculum, and to give them the knowledge and tools to help them inspire the next generation of Computational Thinkers. 
            During these workshops I have prepared and presented tutorials, organised scheduling and catering, and worked with my supervisor to design surveys to collect workshop feedback.
        </p>
        <p>
            Most of the activities that I have developed for these workshops are licenced under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Licence. For example, this activity introduces fundamental Coding concepts in Scratch.
            You can access all of the resources I have created for the recent workshops from the UON CS4S website.
        </p>
        <h3>Links</h3>
        <a href="{{ site.baseurl | append: '/projects/' }}" class="btn btn-sm btn-info float-right">
            View My Other Projects
            <i class="fa fa-list project-icon"></i>
        </a>
    </div>
</div>