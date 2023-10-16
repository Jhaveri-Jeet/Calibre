    <!-- Navbar & Carousel Start -->
    <div class="container-fluid position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <a href="<?=urlOf('')?>" class="navbar-brand p-0">
                <img src="<?=urlOf('assets/images/logo.png')?>" alt="logo" class="heading-logo"/>&nbsp;&nbsp;&nbsp;<strong class="heading-change">Calibre Aluminium Extrusion</strong>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <a href="<?= urlOf('') ?>" class="nav-item nav-link <?= uriIs('/index.php') ? 'active' : '' ?>">Home</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle <?= uriStartsWith('/about') ? 'active' : '' ?>" data-bs-toggle="dropdown">About us</a>
                        <div class="dropdown-menu m-0">
                            <a href="<?= urlOf('about/process.php') ?>" class="dropdown-item">Process</a>
                            <a href="<?= urlOf('about/company-profile.php') ?>" class="dropdown-item">Company Profile</a>
                            
                        </div>
                    </div>
                    <a href="<?= urlOf('product.php') ?>" class="nav-item nav-link <?= uriStartsWith('/product.php') ? 'active' : '' ?>">Products</a>
                    <a href="<?= urlOf('quality.php') ?>" class="nav-item nav-link <?= uriStartsWith('/quality.php') ? 'active' : '' ?>">Quality</a>
                    <a href="<?= urlOf('blog') ?>" class="nav-item nav-link <?= uriStartsWith('/blog') ? 'active' : '' ?>">Blog</a>
                    <a href="<?= urlOf('contact.php') ?>" class="nav-item nav-link <?= uriIs('/contact.php') ? 'active' : '' ?> ">Contact us</a>
                </div>
                <button type="button" class="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></button>
                <a href="#" class="btn btn-primary py-2 px-4 ms-3">Download Brochure</a>
            </div>
        </nav>

        <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src="<?=urlOf('assets/images/carousel-1.jpeg')?>" alt="Image" height="900px">
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style="max-width: 900px;">
                            <h1 class="display-1 text-white mb-md-4 animated zoomIn">We are Aluminium Extrusion Manufacturer</h1>
                            <h6 class="text-white text-uppercase mb-3 animated slideInDown">to fulfill your business requirement</h6>
                            <a href="<?=urlOf('product.php')?>" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Products</a>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="<?=urlOf('assets/images/carousel-2.jpeg')?>" alt="Image" height="900px">
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style="max-width: 900px;">
                            <h1 class="display-1 text-white mb-md-4 animated zoomIn">We are not just a Manufacturer</h1>
                            <h6 class="text-white text-uppercase mb-3 animated slideInDown">We are an extension of your success</h6>
                            <a href="<?=urlOf('about/company-profile.php')?>" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">How it’s Made</a>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="<?=urlOf('assets/images/carousel-3.jpeg')?>" alt="Image" height="900px">
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style="max-width: 900px;">
                            <h1 class="display-1 text-white mb-md-4 animated zoomIn">Let Your Business Grow</h1>
                            <h6 class="text-white text-uppercase mb-3 animated slideInDown">With Calibre Aluminium Extrusion</h6>
                            <a href="<?=urlOf('contact.php')?>" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
