<?php
require './includes/init.php';
$title = "Home";
require pathOf('includes/header.php');
require pathOf('includes/home-nav.php');
$products = select("SELECT * FROM `Products`");
$testimonials = select("SELECT * FROM `Testimonial`");
$latestBlogPosts = select("SELECT * FROM `BlogPosts` ORDER BY `DateTime` DESC LIMIT 3");
?>
<!-- Facts Start -->
<div class="container-fluid facts py-5 pt-lg-0">
    <div class="container py-5 pt-lg-0">
        <div class="row gx-0">
            <div class="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                <div class="bg-primary shadow d-flex align-items-center justify-content-center p-4"
                    style="height: 180px;width:375px;border-radius:15px !important">
                    <div class="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                        style="width: 60px; height: 60px;border-radius:7px !important">
                        <img src="./assets/images/opportunity.png"
                            style="width:60px;text-align:center;justify-content:center;padding:10px">
                        <!-- <i style="width:50px;text-align:center;justify-content:center"
                            class="fa-regular fa-laptop-mobile"></i> -->
                    </div>
                    <div class="ps-4">
                        <h5 class="text-white mb-0">Open For Opportunities!</h5>
                        <small class="text-white">We continuously look to expand our service scope by
                            partnering with diverse companies and associating with vendors and partners that
                            enhance our competence.</small>
                        <!-- <p class="text-white mb-0">We continuously look to expand our service scope by
                                        partnering with diverse companies and associating with vendors and partners that
                                        enhance our competence.</p> -->
                    </div>
                </div>
            </div>
            <div class="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                <div class="bg-light shadow d-flex align-items-center justify-content-center p-4"
                    style="height: 180px;width:375px;border-radius:15px !important">
                    <div class="bg-primary d-flex align-items-center justify-content-center rounded mb-2"
                        style="width: 60px; height: 60px;border-radius:7px !important">
                        <img src="./assets/images/badge.png"
                            style="width:60px;text-align:center;justify-content:center;padding:15px">
                        <!-- <i style="width:50px;text-align:center;justify-content:center"
                            class="fa fa-check text-white"></i> -->
                    </div>
                    <div class="ps-4">
                        <h5 class="text-primary mb-0">Quality Control</h5>
                        <small class="text-muted">We continuously monitor our production to the strict quality norms and
                            recognize the importance of delivering high-value products to our customers.</small>
                        <!-- <h6 class="mb-0">We continuously monitor our production to the strict quality norms and
                            recognize the importance of delivering high-value products to our customers.</h6> -->
                    </div>
                </div>
            </div>
            <div class="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                <div class="bg-primary shadow d-flex align-items-center justify-content-center p-4"
                    style="height: 180px;width:375px;border-radius:15px !important">
                    <div class="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                        style="width: 60px; height: 60px;border-radius:7px !important">
                        <img src="./assets/images/technology.png"
                            style="width:60px;text-align:center;justify-content:center;padding:10px">
                        <!-- <i style="width:50px;text-align:center;justify-content:center"
                            class="fa fa-award text-primary"></i> -->
                    </div>
                    <div class="ps-4">
                        <h5 background-color="#81282a" class="text-white mb-0" style="color:#81282a">Smart Technology
                        </h5>
                        <small class="text-white">We hold the latest manufacturing machinery that enables us to
                            develop reliable and sustainable profiles.</small>
                        <!-- <h6 class="text-white mb-0">We hold the latest manufacturing machinery that enables us to
                            develop reliable and sustainable profiles.</h6> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Facts Start -->
<div class="container-fluid py-5 wow fadeInUp w-75 mx-auto" data-wow-delay="0.1s">
    <div class="container py-5 mb-5">
        <div class="bg-white">
            <div class="owl-carousel vendor-carousel">
                <img src="assets/images/S1.png" alt="">
                <img src="assets/images/S2.png" alt="">
                <img src="assets/images/S3.png" alt="">
                <img src="assets/images/S4.png" alt="">
                <img src="assets/images/S5.png" alt="">
                <img src="assets/images/S6.png" alt="">
                <img src="assets/images/S7.png" alt="">
                <img src="assets/images/S8.png" alt="">
            </div>
        </div>
    </div>
