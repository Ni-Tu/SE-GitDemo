module.exports = {
  name: 'Accounts API Tier Mock',
  baseUrl: 'http://localhost:3000',
  routes: [
    {
      method: 'GET',
      path: '/accounts',
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        count: 2,
        data: [
          {
            id: 'ACC-1001',
            name: 'Northwind Traders',
            industry: 'Retail',
            status: 'active',
            tier: 'premium'
          },
          {
            id: 'ACC-1002',
            name: 'Contoso Manufacturing',
            industry: 'Manufacturing',
            status: 'inactive',
            tier: 'standard'
          }
        ]
      }
    },
    {
      method: 'GET',
      path: '/accounts/:id',
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        id: 'ACC-1001',
        name: 'Northwind Traders',
        industry: 'Retail',
        status: 'active',
        tier: 'premium'
      }
    },
    {
      method: 'POST',
      path: '/accounts',
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        id: 'ACC-2001',
        name: 'Example Corp',
        industry: 'Financial Services',
        status: 'active',
        tier: 'premium'
      }
    },
    {
      method: 'PATCH',
      path: '/accounts/:id/tier',
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        id: 'ACC-1001',
        name: 'Northwind Traders',
        industry: 'Retail',
        status: 'active',
        tier: 'premium'
      }
    }
  ]
};
