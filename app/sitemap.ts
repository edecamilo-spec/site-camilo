export default async function sitemap() {
  const baseUrl = "https://edemilsoncamilo.com.br";
  const now = new Date();
  return [
    { url: `${baseUrl}/`, lastModified: now },
    { url: `${baseUrl}/#sobre`, lastModified: now },
    { url: `${baseUrl}/#servicos`, lastModified: now },
    { url: `${baseUrl}/#simulador`, lastModified: now },
    { url: `${baseUrl}/#faq`, lastModified: now },
    { url: `${baseUrl}/#contato`, lastModified: now },
  ];
}
