const mockMails = [{
        subject: 'first',
        receiver: 'test@test.com',
        content: 'hello',
    },
    {
        subject: 'second',
        receiver: 'test@test.com',
        content: 'hello',
    },
    {
        subject: 'third',
        receiver: 'test@test.com',
        content: 'hello',
    },
    {
        subject: 'four',
        receiver: 'test@test.com',
        content: 'hello',
    },
]

module.exports = {
    Query: {
        mails: () => mockMails,
        mail: (_, args) => mockMails[0]
    },
    Mutation: {
        mail: (_, args) => {
            mockMails[0] = args;

            return args;
        }
    }
}