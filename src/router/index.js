import Vue from 'vue'
import VueRouter from 'vue-router'

//Adding layouts router.
const BlankLayout = () => import("@/layouts/BlankLayout")
const Layout1 = () => import("@/layouts/backend/Layout-1")
const Layout2 = () => import("@/layouts/backend/Layout-2")



//Adding page content router.
const Dashbord = () => import('@/views/backend/Main/Dashbord')
const MySchedule = () => import('@/views/backend/Main/MySchedule')
const Integration = () => import('@/views/backend/Main/Integration')
const CalendarConnections = () => import('@/views/backend/Main/CalendarConnections')
const Users = () => import('@/views/backend/Main/Users')
const Workflow = () => import('@/views/backend/Main/workflow')
const NewEvent = () => import('@/views/backend/Main/newevent')
const AddEvent = () => import('@/views/backend/Main/addevent')

//widget pages
const WidgetSimple = () => import('@/views/backend/Widgets/WidgetSimple')
const WidgetChart = () => import('@/views/backend/Widgets/WidgetChart')

//ui elements
const UiAlerts = () => import('@/views/backend/Ui/UiAlerts')
const UiAvatars = () => import('@/views/backend/Ui/UiAvatars')
const UiBadges = () => import('@/views/backend/Ui/UiBadges')
const UiBoxShadows = () => import('@/views/backend/Ui/UiBoxShadows')
const UiBreadcrumbs = () => import('@/views/backend/Ui/UiBreadcrumbs')
const UiButtonGroups = () => import('@/views/backend/Ui/UiButtonGroups')
const UiButtons = () => import('@/views/backend/Ui/UiButtons')
const UiCards = () => import('@/views/backend/Ui/UiCards')
const UiCarousels = () => import('@/views/backend/Ui/UiCarousels')
const UiColors = () => import('@/views/backend/Ui/UiColors')
const UiEmbed = () => import('@/views/backend/Ui/UiEmbed')
const UiGrids = () => import('@/views/backend/Ui/UiGrids')
const UiHelperClasses = () => import('@/views/backend/Ui/UiHelperClasses')
const UiImages = () => import('@/views/backend/Ui/UiImages')
const UiListGroups = () => import('@/views/backend/Ui/UiListGroups')
const UiMediaObjects = () => import('@/views/backend/Ui/UiMediaObjects')
const UiModals = () => import('@/views/backend/Ui/UiModals')
const UiNotifications = () => import('@/views/backend/Ui/UiNotifications')
const UiPaginations = () => import('@/views/backend/Ui/UiPaginations')
const UiPopOvers = () => import('@/views/backend/Ui/UiPopOvers')
const UiProgressBars = () => import('@/views/backend/Ui/UiProgressBars')
const UiTabs = () => import('@/views/backend/Ui/UiTabs')
const UiTooltips = () => import('@/views/backend/Ui/UiTooltips')
const UiTypography = () => import('@/views/backend/Ui/UiTypography')

//Form elements
const Checkbox = () => import('@/views/backend/Forms/Form Controls/Checkbox')
const Elements = () => import('@/views/backend/Forms/Form Controls/Elements')
const Inputs = () => import('@/views/backend/Forms/Form Controls/Inputs')
const Radio = () => import('@/views/backend/Forms/Form Controls/Radio')
const Switch = () => import('@/views/backend/Forms/Form Controls/Switch')
const TextArea = () => import('@/views/backend/Forms/Form Controls/TextArea')
const Validations = () => import('@/views/backend/Forms/Form Controls/Validations')
const Datepicker = () => import('@/views/backend/Forms/Form widget/Datepicker')
const Fileupload = () => import('@/views/backend/Forms/Form widget/Fileupload')
const FormQuill = () => import('@/views/backend/Forms/Form widget/FormQuill')
const SelectComponents = () => import('@/views/backend/Forms/Form widget/SelectComponents')
const Simple = () => import('@/views/backend/Forms/Form Wizard/Simple')
const Validate = () => import('@/views/backend/Forms/Form Wizard/Validate')
const Vertical = () => import('@/views/backend/Forms/Form Wizard/Vertical')

//table elements
const BasicTable = () => import('@/views/backend/Table/BasicTable')
const DataTable = () => import('@/views/backend/Table/DataTable')
const EditTable = () => import('@/views/backend/Table/EditTable')

