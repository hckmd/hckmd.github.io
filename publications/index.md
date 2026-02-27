---
layout: default
title: Publications
---

<div class="showcase">
    <h1>Publications</h1>
    <p>
        For the most up-to-date list of my publications, please see my <a href ="https://scholar.google.com.au/citations?user=zEcey6gAAAAJ&hl=en" class="text-info" target="_blank">Google Scholar page</a>.
    </p>
    <p>
     If you would like to read one or more of these publications but cannot get access to them, please <a href="mailto:daniel.hickmott@gmail.com" class="text-info">email me</a> and I will let you know if I can send you an author copy of the relevant publication/s.
    </p>
    <h2>Thesis</h2>
    My thesis, or <i>doctoral dissertation</i> as they are often referred to outside of Australia, was accepted during September 2020.
    <div class="row">
        <div class="col-12">
            <div class="card box-shadow py-2 my-2">
                <div class="card-body">
                    <div class="publication-details">
                        <h4>
                            A study of a professional learning program for primary school teachers implementing the New South Wales science and technology syllabus
                        </h4>
                        <p class="publication-authors">
                            Supervised by Elena Prieto-Rodriguez and John Fischetti
                        </p>
                    </div>
                    <div class="list-item-buttons">
                        <a href="https://hdl.handle.net/1959.13/1417667" class="btn btn-sm btn-info float-right"
                            target="_blank">
                            View on NOVA
                            <i class="fa fa-external-link publication-icon"></i>
                        </a>
                        <button type="button" class="btn btn-sm btn-info float-right collapsed"
                            data-toggle="collapse" data-target="#collapse-abstract-thesis" aria-expanded="false" aria-controls="collapse-abstract-thesis">
                            <span class="if-collapsed">
                                Show Abstract <i class="fa fa-toggle-down publication-icon"></i>
                            </span>
                            <span class="if-not-collapsed">
                                Hide Abstract <i class="fa fa-toggle-up publication-icon"></i>
                            </span>
                        </button>
                    </div>
                    <div class="collapse my-2 py-2" id="collapse-abstract-thesis">
                        <div class="pub-abstract">
                            <h5>Abstract</h5>
                            <p>Australia is one of several countries that has recently mandated that K-12 students learn computational thinking and coding from the early years of schooling. The introduction of the mandatory teaching of these skills presents many challenges for teachers because these skills have not usually been taught in their initial teacher education. Many professional learning opportunities have been developed to upskill teachers in this new content, but few studies have investigated the impact of these opportunities on teachers’ understanding of computational concepts or self-efficacy in computational thinking. This study investigated the impact of a professional learning program, Coding in Stage 3, on teachers’ understanding of computational concepts, self-efficacy in computational thinking and plans for integrating coding into different subjects. The teachers who completed the Coding in Stage 3 program (N=42) participated in one of two streams that had a different subject focus: a stream focussed on integrating coding in Mathematics, ScratchMaths (n=15), and another stream focussed on integrating coding across multiple subjects, Coding & STEAM (n=27). Consequently, the study also aimed to compare the difference between the two streams by subject focus. The findings from the mixed methods analysis indicate that, overall, the participating teachers gained in their understanding of computational concepts and their self-efficacy but that the subject focus of the program did not impact those gains. However, teachers who completed the program with a focus on Mathematics were significantly more likely to integrate coding in Mathematics lessons after the program. I argue that more resources that integrate coding with subjects other than Mathematics should be developed but would warn against the notion that integrating coding with other subjects saves instructional time. In addition, in order to address the challenge of implementing these new curricula, educational leaders should be aware that there is a need to support teachers to develop strategies for sharing their coding knowledge with colleagues, and that these strategies will be as important as professional learning programs designed to upskill individual teachers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
                    <div class="list-item-buttons">
                        <a href="{{ pub.locationLink }}" class="btn btn-sm btn-info float-right"
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
                        <div class="pub-abstract">
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
                    <div class="list-item-buttons">
                        <a href="{{ pub.locationLink }}" class="btn btn-sm btn-info float-right"
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
                        <div class="pub-abstract">
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
                    <div class="list-item-buttons">
                        <a href="{{ pub.locationLink }}" class="btn btn-sm btn-info float-right"
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
                        <div class="pub-abstract">
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