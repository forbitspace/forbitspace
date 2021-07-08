proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=STATIC:10m inactive=7d use_temp_path=off;

server {
    listen         80;
    server_name    _;
    return         301 https://$host$request_uri;
}

server {
  listen 80 ;
  
  server_name forbitswap.com www.forbitswap.com;

  server_tokens off;

  gzip on;
  gzip_proxied any;
  gzip_comp_level 4;
  gzip_types text/css application/javascript image/svg+xml;

  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection 'upgrade';
  proxy_set_header Host $host;
  proxy_cache_bypass $http_upgrade;

  location /_next/static {
    proxy_cache STATIC;
    proxy_pass http://139.180.140.153:3000;

    # For testing cache - remove before deploying to production
    add_header X-Cache-Status $upstream_cache_status;
  }

  location /static {
    proxy_cache STATIC;
    proxy_ignore_headers Cache-Control;
    proxy_cache_valid 60m;
    proxy_pass http://139.180.140.153:3000;

    # For testing cache - remove before deploying to production
    add_header X-Cache-Status $upstream_cache_status;
  }

  location / {
    proxy_pass http://139.180.140.153:3000;
  }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/forbitswap.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/forbitswap.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}