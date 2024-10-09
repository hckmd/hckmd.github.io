---
layout: default
title: Daniel Hickmott
---

<div class="row">
    <div class="col-xs-12 col-md-4">
        <div id="profile">
            <div class="portrait" style="background-image: url('me.jpg');"></div>
            <div class="portrait-title">
                <h2>Daniel Hickmott</h2>
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
        <h3 class="profile-heading">About Me</h3> 
        <p>
            I am an educator with professional experience in digital technologies education, research and software engineering. I'm a versatile and adaptive problem solver who enjoys working with technology and people on projects that aim to have a positive impact.
        </p>
        <p>
            I completed my PhD in Education at the University of Newcastle, Australia in 2020.
            The focus of my PhD research was on the design and evaluation of a professional learning program for K-6 school teachers learning and teaching computer coding. You can read more about the program I ran on <a href="{{ site.baseurl | append: '/projects/coding-in-stage-3' }}" class="text-info">this page</a> and you can also download my thesis <a class="text-info" href="https://hdl.handle.net/1959.13/1417667" target="_blank"> from the NOVA repository.</a>
        </p>
        <div class="row">
            <div class="col-md-5">
                <h3 class="profile-heading">Research Interests</h3> 
                <ul class="ul-interests">
                    <li>Computing Education</li>
                    <li>Teacher Professional Learning</li>
                    <li>Online Learning</li>     
                    <li>Serious Games</li>             
                </ul>
            </div>
            <div class="col-md-7">
                <h3 class="profile-heading">Education</h3> 
                <ul class="ul-edu fa-ul">
                    <li>
                        <i class="fa-li fa fa-graduation-cap"></i>
                        <div class="description">
                            <p class="course">Doctor of Philosophy (Education)</p>
                            <p class="dates">2016 - 2020</p>
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
<div class="showcase my-2"> 
    <h2>Projects</h2>
    <p>
        You can find out more about some projects I've worked on by clicking the <b>Project Details</b> buttons below.
    </p>
        {% for project in site.data.projects %}
        {% cycle '<div class="row justify-content-md-center">', '' %}
            <div class="col-md-5">
                <div class="card mb-4 box-shadow">
                    <img class="card-img-top" src="{{ site.baseurl | append: '/projects/images/' | append: project.imageFilePath }}">
                    <div class="card-body">
                        <h4>
                            <a href="{{ site.baseurl | append: '/projects/' | append: project.pageName }}" class="site-page-link">
                                {{ project.title }}
                            </a>
                        </h4>
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
        {% cycle '', '</div><!-- /.row -->' %}
        {% endfor %}
</div>
<div class="showcase">
    <h2>Selected Publications</h2>
    <p>I have highlighted three of my favourite publications below but you can see the rest of my publications from the <a href="{{ site.baseurl | append: '/publications/' }}" class="text-info">Publications page</a>.</p>
    <div class="row">
        {% for publication in site.data.publications.selected %}
        <div class="col-md-4">
            <div class="card mb-4 box-shadow">
                <img class="card-img-top" 
                    src="{{ site.baseurl | append: '/publications/images/' | append: publication.imageFilePath }}">
                <div class="card-body">
                    <h4>
                        <a href="{{ site.baseurl | append: '/publications/' | append: publication.pageName }}" class="site-page-link">
                            {{ publication.title }}
                        </a>
                    </h4>
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
<div class="showcase">
    <h2>Resources and Media</h2>
    <p>
        I have included some different resources and media (videos and presentations) on this website.
        I have highlighted my favourite resources and media below but you can see more on the <a href="{{ site.baseurl | append: '/media' }}" class="text-info">Media page</a> and the <a href="{{ site.baseurl | append: '/resources' }}" class="text-info">Resources page</a>.
    </p>
    <div class="row">
        {% for resource in site.data.highlights %}
        <div class="col-md-4">
            <div class="card mb-4 box-shadow">
                <img class="card-img-top" 
                    src="{{ site.baseurl | append: resource.imageFilePath }}">
                <div class="card-body">
                    <h4>
                        <a href="{{ resource.linkLocation }}" {% if resource.newTab == 'true' %} target="_blank" {% endif %}
                            class="site-page-link">
                            {{ resource.title }}
                        </a>
                    </h4>
                    <p><b>{{ resource.type }}</b></p>
                    <p class="card-text">{{ resource.description }}</p>
                    <a href="{{ resource.linkLocation }}" {% if resource.newTab == 'true' %} target="_blank" {% endif %}
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