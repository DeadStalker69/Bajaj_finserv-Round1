HttpClient httpClient = HttpClientBuilder.create().build();
try {
    HttpPost request = new HttpPost("https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks");
    StringEntity params = new StringEntity("details={
"company": "Bajaj Finserv",
"currentPrice": '1571.5,
"accountNumber": BFHL0018634,
"githubRepoLink" : "https://github.com/DeadStalker69/Bajaj_finserv-Round1.git"
}");
    request.addHeader("content-type": "application/json", "bfhl-auth" : "2110994829");
    request.setEntity(params);
    HttpResponse response = httpClient.execute(request);
} catch (Exception ex) {
} finally {
    // @Deprecated httpClient.getConnectionManager().shutdown(); 
}
