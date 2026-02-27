---
layout: default
title: Inhibitors and Enablers
---
<nav aria-label="breadcrumb">
  <ol class="breadcrumb bg-transparent px-0 mb-1">
    <li class="breadcrumb-item"><a href="{{ site.baseurl }}/projects/" class="site-link">Projects</a></li>
    <li class="breadcrumb-item active" aria-current="page">Inhibitors and Enablers</li>
  </ol>
</nav>


<div class="project-description">
    {% assign project = site.data.projects | where:"pageName", "inhibitors-and-enablers" | first %}
    <h2>{{ project.title }}</h2>
    <div class="row">
        <div class="col-md-4 offset-md-4">
            <img class = "img-fluid highlight-img border border-secondary" src = "{{ site.baseurl | append: '/projects/images/' | append: project.imageFilePath }}">
        </div>
    </div>
    <h3>About</h3>
    <div id="mobile-alert-box" class="alert alert-info my-3" style="display: none">
        It looks likes you have tried to access the Inhibitors and Enablers project on a mobile device. 
        The project can only be viewed on a desktop or laptop.
        If you only have a mobile device, there is information below about the project and you can also watch a video (linked below) about it.
    </div>
    <ul>
        <li><a href="ies3" class="site-link">Access the interactive project here</a> (Only for desktop and laptop devices)</li>
        <li><a href="https://youtu.be/Oi897X_Y9CI" class="site-link">Watch a video on YouTube that includes the project background and a demonstration.</a></li>
    </ul>
    <h4>Project Background</h4>
    <p>
        This project presents my results from an analysis of interviews I conducted with 15 Australian primary school (K-6) teachers in 2018. 
        The interviews took place after the teachers completed a 10 week professional learning program I ran, called <a class="site-link" href="coding-in-stage-3">Coding in Stage 3</a>. 
        That program and these interviews were both part of my PhD project.
    </p>
    <p>
        The interviews were focused on the teachers' experiences learning and teaching computer coding and their plans for implementing coding lessons in the future.
        I analysed the transcripts from these interviews and identified <strong>18 inhibitors</strong> and <strong>16 enablers</strong>.
    </p>
    <ul>
        <li><strong>Inhibitors</strong> are the barriers and challenges that hindered teachers' implementation of coding lessons.</li>
        <li><strong>Enablers</strong> are the supports and other positive experiences that had helped teachers implement coding lessons.</li>
    </ul>
    <p>
        I also grouped the inhibitors and enablers into 9 different categories, such as "Leaders" and "Peers".
        Stakeholders, such as principals, could then use these categories of inhibitors and enablers to find ways to help teachers implement coding lessons.
    </p>
    <p>
        The process that I used for this analysis and the categories, inhibitors and enablers are explained in detail in my thesis. 
        My thesis is available online and you can download it and read the results chapter that focuses on the enablers and inhibitors. 
        However, that chapter alone is around 60 pages! 
        I have been wanting to present these results in a more engaging and interactive way and recently had some time to implement this as a personal project.
    </p>
    <p>
        The project has been implemented using TypeScript and PhaserJS, which are two technologies that I have been wanting to learn for a while. 
        The project is set up as a fixed size canvas that will not work well on mobile devices and should only be viewed on a desktop or laptop.
        If you would like to see what the project looks like and can only use a mobile device, you can watch <a href="https://youtu.be/Oi897X_Y9CI" class="site-link">a video about it on YouTube here</a>.
    </p>
    <h4>How to Use It</h4>
    <p>
        In the project, you can see each of the different categories up the top and down the bottom. You can click each of the categories and you will see a description of that category, like you can see below.
    </p>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <img class = "img-fluid highlight-img border border-secondary" src = "{{ site.baseurl | append: '/projects/images/ies3-click-category.gif' }}">
        </div>
    </div>
    <p>
        The different inhibitors and enablers in that category will then appear. 
        The inhibitors are prefixed with a '-' sign and enablers are prefixed with a '+' sign. 
        You can click the inhibitor and enablers to see a description of it, as well as a quote relating to that inhibitor or enabler from the teacher interviews. 
    </p>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <img class = "img-fluid highlight-img border border-secondary" src = "{{ site.baseurl | append: '/projects/images/ies3-click-enabler.gif' }}">
        </div>
    </div>
    <p>
        You can then click the "play quote" button to hear a recording of this quote. Note that the names are pseudonyms and that the audio recordings are not from the original interviews.
    </p>
    <p>
        You can choose another category to see the inhibitors and enablers for that category. You can click the '?' button at any time to open up the information dialog and video again at any time.
    </p>
    <h3>Credits</h3>
    <p>Thank you to everyone who provided audio recordings for the interview quotes: Michelle Chomiak, Celinda Corsini, Drew Eastlake, Sally Gridley, Sharon Harrison, Deon Scanlon and Courtney Weaver.</p>
    <h3>Links</h3>
    <ul>
        <li>
            <a href="ies3" class="site-link">The interactive Inhibitors and Enablers project (desktop and laptop only)</a>
        </li>
        <li>
            <a href="https://youtu.be/Oi897X_Y9CI" class="site-link">Video explaining the project background</a>
        </li>
        <li>
            <a href="https://hdl.handle.net/1959.13/1417667" class="site-link">My PhD thesis on the NOVA repository</a>
        </li>
        <li>
            <a href="coding-in-stage-3" class="site-link">More details about the Coding in Stage 3 Program</a>
        </li>
    </ul>
    <a href="{{ site.baseurl | append: '/projects/' }}" class="btn btn-sm btn-info float-right">
        View My Other Projects
        <i class="fa fa-list project-icon"></i>
    </a>
</div>
<script>
    // Check if the user has been redirected here due to them being on a mobile
    // and suggest them to watch the video and view the details here
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    const value = params.mobile_redirect;
    if (value != null) {
        console.log(value);
        if (value == "true") {
            const mobileAlertBox = document.getElementById("mobile-alert-box");
            mobileAlertBox.style.display = 'block';
        
        }
    }

</script>