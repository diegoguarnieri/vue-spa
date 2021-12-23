<template>
    <template v-if="loggedIn === null">
        <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
            <div class="container">
            </div>
        </div>
    </template>

    <template v-else-if="loggedIn === true">
        <div class="sidebar sidebar-dark sidebar-fixed bg-gray" id="sidebar">
            <div class="sidebar-brand d-lg-down-none">
                <!--<svg class="sidebar-brand-full" width="118" height="46" alt="CoreUI Logo">
                    <use xlink:href="assets/brand/coreui.svg#full"></use>
                </svg>

                <svg class="sidebar-brand-narrow" width="46" height="46" alt="CoreUI Logo">
                    <use xlink:href="assets/brand/coreui.svg#signet"></use>
                </svg>-->
                <img width="110" src="/images/logo.png">
            </div>

            <ul class="sidebar-nav pt-8" data-coreui="navigation">

                <!--<li class="nav-title">Theme</li>-->

                <li v-for="(menu, key) in menus" :key="key" class="nav-item">
                    <a class="nav-link text-white" href="#" @click="toPage(menu.path, true)">
                        <i v-bind:class="[menu.icon, 'mx-2']"></i>{{ menu.name }}
                    </a>
                </li>

                <!--<li class="nav-title">Components</li>
                <li class="nav-group">
                    <a class="nav-link nav-group-toggle" href="#">
                        <i class="bi-house mx-2"></i>Base
                    </a>

                    <ul class="nav-group-items">
                        <li class="nav-item"><a class="nav-link" href="#"><span class="nav-icon"></span> Accordion</a></li>
                        <li class="nav-item"><a class="nav-link" href="#"><span class="nav-icon"></span> Breadcrumb</a></li>
                        <li class="nav-item"><a class="nav-link" href="#"><span class="nav-icon"></span> Cards</a></li>
                        <li class="nav-item"><a class="nav-link" href="#"><span class="nav-icon"></span> Carousel</a></li>
                    </ul>
                </li>-->
            </ul>

            <!--<button class="sidebar-toggler" type="button" data-coreui-toggle="unfoldable"></button>-->
        </div>

        <div class="wrapper d-flex flex-column min-vh-100 bg-light">
            <header class="header header-sticky mb-4">
                <div class="container-fluid">

                    <button class="header-toggler px-md-0 me-md-3 d-md-none text-dark" type="button" @click="toggleSidebar()">
                        <i class="bi-list"></i>
                    </button>

                    <!--<a class="header-brand d-md-none" href="#">
                        <svg width="118" height="46" alt="CoreUI Logo">
                        <use xlink:href="assets/brand/coreui.svg#full"></use>
                        </svg>
                    </a>-->

                    <!--mobile-->
                    <!--<div class="d-md-none ms-auto">
                        <a class="header-brand" href="#">
                            <img width="100" src="/images/logo.png">
                        </a>
                    </div>-->

                    <!--desktop-->
                    <!--<div class="d-none d-md-block me-3">
                        <a class="header-brand" href="#">
                            <img width="110" src="/images/logo.png">
                        </a>
                    </div>-->

                    <!--<ul class="header-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="bi-speedometer2"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="bi-speedometer2"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="bi-speedometer2"></i></a>
                        </li>
                    </ul>-->

                    <ul class="header-nav ms-auto me-3">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                                <i class="bi-person-circle"></i>
                            </a>

                            <div class="dropdown-menu dropdown-menu-end">
                                <!--<div class="dropdown-header bg-light py-2">
                                    <div class="fw-semibold">Account</div>
                                </div>-->

                                <!--<a class="dropdown-item" href="#" @click="profile()">
                                    <i class="bi-person me-2"></i>Profile
                                </a>-->

                                <a class="dropdown-item" href="#" @click="password()">
                                    <i class="bi-key me-2"></i>Password
                                </a>

                                <a class="dropdown-item" href="#" @click="toPage('/settings', false)">
                                    <i class="bi-gear me-2"></i>Settings
                                </a>


                                <hr class="dropdown-divider">
                                
                                <a class="dropdown-item" href="#" @click="logout()">
                                    <i class="bi-box-arrow-right me-2"></i>Logout
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>

            </header>

            <div class="body flex-grow-1 px-3">
                <div class="container-lg">
                    <router-view @events="handleEvents" :key="reloadPage" />
                </div>
            </div>
            
            <!--<footer class="footer">
                <div>
                    <a href="https://">CoreUI </a><a href="https://">Bootstrap Admin Template</a> &copy; 2021 creativeLabs.
                </div>
                <div class="ms-auto">Powered by&nbsp;<a href="https://bootstrap/ui-components/">CoreUI UI Components</a></div>
            </footer>-->
        </div>
    </template>

    <template v-else>
        <login @success="loggedIn = true"></login>
    </template>

    <div id="alert-success" class="alert-overlay" style="display: none">
        <div class="alert alert-success alert-dismissible fade show mx-3 mx-xs-3 mx-sm-5 mx-md-10 mx-xxl-20" role="alert" style="bottom: 5%">
            <span id="alert-message-success"><!--message goes here--></span>
            <button type="button" class="btn-close" @click="hideAlert('alert-success')" aria-label="Close"></button>
        </div>
    </div>

    <div id="alert-error" class="alert-overlay" style="display: none">
        <div class="alert alert-danger alert-dismissible fade show mx-3 mx-xs-3 mx-sm-5 mx-md-10 mx-xxl-20" role="alert" style="bottom: 5%">
            <span id="alert-message-error"><!--message goes here--></span>
            <button type="button" class="btn-close" @click="hideAlert('alert-error')" aria-label="Close"></button>
        </div>
    </div>

    <div class="preloader" id="preloader" style="display: none;">
        <div class="d-flex justify-content-center h-100">
            <div class="spinner-border text-primary align-self-center" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
