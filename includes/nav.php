    <!-- Navbar Start -->

    <div class="container-fluid position-relative p-0">
        <nav class="bg-header navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <a href="<?= urlOf('') ?>" class="navbar-brand p-0">
                <img src="<?= urlOf('assets/images/logo-with-bg.png') ?>" alt="logo" />&nbsp;&nbsp;&nbsp;<strong>Calibre Aluminium Extrusion</strong>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">

                    <a href="<?= urlOf('') ?>" class="nav-item nav-link <?= uriIs('/index.php') ? 'active' : '' ?>">Home</a>
                    <a href="<?= urlOf('blog') ?>" class="nav-item nav-link <?= uriStartsWith('/blog') ? 'active' : '' ?>">Blog</a>
                    <a href="<?= urlOf('contact.php') ?>" class="nav-item nav-link <?= uriIs('/contact.php') ? 'active' : '' ?> ">Contact us</a>

                    <!-- <a href="<?= urlOf('') ?>" class="nav-item nav-link active">Home</a>
                    <a href="<?= urlOf('blog') ?>" class="nav-item nav-link <?= str_ends_with($_SERVER['SCRIPT_NAME'], 'index.php') || str_contains($_SERVER['SCRIPT_NAME'], '`details`.php') ? 'active' : '' ?>">Blog</a>
                    <a href="<?= urlOf('contact.php') ?>" class="nav-item nav-link <?= str_ends_with($_SERVER['SCRIPT_NAME'], 'contact.php') ? 'active' : '' ?> ">Contact us</a> -->
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle <?= uriStartsWith('/about') ? 'active' : '' ?>" data-bs-toggle="dropdown">About us</a>
                        <!-- <a href="<?= urlOf('../about') ?>" class="nav-link dropdown-toggle <?= (str_ends_with($_SERVER['SCRIPT_NAME'], 'company-profile.php') || str_ends_with($_SERVER['SCRIPT_NAME'], 'management.php')) ? 'active' : '' ?>" data-bs-toggle="dropdown">About us</a> -->
                        <div class="dropdown-menu m-0">
                            <a href="<?= urlOf('about/company-profile.php') ?>" class="dropdown-item">Company Profile</a>
                            <a href="<?= urlOf('about/process.php') ?>" class="dropdown-item">Process</a>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></button>
                <a href="#" class="btn btn-primary py-2 px-4 ms-3">Download Brochure</a>
            </div>
        </nav>
    </div>
    <!-- Navbar End -->
    <script>
        // Add active class to the current button (highlight it)
        var header = document.getElementById("navbarCollapse");
        var btns = header.getElementsByClassName("nav-link");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    </script>