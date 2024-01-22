 export const exerciseOptions = {
    
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
          'X-RapidAPI-Key': '958dd5c9cdmsh2d8931e5a6aa9c8p135a8djsn3e17b98a3151',
          'X-RapidAPI-Host': "exercisedb.p.rapidapi.com"
        }
      
};
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '958dd5c9cdmsh2d8931e5a6aa9c8p135a8djsn3e17b98a3151',
  },
};

export const fetchData =async (url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json();
    return data
}
