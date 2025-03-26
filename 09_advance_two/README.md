## This is a simple discussion on fetch
**if you want video - https://youtu.be/Rive84an6Lc?si=JMq_REb7otc8o6IC (Chai aur code)

This is very detailed lecture on fetch that you will learn from hitesh sir

## Now lets begin with our discussion

Q1. What is fetch ?
-> Fetch is an API that provides an interface to fetch resources across network. It is a more powerful and flexible replacement for XMLHttpRequest.

Q2. Concept & Usage ?
-> Fetch API provides a javascript interface for making HTTP requests and processing the responses.

Fetch is the modern replacement for XMLHttpRequest: unlike XMLHttpRequest, which uses callbacks, Fetch is promise-based and is integrated with features of the modern web such as service workers and Cross-Origin Resource Sharing (CORS).

Fetch API which is available as a global function in both window(browser) and worker(nodeJS) contexts. You pass it a Request object or a string containing the URL to fetch, along with an optional argument to configure the request.

The fetch() function returns a Promise which is fulfilled with a Response object representing the server's response. You can then check the request status and extract the body of the response in various formats, including text and JSON, by calling the appropriate method on the response.

Here is a simple example function of fetch
``` javascript
async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

```

## Diagram on how fetch is priortized  above all other callBacks(CB)
https://www.tldraw.com/p/g0ooUkmArwYPZnQK6KCWu?d=v-556.96.3409.2032.zgj9Fv48GoNioHsF_doUM