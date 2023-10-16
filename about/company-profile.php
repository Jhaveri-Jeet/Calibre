<?php
require '../includes/init.php';
$title = "Company Profile";
$headerName = 'Company Profile';
$headerTitle = 'Company Profile Main Page';
require pathOf('includes/header.php');
require pathOf('includes/red-header.php');
?>
<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class="row g-5">
            <div class="col-lg-5" style="min-height: 500px;">
                <div class="card-bg align-items-left justify-content-left p-2" onclick="showCompanyProfile()"
                    style="height: 40px;width: 300px;border-radius:10px; margin-top: 10px" id="companyprofiletab">
                    <div class="row">
                        <div class="col">
                            <a href="#">
                                <div class="section-title p-1 ">
                                    <h6 class="mb-0" id="companyprofiletitle">Company Profile</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card-bg align-items-left justify-content-left p-2"
                    style="height: 40px;width: 300px;border-radius:10px; margin-top: 10px" id="visiontab">
                    <div class="row">
                        <div class="col" onclick="showVision()">
                            <a href="#">
                                <div class="section-title p-1">
                                    <h6 class="mb-0" id="visiontitle">Our Vision And Objectives</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card-bg align-items-left justify-content-left p-2"
                    style="height: 40px;width: 300px;border-radius:10px; margin-top: 12px" id="infrastructuretab">
                    <div class="row">
                        <div class="col" onclick="showInfrastructure()">
                            <a href="#">
                                <div class="section-title p-1 ">
                                    <h6 class="mb-0" id="infrastructuretitle">Our Infrastructure</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card-bg-brochure align-items-left justify-content-left p-4"
                    style="height: 200px;width: 300px;border-radius:10px; margin-top: 115px">
                    <div class="row">
                        <div class="col">
                            <h4>BROCHURE</h4>
                            <p>Calibre Aluminium Extrusion is an organization engaged in the manufacturing of Aluminium
                                extrusions in India.</p>
                            <a href="#" class="btn btn-primary">Download Brochure</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-7" id="companyprofile">
                <div class="section-title position-relative pb-3 mb-5">
                    <h1 class="mb-0">Company Profile</h1>
                    <img src="<?= urlOf('assets/images/Trends-and-Properties-of-Boron-and-Aluminium.jpg') ?>"
                        class="mt-4 mb-0" style="height: 150px; width:100%" />
                </div>
                <p class="mb-4" style="color:black !important"><strong> Calibre Aluminium Extrusion</strong> is a
                    manufacturer of Aluminium Extrusion profiles in Jamnagar, Gujarat. We are Leading Aluminium
                    Extrusion supplier in Delhi as well as many other cities. We are an Aluminium extrusion manufacturer
                    with a wide variety of applications.</p>

                <p style="color:black !important">We are well equipped with the Best in class plant machinery which
                    allows us to reduce the expenses of the production and because of that we are able to supply
                    aluminium extrusion at best rate in India. To ensure the quality of our products we use high-quality
                    raw materials and qualified experienced and trained workforce.
                </p>

                <p style="color:black !important"><strong>Calibre Aluminium Extrusion</strong> has been formed to meet
                    the challenges of
                    this highly competitive and esteemed Indian markets and is well known as an Aluminium extrusion
                    supplier in Delhi as well as Many other States of India. We have a wide range of Aluminium Section
                    which is used in applications such as Architectural, Hardware, Textiles, Transport, Luggage, Modular
                    furniture, Air conditioning, Electronics and solar.
                </p>

                <p style="color:black !important"><strong> Calibre Aluminium Extrusion</strong> is committed to becoming
                    the most trusted
                    and preferred Aluminium extrusion manufacturer by ensuring total customer satisfaction through
                    competitive pricing, custom-engineered solutions for all technical challenges, engineering
                    excellence, quality and on-time delivery.
                </p>
            </div>
            <div class="col-lg-7" id="vision">
                <div class="section-title position-relative pb-3 mb-5">
                    <h1 class="mb-0">OUR VISION AND OBJECTIVES</h1>
                    <img src="<?= urlOf('assets/images/Trends-and-Properties-of-Boron-and-Aluminium.jpg') ?>"
                        class="mt-4 mb-0" style="height: 150px; width:100%" />
                </div>
                <p class="mb-4" style="color:black !important"><strong>Calibre
                        Aluminium Extrusion's</strong> goal is to completely and competitively cater to the needs of our
                    customers.
                    We believe in the importance of being well informed of the markets we wish to serve as a foundation
                    for the skills and capabilities required to better assist our customers.
                </p>
                <p style="color:black !important"> We aim to be the most innovative, value-adding business in our
                    industry, by continuously enhancing our portfolio of products and improving the quality of the
                    service we provide to our customers. </p>

                <p style="color:black !important"> Our core intent is to create innovative solutions and sustainable
                    models that create value for our customers and provide high-quality Aluminium extrusion products at
                    the best possible price point.
                </p>
            </div>
            <div class="col-lg-7" id="infrastructure">
                <div class="section-title position-relative pb-3 mb-5">
                    <h1 class="mb-0">OUR INFRASTRUCTURE</h1>
                    <img src="<?= urlOf('assets/images/Trends-and-Properties-of-Boron-and-Aluminium.jpg') ?>"
                        class="mt-4 mb-0" style="height: 150px; width:100%" />
                </div>
                <p class="mb-4" style="color:black !important"><strong>Calibre Aluminium Extrusion</strong> realizes
                    that every project is different. To create custom products that better meet your requirements, we’ve
                    invested in state-of-the-art extrusion press, billet heating and handling equipment along with
                    enhancing our engineering capabilities. We can produce aluminium extrusion sections with complex
                    multi-void hollow shapes, tight tolerances extruded to your specifications.
                </p>
                <h6>CAPACITY</h6>
                <p style="color:black !important"> Calibre Aluminium Extrusion has an annual capacity of 3500 metric
                    tons under one roof with a hydraulic extrusion press of 750 metric tons which is controlled by
                    Microprocessor-based technology and programmable logic control (PLC) system.
                    We have a completely integrated plant with a billet casting facility and our in-house foundry
                    furnace.
                </p>

                <p style="color:black !important"> We have a fully integrated plant with a Billet casting facility and
                    our in-house foundry furnace.</p>
                <h6>EQUIPMENT</h6>
                <ul style="color:black !important">
                    <li>
                        A 750 metric tons two column hydraulically
                        operated, microprocessor controlled extrusion press
                        that has the ability to extrude 4-inch diameter billets.
                    </li>
                    <li>
                        A high-energy efficient billet heater that ensures
                        uniform temperature during extrusion.
                    </li>
                    <li>
                        A completely automatic Extrusion section pullar and handling system that ensures the extruded
                        profiles are straight.
                    </li>
                    <li>
                        Superior quality aluminium extrusion handling
                        workforce that keeps the extrusion profile damage free.
                    </li>
                    <li>An imported microprocessor controlled artificial aging furnace that ensures uniform temperature
                        spread and flow of air to the extruded profiles during heat treatment process.
                    </li>
                    <li>An in-house alloying and melting furnaces for the casting of billets.
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<?php
require pathOf('includes/footer-part1.php');
require pathOf('includes/scripts.php');
?>
<?php
require pathOf('includes/footer-part2.php');
?>

