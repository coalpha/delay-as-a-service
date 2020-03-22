/**
 * Pauses the JavaScript event loop by sending a synchronous network request.
 * @param {number} ms
 * @returns {boolean} true if the server waited to send the request back
 */
function sleep(ms) {
   const request = new XMLHttpRequest();

   const queryString = `/query?time=${Date.now()}&ms=${ms}`;

   request.open("GET", queryString, false);

   request.send(null);

   if (request.status === 200) {
      return true;
   } else {
      return false;
   }
}