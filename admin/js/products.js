function createProduct() {
    $('#btn-submit').attr('disabled', '');

    $('#btn-submit-text').hide();
    $('#btn-submit-text-saved').hide();
    $('#btn-submit-spinner').show();

    let formData = new FormData();
    formData.append('name', $('#product-name').val());
    formData.append('description', $('#product-description').val());
    formData.append('image', $('#product-image')[0].files[0]);

    $.ajax({
        method: 'POST',
        url: '../products/create.php',
        contentType: false,
        processData: false,
        data: formData,
        success: (response) => {
            if (response.status) {
                $('#btn-submit-text').hide();
                $('#btn-submit-text-saved').show();
                $('#btn-submit-spinner').hide();

                setTimeout(() => window.location.href = '../products', 1000);
            }
        }
    });

    return false;
}

function editProduct(id) {
    $('#btn-submit').attr('disabled', '');

    $('#btn-submit-text').hide();
    $('#btn-submit-text-saved').hide();
    $('#btn-submit-spinner').show();

    let formData = new FormData();
    formData.append('id', id);
    formData.append('name', $('#product-name').val());
    formData.append('description', $('#product-description').val());

    if ($('#product-image')[0].files.length > 0)
        formData.append('image', $('#product-image')[0].files[0]);

    $.ajax({
        method: 'POST',
        url: '../products/edit.php',
        contentType: false,
        processData: false,
        data: formData,
        success: (response) => {
            if (response.status) {
                $('#btn-submit-text').hide();
                $('#btn-submit-text-saved').show();
                $('#btn-submit-spinner').hide();

                setTimeout(() => window.location.href = '../products', 1000);
            }
        }
    });

    return false;
}

function showDeleteProductConfirmation(id) {
    $('#btn-yes').attr('data-id', id);
    $('#modal-delete').modal('show');
}

function deleteProduct() {
    let id = $('#btn-yes').attr('data-id');
    if (id == null)
        return;

    window.location.href = '../products/delete.php?id=' + id;
}

function productImageSelected() {

    let files = $('#product-image')[0].files;
    let html = '';

    for (let i = 0; i < files.length; i++) {
        let image = URL.createObjectURL(files[i]);
        html += `<img src="${image}" class="img-product" />`;
    }

    $('.custom-file-label').text(`${files.length} files selected.`);
    $('#img-preview-list').html(html);
}

function clearProductImage(defaultImage = '') {
    $('#product-image').val('');
    $('.custom-file-label').text(`Select images...`);
    $('#img-preview-list').html(`<img src="${defaultImage}" class="img-preview" />`);
}