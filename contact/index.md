---
layout: default
title: Contact Me
---

<div class="showcase">
    <h1>Contact me</h1>
    <p>
        Interested in collaborating on some research or projects? Or have any questions about my work? Feel free to
        reach out through the form below and I well get back to you as soon as possible.
    </p>
    <div class="col-12 col-md-6 offset-md-3">
        <div data-fs-success class="alert alert-success mt-4">
            Thank you for your message! I will get back to you as soon as I can.
        </div>
        <div data-fs-error class="alert alert-danger mt-4">
            Oops! There was a problem submitting your form. Please check your inputs and try again.
        </div>
        <form id="contact-form" class="mt-4 border border-secondary bg-secondary bg-opacity-10 p-3 border-opacity-25 rounded">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" name="name" required data-fs-field>
                <div class="text-danger small mt-1" data-fs-error="name"></div>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="email" name="email" required data-fs-field>
                <div class="text-danger small mt-1" data-fs-error="email"></div>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" name="message" rows="5" required data-fs-field></textarea>
                <div class="text-danger small mt-1" data-fs-error="message"></div>
            </div>
            <button type="submit" class="btn btn-info px-4" data-fs-submit-btn>Send Message</button>
        </form>
    </div>
    <script data-turbo-eval="true">
        // Initialize formspree on turbo:load so it connects even when navigating via Turbo
        document.addEventListener("turbo:load", function() {
            if (document.getElementById("contact-form")) {
                window.formspree = window.formspree || function () { (formspree.q = formspree.q || []).push(arguments); };
                formspree('initForm', { formElement: '#contact-form', formId: 'mzdorken' });
            }
        });
    </script>
</div>