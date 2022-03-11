import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import formidable from 'formidable';
import * as fs from 'fs';
import { upload2BlobStorage } from "./uploadBlob";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    console.log(`${JSON.stringify(req.query)}`)
    console.log(`${JSON.stringify(req.query?.filename)}`)
    const form = new formidable.IncomingForm();
    form.uploadDir = "./documents";
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        console.log(`err ${err}`)
        console.log(`fields ${JSON.stringify(fields)}`)
        console.log(`files ${JSON.stringify(files)}`)
        fs.renameSync(files.file.path, form.uploadDir + "/" + files.file.name);
        upload2BlobStorage(form.uploadDir + "/" + files.file.name).then((resolve) => {
            if (resolve) {
                context.res.json({ status: "success" })
            } else {
                context.res.json({ status: "failed" })
            }
        }).catch(err => {
            context.res.json({status : "failed", err : err})
        })
    });
};

export default httpTrigger;
