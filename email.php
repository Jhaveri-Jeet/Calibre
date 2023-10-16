<?php
require './includes/init.php';
$title = "Email";
require pathOf('includes/header.php');
require pathOf('includes/home-nav.php');
?>
<!-- Contact Start -->
<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
            <h1 class="mb-0">Feel Free to Reach Us</h1>
        </div>
        <div class="row">
            <div class="col wow slideInUp" data-wow-delay="0.3s">
                <form method="post" class="mailform" action="./email.php">
                    <div class="row g-3">
                        <div class="col-md-6">
                            <input type="text" id="PersonName" name="PersonName" class="form-control border-0 bg-light px-4" placeholder="Your Name" style="height: 55px;" required>
                        </div>
                        <div class="col-md-6">
                            <input type="email" id="PersonEmail" name="PersonEmail" class="form-control border-0 bg-light px-4" placeholder="Your Email" style="height: 55px;" required>
                        </div>
                        <div class="col-12">
                            <input type="text" id="Subject" name="Subject" class="form-control border-0 bg-light px-4" placeholder="Subject" style="height: 55px;" required>
                        </div>
                        <div class="col-12">
                            <textarea id="message" name="Message" class="form-control border-0 bg-light px-4 py-3" rows="4" placeholder="Message" required></textarea>
                        </div>
                        <div class="col-12">
                            <button id="btn-submit" type="submit" name="submit" class="btn btn-danger w-100 py-3">
                                <span id="btn-submit-text">Send Mail</span>
                                <span id="btn-submit-text-saved" style="display: none">Inquiry Sent!</span>
                                <div id="btn-submit-spinner" class="spinner-border spinner-border-sm" role="status" style="display: none">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- Contact End -->

<?php
require(pathOf('includes/footer-part1.php'));
require(pathOf('includes/scripts.php'));
?>
<?php
require(pathOf('includes/footer-part2.php'));
?>

<?php
if (isset($_POST['submit'])) {
    $name = $_REQUEST['PersonName'];
    $email = $_REQUEST['PersonEmail'];
    $subject = $_REQUEST['Subject'];
    $message = $_REQUEST['Message'];
    $to = 'jitubhai53725372@gmail.com';
    $headers = "From:" . $email . " \r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html\r\n";
    $send_email = mail($to, $subject, $message, $headers);

    echo ($send_email) ? 'success' : 'error';
} ?>

<script>
    $(document).ready(function() {
        $('.mailform').on('submit', function() {
            var form = $(this);
            $.ajax({
                url: form.attr('action'),
                method: form.attr('method'),
                data: form.serialize(),
                success: function(result) {
                    if (result == 'success') {
                        console.log('Sent Successfully');
                    } else {
                        console.log('Not sent Successfully');
                    }
                }
            });

            // Prevents default submission of the form after clicking on the submit button. 
            return false;
        });
    });
</script>