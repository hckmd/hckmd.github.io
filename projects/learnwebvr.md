---
layout: default
title: Daniel Hickmott
---

<div class="container">
    <div class="project-description">
        <h2>{{ site.data.projects[2].title }}</h2>
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <img class = "img-fluid project-img border border-secondary" src = "{{ site.baseurl | append: '/projects/images/' | append: site.data.projects[2].imageFilePath }}">
            </div>
        </div>
        <h3>About</h3>
        <p>
            <i>LearnWebVR</i> is a project that I started working on in late 2018.
            The goal of this project is to develop online educational courses and face-to-face workshops for anyone that wants to learn how to create with Virtual Reality (VR).
            Currently, the focus of the project is on WebVR technologies, specifically  the <a href="https://aframe.io/" target="_blank" class="text-info">A-Frame</a> framework.
            I am most interested in creating resources for teachers and students that can be used for subjects that include VR in their content, such as Computing courses in senior high school.
            However, in the future, I would like to develop resources for learners that are interested in using VR technologies outside of schools (for example, graphic designers and marketing professionals).
        </p>
        <p>
            The project began with a startup pitch video competition ran by the <a href="https://www.newcastle.edu.au/research-and-innovation/centre/centre-for-21st-century-humanities/about-us" target="_blank" class="text-info">University of Newcastle&#39;s Centre for 21st Century Humanities</a>. 
            <a href="https://www.youtube.com/watch?v=vrOSYXcfdL8&amp;feature=youtu.be" target="_blank" class="text-info">In this video</a>, which was the winning entry of the competition, I briefly describe the ideas behind the <i>LearnWebVR</i> project. 
            I am planning to run some workshops to develop these ideas further in late 2019 and 2020. 
            If you are interested in finding out more about these workshops, please complete the mailing list registration form on the <a href="https://www.learnwebvr.com/" target="_blank" class="text-info">LearnWebVR homepage</a> and I will be in contact.</p>
        <h3>Links</h3>
        <ul>
            <li>
                <a href="https://www.learnwebvr.com/" target="_blank" class="text-info">LearnWebVR Homepage</a>
            </li>
        </ul>
        <a href="{{ site.baseurl | append: '/projects/' }}" class="btn btn-sm btn-info float-right">
            View My Other Projects
            <i class="fa fa-list project-icon"></i>
        </a>
    </div>
</div>