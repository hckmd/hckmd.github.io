---
layout: default
title: Coding and STEM 4 Schools
---
<nav aria-label="breadcrumb">
  <ol class="breadcrumb bg-transparent px-0 mb-1">
    <li class="breadcrumb-item"><a href="{{ site.baseurl }}/projects/" class="site-link">Projects</a></li>
    <li class="breadcrumb-item active" aria-current="page">Coding and STEM 4 Schools</li>
  </ol>
</nav>


<div class="project-description">
    {% assign project = site.data.projects | where:"pageName", "cs4s" | first %}
    <h1>{{ project.title }}</h1>
    <div class="row">
        <div class="col-md-4 offset-md-4">
            <img class = "img-fluid highlight-img border border-secondary" src = "{{ site.baseurl | append: '/projects/images/' | append: project.imageFilePath }}">
        </div>
    </div>
    <h2>About</h2>
    <p>
        From 2013 to 2019, I collaborated with academics from the <em>School of Education</em> and the <em>School of Electrical Engineering and Computing</em> to organise and run professional learning programs for teachers, titled <em>Coding &amp; STEM 4 Schools</em>. 
        The purpose of these programs, which are developed in partnership with Google and continue to run annually, is to help prepare teachers for the Digital Technologies Curriculum.
        Now that the implementation of the Digital Technologies Curriculum has begun around Australia, many teachers that have never taught (or even learned) computer coding before now have to teach computer coding.
        Consequently, there has been a need for professional learning programs that can help teachers learn computer coding and give them strategies for teaching this to students.
        During these programs, I prepared and presented tutorials, organised scheduling and catering, and assisted with the design and administration of surveys and running of focus groups.
    </p>
    <p>
        My PhD supervisor and I conducted various research studies within these programs.
        This research helped us understand how we could improve the design and implementation of the programs and we published peer-reviewed articles about our experiences in the program and what we learned running them.
        <a href="{{ site.baseurl | append: '/publications/assessing-tpd' }}" class="site-link">This journal article</a>, which was published in the <em>Informatics in Education</em> journal, involves an analysis of data that we collected over the first six years that we ran the programs and a reflection on the &#39;tensions&#39; we have negotiated with when planning and running the programs.
        The work in this project was so important to me that I decided to complete a PhD that involved investigating the impact of professional learning programs on teachers&#39; understanding of coding, their confidence about teaching coding and their plans for teaching coding in different subjects.
    </p>
    <p>
        Most of the activities that I developed for these workshops are licenced under a <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" class="site-link">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Licence</a>.
        For example, <a href="https://cs4s.github.io/intro-2017/day1/coding/Coding%20in%20Scratch%20Activity%20-%20Fundamental%20Coding%20Concepts.docx" class="site-link">this activity introduces fundamental Coding concepts in Scratch</a>.
        You can access all of the resources I have created for the recent workshops from the <a href="https://cs4s.github.io/resources" class="site-link">Newcastle CS4S website&#39;s Resource page</a>.
    </p>
    <h2>Links</h2>
    <ul>
        <li>
            <a href="https://cs4s.github.io/" class="site-link">Newcastle Coding &amp; STEM 4 Schools Website</a>
        </li>
    </ul>
    <a href="{{ site.baseurl | append: '/projects/' }}" class="btn btn-sm btn-info float-right">
        View My Other Projects
        <i class="fa fa-list project-icon"></i>
    </a>
</div>