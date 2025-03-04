/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// output standalone/export for ssr/static (full/front end only)
	output: "export",
	sassOptions: {
		implementation: 'sass',
	},
	images: { unoptimized: true },
}

module.exports = nextConfig
