<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <div class="sidebar">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex justify-content-center">
            <a href="<?= urlOf('admin') ?>" class="text-center">
                <img src="<?= urlOf('assets/images/logo-with-bg.png') ?>?<?= time() ?>" alt="Logo" class="brand-image elevation-3" id="brand-logo">
                <span class="brand-text font-weight-light"> </span>
            </a>
        </div>
        <?php if (isset($_SESSION['LoggedInUserId'])) { ?>
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="<?= urlOf('assets/images/user.png') ?>?<?= time() ?>" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <a href="#" class="d-block">Admin</a>
                </div>
            </div>
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li class="nav-item menu-open">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fas fa-table"></i>
                            <p>
                                Manage
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="<?= urlOf('admin/blog') ?>" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Blog</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="<?= urlOf('admin/products') ?>" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Products</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="<?= urlOf('admin/tags') ?>" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Tags</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="<?= urlOf('admin/inquiries') ?>" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Inquiries</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="<?= urlOf('admin/testimonial') ?>" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Testimonials</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="<?= urlOf('admin/updatedprice') ?>" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>PriceUpdated</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item menu-open">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fas fa-table"></i>
                            <p>
                                Account & Settings
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="<?= urlOf('admin/change-password.php') ?>" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Change password</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="<?= urlOf('admin/logout.php') ?>" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Log out</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        <?php } ?>
    </div>
</aside>