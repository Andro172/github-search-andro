export default {
    Mutation: {
        search: (parent, variables, { cache }) => {
            cache.writeData({ 
              data: { searchTerm: variables.searchTerm } 
            });
            return null; //best practices
        },
        /* saveUserInfo: (parent, variables, { cache }) => {
            cache.writeData({ 
              data: { user: { ...variables } } 
            });
            return null; //best practices
        } */
    }
}