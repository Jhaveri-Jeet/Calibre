<!-- Navbar & Carousel Start -->
<div class="container-fluid position-relative p-0">
    <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
        <a href="<?= urlOf('') ?>" class="navbar-brand p-0">
            <img src="<?= urlOf('assets/images/Calibre White Logo.png') ?>" alt="logo" class="heading-logo"/>&nbsp;&nbsp;&nbsp;<strong class="heading-change">Calibre Aluminium
                Extrusion</strong>
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

    <div class="container-fluid bg-primary py-5 bg-header" style="margin-bottom: 90px;">
        <div class="row py-3">
            <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                <h1 class="display-4 text-white animated zoomIn"><?= isset($GLOBALS['headerTitle']) ? ($GLOBALS['headerTitle']) : '' ?></h1>
                <a href="#" class="h5 text-white">Home</a>
                <i class="far fa-circle text-white px-2"></i>
                <a href="#" class="h5 text-white"><?= isset($GLOBALS['headerName']) ? ($GLOBALS['headerName']) : '' ?></a>
            </div>
        </div>
    </div>
</div>