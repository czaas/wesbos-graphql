const Mutations = {
    async createItem(parent, args, context, info) {
        // TODO: check if they are logged in

        // All mutations found in prisma.graphql are available via context.db (setup in createServer)
        const item = await context.db.mutation.createItem({ data: { ...args } }, info);
        return item;
    },
};

module.exports = Mutations;