import { util } from '../mixins/util'
import Login from '../pages/Login'

export default {
    mixins: [util],
    components: { Login },
    data() {
        return {
            reloadPage: 0,
            currentPage: '',
            loggedIn: null,
            menus: [
                {
                    path: '/',
                    name: 'Dashboard',
                    icon: 'bi-speedometer2'
                },
                {
                    path: '/about',
                    name: 'About',
                    icon: 'bi-speedometer2'
                },
                {
                    path: '/page-1',
                    name: 'Page 2',
                    icon: 'bi-speedometer2'
                },
                {
                    path: '/page-2',
                    name: 'Page 2',
                    icon: 'bi-speedometer2'
                },
                {
                    path: '/users',
                    name: 'Users',
                    icon: 'bi-people'
                },
            ]
        }
    },
    beforeMount() {
        
    },
    mounted() {
        this.showPreLoader()

        this.$router.isReady().then(() => {
            this.currentPage = this.$route.path
        })

        this.getSessionKey();
    },
    methods: {
        hideSidebar: function() {
            this.coreui.Sidebar.getInstance(document.querySelector('#sidebar')).hide()
        },
        toggleSidebar: function() {
            this.coreui.Sidebar.getInstance(document.querySelector('#sidebar')).toggle()
        },
        toPage: function(pageName, toggle = false) {
            this.$router.push(pageName)

            if(screen.width < 960 && toggle) {
                this.toggleSidebar()
            }

            if(pageName == this.currentPage) {
                this.reloadPage++
            }

            this.currentPage = pageName
        },
        handleEvents: function(type, pageName) {
            this.toPage(pageName, false)
        },

        logout: function() {
            this.axios({
                method: 'get',
                url: this.endpoint + '/api/logout'
            })
            .then(response => {
                if(this.checkApiResponse(response)) {
                    this.loggedIn = false
                } else {
                    console.log(response.data)
                    this.loggedIn = true
                }
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                
            })
        },
        getSessionKey: function() {
            this.axios({
                method: 'get',
                url: this.endpoint + '/api/session-key'
            })
            .then(response => {
                if(this.checkApiResponse(response)) {
                    this.loggedIn = true
                } else {
                    this.loggedIn = false
                }
            })
            .catch(error => {
                console.log(error)
                this.loggedIn = false
            })
            .finally(() => {
                this.hidePreLoader()
            })
        }
    }
}
</script>
