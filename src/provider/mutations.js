export default {
    search: (parent, variables, { cache }) => {
        cache.writeData({ 
            data: { searchTerm: variables.searchTerm } 
        });
        return null; // best practices
    }
}