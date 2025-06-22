document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    if (header) {
        header.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container">
                    <a class="navbar-brand" href="/">Multi-Tools</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="pdfDropdown" role="button" data-bs-toggle="dropdown">
                                    PDF Tools
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="../pdf/pdf-merger.html">Merge PDF</a></li>
                                    <li><a class="dropdown-item" href="../pdf/pdf-splitter.html">Split PDF</a></li>
                                    <li><a class="dropdown-item" href="../pdf/pdf-compressor.html">Compress PDF</a></li>
                                    <li><a class="dropdown-item" href="../pdf/pdf-to-word.html">PDF to Word</a></li>
                                    <li><a class="dropdown-item" href="../pdf/word-to-pdf.html">Word to PDF</a></li>
                                    <li><a class="dropdown-item" href="../pdf/pdf-to-excel.html">PDF to Excel</a></li>
                                    <li><a class="dropdown-item" href="../pdf/excel-to-pdf.html">Excel to PDF</a></li>
                                    <li><a class="dropdown-item" href="../pdf/pdf-to-ppt.html">PDF to PPT</a></li>
                                    <li><a class="dropdown-item" href="../pdf/ppt-to-pdf.html">PPT to PDF</a></li>
                                    <li><a class="dropdown-item" href="../pdf/pdf-to-jpg.html">PDF to JPG</a></li>
                                    <li><a class="dropdown-item" href="../pdf/jpg-to-pdf.html">JPG to PDF</a></li>
                                    <li><a class="dropdown-item" href="../pdf/pdf-to-text.html">PDF to Text</a></li>
                                    <li><a class="dropdown-item" href="../pdf/html-to-pdf.html">HTML to PDF</a></li>
                                    <li><a class="dropdown-item" href="../pdf/pdf-editor.html">PDF Editor</a></li>
                                    <li><a class="dropdown-item" href="../pdf/pdf-watermark.html">Add Watermark</a></li>
                                    <li><a class="dropdown-item" href="../pdf/pdf-watermark-remover.html">Remove Watermark</a></li>
                                    <li><a class="dropdown-item" href="../pdf/pdf-rotator.html">Rotate PDF</a></li>
                                    <li><a class="dropdown-item" href="../pdf/pdf-page-numberer.html">Add Page Numbers</a></li>
                                    <li><a class="dropdown-item" href="../pdf/pdf-to-pdfa.html">Convert to PDF/A</a></li>
                                    <li><a class="dropdown-item" href="../pdf/pdf-password-remover.html">Remove Password</a></li>
                                    <li><a class="dropdown-item" href="../pdf/pdf-repair.html">Repair PDF</a></li>
                                    <li><a class="dropdown-item" href="../pdf/ocr-pdf.html">OCR PDF</a></li>
                                    <li><a class="dropdown-item" href="../pdf/scan-to-pdf.html">Scan to PDF</a></li>
                                    <li><a class="dropdown-item" href="../pdf/remove-pages.html">Remove Pages</a></li>
                                    <li><a class="dropdown-item" href="../pdf/extract-pages.html">Extract Pages</a></li>
                                    <li><a class="dropdown-item" href="../pdf/organize-pdf.html">Organize PDF</a></li>
                                    <li><a class="dropdown-item" href="../pdf/unlock-pdf.html">Unlock PDF</a></li>
                                    <li><a class="dropdown-item" href="../pdf/ai-summarizer.html">AI Summarizer</a></li>
                                    <li><a class="dropdown-item" href="../pdf/pdf-to-audio.html">PDF to Audio</a></li>
                                    <li><a class="dropdown-item" href="../pdf/pdf-quiz-generator.html">Quiz Generator</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="imageDropdown" role="button" data-bs-toggle="dropdown">
                                    Image Tools
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="../image/image-converter.html">Image Converter</a></li>
                                    <li><a class="dropdown-item" href="../image/image-compressor.html">Image Compressor</a></li>
                                    <li><a class="dropdown-item" href="../image/image-resizer.html">Image Resizer</a></li>
                                    <li><a class="dropdown-item" href="../image/image-editor.html">Image Editor</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="seoDropdown" role="button" data-bs-toggle="dropdown">
                                    SEO Tools
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="../seo/keyword-research.html">Keyword Research</a></li>
                                    <li><a class="dropdown-item" href="../seo/backlink-checker.html">Backlink Checker</a></li>
                                    <li><a class="dropdown-item" href="../seo/website-analyzer.html">Website Analyzer</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="socialDropdown" role="button" data-bs-toggle="dropdown">
                                    Social Media Tools
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="../social/social-post-generator.html">Post Generator</a></li>
                                    <li><a class="dropdown-item" href="../social/hashtag-generator.html">Hashtag Generator</a></li>
                                    <li><a class="dropdown-item" href="../social/social-media-scheduler.html">Content Scheduler</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
    }
}); 