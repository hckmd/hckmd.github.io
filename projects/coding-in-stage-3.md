---
layout: default
title: Coding in Stage 3
---
<nav aria-label="breadcrumb">
  <ol class="breadcrumb bg-transparent px-0">
    <li class="breadcrumb-item"><a href="{{ site.baseurl }}/projects/" class="site-link">Projects</a></li>
    <li class="breadcrumb-item active" aria-current="page">Coding in Stage 3</li>
  </ol>
</nav>

<div class="project-description">
    {% assign project = site.data.projects | where:"pageName", "coding-in-stage-3" | first %}
    <h2>{{ project.title }}</h2>
    <div class="row">
        <div class="col-md-4 offset-md-4">
            <img class = "img-fluid highlight-img border border-secondary" src = "{{ site.baseurl | append: '/projects/images/' | append: project.imageFilePath }}">
        </div>
    </div>
    <h3>About</h3>
    <p>
        The Coding in Stage 3 program was a professional learning program for Stage 3 (Years 5 and 6) teachers that I developed in collaboration with researchers at the School of Education at the University of Newcastle, Australia. 
        The program was part of my PhD project, which investigated how Stage 3 teachers in New South Wales learned and taught coding and computational thinking. 
        One of the main aims of the project was to understand teachers' plans for integrating those skills in different subjects (such as Mathematics and English) and how these plans for integration were impacted by participation in the program.
        My thesis, which has the results and analysis from my PhD project, is available to view and download from the University of Newcastle's <a class="site-link" href="https://hdl.handle.net/1959.13/1417667">NOVA repository</a>.
    </p>
    <p>
        The program involved running two different streams, which the participating teachers could choose from: <i>ScratchMaths</i> and <i>Coding &amp; STEAM</i>.
        As discussed below, streams had a different subject focus and I compared the differences in outcomes for the different streams in my study.
        The program resources and schedules, from both streams, are available from the <i>Links</i> section at the bottom of this page.
        All the sessions' activities in the program were mapped to the relevant Stage 3 syllabus outcomes, AITSL Teacher Standards, ACARA General Capabilities and ACARA Digital Technologies content descriptors.
    </p>
    <p>
        The ScratchMaths stream of the program used resources that were adapted from the <a class="site-link" href="http://www.ucl.ac.uk/ioe/research/projects/scratchmaths/curriculum-materials">ScratchMaths curriculum materials</a>, which were created by researchers at University College London.
        The focus of the ScratchMaths stream was the teaching of coding and computational Thinking alongside Stage 3 Mathematics.
    </p>
    <p>
        The Coding &amp; STEAM stream of the program used resources that have been adapted from activities within the <a class="site-link" href="http://scratched.gse.harvard.edu/guide/">Creative Computing Curriculum Guide</a>, which was created by researchers at the Harvard Graduate School of Education.
        The main aim of the Coding & STEAM stream was to demonstrate how the teaching of coding and computational thinking could be integrated into a variety of Key Learning Areas, as is encouraged by the <a href="https://educationstandards.nsw.edu.au/wps/portal/nesa/k-10/learning-areas/technologies/coding-across-the-curriculum" class="site-link">NSW Education Standards Authority</a>. 
    </p>
    <h3>Links</h3>
    <ul>
        <li>
            <a href="https://cs4s.github.io/2018/maths" class="site-link">Coding in Stage 3: ScratchMaths stream website</a>
        </li>
        <li>
            <a href="https://cs4s.github.io/2018/steam" class="site-link">Coding in Stage 3: Coding &amp; STEAM stream website</a>
        </li>
    </ul>
    <a href="{{ site.baseurl | append: '/projects/' }}" class="btn btn-sm btn-info float-right">
        View My Other Projects
        <i class="fa fa-list project-icon"></i>
    </a>
</div>