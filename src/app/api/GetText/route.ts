import { promises as fs } from "fs"
export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
    const file = await fs.readFile(process.cwd() + '/public/mydata.json', 'utf8');
	const data = JSON.parse(file);
    return Response.json({message:data.content});
}