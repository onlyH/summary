`OpenSSL SSL_read: Connection was reset, errno 10054`

这是服务器的SSL证书没有经过第三方机构的签署，所以报错。

解决办法：

`git config --global http.sslVerify "false"`
