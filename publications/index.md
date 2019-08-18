---
layout: default
title: Daniel Hickmott
---

<div class="container">
    <div class="showcase">
        <div class="container">
            <h1>Publications</h1>
            <p>
                I have included a list of my publications on this page. 
                First, I have the publications that I am first author on, split into separate sections for journal articles and conference articles. 
                After those publications, I have a list of publications that I am co-author on.
                Currently, I do not have any co-authored journal articles.
                For the most up-to-date list of my publications, please see my <a href ="https://scholar.google.com.au/citations?user=zEcey6gAAAAJ&hl=en" class="text-info" target="_blank">Google Scholar page</a>.
            </p>
            <p>
                I am planning to include author copies of publications available for download from this page in the future, for publications that I have permission from the publisher to share.
                In the meantime, if you would like to read one or more of these publications but cannot get access to them, please <a href="mailto:daniel.hickmott@gmail.com" class="text-info">email me</a> and I will let you know if I can send you an author copy of the relevant publication/s.
            </p>
            <h2>First Author Publications</h2>
            <h3>Journal Articles</h3>       
            {% for pub in site.data.publications.journal.first %}
            <div class="row">
                <div class="col-12">
                    <div class="card box-shadow py-2 my-2">
                        <div class="card-body">
                            <div class="publication-details">
                                <h4>{{ pub.title }}</h4>
                                <p class="publication-authors">{{ pub.authors }}</p>
                                <p class="publication-journal">In {{ pub.journal }}, Volume {{ pub.volume }}, Issue {{ pub.issue }}</p>
                                <p class="publication-dates">Published {{ pub.publicationDate }}</p>
                            </div>
                            <div class="publication-buttons">
                                <a href="{{ pub.locationLink }}" class="btn btn-sm btn-info float-right mx-2"
                                    target="_blank">
                                    View at {{ pub.locationLabel }}
                                    <i class="fa fa-external-link publication-icon"></i>
                                </a>
                                <button type="button" class="btn btn-sm btn-info float-right collapsed"
                                    data-toggle="collapse" data-target="#collapse-abstract-{{ pub.id }}" aria-expanded="false" aria-controls="collapse-abstract-{{ pub.id }}">
                                    <span class="if-collapsed">
                                        Show Abstract <i class="fa fa-toggle-down publication-icon"></i>
                                    </span>
                                    <span class="if-not-collapsed">
                                        Hide Abstract <i class="fa fa-toggle-up publication-icon"></i>
                                    </span>
                                </button>
                            </div>
                            <div class="collapse my-2 py-2" id="collapse-abstract-{{ pub.id }}">
                                <div class="row pub-abstract bg-light border border-secondary rounded ">
                                    <h5>Abstract</h5>
                                    <p>{{ pub.abstract }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {% endfor %}
            <h3>Conference Articles</h3>
            {% for pub in site.data.publications.conference.first %}
            <div class="row">
                <div class="col-12">
                    <div class="card box-shadow py-2 my-2">
                        <div class="card-body">
                            <div class="publication-details">
                                <h4>{{ pub.title }}</h4>
                                <p class="publication-authors">{{ pub.authors }}</p>
                                <p class="publication-conference">Presented at the {{ pub.conference }} conference</p>
                                <p class="publication-dates">In {{ pub.location }} during {{ pub.conferenceDate }}</p>
                            </div>
                            <a href="{{ pub.locationLink }}" class="btn btn-sm btn-info float-right mx-2"
                                target="_blank">
                                View at {{ pub.locationLabel }}
                                <i class="fa fa-external-link publication-icon"></i>
                            </a>
                            <button type="button" class="btn btn-sm btn-info float-right collapsed"
                                data-toggle="collapse" data-target="#collapse-abstract-{{ pub.id }}" aria-expanded="false" aria-controls="collapse-abstract-{{ pub.id }}">
                                <span class="if-collapsed">
                                    Show Abstract <i class="fa fa-toggle-down publication-icon"></i>
                                </span>
                                <span class="if-not-collapsed">
                                    Hide Abstract <i class="fa fa-toggle-up publication-icon"></i>
                                </span>
                            </button>
                            <div class="collapse my-2 py-2" id="collapse-abstract-{{ pub.id }}">
                                <div class="row pub-abstract bg-light border border-secondary rounded ">
                                    <h5>Abstract</h5>
                                    <p>{{ pub.abstract }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {% endfor %}
            <h2>Co-Author Publications</h2>
            <h3>Conference Articles</h3>
            {% for pub in site.data.publications.conference.co-author%}
            <div class="row">
                <div class="col-12">
                    <div class="card box-shadow py-2 my-2">
                        <div class="card-body">
                            <div class="publication-details">
                                <h4>{{ pub.title }}</h4>
                                <p class="publication-authors">{{ pub.authors }}</p>
                                <p class="publication-conference">Presented at the {{ pub.conference }} conference</p>
                                <p class="publication-dates">In {{ pub.location }} during {{ pub.conferenceDate }}</p>
                            </div>
                            <a href="{{ pub.locationLink }}" class="btn btn-sm btn-info float-right mx-2"
                                target="_blank">
                                View at {{ pub.locationLabel }}
                                <i class="fa fa-external-link publication-icon"></i>
                            </a>
                            <button type="button" class="btn btn-sm btn-info float-right collapsed"
                                data-toggle="collapse" data-target="#collapse-abstract-{{ pub.id }}" aria-expanded="false" aria-controls="collapse-abstract-{{ pub.id }}">
                                <span class="if-collapsed">
                                    Show Abstract <i class="fa fa-toggle-down publication-icon"></i>
                                </span>
                                <span class="if-not-collapsed">
                                    Hide Abstract <i class="fa fa-toggle-up publication-icon"></i>
                                </span>
                            </button>
                            <div class="collapse my-2 py-2" id="collapse-abstract-{{ pub.id }}">
                                <div class="row pub-abstract bg-light border border-secondary rounded ">
                                    <h5>Abstract</h5>
                                    <p>{{ pub.abstract }}</p>
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