//icon elements
const Dripicons = () => import('@/views/backend/Icons/Dripicons')
const FontAwsome = () => import('@/views/backend/Icons/FontAwsome')
const LineAwsome = () => import('@/views/backend/Icons/LineAwsome')
const Remixicons = () => import('@/views/backend/Icons/Remixicons')

//gallery elements
const GalleryGrid = () => import('@/views/backend/Gallery/GalleryGrid')
const GalleryGridDesc = () => import('@/views/backend/Gallery/GalleryGridDesc')
const GalleryHover = () => import('@/views/backend/Gallery/GalleryHover')
const GalleryMasonry = () => import('@/views/backend/Gallery/GalleryMasonry')
const GalleryMasonryDesc = () => import('@/views/backend/Gallery/GalleryMasonryDesc')

//Blog elements
const BlogDetail = () => import('@/views/backend/Blog/BlogDetail')
const BlogGrid = () => import('@/views/backend/Blog/BlogGrid')
const BlogList = () => import('@/views/backend/Blog/BlogList')
const BlogSimple = () => import('@/views/backend/Blog/BlogSimple')

//chart elements
const AmChart = () => import('@/views/backend/Chart/AmChart')
const ApexChart = () => import('@/views/backend/Chart/ApexChart')
const HighChart = () => import('@/views/backend/Chart/HighChart')
const MorrisChart = () => import('@/views/backend/Chart/MorrisChart')

//map elements
const GoogleMap = () => import('@/views/backend/Map/GoogleMap')
const VectorMap = () => import('@/views/backend/Map/VectorMap')

//auth elements
const SignIn = () => import('@/views/backend/Auth/SignIn')
const SignUp = () => import('@/views/backend/Auth/SignUp')
const RecoverPassword = () => import('@/views/backend/Auth/RecoverPassword')
const LockScreen = () => import('@/views/backend/Auth/LockScreen')
const ConfirmMail = () => import('@/views/backend/Auth/ConfirmMail')

//pages elements
const ContactDetails = () => import('@/views/backend/Pages/Contact/ContactDetails')
const ContactList = () => import('@/views/backend/Pages/Contact/ContactList')
const Pricing1 = () => import('@/views/backend/Pages/Pricing/Pricing1')
const Pricing2 = () => import('@/views/backend/Pages/Pricing/Pricing2')
const Pricing3 = () => import('@/views/backend/Pages/Pricing/Pricing3')
const Pricing4 = () => import('@/views/backend/Pages/Pricing/Pricing4')
const Timeline1 = () => import('@/views/backend/Pages/Timeline/Timeline1')
const Timeline2 = () => import('@/views/backend/Pages/Timeline/Timeline2')
const Timeline3 = () => import('@/views/backend/Pages/Timeline/Timeline3')
const Timeline4 = () => import('@/views/backend/Pages/Timeline/Timeline4')
const Error404 = () => import('@/views/backend/Pages/Error/Error404')
const Error500 = () => import('@/views/backend/Pages/Error/Error500')
const BlankPage = () => import('@/views/backend/Pages/BlankPage')
const CommingSoon = () => import('@/views/backend/Pages/CommingSoon')
const FAQ = () => import('@/views/backend/Pages/FAQ')
const Invoice = () => import('@/views/backend/Pages/Invoice')
const Maintainance = () => import('@/views/backend/Pages/Maintainance')
const Subsribers = () => import('@/views/backend/Pages/Subsribers')

//app element
const EmailComposes = () =>import('@/views/backend/App/Mail/EmailComposes')
const EmailListing = () =>import('@/views/backend/App/Mail/EmailListing')
const UserAccountSetting = () =>import('@/views/backend/App/User Management/UserAccountSetting')
const UserAdd = () =>import('@/views/backend/App/User Management/UserAdd')
const UserList = () =>import('@/views/backend/App/User Management/UserList')
const UserProfile = () =>import('@/views/backend/App/User Management/UserProfile')
const userPrivacySettings = () =>import('@/views/backend/App/User Management/UserPrivacySetting')
const UserProfileEdit = () =>import('@/views/backend/App/User Management/UserProfileEdit')
const Chat = () =>import('@/views/backend/App/Chat')
const Todo = () =>import('@/views/backend/App/Todo')
const Accountsetting =() => import('@/views/backend/App/Extraap/AccountSettings')
const privacypolicy = () => import('@/views/backend/App/Extraap/PrivacyPolicy')
const PrivacySettings = () =>import('@/views/backend/App/Extraap/PrivacySettings')
const TermsOfUse = () =>import('@/views/backend/App/Extraap/TermsOfUse')


