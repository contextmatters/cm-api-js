## Context Matters API (Javascript)

Alpha quality. Note that you have to authorize (OAuth2) and provide an accessToken independently.
Currently only handles get requests.

Example:

```
var accessToken = "" // needs to be provided
var queryParams = {
  partition_by: ["agency_abbreviation", "decision"],
  query_params: {agency_abbreviation: ["TLV", "HAS"], event_type: "Reimbursement"}
}
var endpoint = "aggregations"
var callback = function(data) {
  console.log(data)
}

var CmApi = require("cm-api")
var api   = new CmApi({accessToken: accessToken})
api.get(endpoint, queryParams, callback)
```