</div>
<!-- Vendor End -->
<!-- About Start -->
<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class="row g-5">
            <div class="col-lg-8">
                <div class="section-title position-relative pb-3 mb-5">
                    <h5 class="fw-bold text-primary text-uppercase">Welcome to</h5>
                    <h1 class="mb-0">Calibre Aluminium Extrusion</h1>
                </div>
                <p class="mb-4">We are a leading Aluminium Extrusion Manufacturer who manufactures a wide range of
                    geometrical shapes. These Aluminium Extrusions are made of high quality billets made from in-house
                    Furnace Facility.<br /><br />

                    We are a leading aluminium extrusion supplier in Delhi, India. We have a vast number of wholesalers
                    of Aluminium Extrusion in Delhi, So we can offer Our Aluminium Extrusion profiles at affordable
                    rates within a few days. Here are some quality of our aluminum extrusion
                </p>
                <div class="row g-0 mb-3">
                    <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                        <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Long-lasting durability</h5>
                        <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Excellent material quality</h5>
                    </div>
                    <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                        <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>High Strength-to-Weight Ratio</h5>
                        <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Robust and strong</h5>
                    </div>
                </div>
                <div class="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                    <div class="bg-primary d-flex align-items-center justify-content-center rounded"
                        style="width: 60px; height: 60px;">
                        <i class="fa fa-phone-alt text-white"></i>
                    </div>
                    <div class="ps-4">
                        <h5 class="mb-2">Call to ask any question</h5>
                        <h4 class="text-primary mb-0">+91 97268 98007</h4>
                    </div>
                </div>
                <a href="<?= urlOf('quote.php') ?>" class="btn btn-primary py-3 px-5 mt-3 wow zoomIn"
                    data-wow-delay="0.9s">Request A
                    Quote</a>
            </div>
            <div class="col-lg-4" style="min-height: 500px;">
                <div class="position-relative h-100">
                    <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s"
                        src="<?= urlOf('assets/images/about.jpg') ?>" style="object-fit: cover;">
                </div>
            </div>
        </div>
    </div>
</div>
<!-- About End -->
<!-- Features Start -->
<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
            <h5 class="fw-bold text-primary text-uppercase">Why Choose Us</h5>
            <h1 class="mb-0">We Are Here to Grow Your Business Exponentially</h1>
        </div>
        <div class="row g-5">
            <div class="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style="min-height: 350px;">
                <div class="position-relative h-100">
                    <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s"
                        src="<?= urlOf('assets/images/about.jpg') ?>" style="object-fit: cover;">
                </div>
            </div>
            <div class="col-lg-8">
                <div class="row mb-3 mt-3">
                    <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                        style="width: 60px; height: 60px;">
                        <i class="fa fa-cubes text-white" style=""></i>
                    </div>
                    <div class="col">
                        <h4 style="padding-top: 15px">On Time Delivery Supply</h4>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                        style="width: 60px; height: 60px;">
                        <i class="fa fa-award text-white"></i>
                    </div>
                    <div class="col">
                        <h4 style="padding-top: 15px">Voluminous stock to ensure speedy Supply</h4>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                        style="width: 60px; height: 60px;">
                        <i class="fa fa-users-cog text-white"></i>
                    </div>
                    <div class="col">
                        <h4 style="padding-top: 15px">Quick Order Processing</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                        style="width: 60px; height: 60px;">
                        <i class="fa fa-phone-alt text-white"></i>
                    </div>
                    <div class="col">
                        <h4 style="padding-top: 15px">Custom length as required by the customer<sub
                                style="font-size: 0.7rem !important;">* T&C Apply</sub></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Features Start -->
<!-- Products Start -->
<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class="row">
            <div class="col-sm-9">
                <div class="section-title text-center position-relative pb-3 mb-4 mx-auto" style="max-width: 600px;">
                    <h1 class="mb-0">Our Products</h1>
                </div>
                <div id="product-slider" class="owl-carousel product-carousel wow fadeInUp" data-wow-delay="0.1s">
                    <?php foreach ($products as $product): ?>
                        <div class="product-item bg-light my-4 px-5 py-5">
                            <a href="#" class="read-more-link" data-bs-toggle="modal"
                                data-bs-target="#product-details-modal" onclick="knowMoreClicked(<?= $product['Id'] ?>)">
                                <div class="row">
                                    <div class="col d-flex justify-content-center"
                                        style="min-height: 150px; max-height: 200px">
                                        <img class="rounded"
                                            src="<?= urlOf("assets/uploads/product-images/{$product['ImageName']}") ?>"
                                            style="object-fit: cover;">
                                    </div>
                                </div>
                                <div class="row pt-4">
                                    <div class="col text-center">
                                        <div class="ps-4">
                                            <h4 class="mb-1 hide-overflow-text">
                                                <?= $product['Name'] ?>
                                            </h4>
                                            Know more
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
            <div class="col-sm-3" style="padding-top:10rem">
                <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
                    <h1 class="mb-0">If You Have Any Query, Feel Free To Contact Us</h1>
                </div>
                <div class="col text-center">
                    <a href="<?= urlOf('contact.php') ?>" class="btn btn-primary py-2 px-4 ms-3">Contact Us</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Products End -->

