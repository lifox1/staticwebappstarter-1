import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { CosmosClient } from "@azure/cosmos";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const client = new CosmosClient(process.env.COSMOS_CONNECTION_STRING);

    const database = client.database('jphdef2');
    const container = database.container('jphdef2');
    const querySpec = {
        query: "SELECT * FROM c",
        parameters: [

        ]
      };
    const items = await container.items.query(querySpec).fetchAll()
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: items.resources
    };
    // return items.resources

    // context.log('HTTP trigger function processed a request.');
    // const name = (req.query.name || (req.body && req.body.name));
    // const responseMessage = name
    //     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    // context.res = {
    //     // status: 200, /* Defaults to 200 */
    //     body: responseMessage
    // };

};

export default httpTrigger;