<script>
$("#companyprofile").show();
$("#vision").hide();
$("#infrastructure").hide();
$("#companyprofiletab, #companyprofiletitle").addClass('changeBackground');
$("#visiontab, #visiontitle").removeClass('changeBackground');
$("#infrastructuretab, #infrastructuretitle").removeClass('changeBackground');

function showCompanyProfile() {
    $("#companyprofile").show();
    $("#vision").hide();
    $("#infrastructure").hide();
    $("#companyprofiletab, #companyprofiletitle").addClass('changeBackground');
    $("#visiontab, #visiontitle").removeClass('changeBackground');
    $("#infrastructuretab, #infrastructuretitle").removeClass('changeBackground');
}

function showVision() {
    $("#companyprofile").hide();
    $("#vision").show();
    $("#infrastructure").hide();
    $("#companyprofiletab, #companyprofiletitle").removeClass('changeBackground');
    $("#visiontab, #visiontitle").addClass('changeBackground');
    $("#infrastructuretab, #infrastructuretitle").removeClass('changeBackground');

}

function showInfrastructure() {
    $("#companyprofile").hide();
    $("#vision").hide();
    $("#infrastructure").show();
    $("#companyprofiletab, #companyprofiletitle").removeClass('changeBackground');
    $("#visiontab, #visiontitle").removeClass('changeBackground');
    $("#infrastructuretab, #infrastructuretitle").addClass('changeBackground');
}
</script>