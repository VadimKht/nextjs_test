import { promises as fs } from "fs"
export const dynamic = 'force-dynamic' // defaults to auto

function Encode(str: string){
    return Buffer.from(str, 'binary').toString('base64');
}

export async function POST(request: Request) {
    let text:string = "";
    await request.json().then(a=>text = a.content.toString());
    const encdedText = Encode(text);
    await fs.writeFile(process.cwd() + '/public/mydata.json', '{"content": "' + encdedText + '"}');
    return Response.json({message:"success!"});
}