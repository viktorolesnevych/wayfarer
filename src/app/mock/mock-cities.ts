import {City} from '../models/City';

export const CITIES: City[] = [
  { id: 1, name: 'San-Francisco', country: 'United States', imgLink: '', posts: [{
    id: 1, dateCreated: 'May 3, 2021 03:24:00', title: 'Great spot to travel',
      img: 'https://i.guim.co.uk/img/media/f8abc8a3d11f36176dc978d22813d908bb4d63be/0_0_5184_3888/master/5184.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=434aee4c8f86f1e1e2ebc03aa3e680d0', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at aut, error est eum id, illo in incidunt ipsum laborum nam neque nihil odit quae repellendus, rerum totam ut voluptatem!'
    },
      {
        id: 2, dateCreated: 'April 23, 2021 03:24:00', title: 'Cool photo place',
        img: 'https://blog-www.pods.com/wp-content/uploads/2020/05/SF-Neighborhoods-Feature-photo-.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at aut, error est eum id, illo in incidunt ipsum laborum nam neque nihil odit quae repellendus, rerum totam ut voluptatem!'
      },
      {
        id: 3, dateCreated: 'December 17, 2020 03:24:00', title: 'Fantastic outdoor exercise location',
        img: 'https://image.cnbcfm.com/api/v1/image/106813184-1608243744589-gettyimages-1230019928-CALIFORNIA_VIRUS.jpeg?v=1608817641', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at aut, error est eum id, illo in incidunt ipsum laborum nam neque nihil odit quae repellendus, rerum totam ut voluptatem!'
      },
    ]},
  { id: 2, name: 'London', country: 'United Kingdom', imgLink: '', posts: [] },
  { id: 3, name: 'Chicago', country: 'United States', imgLink: '', posts: [] },
  { id: 4, name: 'Paris', country: 'France', imgLink: '', posts: [] }
];
