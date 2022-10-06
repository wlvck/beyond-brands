<template>
  <div class="iq-top-navbar">
    <div class="container">
      <div class="iq-navbar-custom">
        <div class="d-flex align-items-center justify-content-between">
          <div class="iq-navbar-logo d-flex align-items-center justify-content-between">
            <i class="ri-menu-line wrapper-menu"></i>
            <router-link to="/" class="header-logo">
              <h4>Beyond Brands</h4>
            </router-link>
          </div>
          <nav class="navbar navbar-expand-lg navbar-light p-0">
            <ModeSwitch/>
            <b-navbar-toggle target="nav-collapse" class="mr-2 text-primary">
              <i class="ri-menu-3-line"></i>
            </b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <ul class="navbar-nav ml-auto navbar-list align-items-center">

                <li class="nav-item nav-icon search-content" v-nav-toggle>
                  <a href="#" class="search-toggle rounded dropdown-toggle" id="dropdownSearch" data-toggle="dropdown"
                     aria-haspopup="true" aria-expanded="false">
                    <i class="ri-search-line"></i>
                  </a>
                  <div class="iq-search-bar iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownSearch">
                    <form action="#" class="searchbox p-2">
                      <div class="form-group mb-0 position-relative">
                        <input type="text" class="text search-input" placeholder="type here to search...">
                        <a href="#" class="search-link"><i class="ri-search-line"></i></a>
                      </div>
                    </form>
                  </div>
                </li>
                <li class="nav-item nav-icon dropdown" v-nav-toggle>
                  <a href="#" class="search-toggle dropdown-toggle" id="dropdownMenuButton2" data-toggle="dropdown"
                     aria-haspopup="true" aria-expanded="false">
                    <i class="las la-envelope"></i>
                    <span class="badge badge-primary count-mail rounded-circle">2</span>
                    <span class="bg-primary"></span>
                  </a>
                  <div class="iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton2">
                    <div class="card shadow-none m-0">
                      <div class="card-body p-0 ">
                        <div class="cust-title p-3">
                          <h5 class="mb-0">All Messages</h5>
                        </div>
                        <div class="p-2">
                          <a href="#" class="iq-sub-card">
                            <div class="media align-items-center cust-card p-2">
                              <div class="">
                                <img class="avatar-40 rounded-small" src="@/assets/images/user/user-1.jpg" alt="01">
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0">Barry Emma Watson</h6>
                                <small class="mb-0">We Want to see you On..</small>
                              </div>
                            </div>
                          </a>
                          <a href="#" class="iq-sub-card">
                            <div class="media align-items-center cust-card p-2">
                              <div class="">
                                <img class="avatar-40 rounded-small" src="@/assets/images/user/user-2.jpg" alt="02">
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0">Lorem Ipsum Watson</h6>
                                <small class="mb-0">Can we have a Call?</small>
                              </div>
                            </div>
                          </a>
                          <a href="#" class="iq-sub-card">
                            <div class="media align-items-center cust-card p-2">
                              <div class="">
                                <img class="avatar-40 rounded-small" src="@/assets/images/user/user-3.jpg" alt="03">
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0">Why do we use it?</h6>
                                <small class="mb-0">Thank You but now we Don't...</small>
                              </div>
                            </div>
                          </a>
                        </div>
                        <a class="right-ic btn-block position-relative p-3 border-top text-center" href="#"
                           role="button">
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item nav-icon dropdown" v-nav-toggle>
                  <a href="#" class="search-toggle dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown"
                     aria-haspopup="true" aria-expanded="false">
                    <i class="las la-bell"></i>
                    <span class="badge badge-primary count-mail rounded-circle">2</span>
                    <span class="bg-primary"></span>
                  </a>
                  <div class="iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div class="card shadow-none m-0">
                      <div class="card-body p-0 ">
                        <div class="cust-title p-3">
                          <h5 class="mb-0">Notifications</h5>
                        </div>
                        <div class="p-2">
                          <a href="#" class="iq-sub-card">
                            <div class="media align-items-center cust-card p-2">
                              <div class="">
                                <img class="avatar-40 rounded-small" src="@/assets/images/user/user-1.jpg" alt="01">
                              </div>
                              <div class="media-body ml-3">
                                <div class="d-flex align-items-center justify-content-between">
                                  <h6 class="mb-0">Anne Effit</h6>
                                  <small class="mb-0">02 Min Ago</small>
                                </div>
                                <small class="mb-0">Manager</small>
                              </div>
                            </div>
                          </a>
                          <a href="#" class="iq-sub-card">
                            <div class="media align-items-center cust-card p-2">
                              <div class="">
                                <img class="avatar-40 rounded-small" src="@/assets/images/user/user-2.jpg" alt="02">
                              </div>
                              <div class="media-body ml-3">
                                <div class="d-flex align-items-center justify-content-between">
                                  <h6 class="mb-0">Eric Shun</h6>
                                  <small class="mb-0">05 Min Ago</small>
                                </div>
                                <small class="mb-0">Manager</small>
                              </div>
                            </div>
                          </a>
                          <a href="#" class="iq-sub-card">
                            <div class="media align-items-center cust-card p-2">
                              <div class="">
                                <img class="avatar-40 rounded-small" src="@/assets/images/user/user-3.jpg" alt="03">
                              </div>
                              <div class="media-body ml-3">
                                <div class="d-flex align-items-center justify-content-between">
                                  <h6 class="mb-0">Ken Tucky</h6>
                                  <small class="mb-0">10 Min Ago</small>
                                </div>
                                <small class="mb-0">Employee</small>
                              </div>
                            </div>
                          </a>
                        </div>
                        <a class="right-ic btn-block position-relative p-3 border-top text-center" href="#"
                           role="button">
                          See All Notification
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="caption-content" v-nav-toggle>
                  <a href="#" class="search-toggle dropdown-toggle d-flex align-items-center" id="dropdownMenuButton3"
                     data-toggle="dropdown"
                     aria-haspopup="true" aria-expanded="false">
                    <img src="@/assets/images/user/01.jpg" class="avatar-40 img-fluid rounded" alt="user">
                    <div class="caption ml-3">
                      <h6 class="mb-0 line-height">Rick O'shea<i class="las la-angle-down ml-3"></i></h6>
                    </div>
                  </a>
                  <div class="iq-sub-dropdown dropdown-menu user-dropdown" aria-labelledby="dropdownMenuButton3">
                    <div class="card m-0">
                      <div class="card-body p-0">
                        <div class="py-3">
                          <router-link :to="{name: 'app.user-profile'}" class="iq-sub-card">
                            <div class="media align-items-center">
                              <i class="ri-user-line mr-3"></i>
                              <h6>Account Settings</h6>
                            </div>
                          </router-link>
                          <router-link :to="{name: 'layout.calendar-connections'}" class="iq-sub-card">
                            <div class="media align-items-center">
                              <i class="ri-calendar-line mr-3"></i>
                              <h6>Calender Connections</h6>
                            </div>
                          </router-link>
                          <router-link :to="{name: 'layout.users'}" class="iq-sub-card">
                            <div class="media align-items-center">
                              <i class="ri-group-line mr-3"></i>
                              <h6>Users</h6>
                            </div>
                          </router-link>
                          <router-link :to="{name: 'app.privacypolicy'}" class="iq-sub-card">
                            <div class="media align-items-center">
                              <i class="ri-lock-line mr-3"></i>
                              <h6>Privacy & Security Settings</h6>
                            </div>
                          </router-link>
                          <a href="#" class="iq-sub-card" v-b-modal.exampleModalCenter>
                            <div class="media align-items-center">
                              <i class="ri-links-line mr-3"></i>
                              <h6>Share Your Link</h6>
                            </div>
                          </a>
                        </div>
                        <router-link class="right-ic p-3 border-top btn-block position-relative text-center"
                                     :to="{name: 'auth.login'}" role="button">
                          Logout
                        </router-link>
                      </div>
                    </div>
                  </div>
                </li>

              </ul>
            </b-collapse>
          </nav>
        </div>
      </div>
    </div>
    <b-modal hide-footer hide-header-close hide-header centered id="exampleModalCenter">

      <div class="popup text-left" id="popup">
        <h4 class="mb-3">Add Action</h4>
        <div class="content create-workform">
          <div class="form-group">
            <h6 class="form-label mb-3">Copy Your Link</h6>
            <div class="input-group">
              <input type="text" class="form-control" readonly value="calendly.com/rickoshea1234">
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2"><i class="las la-link"></i></span>
              </div>
            </div>
          </div>
          <div class="form-group">
            <h6 class="form-label mb-3">Email Your Link</h6>
            <div class="input-group">
              <input type="text" class="form-control" readonly value="calendly.com/rickoshea1234">
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon3"><i class="las la-envelope"></i></span>
              </div>
            </div>
          </div>
          <div class="form-group">
            <h6 class="form-label mb-3">Add to Your Website</h6>
            <div class="input-group">
              <input type="text" class="form-control" readonly value="calendly.com/rickoshea1234">
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon4"><i class="las la-code"></i></span>
              </div>
            </div>
          </div>
          <div class="col-lg-12 mt-3">
            <div class="d-flex flex-wrap align-items-ceter justify-content-center">
              <button type="submit" @click="$bvModal.hide('exampleModalCenter')" class="btn btn-primary mr-4">Cancel
              </button>
              <button type="submit" @click="$bvModal.hide('exampleModalCenter')" class="btn btn-outline-primary">Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import sideBarItem from "@/JsonData/header.json"
import {core} from '../../../../config/pluginInit'
import {mapGetters} from 'vuex'

export default {
  name: "HeaderStyle5",
  components: {},
  data() {
    return {

      sidebarItems: sideBarItem,
      sidebarGroupTitle: true,

    }
  },
  mounted() {
    core.SmoothScrollbar()
  },
  destroyed() {
    core.SmoothScrollbar()
  },
  computed: {
    ...mapGetters({
      appName: 'appName',
      logo: 'logo',
      name: 'name',
      image1: 'image1'
    })
  },

}
</script>