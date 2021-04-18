# E-sign document signature status cache

A small project demontrating a simple cache system for managing the status updates for each document.
- the document can have or not a remote status
- each document signature status request is cached
- eached cached signature status can have a different refresh period
- list of documents is not refreshed, only the signature statuses, this way there are no template changes triggered

# Important notes
1. The document statuses are randomly changed for each request so you can better observe the changes.
2. Caching is managed by an injectable service, meaning that no matter how many components will register, the document signature statuses will be multicasted to each component. Therefore, once the statuses where requested, the components won't trigger any real "fetching" of the statuses from the so called API.
3. Each documents signature status cache and refresh is managed separately. This means that once we would submit a new signature, only the concerned documents signature cache would be refreshed.

# Run the project

To run this sample project simply git clone the content and:
`npm install`
`ng serve`

## Observe

There will be a list 5 of documents displayed out of which documents 1, 3 and 5 have a signature status. These statuses will be fetched and then refreshed at the following intervals: 
- document 1: 10 seconds
- document 3: 30 seconds
- document 5: 50 seconds

For a more detailed observation of what's happening, please open the console log and check the status updates for each document.
