// export interface Movie {
//     id: number;
//     title: string;
//     releaseDate: string;
//     director: string; 
//     description:string;
// }

export interface Movie {
    year: number;
    title: string;
    info: {
      directors?: string[];
      release_date?: string;
      rating?: number;
      genres?: string[];
      image_url?: string;
      plot?: string;
      rank: number;
      running_time_secs?: number;
      actors?: string[];
    };
  }
  