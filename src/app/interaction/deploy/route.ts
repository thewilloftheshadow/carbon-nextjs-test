import { client } from "../client"

export function GET() {
	client.deployCommands()
	return new Response(null, {
		status: 200
	})
}