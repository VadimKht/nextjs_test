import { promises as fs } from "fs"
export const dynamic = 'force-dynamic' // defaults to auto

function Decode(str: string){
    return Buffer.from(str, 'base64').toString('binary');
}
export async function GET(request: Request) {
    const file = await fs.readFile(process.cwd() + '/public/mydata.json', 'utf8');
	const data = JSON.parse(file);
    const decodedData = Decode(data.content);
    return Response.json({message:decodedData});
}