<!-- Testimonial Start -->
<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-4 mx-auto" style="max-width: 600px;">
            <h5 class="fw-bold text-primary text-uppercase">Testimonial</h5>
            <h1 class="mb-0">What Our Clients Say About Our Digital Services</h1>
        </div>
        <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
            <?php foreach ($testimonials as $testimonial): ?>
                <div class="testimonial-item bg-light my-4">
                    <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        <img class="img-fluid rounded"
                            src="<?= urlOf("assets/uploads/testimonial-images/{$testimonial['ImageName']}") ?>"
                            style="width: 60px; height: 60px;">
                        <div class="ps-4">
                            <h4 class="text-primary mb-1">
                                <?= $testimonial['Name'] ?>
                            </h4>
                            <small class="text-uppercase">Profession</small>
                        </div>
                    </div>
                    <div class="pt-4 pb-5 px-5">
                        <?= $testimonial['Description'] ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>
<!-- Testimonial End -->

<!-- Blog Start -->
<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class="row">
            <div class="col-sm-12">
                <div class="section-title text-center position-relative pb-3 mb-5 mx-auto">
                    <h1 class="mb-0">Latest Blog Posts</h1>
                </div>
                <div class="row g-5">
                    <?php foreach ($latestBlogPosts as $blogPost): ?>
                        <div class="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
                            <div class="blog-item bg-light rounded overflow-hidden">
                                <div class="blog-img position-relative overflow-hidden text-center p-3">
                                    <img class="img-fluid"
                                        src="<?= urlOf("assets/uploads/blog-thumbnails/{$blogPost['ThumbnailFileName']}") ?>"
                                        alt="" style="height: 12rem" />
                                </div>
                                <div class="p-4">
                                    <div class="d-flex mb-3">
                                        <small><i class="far fa-calendar-alt text-primary me-2"></i>
                                            <?= (new DateTime($blogPost['DateTime']))->format('d M, Y') ?>
                                        </small>
                                    </div>
                                    <h4 class="mb-3">
                                        <?= $blogPost['Title'] ?>
                                    </h4>
                                    <a class="read-more-link text-uppercase"
                                        href="<?= urlOf('blog/details.php?id=' . $blogPost['Id']) ?>" target="_blank">Read
                                        More <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
                <div class="row mt-5">
                    <div class="col text-center">
                        <a href="<?= urlOf('blog') ?>" class="btn btn-primary py-2 px-4 ms-3">More Blog Posts</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
<!-- Blog End -->

<!-- Product details modal -->
<input type="hidden" id="selected-product-id" value="0" />
<div class="modal fade" id="product-details-modal" tabindex="-1" aria-labelledby="product-title" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content" id="product-details" style="display: none">
            <div class="modal-header">
                <h5 class="modal-title" id="product-title"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-dark" id="product-description">
                ...
            </div>
            <div>
                <div class="row">
                    <div class="col" id="product-tags"></div>
                </div>
            </div>
        </div>
        <div class="modal-content justify-content-center align-items-center" style="min-height: 20rem;"
            id="product-details-loading">
            <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</div>
<!-- Modal end -->
<input type="text" id="textToSpeech"
    value="Welcome to our Website Calibre Aluminium Extrusion, develop by Trio Infotect." style="display:none">
<script src="./js/jquery.min.js"></script>
<script>
    $(document).ready(function () {
        var text = $('#textToSpeech').val();
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[1];
        msg.rate = 9 / 10;
        msg.pitch = 0;
        msg.text = text;

        speechSynthesis.speak(msg);
    })
</script>
<?php
require pathOf('includes/footer-part1.php');
require pathOf('includes/scripts.php');
?>

<?php
require pathOf('includes/footer-part2.php');
?>