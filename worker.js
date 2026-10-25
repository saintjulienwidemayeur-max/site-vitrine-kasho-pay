// Cloudflare Worker for kashopay.com: sends www.kashopay.com to kashopay.com (301, path and query kept),
// then serves the static site files.
const APEX = "kashopay.com";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === `www.${APEX}`) {
      url.hostname = APEX;
      url.protocol = "https:";
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
