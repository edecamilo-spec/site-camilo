export async function GET() {
  return new Response(
    `User-agent: *\nAllow: /\nSitemap: https://edemilsoncamilo.com.br/sitemap.xml`,
    { status: 200, headers: { "Content-Type": "text/plain" } }
  );
}
