<?php
require './includes/init.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $PersonName = $_POST['PersonName'];
    $PersonEmail = $_POST['PersonEmail'];
    $Subjects = $_POST['Subjects'];
    $message = $_POST['message'];

    $query = "INSERT INTO `Contact`(`Name`, `Email`, `Subject`, `Message`) VALUES (?, ?, ?, ?)";
    $params = [$PersonName , $PersonEmail, $Subjects, $message];
    execute($query, $params);

    header('Content-Type: application/json');
    echo json_encode(["status" => true, "message" => "Inquiry sent successfully."]);

    exit();
}
$title = "Contact Us";
$headerName = 'Contact Us';
$headerTitle = 'Contact Us Main Page';
require pathOf('includes/header.php');
require pathOf('includes/red-header.php');
?>
<!-- Contact Start -->
<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
            <h1 class="mb-0">Contact Us</h1>
        </div>
        <div class="row g-5 mb-5">
            <div class="col-lg-4">
                <div class="d-flex align-items-center wow fadeIn" data-wow-delay="0.1s">
                    <div class="bg-primary d-flex align-items-center justify-content-center rounded"
                        style="width: 60px; height: 60px ;">
                        <i class="fa fa-phone-alt text-white"></i>
                    </div>
                    <div class="ps-4">
                        <h5 class="mb-2">Call to ask any question</h5>
                        <h6 class="text-primary mb-0">+91 97268 98007</h6>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="d-flex align-items-center wow fadeIn" data-wow-delay="0.4s">
                    <div class="bg-primary d-flex align-items-center justify-content-center rounded"
                        style="width: 60px; height: 60px;">
                        <i class="fa fa-envelope-open text-white"></i>
                    </div>
                    <div class="ps-4">
                        <h5 class="mb-2">Email to get free quote</h5>
                        <h6 class="text-primary mb-0">calibrealuminium@gmail.com</h6>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
                    <div class="bg-primary d-flex align-items-center justify-content-center rounded"
                        style="width: 60px; height: 60px;">
                        <i class="fa fa-map-marker-alt text-white"></i>
                    </div>
                    <div class="ps-4">
                        <h5 class="mb-2">Visit our office</h5>
                        <h6 class="text-primary mb-0">Plot no. 11, R.S. No. 224, Opp. Association office, Naghedi,
                            Jamnagar</h6>  
                    </div>
                </div>
            </div>
        </div>
        <div class="row g-5">
            <div class="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                <form onsubmit="return createInquiry();">
                    <div class="row g-3">
                        <div class="col-md-6">
                            <input type="text" id="PersonName" name="PersonName" class="form-control border-0 bg-light px-4" placeholder="Your Name"
                                style="height: 55px;">
                        </div>
                        <div class="col-md-6">
                            <input type="email" id="PersonEmail" name="PersonEmail" class="form-control border-0 bg-light px-4" placeholder="Your Email"
                                style="height: 55px;">
                        </div>
                        <div class="col-12">
                            <input type="text" id="Subjects" name="Subjects" class="form-control border-0 bg-light px-4" placeholder="Subject"
                                style="height: 55px;">
                        </div>
                        <div class="col-12">
                            <textarea id="message" name="message" class="form-control border-0 bg-light px-4 py-3" rows="4"
                                placeholder="Message"></textarea>
                        </div>
                        <div class="col-12">
                                <button id="btn-submit" type="submit" class="btn btn-danger w-100 py-3">
                                    <span id="btn-submit-text">Send Inquiry</span>
                                    <span id="btn-submit-text-saved" style="display: none">Inquiry Sent!</span>
                                    <div id="btn-submit-spinner" class="spinner-border spinner-border-sm" role="status"
                                        style="display: none">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </button>
                            </div>
                    </div>
                </form>
            </div>
            <div class="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d944090.7967119095!2d70.003505!3d22.434495!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa593993bf3e14544!2sCalibre%20Industries!5e0!3m2!1sen!2sin!4v1675433636850!5m2!1sen!2sin"
                    width="100%" height="350px" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</div>
<!-- Contact End -->
<?php 
require(pathOf('includes/footer-part1.php'));
require(pathOf('includes/scripts.php'));
?>
<script src="<?= urlOf('admin/js/contact.js') ?>"></script>
<?php
require(pathOf('includes/footer-part2.php'));
?>