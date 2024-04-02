---
layout: default
title: Daniel Hickmott
---

<div class="project-description">
    <h2>{{ site.data.projects[2].title }}</h2>
    <div class="row">
        <div class="col-md-4 offset-md-4">
            <img class = "img-fluid highlight-img border border-secondary" src = "{{ site.baseurl | append: '/projects/images/' | append: site.data.projects[2].imageFilePath }}">
        </div>
    </div>
    <h3>About</h3>
    <h4>Apostrophe Power and Sentence Hero</h4>
    <p>
        In 2015, I worked with a team of educators and software engineers to develop two mobile learning apps, one titled <em>Apostrophe Power</em> and the other titled <em>Sentence Hero</em>.
        These apps are games that can be used by students to improve their literacy skills.
        My role in this project was to develop the apps for iOS devices (iPads and iPhones), while another team member developed the apps for Android devices.
        I used the Swift programming language, along with the SpriteKit game development framework to develop these apps.
    </p>
    <p>The iOS versions of these apps are available as free downloads on the App Store:</p>
    <ul>
        <li><a href="http://hckmd.com/AP" target="_blank" class="text-info">Apostrophe Power</a></li>
        <li><a href="http://hckmd.com/SH" target="_blank" class="text-info">Sentence Hero</a></li>
    </ul>
    <h4>Serious Game Analytics</h4>
    <div class="row">
        <div class="col-md-4 offset-md-4 my-3">
            <img class = "img-fluid project-img border border-secondary" src = "{{ site.baseurl | append: '/projects/images/serious_games_analytics.png' }}">
        </div>
    </div>
    <p>
        In 2016, I continued work on this project, focusing on the application of <em>Serious Game Analytics</em> to visualise and analyse data that was collected during <em>Apostrophe Power</em> evaluation sessions. 
        The data collected were the actions taken by learners playing through the <em>Apostrophe Power</em> game, such as: every time the player answered a question.
        I wrote an F# program that cleaned the recorded actions, performed some analysis on the data and created visualisations in HTML and JavaScript.
        For example, the image above shows how the game players moved through the levels in the game. 
        Each arrow represents a player navigating from one level to another. 
        The thicker that the arrow is, the more common that navigation was.
    </p>
    <p>
        You can read more about the processing of the game logs and the methods of visualising these data in <a href="{{ site.baseurl | append: '/publications/serious-game-analytics.png' }}" target="_blank" class="text-info">this conference article</a>, which was presented at the Joint International Conference for Serious Games in 2016.
    </p>
    <h3>Links</h3>
    <ul>
        <li>
            <a href="https://www.ncsehe.edu.au/project/literacy-app-m-learning-tool-low-ses-undergraduate-students/" class="text-info" target="_blank">Article about the Literacy Apps project on National Centre for Student Equity in Higher Education (NCSEHE) website</a>
        </li>
        <li>
            <a href="https://www.newcastle.edu.au/newsroom/faculty-of-education-and-arts/literacy-apps-win-innovation-award" class="text-info" target="_blank">&#39;Literacy Apps Win Innovation Award&#39; article on University of Newcastle website</a>
        </li>
    </ul>
    <a href="{{ site.baseurl | append: '/projects/' }}" class="btn btn-sm btn-info float-right">
        View My Other Projects
        <i class="fa fa-list project-icon"></i>
    </a>
</div>