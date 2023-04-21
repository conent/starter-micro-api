const app = require('express')();

const faunadb = require('faunadb');
const q = faunadb.query
const client = new faunadb.Client({ secret: 'fnAFCDv6dmAAzPS1JG9-TrDSx3Do3M5Q0gOMhScV' })

const {
    Ref,
    Paginate,
    Get,
    Match,
    Index,
    Create,
    Collection,
    Join,
    Call,
    Function: Fn,
} = faunadb.query;


app.get('/config/:id', async (req, res) => {

    const doc = await client.query(
        Get(
            Ref(
                Collection('Settings'),
                req.params.id
            )
        )
    )

    res.send(doc)

});

app.post('/config', async (req, res) => {

    const data = {
        // Original code extracted to Fauna Function
        // Select('ref', Get(Match(Index('users_by_name'), 'fireship_dev')))
        itemName: 'Hola Mundo!'
    }

    const doc = await client.query(
        Create(
            Collection('Settings'),
            { data }
        )
    )

    res.send(doc)
});


app.get('/tweet', async (req, res) => {
    const docs = await client.query(
        Paginate(
          q.Documents(q.Collection('Settings'))),
          q.Lambda(x => q.Get(x)
        )
    )

    res.send(docs)
});

app.listen(process.env.PORT || 3030, () => console.log('API on http://localhost:3030'))

