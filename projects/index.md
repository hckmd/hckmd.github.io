---
layout: default
title: Projects
---

<div class="showcase">
    <h1>Projects</h1>
    <!-- Checkbox Filters -->
    <div class="card bg-secondary bg-opacity-10 border border-secondary border-opacity-25 p-3 mb-4 rounded">
        <span class="fw-bold mb-2 d-block">Filter projects:</span>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-3">
                <div class="form-check">
                    <input class="form-check-input filter-checkbox form-check-blue" type="checkbox" value="UX Design" id="check-ux">
                    <label class="form-check-label text-dark" for="check-ux">UX Design</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input filter-checkbox form-check-blue" type="checkbox" value="Prototyping" id="check-prototype">
                    <label class="form-check-label text-dark" for="check-prototype">Prototyping</label>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <div class="form-check">
                    <input class="form-check-input filter-checkbox form-check-blue" type="checkbox" value="Mixed-methods evaluation" id="check-mixed">
                    <label class="form-check-label text-dark" for="check-mixed">Mixed-methods evaluation</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input filter-checkbox form-check-blue" type="checkbox" value="Teaching" id="check-teach">
                    <label class="form-check-label text-dark" for="check-teach">Teaching</label>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <div class="form-check">
                    <input class="form-check-input filter-checkbox form-check-blue" type="checkbox" value="Learning Design" id="check-learning">
                    <label class="form-check-label text-dark" for="check-learning">Learning Design</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input filter-checkbox form-check-blue" type="checkbox" value="Content Development" id="check-content">
                    <label class="form-check-label text-dark" for="check-content">Content Development</label>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <div class="form-check">
                    <input class="form-check-input filter-checkbox form-check-blue" type="checkbox" value="Applying AI" id="check-ai">
                    <label class="form-check-label text-dark" for="check-ai">Applying AI</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input filter-checkbox form-check-blue" type="checkbox" value="Data Analytics & Visualisation" id="check-data">
                    <label class="form-check-label text-dark" for="check-data">Data Analytics & Visualisation</label>
                </div>
            </div>
        </div>
    </div>

    <!-- Active Filter Status Alert Banner -->
    <div id="filter-status" class="alert alert-info d-none justify-content-between align-items-center my-3">
        <span>Showing projects filtered by: <strong id="active-tag"></strong></span>
        <a href="{{ site.baseurl }}/projects/" class="btn btn-sm btn-outline-info" id="clear-filter">Show all projects</a>
    </div>

    {% for project in site.data.projects %}
    <div class="row project-item" data-tags="{{ project.tag1 | downcase }}|{{ project.tag2 | downcase }}|{{ project.tag3 | downcase }}">
        <div class="card md-2 box-shadow py-3 my-2 mx-2">
            <div class="row">
                <div class ="col-md-4">
                    <img class="card-img-top list-img border border-secondary" 
                        src="{{ site.baseurl | append: '/projects/images/' | append: project.imageFilePath }}"
                        alt="{{ project.imageAltText }}"
                    >
                </div>
                <div class ="col-md-8">
                    <div class="card-body">
                        <h2>
                            <a href="{{ project.pageName }}" class="site-page-link">
                                {{ project.title }}
                            </a>
                        </h2>
                        <strong>{{project.period }}</strong>
                        <p class="card-text">{{ project.description }}</p>
                        {% include project-badges.html project=project %}
                    </div>
                </div>
            </div>                  
        </div>
    </div>
    {% endfor %}
</div>

<script data-turbo-eval="true">
    document.addEventListener("turbo:load", function() {
        const filterStatus = document.getElementById('filter-status');
        const activeTagSpan = document.getElementById('active-tag');
        const projectItems = document.querySelectorAll('.project-item');
        const checkboxes = document.querySelectorAll('.filter-checkbox');

        // Function to filter projects in the DOM
        function applyFilters(selectedTags) {
            if (selectedTags.length > 0) {
                const lowerTags = selectedTags.map(t => t.toLowerCase());
                
                projectItems.forEach(item => {
                    const tagsAttr = item.getAttribute('data-tags') || '';
                    const tagsList = tagsAttr.split('|').map(t => t.trim());
                    
                    // Match if project has at least one of the selected tags (OR condition)
                    const isMatch = tagsList.some(t => lowerTags.includes(t));
                    if (isMatch) {
                        item.classList.remove('d-none');
                    } else {
                        item.classList.add('d-none');
                    }
                });
                
                if (filterStatus && activeTagSpan) {
                    activeTagSpan.textContent = selectedTags.join(', ');
                    filterStatus.classList.remove('d-none');
                    filterStatus.classList.add('d-flex');
                }
            } else {
                projectItems.forEach(item => {
                    item.classList.remove('d-none');
                });
                if (filterStatus) {
                    filterStatus.classList.add('d-none');
                    filterStatus.classList.remove('d-flex');
                }
            }
        }

        // Initialize checkbox states from URL query params
        const urlParams = new URLSearchParams(window.location.search);
        const tagsFromUrl = urlParams.getAll('tag');
        
        checkboxes.forEach(cb => {
            cb.checked = tagsFromUrl.includes(cb.value);
        });

        // Run filter based on initial state (from URL params)
        applyFilters(tagsFromUrl);

        // Update URL and filter when checkboxes are toggled
        function handleCheckboxChange() {
            const checkedBoxes = document.querySelectorAll('.filter-checkbox:checked');
            const checkedValues = Array.from(checkedBoxes).map(cb => cb.value);
            
            const params = new URLSearchParams();
            checkedValues.forEach(val => {
                params.append('tag', val);
            });
            
            const newSearch = params.toString() ? '?' + params.toString() : '';
            const newUrl = window.location.pathname + newSearch;
            
            // Push history state so URL matches checkboxes without reloading
            window.history.pushState({ path: newUrl }, '', newUrl);
            
            // Filter DOM elements
            applyFilters(checkedValues);
        }

        checkboxes.forEach(cb => {
            cb.removeEventListener('change', handleCheckboxChange);
            cb.addEventListener('change', handleCheckboxChange);
        });

        // Handle clear filter button click
        const clearFilterBtn = document.getElementById('clear-filter');
        if (clearFilterBtn) {
            clearFilterBtn.removeEventListener('click', clearFilter);
            clearFilterBtn.addEventListener('click', clearFilter);
        }

        function clearFilter(e) {
            e.preventDefault();
            checkboxes.forEach(cb => cb.checked = false);
            window.history.pushState({ path: window.location.pathname }, '', window.location.pathname);
            applyFilters([]);
        }
    });
</script>