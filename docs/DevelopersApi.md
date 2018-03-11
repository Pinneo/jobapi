# SimpleJobsApi.DevelopersApi

All URIs are relative to *https://virtserver.swaggerhub.com/job-search/jobpost/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getJob**](DevelopersApi.md#getJob) | **GET** /job | fetches a job
[**searchJobs**](DevelopersApi.md#searchJobs) | **GET** /jobs | searches jobs


<a name="getJob"></a>
# **getJob**
> [JobItem] getJob(jobid)

fetches a job

fetches a job by uuid 

### Example
```javascript
import SimpleJobsApi from 'simple_jobs_api';

let apiInstance = new SimpleJobsApi.DevelopersApi();

let jobid = "jobid_example"; // String | pass an optional search string for looking up inventory


apiInstance.getJob(jobid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobid** | **String**| pass an optional search string for looking up inventory | 

### Return type

[**[JobItem]**](JobItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchJobs"></a>
# **searchJobs**
> [JobItem] searchJobs(opts)

searches jobs

By passing in the appropriate options, you can search for available jobs in the system 

### Example
```javascript
import SimpleJobsApi from 'simple_jobs_api';

let apiInstance = new SimpleJobsApi.DevelopersApi();

let opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up inventory
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

apiInstance.searchJobs(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchString** | **String**| pass an optional search string for looking up inventory | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[JobItem]**](JobItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

