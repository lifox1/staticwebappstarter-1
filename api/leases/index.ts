import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { CosmosClient } from "@azure/cosmos";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const client = new CosmosClient(process.env.COSMOS_DB_CONNECTION_STRING);

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
};

export default httpTrigger;
