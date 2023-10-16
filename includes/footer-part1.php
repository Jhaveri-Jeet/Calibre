    <!-- Footer Start -->
    <div class="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-2 col-md-6 footer-about mb-0">
                    <div class="d-flex flex-column align-items-center justify-content-center text-center h-100 p-4 pt-5">
                        <a href="index.php">
                            <img src="<?= urlOf('assets/images/Calibre White Logo.png') ?>" alt="logo" width="70%" />
                        </a>
                        <h4 class="mt-3 mb-4 text-white">Calibre Aluminium Extrusion</h4>
                    </div>
                </div>
                <div class="col-lg-10 col-md-6">
                    <div class="row gx-5">
                        <div class="col-lg-4 col-md-12 pt-5 mb-5">
                            <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 class="text-light mb-0">Get In Touch</h3>
                            </div>
                            <div class="d-flex mb-2">
                                <i class="bi bi-geo-alt text-primary me-2"></i>
                                <p class="mb-0">Plot no. 11, R.S. No. 224 <br /> Opp. Association office, Naghedi, Jamnagar</p>
                            </div>
                            <div class="d-flex mb-2">
                                <i class="bi bi-envelope-open text-primary me-2"></i>
                                <p class="mb-0">sales@calibrealuminium.com</p>
                            </div>
                            <div class="d-flex mb-2">
                                <i class="bi bi-telephone text-primary me-2"></i>
                                <p class="mb-0">97268 98007</p>
                            </div>
                            <div class="d-flex mt-4">
                                <a class="btn btn-primary btn-square me-2" target="_blank" href="https://twitter.com/calibrealuminum"><i class="fab fa-twitter fw-normal"></i></a>
                                <a class="btn btn-primary btn-square me-2" target="_blank" href="https://www.facebook.com/CalibreAluminium"><i class="fab fa-facebook-f fw-normal"></i></a>
                                <a class="btn btn-primary btn-square me-2" target="_blank" href="https://www.linkedin.com/in/calibre-aluminium-extrusion/"><i class="fab fa-linkedin-in fw-normal"></i></a>
                                <a class="btn btn-primary btn-square me-2" target="_blank" href="https://www.instagram.com/calibrealuminium/"><i class="fab fa-instagram fw-normal"></i></a>
                                <a class="btn btn-primary btn-square" target="_blank" href="https://www.youtube.com/@calibrealuminium"><i class="fab fa-youtube fw-normal"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                            <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 class="text-light mb-0">Quick Links</h3>
                            </div>
                            <div class="link-animated d-flex flex-column justify-content-start">
                                <a class="text-light mb-2" href="<?= urlOf('index.php') ?>"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a>
                                <a class="text-light mb-2" href="<?= urlOf('quality.php') ?>"><i class="bi bi-arrow-right text-primary me-2"></i>Quality</a>
                                <a class="text-light mb-2" href="<?= urlOf('product.php') ?>"><i class="bi bi-arrow-right text-primary me-2"></i>Products</a>
                                <a class="text-light mb-2" href="<?= urlOf('blog') ?>"><i class="bi bi-arrow-right text-primary me-2"></i>Blog</a>
                                <!-- <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a> -->
                                <a class="text-light" href="<?= urlOf('contact.php') ?>"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472045.3993764258!2d69.47616084999997!3d22.43449470000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39571544e4a2137b%3A0xa593993bf3e14544!2sCalibre%20Industries!5e0!3m2!1sen!2sin!4v1673611880446!5m2!1sen!2sin" width="350" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid text-white footer-copyright wow fadeInUp" data-wow-delay="0.1s">
        <div class="container text-center">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="d-flex align-items-center justify-content-center" style="height: 75px;">
                        <p class="mb-0">&copy; <a class="text-white border-bottom" href="https://calibreindustries.in">Calibre Indusrties</a>. All Rights Reserved.
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="d-flex align-items-center justify-content-center" style="height: 75px;">
                        <p class="mb-0">Designed by <a class="text-white border-bottom" href="https://trioinfotech.in/">Trio Infotech</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->

    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded back-to-top mt-2"><i class="bi bi-arrow-up"></i></a>
    <a href="#" onclick="openWhatsAppPage()" target="_blank" class="btn btn-lg btn-primary btn-lg-square rounded back-to-top mb-5" id="whatsapp"><i class="bi bi-whatsapp"></i></a>



    <!-- Full Screen Search Start -->
    <div class="modal fade" id="searchModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <strong class="text-white">Search</strong>
                    <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex align-items-center justify-content-center">
                    <div class="input-group" style="max-width: 600px;">
                        <input type="text" class="form-control bg-transparent border-primary p-3" placeholder="Type search keyword">
                        <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Full Screen Search End -->

    <script>
        function openWhatsAppPage() {
            const IS_IOS = (navigator.userAgent.match(/iPad/i) != null) || (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null);
            const IS_ANDROID = (navigator.userAgent.match(/android/i) != null) || (navigator.userAgent.match(/Android/i) != null);

            if (IS_IOS || IS_ANDROID)
                window.location.href = "whatsapp://send?phone=9726898007";
            else
                window.open("https://web.whatsapp.com/send?phone=9726898007");
        }
    </script>