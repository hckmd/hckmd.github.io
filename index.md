---
layout: default
title: Daniel Hickmott
---

<div class="container">
    <div class="row">
        <div class="col-xs-12 col-md-4">
            <div id="profile">
                <div class="portrait" style="background-image: url('me.jpeg');"></div>
                <div class="portrait-title">
                    <h2>Daniel Hickmott</h2>
                    <h3>PhD Candidate</h3>
                    <h3>University of Newcastle, Australia</h3>
                </div>
                <ul class="network-icon" aria-hidden="true">
                    <li>
                        <a href="mailto:daniel.hickmott@gmail.com" target="_blank" rel="noopener"> <i class="fa fa-envelope big-icon"></i> </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/dan_hickmott" target="_blank" rel="noopener"> <i class="fa fa-twitter big-icon"> </i></a>
                    </li>
                    <li>
                        <a href="https://scholar.google.com.au/citations?user=zEcey6gAAAAJ" target="_blank" rel="noopener"> <i class="ai ai-google-scholar big-icon"> </i></a>
                    </li>
                    <li>
                        <a href="https://www.researchgate.net/profile/Daniel_Hickmott" target="_blank" rel="noopener"> <i class="ai ai-researchgate big-icon"> </i></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-xs-12 col-md-8">
            <h3>About Me</h3> 
            <p>
                I am a PhD Candidate at the School of Education at the University of Newcastle, Australia. 
                My main research interest is Teacher Professional Development for Coding and Computational Thinking. 
                My PhD project explores how K-6 teachers learn and teach Coding and Computational Thinking, and how these skills can be integrated across all of the K-12 subject areas. 
                My other research interests include: the design, development and evaluation of Serious Games, and the analysis of learners' pathways with Serious Game Analytics. 
                I am currently collecting and analysing data for my PhD project, and am planning to complete the PhD by mid-2019.
            </p>
            <div class="row">
                <div class="col-md-5">
                    <h3>Research Interests</h3> 
                    <ul class="ul-interests">
                        <li>Computing Education</li>
                        <li>Teacher Professional Learning</li>          
                        <li>Software Engineering</li>   
                        <li>Serious Games</li>
                        <li>Learning Analytics</li>                            
                    </ul>
                </div>
                <div class="col-md-7">
                    <h3>Education</h3> 
                    <ul class="ul-edu fa-ul">
                        <li>
                            <i class="fa-li fa fa-graduation-cap"></i>
                            <div class="description">
                                <p class="course">Doctor of Philosophy (Education)</p>
                                <p class="dates">Due to submit in October 2019</p>
                                <p class="institution">University of Newcastle, Australia</p>
                            </div>
                        </li>
                        <li>
                            <i class="fa-li fa fa-graduation-cap"></i>
                            <div class="description">
                                <p class="course">Bachelor of Software Engineering, Honours Class 1</p>
                                <p class="dates">2010 - 2014</p>
                                <p class="institution">University of Newcastle, Australia</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="showcase">
        <div class="container">
            <h2>Projects</h2>
            <p>
                There are three main projects that I have been involved in while working at the University of Newcastle. 
                You can find out more about each of these by clicking the <i>Project Details</i> button on each item below.
            </p>
            <div class="row">
            {% for project in site.data.projects %}
                <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                        <img class="card-img-top" src="{{ site.baseurl | append: '/projects/images/' | append: project.imageFilePath }}">
                        <div class="card-body">
                            <h4>{{ project.title }}</h4>
                            <strong>{{project.period }}</strong>
                            <p class="card-text">{{ project.description }}</p>
                            <a href="{{ site.baseurl | append: '/projects/' | append: project.pageName }}" 
                                class="btn btn-sm btn-info float-right">
                                Project Details
                                <i class="fa fa-info project-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            {% endfor %}
            </div>
        </div>
    </div>
    <div class="showcase">
        <div class="container">
            <h2>Selected Publications</h2>
            <p>I have highlighted three of my favourite publications below that I have been an author on. You can see the rest of my publications from the <a href="pubs" class="text-info">Publications page</a>.</p>
            <div class="row">
            {% for publication in site.data.publications.selected %}
            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <img class="card-img-top" 
                        src="{{ site.baseurl | append: '/publications/images/' | append: publication.imageFilePath }}">
                    <div class="card-body">
                        <h4>{{ publication.title }}</h4>
                        <p class="card-text">{{ publication.venue }}</p>
                        <a href="{{ site.baseurl | append: '/publications/' | append: publication.pageName }}" 
                            class="btn btn-sm btn-info float-right">
                            More details
                            <i class="fa fa-chevron-circle-right publication-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
            {% endfor %}
            </div>
        </div>
    </div>
    <div class="showcase">
        <div class="container">
            <h2>Resources and Media</h2>
            <p>
                I have included some different resources and media (videos and presentations) on this website.
                I have highlighted my favourite resources and media below but you can see more on the <a href="{{ site.baseurl | append: '/media' }}" class="text-info">Media page</a> and <a href="{{ site.baseurl | append: '/resources' }}" class="text-info">Resources page</a>.
            </p>
            <div class="row">
            {% for resource in site.data.highlights %}
                <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                        <img class="card-img-top" 
                            src="{{ site.baseurl | append: resource.imageFilePath }}">
                        <div class="card-body">
                            <h4>{{ resource.title }}</h4>
                            <p><b>{{ resource.type }}</b></p>
                            <p class="card-text">{{ resource.description }}</p>
                            <a href="{{ resource.linkLocation }}" target="_blank"
                                class="btn btn-sm btn-info float-right">
                                {{ resource.linkLabel }}
                                <i class="fa {{ resource.linkIcon }} media-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            {% endfor %}
            </div>
        </div>
    </div>
</div>