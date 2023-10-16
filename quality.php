<?php
require './includes/init.php';
$title = "Quality";
$headerName = 'Quality';
$headerTitle = 'Quality Inspection Process';
require pathOf('includes/header.php');
require pathOf('includes/red-header.php');

?>
<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div class="container py-5">
    <div class="row g-5" style="background-color: #959595; color: white; border-radius: 20px;box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;">
      <div class="col-lg-8">
        <p class="mb-4">
          Calibre Aluminium is an organization involved in manufacturing,
          wholesaling and trading of the huge compilation of Aluminum Extrusion
          Sections, Aluminum Channels and much more. <br /><br />

          To achieve the excellent quality standard in the Aluminum extrusion
          sections, we had several important aspects of a thorough extrusion
          inspection process.
        </p>
      </div>
      <div class="col-lg-4" style="min-height: 300px">
        <div class="position-relative h-100">
          <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src="<?= urlOf('assets/images/about.jpg') ?>" style="object-fit: cover; padding-bottom: 20px" />
        </div>
      </div>
    </div>
    <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px">
      <br /><br />
      <h1 class="mb-0">STATE OF THE ART MANUFACTURING PLANT</h1>
    </div>
    <br /><br />
    <div class="row g-5" style="background-color: #959595; color: white; border-radius: 20px;box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;">
      <div class="col-lg-4" style="min-height: 300px">
        <div class="position-relative h-100">
          <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src="<?= urlOf('assets/images/about.jpg') ?>" style="object-fit: cover; padding-bottom: 20px" />
        </div>
      </div>
      <div class="col-lg-8">
        <!-- <p > -->
        <ul class="mb-4">
          <li>Microprocessor based PLC controlled</li>
          <li>Extrusion press of 700 tons</li>
          <li>In-house melting furnace</li>
          <li>PLC controlled puller</li>
          <li>Plant Capacity – 1000 MT per annum</li>
          <li>Strategically Located in Gujarat State</li>
          <li>Qualified engineers</li>
          <li>Well trained production staff</li>
          <li>In-house design & development facilities</li>
        </ul>
        <!-- </p> -->
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