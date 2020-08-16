export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f397387fb8f78a1a1f539f9',
                  title: 'Sanity Studio',
                  name: 'my-personal-site-studio',
                  apiId: '3395d02f-0906-4916-9d61-60dca35f7766'
                },
                {
                  buildHookId: '5f3973871c8489a470facdc8',
                  title: 'Blog Website',
                  name: 'my-personal-site-web',
                  apiId: '05f6d3e4-2ddd-4549-b22f-8aa515d3cbcb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Edo78/my-personal-site',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://my-personal-site-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
