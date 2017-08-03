import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
import Charts from '@/views/Charts'
import Widgets from '@/views/Widgets'

// Views - Components
import Buttons from '@/views/components/Buttons'
import SocialButtons from '@/views/components/SocialButtons'
import Cards from '@/views/components/Cards'
import Forms from '@/views/components/Forms'
import Modals from '@/views/components/Modals'
import Switches from '@/views/components/Switches'
import Tables from '@/views/components/Tables'

import VictimManagement from '@/views/VictimManagement'
import EditVictim from '@/views/EditVictim'
import GroupManagement from '@/views/GroupManagement'
import EditGroup from '@/views/EditGroup'
import AddVictimToGroup from '@/views/AddVictimToGroup'
import PhishingDashboard from '@/views/PhishingDashboard'
import Mailings from '@/views/Mailings'
import EditMailing from '@/views/EditMailing'
import MalwareSimulator from '@/views/MalwareSimulator'
import Attacks from '@/views/Attacks'
import StartAttack from '@/views/StartAttack'

// Views - Icons
import FontAwesome from '@/views/icons/FontAwesome'
import SimpleLineIcons from '@/views/icons/SimpleLineIcons'

// Views - Pages
import Page404 from '@/views/pages/Page404'
import Page500 from '@/views/pages/Page500'
import Login from '@/views/pages/Login'
import Register from '@/views/pages/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'dashboard',
          meta: { auth: true },
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'components',
          redirect: '/components/buttons',
          name: 'Components',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'buttons',
              name: 'Buttons',
              component: Buttons
            },
            {
              path: 'social-buttons',
              name: 'Social Buttons',
              component: SocialButtons
            },
            {
              path: 'cards',
              name: 'Cards',
              component: Cards
            },
            {
              path: 'forms',
              name: 'Forms',
              component: Forms
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            },
            {
              path: 'switches',
              name: 'Switches',
              component: Switches
            },
            {
              path: 'tables',
              name: 'Tables',
              component: Tables
            }
          ]
        },
        {
          path: 'general',
          redirect: '/general/user-management',
          name: 'General',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'victim-management',
              name: 'Victim Management',
              meta: { auth: true },
              component: VictimManagement
            },
            {
              path: 'victim-management/add',
              name: 'Add Victim',
              meta: { auth: true },
              component: EditVictim
            },
            {
              path: 'victim-management/edit/:id',
              name: 'Edit Victim',
              meta: { auth: true },
              component: EditVictim
            },
            {
              path: 'group-management',
              name: 'Group Management',
              meta: { auth: true },
              component: GroupManagement
            },
            {
              path: 'group-management/add',
              name: 'Add Group',
              meta: { auth: true },
              component: EditGroup
            },
            {
              path: 'group-management/add-victim/:id',
              name: 'Add Victim to Group',
              meta: { auth: true },
              component: AddVictimToGroup
            },
            {
              path: 'group-management/edit/:id',
              name: 'Edit Group',
              meta: { auth: true },
              component: EditGroup
            }
          ]
        },
        {
          path: 'phishing',
          redirect: '/phishing/dashboard',
          name: 'Phishing',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'dashboard',
              name: 'Phishing Dashboard',
              meta: {auth: true},
              component: PhishingDashboard
            },
            {
              path: 'mailings',
              name: 'Mailings',
              meta: {auth: true},
              component: Mailings
            },
            {
              path: 'mailings/add',
              name: 'Add Mailing',
              meta: {auth: true},
              component: EditMailing
            },
            {
              path: 'mailings/edit/:id',
              name: 'Edit Mailing',
              meta: {auth: true},
              component: EditMailing
            },
            {
              path: 'attacks',
              name: 'Phishing Attacks',
              meta: {auth: true},
              component: Attacks
            },
            {
              path: 'attacks/start',
              name: 'Start Phishing Attack',
              meta: {auth: true},
              component: StartAttack
            }

          ]
        },
        {
          path: 'malware',
          redirect: '/malware/simulator',
          name: 'Malware',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'simulator',
              name: 'Simulator',
              meta: {auth: true},
              component: MalwareSimulator
            }
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/font-awesome',
          name: 'Icons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'font-awesome',
              name: 'Font Awesome',
              component: FontAwesome
            },
            {
              path: 'simple-line-icons',
              name: 'Simple Line Icons',
              component: SimpleLineIcons
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/404',
      name: 'Error 404',
      component: Page404
    },
    {
      path: '/500',
      name: 'Error 500',
      component: Page500
    }
  ]
})