Vue.use(VueRouter)

const childRoute = () => [
  {
    path: '',
    name: 'layout.dashboard',
    meta: {  name: 'Dashboard' },
    component: Dashbord
  },
  {
    path: '/my-schedule',
    name: 'layout.mySchedule',
    meta: {  name: 'MySchedule' },
    component: MySchedule
  },
  {
    path: '/integration',
    name: 'layout.integration',
    meta: {  name: 'Integration' },
    component: Integration
  },
  {
    path: '/calendar-connections',
    name: 'layout.calendar-connections',
    meta: {  name: 'Calendar Connections' },
    component: CalendarConnections
  },
  {
    path: '/users',
    name: 'layout.users',
    meta: {  name: 'Users' },
    component: Users
  },
  {
    path: '/workflow',
    name: 'layout.workflow',
    meta: {  name: 'workflow' },
    component: Workflow
  },
  {
    path: '/newevent',
    name: 'layout.newevent',
    meta: {  name: 'newevent' },
    component: NewEvent
  },
  {
    path: '/addevent',
    name: 'layout.addevent',
    meta: {  name: 'addevent' },
    component: AddEvent
  },
  {
    path: 'widget-simple',
    name: 'widget.simple',
    meta: {  name: 'Widget Simple' },
    component: WidgetSimple
  },
  {
    path: 'widget-chart',
    name: 'widget.chart',
    meta: {  name: 'Widget Chart'},
    component: WidgetChart
  },
  {
    path: 'form-checkbox',
    name: 'controls.form-checkbox',
    meta: {  name: 'Form Checkbox' },
    component: Checkbox
  },
  {
    path: 'form-layouts',
    name: 'controls.form-layout',
    meta: {  name: 'Form Layouts' },
    component: Elements
  },
  {
    path: 'form-input',
    name: 'controls.form-input',
    meta: {  name: 'Form Input' },
    component: Inputs
  },
  {
    path: 'form-radio',
    name: 'controls.form-radio',
    meta: {  name: 'Form Radio' },
    component: Radio
  },
  {
    path: 'form-switch',
    name: 'controls.form-switch',
    meta: {  name: 'Form Switch' },
    component: Switch
  },
  {
    path: 'form-textarea',
    name: 'controls.form-textarea',
    meta: {  name: 'Form TextArea' },
    component: TextArea
  },
  {
    path: 'form-validation',
    name: 'controls.form-validation',
    meta: {  name: 'Form Validation' },
    component:Validations
  },
  {
    path: 'form-datepicker',
    name: 'widget.form-datepicker',
    meta: {  name: 'Form Datepicker' },
    component:Datepicker
  },
  {
    path: 'form-file-uploader',
    name: 'widget.form-file-uploader',
    meta: {  name: 'Form Fileupload' },
    component:Fileupload
  },
  {
    path: 'form-quill',
    name: 'widget.form-quill',
    meta: {  name: 'Form quill' },
    component:FormQuill
  },
  {
    path: 'form-select',
    name: 'widget.form-select',
    meta: {  name: 'Form Select2' },
    component:SelectComponents
  },
  {
    path: 'form-wizard',
    name: 'wizard.form-wizard',
    meta: {  name: 'Form Wizard' },
    component:Simple
  },{
    path: 'form-wizard-validate',
    name: 'wizard.form-wizard-validate',
    meta: {  name: 'Form Wizard Validate' },
    component:Validate
  },{
    path: 'form-wizard-vertical',
    name: 'wizard.form-wizard-vertical',
    meta: {  name: 'Form Wizard Vertical' },
    component:Vertical
  },
  {
    path: 'basic-table',
    name: 'table.basic-table',
    meta: {  name: 'Basic Table ' },
    component:BasicTable
  },
  {
    path: 'data-table',
    name: 'table.data-table',
    meta: {  name: 'Data Table ' },
    component:DataTable
  },
  {
    path: 'edit-table',
    name: 'table.edit-table',
    meta: {  name: 'Edit Table ' },
    component:EditTable
  },
  {
    path: 'icon-dripicons',
    name: 'icon.dripicon',
    meta: {  name: 'Dripicons ' },
    component:Dripicons
  },{
    path: 'icon-fontawsome',
    name: 'icon.fontawsome',
    meta: {  name: 'FontAwsome ' },
    component:FontAwsome
  },{
    path: 'icon-lineawsome',
    name: 'icon.lineawsome',
    meta: {  name: 'LineAwsome ' },
    component:LineAwsome
  },{
    path: 'icon-remixicon',
    name: 'icon.remixicon',
    meta: {  name: 'Remixicon ' },
    component:Remixicons
  },
  {
    path: 'gallery-grid',
    name: 'gallery.grid',
    meta: {  name: 'Gallery Grid ' },
    component:GalleryGrid
  },
  {
    path: 'gallery-grid-desc',
    name: 'gallery.grid-desc',
    meta: {  name: 'Gallery Grid DEsc' },
    component:GalleryGridDesc
  },
  {
    path: 'gallery-masonry',
    name: 'gallery.masonry',
    meta: {  name: 'Gallery Masonry' },
    component:GalleryMasonry
  },
  {
    path: 'gallery-masonry-desc',
    name: 'gallery.masonry-desc',
    meta: {  name: 'Gallery Masonry Desc' },
    component:GalleryMasonryDesc
  },
  {
    path: 'gallery-hover-effect',
    name: 'gallery.hover-effect',
    meta: {  name: 'Gallery Hover Effect ' },
    component:GalleryHover
  },
  {
    path: 'blog-detail',
    name: 'blog.detail',
    meta: {  name: 'Blog Detail' },
    component:BlogDetail
  },
  {
    path: 'blog-grid',
    name: 'blog.grid',
    meta: {  name: 'Blog Grid' },
    component:BlogGrid
  },
  {
    path: 'blog-list',
    name: 'blog.list',
    meta: {  name: 'Blog List' },
    component:BlogList
  },
  {
    path: 'blog-simple',
    name: 'blog.simple',
    meta: {  name: 'Blog Simple' },
    component:BlogSimple
  },
  {
    path: 'am-chart',
    name: 'chart.amchart',
    meta: {  name: 'Amchart' },
    component:AmChart
  },
  {
    path: 'apex-chart',
    name: 'chart.apexchart',
    meta: {  name: 'Apexchart' },
    component:ApexChart
  },
  {
    path: 'high-chart',
    name: 'chart.highchart',
    meta: {  name: 'Highchart' },
    component:HighChart
  },
  {
    path: 'morris-chart',
    name: 'chart.morrischart',
    meta: {  name: 'Morrischart' },
    component:MorrisChart
  },
  {
    path: 'google-map',
    name: 'map.google',
    meta: {  name: 'Google Map' },
    component:GoogleMap
  },
  {
    path: 'vector-map',
    name: 'map.vector',
    meta: {  name: 'Vector Map' },
    component:VectorMap
  },
  {
    path: 'user-add',
    name: 'app.user-add',
    meta: {  name: 'user-add' },
    component:UserAdd
  },
  {
    path: 'user-list',
    name: 'app.user-list',
    meta: {  name: 'User Add' },
    component:UserList
  },
  {
    path: 'user-profile',
    name: 'app.user-profile',
    meta: {  name: 'User Profile' },
    component:UserProfile
  },
  {
    path: 'email-composes',
    name: 'app.email-composes',
    meta: {  name: 'email-compose' },
    component:EmailComposes
  },
  {
    path: 'email-listing',
    name: 'app.email-listing',
    meta: {  name: 'email listing' },
    component:EmailListing
  },
  {
    path: 'user-privacy-settings',
    name: 'app.user-privacy-setting',
    meta: {  name: 'user-privacy-setting' },
    component:userPrivacySettings
  },
  {
    path: 'User-profile-edit',
    name: 'app.user-profile-edit',
    meta: {  name: 'user-profile-edit' },
    component:UserProfileEdit
  },
  {
    path: 'User-account-setting',
    name: 'app.user-Account-setting',
    meta: {  name: 'user account setting' },
    component:UserAccountSetting
  },
  {
    path: 'chat',
    name: 'app.chat',
    meta: {  name: 'Chat' },
    component:Chat
  },
  {
    path: 'todo',
    name: 'app.todo',
    meta: {  name: 'Todo' },
    component:Todo
  },
  {
    path: 'privacy-settings',
    name: 'app.Privacysettings',
    meta: {  name: 'Privacysettings' },
    component:PrivacySettings
  },
  {
    path: 'terms-of-use',
    name: 'app.Termsofuse',
    meta: {  name: 'Termsofuse' },
    component:TermsOfUse
  },
  {
    path: 'privacy-policy',
    name: 'app.privacypolicy',
    meta: {  name: 'privacypolicy' },
    component:privacypolicy
  },
  {
    path: 'account-setting',
    name: 'app.Accountsetting',
    meta: {  name: 'Accountsetting' },
    component:Accountsetting
  },

]
const authchildRoute = () =>[
  {
    path: 'sign-in',
    name: 'auth.login',
    meta: {  name: 'SignIn' },
    component: SignIn
  },
  {
    path: 'sign-up',
    name: 'auth.register',
    meta: {  name: 'SignUp' },
    component: SignUp
  },
  {
    path: 'recover-password',
    name: 'auth.recover-password',
    meta: {  name: 'Recover Password' },
    component: RecoverPassword
  },
  {
    path: 'lock-screen',
    name: 'auth.lock-screen',
    meta: {  name: 'Lock Screen' },
    component: LockScreen
  },
  {
    path: 'confirm-mail',
    name: 'auth.confirm-mail',
    meta: {  name: 'Confirm Mail' },
    component: ConfirmMail
  },

]
const pageschildRoute = () =>[
  {
    path: 'error-404',
    name: 'error.404',
    meta: {  name: 'Error 404' },
    component: Error404
  },
  {
    path: 'error-500',
    name: 'error.500',
    meta: {  name: 'Error 500' },
    component: Error500
  },
  {
    path: 'pages-maintainance',
    name: 'pages.maintenance',
    meta: {  name: 'Maintaiance' },
    component: Maintainance
  },
  {
    path: 'pages-commingsoon',
    name: 'pages.commingsoon',
    meta: {  name: 'Comming Soon' },
    component: CommingSoon
  }
]
const extrapageschildRoute = () =>[
  {
    path: 'contact-detail',
    name: 'contact.detail',
    meta: {  name: 'Contact Detail' },
    component: ContactDetails
  },
  {
    path: 'contact-list',
    name: 'contact.list',
    meta: {  name: 'Contact List' },
    component: ContactList
  },
  {
    path: 'timeline-1',
    name: 'time.line',
    meta: {  name: 'TimeLine-1' },
    component: Timeline1
  },
  {
    path: 'timeline-2',
    name: 'time.line1',
    meta: {  name: 'TimeLine-2' },
    component: Timeline2
  },
  {
    path: 'timeline-3',
    name: 'time.line2',
    meta: {  name: 'TimeLine-3' },
    component: Timeline3
  },
  {
    path: 'timeline-4',
    name: 'time.line3',
    meta: {  name: 'TimeLine-4' },
    component: Timeline4
  },
  {
    path: 'pricing-1',
    name: 'price.pay',
    meta: {  name: 'Pricing-1' },
    component: Pricing1
  },
  {
    path: 'pricing-2',
    name: 'price.pay1',
    meta: {  name: 'Pricing-2' },
    component: Pricing2
  },
  {
    path: 'pricing-3',
    name: 'price.pay2',
    meta: {  name: 'Pricing-3' },
    component: Pricing3
  },
  {
    path: 'pricing-4',
    name: 'price.pay3',
    meta: {  name: 'Pricing-4' },
    component: Pricing4
  },
  {
    path: 'pages-invoice',
    name: 'pages.invoices',
    meta: {  name: 'Pages Invoice' },
    component: Invoice
  },
  {
    path: 'pages-subscriber',
    name: 'pages.subscribers',
    meta: {  name: 'Pages Subscribers' },
    component: Subsribers
  },
  {
    path: 'pages-faq',
    name: 'pages.faq',
    meta: {  name: 'Pages FAQ' },
    component: FAQ
  },
  {
    path: 'pages-blank-page',
    name: 'pages.blank-page',
    meta: {  name: 'Pages Blank Page ' },
    component: BlankPage
  },
  {
    path: 'ui-avatars',
    name: 'Ui.avatars',
    meta: {  name: 'Ui Avatars' },
    component: UiAvatars
  },
  {
    path: 'ui-alert',
    name: 'Ui.alerts',
    meta: {  name: 'Ui Alert' },
    component: UiAlerts
  },
  {
    path: 'ui-badges',
    name: 'Ui.badges',
    meta: {  name: 'Ui Badges' },
    component: UiBadges

  },
  {
    path: 'ui-boxshadows',
    name: 'Ui.boxshadows',
    meta: {  name: 'Ui Box Shadows' },
    component: UiBoxShadows
  },
  {
    path: 'ui-breadcrumbs',
    name: 'Ui.breadcrumbs',
    meta: {  name: 'Ui Breadcrumbs' },
    component: UiBreadcrumbs
  },
  {
    path: 'ui-button-groups',
    name: 'Ui.button-groups',
    meta: {  name: 'Ui Button Groups' },
    component: UiButtonGroups
  },
  {
    path: 'ui-buttons',
    name: 'Ui.buttons',
    meta: {  name: 'Ui Buttons' },
    component: UiButtons
  },
  {
    path: 'ui-cards',
    name: 'Ui.cards',
    meta: {  name: 'Ui Cards' },
    component: UiCards
  },
  {
    path: 'ui-carousels',
    name: 'Ui.carousels',
    meta: {  name: 'Ui Carousels' },
    component: UiCarousels
  },
  {
    path: 'ui-colors',
    name: 'Ui.colors',
    meta: {  name: 'Ui Colors' },
    component: UiColors
  },
  {
    path: 'ui-embed-videos',
    name: 'Ui.Embed-videos',
    meta: {  name: 'Ui Embed' },
    component: UiEmbed
  },
  {
    path: 'ui-grids',
    name: 'Ui.grids',
    meta: {  name: 'Ui Grids' },
    component: UiGrids
  },
  {
    path: 'ui-helper-classes',
    name: 'Ui.helper-classes',
    meta: {  name: 'Ui Helper Classes' },
    component: UiHelperClasses
  },
  {
    path: 'ui-images',
    name: 'Ui.images',
    meta: {  name: 'Ui Images' },
    component: UiImages
  },
  {
    path: 'ui-list-groups',
    name: 'Ui.list-groups',
    meta: {  name: 'Ui List Groups' },
    component: UiListGroups
  },
  {
    path: 'ui-media-objects',
    name: 'Ui.media-objects',
    meta: {  name: 'Ui Media Objects' },
    component: UiMediaObjects
  },
  {
    path: 'ui-modals',
    name: 'Ui.modals',
    meta: {  name: 'Ui Modals' },
    component: UiModals
  },
  {
    path: 'ui-notifications',
    name: 'Ui.notifications',
    meta: {  name: 'Ui Notifications' },
    component: UiNotifications
  },
  {
    path: 'ui-paginations',
    name: 'Ui.paginations',
    meta: {  name: 'Ui Pagination' },
    component: UiPaginations
  },
  {
    path: 'ui-popovers',
    name: 'Ui.popovers',
    meta: {  name: 'Ui popovers' },
    component: UiPopOvers
  },
  {
    path: 'ui-progressbars',
    name: 'Ui.progressbars',
    meta: {  name: 'Ui Progressbar' },
    component: UiProgressBars
  },
  {
    path: 'ui-tabs',
    name: 'Ui.tabs',
    meta: {  name: 'Ui Tabs' },
    component: UiTabs
  },
  {
    path: 'ui-tooltips',
    name: 'Ui.tooltips',
    meta: {  name: 'Ui Tooltips' },
    component: UiTooltips
  },
  {
    path: 'ui-typography',
    name: 'Ui.typographys',
    meta: {  name: 'Ui Typography' },
    component: UiTypography
  }
]

const routes = [
  {
    path: '/',
    name: '',
    component: Layout1,
    children: childRoute()
  },
  {
    path: '/layout2',
    name: 'layout-2',
    component: Layout2,
    children: [
    ]
  },
  {
    path: '/auth',
    name: 'auth',
    component: BlankLayout,
    children: authchildRoute()
  },
  {
    path: '/pages',
    name: 'pages',
    component: BlankLayout,
    children: pageschildRoute()
  },
  {
    path: '/extra-pages',
    name: 'extra-pages',
    component: Layout2,
    children: extrapageschildRoute()
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes
})

export default router
