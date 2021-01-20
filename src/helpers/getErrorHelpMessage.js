export const getErrorHelpMessage = (status) => {
  switch (status) {
    case 400:
      return `<div>
                 <div>The server cannot process the client request.</div>
                 <div>It might be either malformed or illegal.</div>
            </div>`;

    case 403:
      return `<div>You do not have permission to access the document or page you requested.</div>`;

    case 404:
      return `<div>Sorry, the page you are looking for does not exist.</div>`;

    case 415:
      return `<div>
                 <div><b>Current media type is unsupported:</b> .mp3, .mp4 </div>
                 <div><b>Available media types:</b> .pdf, .docx </div>
                 <div>To prevent errors, use only the available media types listed above.</div>
             </div>`;

    case 500:
      return `<div>
                 <div>Sorry, something went wrong on our end.</div>
                 <div>We are currently trying to fix the problem.</div>
             </div>`;

    case 501:
      return `<div>Sorry, something went wrong on our end.</div>`;

    default:
      return null;
  }
};
