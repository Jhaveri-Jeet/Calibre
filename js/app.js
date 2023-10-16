$(initApp);

function initApp() {
    $('#product-details-modal').on('show.bs.modal', productDetailsModalOpening);
    $('#product-details-modal').on('shown.bs.modal', productDetailsModalOpened);
    $('#product-details-modal').on('hidden.bs.modal', productDetailsModalClosed);
}

function knowMoreClicked(productId) {
    $('#selected-product-id').val(productId);
}

function productDetailsModalOpening() {
    $('#product-details').hide();
    $('#product-details-loading').show();
}

async function productDetailsModalOpened() {
    const productId = $('#selected-product-id').val();
    const product = await $.getJSON(`./api/products/details.php?id=${productId}`);
    
    $('#product-title').text(product.name);
    $('#product-description').text(product.description);
    $('#product-tags').html("");
    for(let i = 0; i < product.tags.length; i++) {
        let tag = `<span class="badge bg-danger" style="margin:5px">${product.tags[i].TagName}</span>`;
        $('#product-tags').append(tag);
    }
    $('#product-details').show();
    $('#product-details-loading').hide();
}

function productDetailsModalClosed() {
    $('#product-details').hide();
    $('#product-details-loading').show();
}

function createInquiry() {
    $('#btn-submit').attr('disabled', '');

    $('#btn-submit-text').hide();
    $('#btn-submit-text-saved').hide();
    $('#btn-submit-spinner').show();

    let formData = new FormData();

    formData.append('PersonName', $('#PersonName').val());
    formData.append('PersonEmail', $('#PersonEmail').val());
    formData.append('Subjects', $('#Subjects').val());
    formData.append('message', $('#message').val());
    $.ajax({
        method: 'POST',
        url: './contact.php',
        contentType: false,
        processData: false,
        data: formData,
        success: (response) => {
            if (response.status) {
                $('#btn-submit-text').hide();
                $('#btn-submit-text-saved').show();
                $('#btn-submit-spinner').hide();

                setTimeout(() => window.location.href = './contact.php', 1000);
            }
        }
    });

    return false;
}
function createNewsLetter() {
    $('#btn-submit').attr('disabled', '');

    $('#btn-submit-text').hide();
    $('#btn-submit-text-saved').hide();
    $('#btn-submit-spinner').show();

    let formData = new FormData();

    formData.append('Mobile', $('#Mobile').val());

    $.ajax({
        method: 'POST',
        url: './details.php',
        contentType: false,
        processData: false,
        data: formData,
        success: (response) => {
            if (response.status) {
                $('#btn-submit-text').hide();
                $('#btn-submit-text-saved').show();
                $('#btn-submit-spinner').hide();

                setTimeout(() => window.location.href = './details.php', 1000);
            }
        }
    });

    return false;
}

function openUrl(url) {
    window.location.href = url;
}