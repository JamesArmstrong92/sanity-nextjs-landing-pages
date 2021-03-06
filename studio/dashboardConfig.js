export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60a6b55ef4e091009bd21397',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-12q4wca8',
                  apiId: '4532d884-ca54-4ebf-a226-aeff238183d2'
                },
                {
                  buildHookId: '60a6b55ef4e09100c6d212c5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3w267zgx',
                  apiId: 'c681071e-83e3-4094-b255-dd05abdcae1e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JamesArmstrong92/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3w267zgx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
