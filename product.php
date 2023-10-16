<?php
require './includes/init.php';
$title = "Products";
$headerName = 'Product';
$headerTitle = 'Product Main Page';
require pathOf('includes/header.php');
require pathOf('includes/red-header.php');


$products = select("SELECT * FROM `Products`");

?>
<!-- About Start -->
<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class="row g-5">
            <div class="col-lg-8">
                <div class="section-title position-relative pb-3 mb-5">
                    <h1 class="mb-0">Calibre Aluminium Extrusion</h1>
                </div>
                <p class="mb-4">We are a leading Aluminium Extrusion Manufacturer who manufactures a wide range of
                    geometrical shapes. These Aluminium Extrusions are made of high quality billets made from in-house
                    Furnace Facility.<br /><br />

                    We are a leading aluminium extrusion supplier in Delhi, India. We have a vast number of wholesalers
                    of Aluminium Extrusion in Delhi, So we can offer Our Aluminium Extrusion profiles at affordable
                    rates within a few days. Here are some quality of our aluminum extrusion
                </p>
                <a href="<?= urlOf('quote.php') ?>" class="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Request A
                    Quote</a>
            </div>
            <div class="col-lg-4" style="min-height: 500px;">
                <div class="position-relative h-100">
                    <img class="position-absolute w-100 h-90 rounded wow zoomIn" style="border-radius: 20px !important;" data-wow-delay="0.1s" src="<?= urlOf('assets/images/about.jpg') ?>" style="object-fit: cover;">
                </div>
            </div>
        </div>
    </div>
</div>
<!-- About End -->
<!-- About Start -->
<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class="row g-5">
            <div class="col-lg-4" style="min-height: 500px;">
                <div class="position-relative h-100">
                    <img class="position-absolute w-100 h-90 rounded wow zoomIn" style="border-radius: 20px !important;" data-wow-delay="0.1s" src="<?= urlOf('assets/images/about.jpg') ?>" style="object-fit: cover;">
                </div>
            </div>
            <div class="col-lg-8" style="text-align: right !important;">
                <div class="section-title position-relative pb-3 mb-5">
                    <h1 class="mb-0">Calibre Aluminium Extrusion</h1>
                </div>
                <p class="mb-4">We are a leading Aluminium Extrusion Manufacturer who manufactures a wide range of
                    geometrical shapes. These Aluminium Extrusions are made of high quality billets made from in-house
                    Furnace Facility.<br /><br />

                    We are a leading aluminium extrusion supplier in Delhi, India. We have a vast number of wholesalers
                    of Aluminium Extrusion in Delhi, So we can offer Our Aluminium Extrusion profiles at affordable
                    rates within a few days. Here are some quality of our aluminum extrusion
                </p>
                <a href="<?= urlOf('quote.php') ?>" class="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Request A
                    Quote</a>
            </div>
        </div>
    </div>
</div>
<!-- About End -->
<?php
require(pathOf('includes/footer-part1.php'));
require(pathOf('includes/scripts.php'));
?>

<?php
require(pathOf('includes/footer-part2.php'));
?>