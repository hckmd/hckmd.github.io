---
layout: default
title: Learning to Teach Coding Resources
---

<div class="showcase">
    <h2>{{ site.data.resources[0].title }}</h2>
    <div class="row">
        <div class="col-md-4 offset-md-4">
            <img class = "img-fluid highlight-img border border-secondary" src = "{{ site.baseurl | append: '/resources/images/' | append: site.data.resources[0].imageFilePath }}">
        </div>
    </div>
    <h3>About</h3>   
    <p>{{ site.data.resources[0].description }}</p>
    <h3>Resources</h3>
    {% capture links_websites %}{% include_relative coding-resource-list/links_websites.md %}{% endcapture %}
    {{ links_websites | markdownify }}
    {% capture links_online_courses %}{% include_relative coding-resource-list/links_online_courses.md %}{% endcapture %}
    {{ links_online_courses| markdownify }}
    {% capture links_lessons %}{% include_relative coding-resource-list/links_lessons.md %}{% endcapture %}
    {{ links_lessons | markdownify }}
</div>