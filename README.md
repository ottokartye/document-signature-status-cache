# E-sign document signature status cache

A small project demontrating a simple cache system for managing the status updates for each document.
- the document can have or not a remote status
- each document signature status request is cached
- eached cached signature status can have a different refresh period

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
