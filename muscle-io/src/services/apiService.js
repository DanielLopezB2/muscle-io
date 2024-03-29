export async function fetchData(url, options) {
    try {
       const response = await fetch(url, options);
       if (!response.ok) {
         throw new Error(`HTTP error: Status ${response.status}`);
       }
       const result = await response.json();
       return result;
    } catch (error) {
       console.error(error);
       throw error;
    }
   }
   