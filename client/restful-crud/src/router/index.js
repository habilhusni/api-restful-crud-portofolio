import Vue from 'vue'
import Router from 'vue-router'
import Memo from '@/components/Memo'
import Create from '@/components/Create'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Memo',
      component: Memo
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit
    }
  ]
})
