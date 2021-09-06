<template>

    <div class="sidebar sidebar-light sidebar-fixed sidebar-self-hiding-md" id="sidebar">

        <div class="flex-shrink-0 p-3">
            <a href="/" class="d-flex align-items-center pb-3 mb-3 text-white text-decoration-none border-bottom">
                <svg class="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
                <span class="fs-5 fw-semibold">Collapsible</span>
            </a>

            <ul class="list-unstyled ps-0">
                <li class="mb-1">
                    <button class="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">Home</button>

                    <div class="collapse show" id="home-collapse" style="">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" @click="toPage('/')" class="link-light rounded">Overview</a></li>
                            <li><a href="#" @click="toPage('/about')" class="link-light rounded">Updates</a></li>
                            <li><a href="#" @click="toPage('/post')" class="link-light rounded">Reports</a></li>
                            <li><a href="#" @click="toPage('/post/abc')" class="link-light rounded">Reports</a></li>
                            <li><a href="#" @click="toPage('/post/def')" class="link-light rounded">Reports</a></li>
                        </ul>
                    </div>
                </li>

                <li class="mb-1">
                    <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                    Dashboard
                    </button>
                    <div class="collapse" id="dashboard-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" class="link-dark rounded">Overview</a></li>
                    <li><a href="#" class="link-dark rounded">Weekly</a></li>
                    <li><a href="#" class="link-dark rounded">Monthly</a></li>
                    <li><a href="#" class="link-dark rounded">Annually</a></li>
                    </ul>
                    </div>
                </li>

                <li class="mb-1">
                    <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                    Orders
                    </button>
                    <div class="collapse" id="orders-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" class="link-dark rounded">New</a></li>
                    <li><a href="#" class="link-dark rounded">Processed</a></li>
                    <li><a href="#" class="link-dark rounded">Shipped</a></li>
                    <li><a href="#" class="link-dark rounded">Returned</a></li>
                    </ul>
                    </div>
                </li>

                <li class="border-top my-3"></li>
                <li class="mb-1">
                    <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                    Account
                    </button>
                    <div class="collapse" id="account-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" class="link-dark rounded">New...</a></li>
                    <li><a href="#" class="link-dark rounded">Profile</a></li>
                    <li><a href="#" class="link-dark rounded">Settings</a></li>
                    <li><a href="#" class="link-dark rounded">Sign out</a></li>
                    </ul>
                    </div>
                </li>
            </ul>
        </div>

        <!--<div class="d-flex flex-column flex-shrink-0 p-3 text-white">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4">Sidebar</span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
        <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
        Home
        </a>
        </li>
        <li>
        <a href="#" class="nav-link text-white">
        <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
        Dashboard
        </a>
        </li>
        <li>
        <a href="#" class="nav-link text-white">
        <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
        Orders
        </a>
        </li>
        <li>
        <a href="#" class="nav-link text-white">
        <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
        Products
        </a>
        </li>
        <li>
        <a href="#" class="nav-link text-white">
        <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
        Customers
        </a>
        </li>
        </ul>
        <hr>
        <div class="dropdown">
        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>mdo</strong>
        </a>
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1" style="">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
        </ul>
        </div>
    </div>-->


        <!--<button class="sidebar-toggler" type="button" data-coreui-toggle="unfoldable"></button>-->
    </div>

    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
        <header class="header header-sticky mb-4">
            <div class="container-fluid">
                <button class="header-toggler px-md-0 me-md-3" type="button" @click="toggleSidebar()">
                    <i class="bi-list"></i>
                </button>

                <!--<a class="header-brand d-md-none" href="#">
                    <svg width="118" height="46" alt="CoreUI Logo">
                    <use xlink:href="assets/brand/coreui.svg#full"></use>
                    </svg>
                </a>-->

                <ul class="header-nav d-none d-md-flex">
                    <li class="nav-item"><a class="nav-link" href="#">Dashboard</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Users</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Settings</a></li>
                </ul>

                <ul class="header-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="bi-speedometer2"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="bi-speedometer2"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="bi-speedometer2"></i></a>
                    </li>
                </ul>

                <ul class="header-nav ms-3">
                    <li class="nav-item dropdown">
                        <a class="nav-link py-0" data-coreui-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                            <!--<div class="avatar avatar-md"><img class="avatar-img" src="assets/img/avatars/8.jpg"></div>-->
                            <i class="bi-speedometer2"></i>
                        </a>

                        <div class="dropdown-menu dropdown-menu-end pt-0">
                            <div class="dropdown-header bg-light py-2">
                                <div class="fw-semibold">Account</div>
                            </div>
                            
                            <a class="dropdown-item" href="#">
                                <i class="bi-speedometer2"></i>Updates<span class="badge badge-sm bg-info ms-2">42</span>
                            </a>

                            <a class="dropdown-item" href="#">
                                <i class="bi-speedometer2"></i>Messages<span class="badge badge-sm bg-success ms-2">42</span>
                            </a>

                            <div class="dropdown-header bg-light py-2">
                                <div class="fw-semibold">Settings</div>
                            </div>
                            
                            <a class="dropdown-item" href="#">
                                <i class="bi-speedometer2"></i>Profile
                            </a>
                            
                            <a class="dropdown-item" href="#">
                                <i class="bi-speedometer2"></i>Settings
                            </a>
                            
                            <a class="dropdown-item" href="#">
                                <i class="bi-speedometer2"></i>Logout
                            </a>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="header-divider"></div>
            <div class="container-fluid">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb my-0 ms-2">
                        <li class="breadcrumb-item">
                        <!-- if breadcrumb is single--><span>Home</span>
                        </li>
                        <li class="breadcrumb-item active"><span>Dashboard</span></li>
                    </ol>
                </nav>
            </div>
        </header>

        <div class="body flex-grow-1 px-3">
            <div class="container-lg">
                <router-view @events="handleEvents" />

                <!--<div class="card mb-4">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <div>
                                <h4 class="card-title mb-0">Traffic</h4>
                                <div class="small text-medium-emphasis">January - July 2021</div>
                            </div>

                            <div class="btn-toolbar d-none d-md-block" role="toolbar" aria-label="Toolbar with buttons">
                                <div class="btn-group btn-group-toggle mx-3" data-coreui-toggle="buttons">
                                <input class="btn-check" id="option1" type="radio" name="options" autocomplete="off">
                                <label class="btn btn-outline-secondary"> Day</label>
                                <input class="btn-check" id="option2" type="radio" name="options" autocomplete="off" checked="">
                                <label class="btn btn-outline-secondary active"> Month</label>
                                <input class="btn-check" id="option3" type="radio" name="options" autocomplete="off">
                                <label class="btn btn-outline-secondary"> Year</label>
                                </div>
                                <button class="btn btn-primary" type="button">
                                <svg class="icon">
                                <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-cloud-download"></use>
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>-->
            </div>
        </div>
        
        <footer class="footer">
            <div>
                <a href="https://">CoreUI </a><a href="https://">Bootstrap Admin Template</a> &copy; 2021 creativeLabs.
            </div>
            <div class="ms-auto">Powered by&nbsp;<a href="https://bootstrap/ui-components/">CoreUI UI Components</a></div>
        </footer>
    </div>
</template>

<script>
export default {
    mounted() {
        //console.log(this.axios)
        //console.log(this.coreui)
    },
    methods: {
        toggleSidebar: function() {
            this.coreui.Sidebar.getInstance(document.querySelector('#sidebar')).toggle()
        },
        toPage: function(pageName) {
            this.$router.push(pageName)
        },
        handleEvents: function(type, pageName) {
            console.log(type, pageName)
            this.toPage(pageName)
        }
    }
}
</script>
