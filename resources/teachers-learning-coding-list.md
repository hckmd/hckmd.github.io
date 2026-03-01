---
layout: default
title: Learning to Teach Coding Resources
---
<nav aria-label="breadcrumb">
  <ol class="breadcrumb bg-transparent px-0 mb-1">
    <li class="breadcrumb-item"><a href="{{ site.baseurl }}/resources/" class="site-link">Resources</a></li>
    <li class="breadcrumb-item active text-dark" aria-current="page">Learning to Teach Coding Resources</li>
  </ol>
</nav>


{% assign resource = site.data.resources | where:"pageName", "teachers-learning-coding-list" | first %}
<div class="showcase">
    <h1>{{ resource.title }}</h1>
    <div class="row">
        <div class="col-md-4 offset-md-4">
            <img class = "img-fluid highlight-img border border-secondary" src = "{{ site.baseurl | append: '/resources/images/' | append: resource.imageFilePath }}"
            alt="{{ resource.imageAltText }}"
            >
        </div>
    </div>
    <h2>About</h2>   
    <p>{{ resource.description }}</p>
    <h2>Resources</h2>
    <h3 class="my-3">Websites</h3>
    <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href="https://www.digitaltechnologieshub.edu.au/" class="site-link">Digital Technologies Hub</a></td>
                <td>A website created by <a href="https://www.esa.edu.au/" class="site-link">Education Services Australia</a> that collates a variety of resources for learning and teaching the national Digital Technologies curriculum. The website includes case studies of schools that have begun to implement Digital Technologies, as well as lesson plans and ideas for teaching Digital Technologies.</td>
            </tr>
            <tr>
                <td><a href="http://csfieldguide.org.nz/" class="site-link">Computer Science Field Guide</a></td>
                <td>An online, free and interactive textbook to help high school students learn about the different fields within the Computer Science discipline. For example, there are chapters on <a href="http://csfieldguide.org.nz/en/chapters/artificial-intelligence.html" class="site-link">Artificial Intelligence</a> and <a href="http://csfieldguide.org.nz/en/chapters/network-communication-protocols.html" class="site-link">Network Communication Protocols</a>. There is also a teachers' version of the Guide available, which is targeted towards New Zealand teachers but may also be useful for Australian teachers. You can find out more about the teachers' version of the guide <a href="http://csfieldguide.org.nz/en/about.html" class="site-link">here</a>.</td>
            </tr>
            <tr>
                <td><a href="http://www.cs4fn.org/" class="site-link">CS4FN - Computer Science 4 Fun</a></td>
                <td>A webpage for the CS4FN (Computer Science for Fun) project. CS4FN publish a free magazine (available online and in print) that focuses on the fun side of Computer Science.</td>
            </tr>
        </tbody>
    </table>
    <h3 class="my-3">Online Courses</h3>
    <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href="https://csermoocs.adelaide.edu.au/" class="site-link">CSER Digital Technologies MOOCs</a></td>
                <td>The <a href="https://blogs.adelaide.edu.au/cser/" class="site-link">Computer Science Education Research</a> (CSER) group from the University of Adelaide have developed a series of online courses for learning Digital Technologies for K-10 teachers, which are free and accredited through NESA (for New South Wales).</td>
            </tr>
            <tr>
                <td><a href="http://scratched.gse.harvard.edu/guide/" class="site-link">Harvard's Creative Computing Curriculum</a></td>
                <td>The Creative Computing Curriculum Guide is a free guide for teaching Coding and Computational Thinking. The guide focuses on encouraging students to use <a href="https://scratch.mit.edu/" class="site-link">Scratch</a> to create programs that are inspired by students' interests.</td>
            </tr>
        </tbody>
    </table>
    <h3 class="my-3">Lesson Plans</h3>
    <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href="http://csunplugged.org/" class="site-link">Computer Science Unplugged</a></td>
                <td>A set of resources for teaching Computer Science concepts without using a computer (referred to as "unplugged" methods of teaching).</td>
            </tr>
            <tr>
                <td><a href="http://projects.codeclubworld.org/en-GB/" class="site-link">Code Club Resources</a></td>
                <td>Code Club is a non-profit organisation that organises after-school Coding clubs for primary school students. The website has resources for a variety of languages (such as <a href="https://scratch.mit.edu/" class="site-link">Scratch</a> and <a href="https://www.python.org/" class="site-link">Python</a>) that registered Code Clubs can use to learn Coding.</td>
            </tr>
        </tbody>
    </table>
</div>