<template>
  <div>
    <div class="content-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 mb-3">
            <div class="d-flex align-items-center justify-content-between">
              <div class="navbar-breadcrumb">
                <h4 class="mb-1">Create & manage your 1-1 consultations</h4>
                <p>Here you can create, manage and sell your 1-1 consultations and group sessions and events.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-10 col-md-8">
            <tab-nav id="event-pills-tab" :pills="true" role="tablist" extraclass="d-flex  mb-4 text-center event-tab">
              <tab-nav-items @click="eventSelected" id="view-btn" :active="true" dataToggle="pill" ariaControls="event1"
                             role="tab" :ariaSelected="true" title="My events"/>
              <tab-nav-items @click="eventSelected" id="view-schedule" dataToggle="pill" ariaControls="event2"
                             role="tab" :ariaSelected="false" title="Scheduled"/>
              <tab-nav-items @click="eventSelected" id="workflow" dataToggle="pill" ariaControls="event3" role="tab"
                             :ariaSelected="false" title="Workflow"/>
            </tab-nav>
          </div>
          <div class="col-lg-2 col-md-4 " id="view-event" v-if="viewEvents == 'view-schedule'">
            <div class="float-md-right mb-4">
              <a href="#" class="btn view-btn" @click.prevent="event1()">View Event</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <tab-content extraclass="event-content">
            <tab-content-item id="event1" :active="true">
              <div class="row">
                <div v-for="(etype ,index ) in eventType" :key="index" class="col-lg-4 col-md-6">
                  <div class="card card-block card-stretch card-height">
                    <div
                        :class="'card-body rounded event-detail  event-detail-'+etype.color+' '+ (etype.disable ? 'disabled' : '')">
                      <div class="d-flex align-items-top justify-content-between">
                        <div>
                          <h4 class="mb-2 mr-4">{{ etype.title }}</h4>
                          <p :class="'mb-2 text-'+etype.color+' font-weight-500 text-uppercase'"><i
                              :class="etype.icon"></i>{{ etype.share }}</p>
                          <p class="mb-4 card-description">{{ etype.description }}</p>
                          <div class="d-flex align-items-center pt-4">
                            <a href="#" :class="'btn btn-'+etype.color+' mr-3 px-xl-4'">{{ etype.time }}</a>
                            <a href="#" @click.prevent="copyButton()" @mouseleave="removedeta()" v-if="!etype.disable"
                               :class="'btn btn-outline-'+etype.color +' copy px-xl-4'" data-extra-toggle="copy"
                               v-b-tooltip.hover :title="showtooltipdeta"><i class="las la-link pr-2"></i>Copy Link</a>
                            <a href="#" v-else :class="'btn btn-outline-'+etype.color +' turn-on px-xl-4'"
                               @click.prevent="checked(index, false)"> Turn On</a>
                          </div>
                        </div>
                        <div class="card-header-toolbar mt-1">
                          <div :class="'dropdown '+ (etype.disable ? 'd-none' : '')">
                            <b-dropdown class="dropdown-toggle" id="dropdownMenuButton2" right variant="none p-0"
                                        data-toggle="dropdown">
                              <template v-slot:button-content>
                                <i class="ri-more-2-fill"></i>
                              </template>
                              <b-dropdown-item><i class="ri-pencil-line mr-3"></i>{{ ('Edit') }}</b-dropdown-item>
                              <b-dropdown-item><i class="ri-sticky-note-line mr-3"></i>{{ ('Add Internal Note') }}
                              </b-dropdown-item>
                              <b-dropdown-item><i class="ri-save-line mr-3"></i>{{ ('Save to Template') }}
                              </b-dropdown-item>
                              <b-dropdown-item><i class="ri-code-s-slash-line mr-3"></i>{{ ('Save to Website') }}
                              </b-dropdown-item>
                              <b-dropdown-item><i class="ri-delete-bin-6-line mr-3"></i>{{ ('Delete') }}
                              </b-dropdown-item>
                              <b-dropdown-item class="dropdown-item border-top mt-2">
                                <template>
                                  <div class="d-flex align-items-center justify-content-between">
                                    <div>On/Off</div>
                                    <div class="custom-control custom-switch p-0" @click.prevent="checked(index, true)">
                                      <input type="checkbox" class="custom-control-input card-change"
                                             id="customSwitch2">
                                      <label class="custom-control-label" for="customSwitch2"></label>
                                    </div>
                                  </div>
                                </template>
                              </b-dropdown-item>
                            </b-dropdown>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </tab-content-item>
            <tab-content-item id="event2" :active="false">
              <div class="d-flex flex-wrap align-items-center justify-content-between mb-4">
                <tab-nav id="schedule-pills-tab" :pills="true" role="tablist"
                         extraclass="d-flex  mb-4 text-center schedule-tab">
                  <tab-nav-items dataToggle="pill" ariaControls="schedule01" dataextras="#filter-none" role="tab"
                                 :ariaSelected="false" title="All"/>
                  <tab-nav-items dataToggle="pill" :active="true" ariaControls="schedule1" dataextras="#filter-button"
                                 role="tab" :ariaSelected="false" title="Upcoming"/>
                  <tab-nav-items dataToggle="pill" ariaControls="schedule2" dataextras="#filter-none" role="tab"
                                 :ariaSelected="false" title="Pending"/>
                  <tab-nav-items dataToggle="pill" ariaControls="schedule3" dataextras="#filter-button" role="tab"
                                 :ariaSelected="false" title="Past"/>
                  <tab-nav-items dataToggle="pill" ariaControls="schedule4" data-placement="daterange"
                                 dataextras="#filter-button" role="tab" :ariaSelected="false" title="Date range"/>
                </tab-nav>
                <div class="d-flex flex-wrap align-items-center ">

                  <div id="filter-button"
                       class="select-dropdown input-prepend input-append filter-dropdown filter-extra active">
                    <div class="btn-group" v-nav-toggle>
                      <label data-toggle="dropdown" class="mb-0">
                        <span class="dropdown-toggle search-query selet-caption btn bg-white">Filter By</span><span
                          class="search-replace"></span>
                        <span class="caret"></span>
                      </label>
                      <ul class="dropdown-menu p-3 border-none">
                        <li>
                          <div class="item mb-2">
                            <div class="checkbox">
                              <input type="checkbox" class="checkbox-input mr-3" id="checkbox1">
                              <label for="checkbox1" class="mb-0">All Teams</label>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="item mb-2">
                            <div class="checkbox">
                              <input type="checkbox" class="checkbox-input mr-3" id="checkbox2">
                              <label for="checkbox2" class="mb-0">All Event Types</label>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="item mb-2">
                            <div class="checkbox">
                              <input type="checkbox" class="checkbox-input mr-3" id="checkbox3">
                              <label for="checkbox3" class="mb-0">Active Events</label>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="item mb-2">
                            <div class="checkbox">
                              <input type="checkbox" class="checkbox-input mr-3" id="checkbox4">
                              <label for="checkbox4" class="mb-0">All IDs</label>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="item">
                            <div class="checkbox">
                              <input type="checkbox" class="checkbox-input mr-3" id="checkbox5">
                              <label for="checkbox5" class="mb-0">All Invitee Email</label>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <tab-content extraclass="schedule-content">
                <tab-content-item id="schedule01" :active="false">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="card card-block card-stretch" v-for="(all,index) in ScheduleEventall" :key="index">
                        <div class="card-body">
                          <div class="d-flex flex-wrap align-items-center justify-content-between">
                            <div class="d-flex flex-wrap align-items-center">
                              <div class="date mr-3"><h4 :class="all.color">{{ all.date }}</h4></div>
                              <div class="border-left pl-3">
                                <div class="media align-items-top">
                                  <h5 class="mb-3">{{ all.text }}</h5>
                                  <div class="badge badge-color ml-3">{{ all.comingsoon }}</div>
                                </div>
                                <div class="media align-items-center">
                                  <p class="mb-0 pr-3"><i :class="'las la-clock mr-2 '+ all.color"></i>{{ all.time }}
                                  </p>
                                  <p class="mb-0"><i
                                      :class="'las la-map-marker mr-2 '+ all.color"></i>{{ all.locationdata }}</p>
                                </div>
                              </div>
                            </div>
                            <div class="d-flex align-items-center list-action">
                              <a class="badge mr-3" v-b-tooltip.top title="Edit" href="#"><i
                                  class="ri-edit-box-line"></i></a>
                              <a class="badge" v-b-tooltip.top title="Delete" href="#"><i
                                  class="ri-delete-bin-line"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </tab-content-item>
                <tab-content-item id="schedule1" :active="true">
                  <div class="row">
                    <div class="col-lg-4 col-md-6" v-for="(upcoming,index) in ScheduleEventupcoming" :key="index">
                      <div class="card card-block card-stretch card-height">
                        <div :class="'card-body rounded event-detail event-detail-'+upcoming.color">
                          <div class="d-flex align-items-center justify-content-between mb-4">
                            <div>
                              <h1 :class="'text-'+upcoming.color">{{ upcoming.date }}</h1>
                              <h5 :class="'text-'+upcoming.color">{{ upcoming.month }}</h5>
                            </div>
                            <div class="d-flex align-items-center list-action">
                              <a class="badge mr-3" v-b-tooltip.top title="Edit" href="#"><i
                                  class="ri-edit-box-line"></i></a>
                              <a class="badge" v-b-tooltip.top title="Delete" href="#"><i
                                  class="ri-delete-bin-line"></i></a>
                            </div>
                          </div>
                          <h4 class="my-2">{{ upcoming.title }}</h4>
                          <p class="mb-4 card-description">{{ upcoming.contain }}</p>
                          <p :class="'mb-2 text-' + upcoming.color"><i class="las la-clock mr-3"></i>{{ upcoming.time }}
                          </p>
                          <p :class="'mb-2 text-' + upcoming.color"><i
                              class="las la-map-marker mr-3"></i>{{ upcoming.locationdata }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </tab-content-item>
                <tab-content-item id="schedule2" :active="false">
                  <div class="row">
                    <div class="col-lg-4 col-md-6" v-for="(pending,index) in ScheduleEventPending" :key="index">
                      <div class="card card-block card-stretch card-height">
                        <div class="card-body rounded event-detail event-detail1">
                          <div class="d-flex align-items-center justify-content-between mb-4">
                            <div>
                              <h1 :class="'text-'+pending.color">{{ pending.date }}</h1>
                              <h5 :class="'text-'+pending.color">{{ pending.month }}</h5>
                            </div>
                            <div class="d-flex align-items-center list-action">
                              <a class="badge mr-3" v-b-tooltip.top title="Edit" href="#"><i
                                  class="ri-edit-box-line"></i></a>
                              <a class="badge" v-b-tooltip.top title="Delete" href="#"><i
                                  class="ri-delete-bin-line"></i></a>
                            </div>
                          </div>
                          <h4 class="my-2">{{ pending.title }}</h4>
                          <p class="mb-4 card-description">{{ pending.contain }}</p>
                          <p :class="'mb-2 text-'+pending.color"><i class="las la-clock mr-3"></i>{{ pending.time }}</p>
                          <p :class="'mb-2 text-'+pending.color"><i
                              class="las la-map-marker mr-3"></i>{{ pending.locationdata }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </tab-content-item>
                <tab-content-item id="schedule3" :active="false">
                  <div class="row">
                    <div class="col-lg-4 col-md-6" v-for="(past,index) in ScheduleEventPast" :key="index">
                      <div class="card card-block card-stretch card-height">
                        <div class="card-body rounded event-detail event-detail1">
                          <div class="d-flex align-items-center justify-content-between mb-4">
                            <div>
                              <h1 :class="'text-'+past.color">{{ past.date }}</h1>
                              <h5 :class="'text-'+past.color">{{ past.month }}</h5>
                            </div>
                            <div class="d-flex align-items-center list-action">
                              <a class="badge mr-3" v-b-tooltip.top title="Edit" href="#"><i
                                  class="ri-edit-box-line"></i></a>
                              <a class="badge" v-b-tooltip.top title="Delete" href="#"><i
                                  class="ri-delete-bin-line"></i></a>
                            </div>
                          </div>
                          <h4 class="my-2">{{ past.title }}</h4>
                          <p class="mb-4 card-description">{{ past.contain }}</p>
                          <p :class="'mb-2 text-'+past.color"><i class="las la-clock mr-3"></i>{{ past.time }}</p>
                          <p :class="'mb-2 text-'+past.color"><i
                              class="las la-map-marker mr-3"></i>{{ past.locationdata }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </tab-content-item>
                <tab-content-item id="schedule4" :active="false" data-toggle="daterange">
                  <div class="card card-block card-stretch mb-4">
                    <div class="card-body mb-5 border-bottom">
                      <p class="mb-0">18 Dec – 24 Dec 2020</p>
                    </div>
                    <div class="card-body text-center">
                      <div class="d-inline-block m-auto date-event">
                        <div class="icon iq-icon-box-2 m-auto rounded border">
                          <i class="las la-calendar"></i>
                        </div>
                        <p class="mt-4">No Event In This Range</p>
                      </div>
                    </div>
                  </div>
                </tab-content-item>
              </tab-content>
            </tab-content-item>
            <tab-content-item id="event3" :active="false">
              <div class="d-flex flex-wrap align-items-center justify-content-between mb-4">
                <div>
                  <h3 class="mb-3">Save Your Time Using Workflow</h3>
                  <p class="mb-md-0">Choose Your Own Workflow From Given Below.<br>Or Create Your Own Workflow</p>
                </div>
                <div class="create-workform">
                  <a href="#" v-b-modal.create-event class="btn btn-primary pr-5 position-relative">Create Workflow<span
                      class="event-add-btn"><i class="ri-add-line"></i></span></a>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-3 col-lg-4 col-md-6" v-for="(workflow ,index )   in workflows" :key="index">
                  <div class="card card-block card-stretch card-height">
                    <div :class="'card-body rounded work-detail work-detail-'+workflow.color">
                      <div class="icon iq-icon-box-2 mb-3 rounded">
                        <i :class="workflow.icon"></i>
                      </div>
                      <h4 class="mb-2">{{ workflow.title }}</h4>
                      <p class="mb-4 card-description">{{ workflow.contain }}</p>
                      <div class="pt-2">
                        <router-link to="/workflow" :class="'btn  mr-3 px-4 btn-'+workflow.color">
                          {{ workflow.linkbtn }}
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </tab-content-item>
          </tab-content>
        </div>
      </div>
    </div>
    <b-modal class="modal fade " id="create-event" modal-class="create-workform" centered hide-footer hide-header
             hide-header-close>
      <div class="popup text-left">
        <h4 class="mb-3">Create a Workflow</h4>
        <div class="mb-3">
          <h5>When this happens</h5>
          <div class="content">
            <div class="form-group mb-0">
              <VueSelectPicker :options="option" class="form-control selectpicker" v-model="selectValue"/>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <h5 class="mb-3">Do this</h5>
          <div class="form-group  mb-0">
            <VueSelectPicker :options="option1" class="form-control selectpicker" v-model="selectValue"/>
          </div>
        </div>
        <div class="mt-3">
          <div class="d-flex flex-wrap align-items-ceter justify-content-center">
            <div class="btn btn-primary mr-4" @click="$bvModal.hide('create-event')">Cancel</div>
            <div class="btn btn-outline-primary" @click="$bvModal.hide('create-event')">Save</div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import Tab from 'bootstrap/js/src/tab'

export default {
  name: 'Dashbord',
  mounted() {
    window.jQuery('[data-placement="daterange"]').daterangepicker({
          opens: 'center'
        },
    );
    this.viewEvents = this.$route.query.activeTab
    if (this.viewEvents !== undefined) {
      let elem = Tab.getInstance(document.querySelector(`#${this.viewEvents}`))
      setTimeout(() => {
        elem.show()
      }, 500);
    }
  },
  data() {
    return {
      viewEvents: '',
      showtooltipdeta: 'Copy to clipboard',
      selectValue: '',
      option: [
        {value: 1, text: 'Select..'},
        {value: 2, text: 'New event is scheduled'},
        {value: 3, text: 'Before event starts'},
        {value: 4, text: 'Event starts'},
        {value: 5, text: 'Event ends'},
        {value: 6, text: 'Event is canceled'},

      ],
      option1: [
        {value: 1, text: 'Select..'},
        {value: 2, text: 'Send email to invitee'},
        {value: 3, text: 'Send email to host'},
        {value: 4, text: 'Send text to invitee'},
        {value: 5, text: 'Send text to host'},


      ],
      ScheduleEventall: [
        {
          date: '15 Dec',
          text: 'Calendify Inner Pages',
          comingsoon: 'Upcoming',
          time: '08 Pm - 09 Pm',
          locationdata: '1 Circle Street Leominster, Ma 01453',
          color: 'text-info',
        },
        {
          date: '25 Dec',
          text: 'Admin Dashboard Team Meet',
          comingsoon: 'Upcoming',
          time: '09:45 Pm - 10 Pm',
          locationdata: '1 Circle Street Leominster, Ma 01453',
          color: 'text-danger'
        },
        {
          date: '29 Dec',
          text: 'Calendify Pre-Launch Campaign',
          comingsoon: 'Pending',
          time: '10 Pm - 10:30 Pm',
          locationdata: '1 Circle Street Leominster, Ma 01453',
          color: 'text-success'
        }
      ],
      ScheduleEventupcoming: [
        {
          date: '18',
          month: 'Dec',
          title: 'Xamin WordPress Theme Update',
          contain: 'Major update v2.5 version of Xamin theme. Make Xamin in Elementor version and document the steps.',
          time: '08 Pm - 09 Pm',
          locationdata: '1 Circle Street Leominster, Ma 01453',
          color: 'info',

        },
        {
          date: '25',
          month: 'Dec',
          title: 'Iqonic Design Christmas Campaign',
          contain: 'Draft an conversional and Sales-driven Christmas campaign by offering Christmas deals to customers.',
          time: '09:45 Pm - 10 Pm',
          locationdata: '1 Circle Street Leominster, Ma 01453',
          color: 'danger'
        },
        {
          date: '29',
          month: 'Dec',
          title: 'Best Iqonic Design Item Collections',
          contain: 'Build the best Iqonic collectable list of WordPress themes, HTML, Vuejs Admin Dashboards and Mobile Applications.',
          time: '10 Pm - 10:30 Pm',
          locationdata: '1 Circle Street Leominster, Ma 01453',
          color: 'success'
        }
      ],
      ScheduleEventPending: [
        {
          date: '25',
          month: 'Dec',
          title: 'Calendify Homepage Final Edits',
          contain: 'Enhance Calendify with beautiful user interface and UI changes to ensure high conversion rate.',
          time: '08 Pm - 09 Pm',
          locationdata: '1 Circle Street Leominster, Ma 01453',
          color: 'info',

        },
        {
          date: '07',
          month: 'Jan',
          title: 'Calendify Promotional Campaign',
          contain: 'Schedule meetings and promotional campaigns for your internal team by assigning task and roles.',
          time: '09:45 Pm - 10 Pm',
          locationdata: '1 Circle Street Leominster, Ma 01453',
          color: 'danger'
        },
        {
          date: '15',
          month: 'Jan',
          title: 'Exploring Automatic Timezone Detection',
          contain: 'An internal team meeting to brief on a feature where the meeting will be seen in viewer’s time zone with automatic timezone detection in Calendify.',
          time: '10 Pm - 10:30 Pm',
          locationdata: '1 Circle Street Leominster, Ma 01453',
          color: 'success'
        }
      ],
      ScheduleEventPast: [
        {
          date: '03',
          month: 'Dec',
          title: 'Webtech-Developer Horror Stories',
          contain: 'Lorem Ipsum Dolor Sit Amet, Consecetetur Adip Iscing Elit. Pharetra Luctus Ultricies Velit Ut. Id Tincidunt Mattis Sed Duis.',
          time: '08 Pm - 09 Pm',
          locationdata: '1 Circle Street Leominster, Ma 01453',
          color: 'info',

        },
        {
          date: '16',
          month: 'Dec',
          title: 'Meetup-Meeing With Team of Designer',
          contain: 'Lorem Ipsum Dolor Sit Amet, Consecetetur Adip Iscing Elit. Pharetra Luctus Ultricies Velit Ut. Id Tincidunt Mattis Sed Duis.',
          time: '09:45 Pm - 10 Pm',
          locationdata: '1 Circle Street Leominster, Ma 01453',
          color: 'danger'
        },
        {
          date: '27',
          month: 'Dec',
          title: 'Project Plan-Do Anaylsis Of Project',
          contain: 'Lorem Ipsum Dolor Sit Amet, Consecetetur Adip Iscing Elit. Pharetra Luctus Ultricies Velit Ut. Id Tincidunt Mattis Sed Duis.',
          time: '10 Pm - 10:30 Pm',
          locationdata: '1 Circle Street Leominster, Ma 01453',
          color: 'success'
        }
      ],
      workflows: [
        {
          icon: 'las la-boxes',
          color: 'info',
          title: 'Email Reminder to Invitee',
          contain: 'Send automated email reminder to invitees for task.',
          linkbtn: 'Use workflow'

        },
        {
          icon: 'lab la-ioxhost',
          color: 'danger',
          title: 'Email Reminder to Host',
          contain: 'Send automated email reminder to the meeting host.',
          linkbtn: 'Use workflow'
        },
        {
          icon: 'las la-envelope-open',
          color: 'success',
          title: 'Create Process Template',
          contain: 'Create structured step-by-step process template for team.',
          linkbtn: 'Use workflow'
        },
        {
          icon: 'las la-stopwatch',
          color: 'warning',
          title: 'Run Multiple Instances',
          contain: 'Quickly run multiple instances and checklist for team.',
          linkbtn: 'Use workflow'
        },
        {
          icon: 'las la-handshake',
          color: 'primary',
          title: 'Track Process and collaborate',
          contain: 'Track activity and prepare checklist to collaborate.',
          linkbtn: 'Use workflow'
        },
        {
          icon: 'las la-envelope',
          color: 'info',
          title: 'Text Booking confirmation',
          contain: 'Send text message for booking confirmation.',
          linkbtn: 'Use workflow'
        },
        {
          icon: 'las la-hourglass',
          color: 'danger',
          title: 'Email Feedback Survey',
          contain: 'Use forms to collect feedback of the launch campaigns.',
          linkbtn: 'Use workflow'
        },
        {
          icon: 'las la-bookmark',
          color: 'success',
          title: 'Take follow-up meeting',
          contain: 'Streamline a follow-up process for the internal team.',
          linkbtn: 'Use workflow'
        },
        {
          icon: 'las la-bell',
          color: 'warning',
          title: 'Integrate and automate task',
          contain: 'Integrate and automate daily and weekly tasks and sales.',
          linkbtn: 'Use workflow'
        },

      ],
      eventType: [
        {
          disable: true,
          color: 'danger',
          title: 'Reminder of App Project And Design',
          icon: 'las la-user pr-2',
          share: 'One On One',
          description: 'Calendify always allows you to set the reminder to optimize task management roles and jobs.',
          time: '50 Min'
        },
        {
          disable: false,
          color: 'info',
          title: 'Email Signature for Support Team',
          icon: 'las la-user pr-2',
          share: 'One On One',
          description: 'Outsmart back-and-forth in communication by staying alert with your support team follow-ups.',
          time: '30 Min'
        },
        {
          disable: false,
          color: 'success',
          title: 'Plugins & Team Review Meeting',
          icon: 'las la-user-friends pr-2',
          share: 'Group',
          description: 'Calendify lets you to simplify and prioritize your calendar and your team’s calendar with review. ',
          time: '35 Min'
        },
        {
          disable: false,
          color: 'primary',
          title: 'New Year Iqonic Design Campaigns',
          icon: 'las la-user-friends pr-2',
          share: 'Group',
          description: 'Quickly schedule and set the event type to manage all your marketing and management campaigns.',
          time: '15 Min'
        },
        {
          disable: false,
          color: 'warning',
          title: 'Project And Task Management Roles',
          icon: 'las la-user-friends pr-2',
          share: 'Group',
          description: 'Set reminders for your team regarding their project and task completion so that they are not overlooked.',
          time: '25 Min'
        },
      ]
    }
  },
  methods: {
    checked(index, check) {
      this.eventType[index].disable = check
    },
    event1() {
      document.getElementById('view-schedule').classList.remove('active')
      document.getElementById('view-btn').classList.add('active')
      document.getElementById('event2').setAttribute('class', ' tab-pane fade')
      document.getElementById('event1').setAttribute('class', ' tab-pane fade active show')
    },
    copyButton() {
      this.showtooltipdeta = "copy!"
    },
    removedeta() {
      setTimeout(() => this.showtooltipdeta = 'Copy to clipboard', 500)
    },
    eventSelected(e) {
      this.viewEvents = e.id
    }

  }
}


</script>