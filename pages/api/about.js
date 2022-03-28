import fs from 'fs';

export default function about(request, response) {
  
  /* Try to replace the content of the the about text file with the text given */
  if (request.method === 'POST') {
    const newText = request.body.about;

    // Verify text is valid
    if (newText === undefined || newText.length === 0) {
      response.status(400).send("The about text given is empty.");
      return;
    }

    // Try to write
    try {
        fs.writeFileSync('private/persistance/about.txt', newText);
        response.status(200).send("About text successfully updated.");
    } catch (error) {
        response.status(500).send("Failed to write about data.");
    }
  }
  
  /* Any other type of request is rejected */
  else {
      response.status(501).send("This API route does not implement this HTTP method");
  }
}