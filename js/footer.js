document.addEventListener('DOMContentLoaded', function() {
    const footer = document.getElementById('footer');
    if (footer) {
        footer.innerHTML = `
            <footer class="bg-dark text-light py-4 mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <h5>About Multi-Tools</h5>
                            <p>A comprehensive suite of online tools for PDF, image, SEO, and social media management.</p>
                        </div>
                        <div class="col-md-4">
                            <h5>Quick Links</h5>
                            <ul class="list-unstyled">
                                <li><a href="../../index.html" class="text-light">Home</a></li>
                                <li><a href="../pdf/pdf-merger.html" class="text-light">PDF Tools</a></li>
                                <li><a href="../image/image-converter.html" class="text-light">Image Tools</a></li>
                                <li><a href="../seo/keyword-research.html" class="text-light">SEO Tools</a></li>
                                <li><a href="../social/social-post-generator.html" class="text-light">Social Media Tools</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <h5>Contact Us</h5>
                            <ul class="list-unstyled">
                                <li><i class="bi bi-envelope"></i> support@multitools.com</li>
                                <li><i class="bi bi-telephone"></i> +1 (123) 456-7890</li>
                            </ul>
                        </div>
                    </div>
                    <hr class="my-4">
                    <div class="text-center">
                        <p>&copy; 2024 Multi-Tools. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}); 