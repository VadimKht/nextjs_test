import { promises as fs } from "fs"
export const dynamic = 'force-dynamic' // defaults to auto
export async function POST(request: Request) {
    var text:string = "";
    await request.json().then(a=>text = a.content.toString());
    // the thing done below is very silly and allows user to hack it by typing  " and breaking the server. very funny, can be fixed with base64 encoding
    await fs.writeFile(process.cwd() + '/public/mydata.json', '{"content": "' + text + '"}');
    return Response.json({message:"success!"});
}