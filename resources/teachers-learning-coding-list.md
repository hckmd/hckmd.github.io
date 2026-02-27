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
            <img class = "img-fluid highlight-img border border-secondary" src = "{{ site.baseurl | append: '/resources/images/' | append: resource.imageFilePath }}">
        </div>
    </div>
    <h2>About</h2>   
    <p>{{ resource.description }}</p>
    <h3>Resources</h3>
    {% capture links_websites %}{% include_relative coding-resource-list/links_websites.md %}{% endcapture %}
    {{ links_websites | markdownify }}
    {% capture links_online_courses %}{% include_relative coding-resource-list/links_online_courses.md %}{% endcapture %}
    {{ links_online_courses| markdownify }}
    {% capture links_lessons %}{% include_relative coding-resource-list/links_lessons.md %}{% endcapture %}
    {{ links_lessons | markdownify }}
</div>