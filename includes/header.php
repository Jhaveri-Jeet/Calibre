<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title><?= isset($GLOBALS['title']) ? ($GLOBALS['title'] . ' - ') : '' ?>Calibre Aluminium Extrusion</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <link href="<?= urlOf('assets/images/logo.png') ?>" rel="icon">
    <link href="<?= urlOf('lib/google-fonts/nunito.css') ?>" rel="stylesheet">
    <link href="<?= urlOf('lib/font-awesome/font-awesome.min.css') ?>" rel="stylesheet">
    <link href="<?= urlOf('lib/bootstrap-icons/bootstrap-icons.css') ?>" rel="stylesheet">
    <link href="<?= urlOf('lib/owlcarousel/assets/owl.carousel.min.css') ?>" rel="stylesheet">
    <link href="<?= urlOf('lib/animate/animate.min.css') ?>" rel="stylesheet">
    <link href="<?= urlOf('lib/bootstrap/bootstrap.min.css') ?>" rel="stylesheet">
    <link href="<?= urlOf('css/style.css') ?>" rel="stylesheet">
    <link href="<?= urlOf('css/app.css') ?>" rel="stylesheet">

</head>

<body>
    <!-- Spinner Start -->
    <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner"></div>
    </div>
    <!-- Spinner End -->

    <!-- Topbar Start -->
    <div class="container-fluid bg-dark px-5 d-none d-lg-block">
        <div class="row gx-0">
            <div class="col-lg-9 text-center text-lg-start mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center" style="height: 45px;">
                    <small class="me-3 text-light"><i class="fa fa-map-marker-alt me-2"></i>Plot no. 11, R.S. No. 224, Opp. Association office, Naghedi, Jamnagar</small>
                    <a class="me-3 text-light" href="tel:+919033668353"><i class="fa fa-phone-alt me-2"></i>+91 9033668353</a>
                    <!-- <a class="me-3 text-light" onclick='call()' href="/"><i class="fa fa-phone-alt me-2"></i>+91 97268 98007</a> -->
                    <a href="#"><small class="text-light"><i class="fa fa-envelope-open me-2"></i>sales@calibrealuminium.com</small></a>
                </div>
            </div>
            <div class="col-lg-3 text-center text-lg-end">
                <div class="d-inline-flex align-items-center" style="height: 45px;">
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://twitter.com/calibrealuminum" target="_blank"><i class="fab fa-twitter fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.facebook.com/CalibreAluminium" target="_blank"><i class="fab fa-facebook-f fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.linkedin.com/in/calibre-aluminium-extrusion/" target="_blank"><i class="fab fa-linkedin-in fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.instagram.com/calibrealuminium/" target="_blank"><i class="fab fa-instagram fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="https://www.youtube.com/@calibrealuminium" target="_blank"><i class="fab fa-youtube fw-normal"></i></a>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->
    <script>
        function call() {
            $number = 919726898007;
            window.open('tel:'.$number);
        }
    </script>