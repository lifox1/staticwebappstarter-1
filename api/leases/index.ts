import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { CosmosClient } from "@azure/cosmos";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const client = new CosmosClient(process.env.COSMOS_DB_CONNECTION_STRING);

    const database = client.database(process.env.COSMOSDB_DB_NAME);
    const container = database.container(process.env.COSMOSDB_CONTAINER_NAME);
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
